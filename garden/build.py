"""
Zero-dependency static-data builder for the physics/math digital garden.
Reads the Obsidian vault at ../physics/physics, never writes to it,
and emits data.js: a single window.GARDEN_DATA object consumed by app.js.

(Python port of build.js — this machine has Python but not Node.)
"""
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
VAULT_ROOT = os.path.join(HERE, "..", "physics", "physics")
OUT_FILE = os.path.join(HERE, "data.js")

LOG_FILES = {
    "Summer 2026 Kevin.md",
    "Summer 2026 Mahith.md",
    "Physics/Misc/To Do.md",
}

# ---------------------------------------------------------------------------
# 1. Walk the vault
# ---------------------------------------------------------------------------
files = []
for root, dirs, filenames in os.walk(VAULT_ROOT):
    dirs[:] = [d for d in dirs if not d.startswith(".")]  # .obsidian, .trash, ...
    for fn in filenames:
        if fn.lower().endswith(".md"):
            files.append(os.path.join(root, fn))


def to_rel(full):
    return os.path.relpath(full, VAULT_ROOT).replace(os.sep, "/")


records = []
for full in files:
    rel_path = to_rel(full)
    rel_no_ext = rel_path[:-3]
    parts = rel_no_ext.split("/")
    title = parts[-1]
    rel_dir = "/".join(parts[:-1])
    top_folder = parts[0]

    if rel_path.startswith("Diagrams/") or rel_path.startswith("Excalidraw/"):
        kind = "sketch"
    elif rel_path in LOG_FILES:
        kind = "log"
    else:
        kind = "note"

    records.append({
        "id": rel_no_ext, "relPath": rel_path, "relDir": rel_dir,
        "title": title, "topFolder": top_folder, "kind": kind, "full": full,
    })

# ---------------------------------------------------------------------------
# 2. Resolution indices (mimic Obsidian's wikilink resolution)
# ---------------------------------------------------------------------------
by_path_lower = {}
by_basename_lower = {}
records_by_id = {}

for r in records:
    by_path_lower[r["id"].lower()] = r["id"]
    by_basename_lower.setdefault(r["title"].lower(), []).append(r["id"])
    records_by_id[r["id"]] = r


def resolve_target(raw_target, source_record):
    target = raw_target.replace("\\", "/").strip()
    if not target:
        return None
    normalized = re.sub(r"^\./", "", target)
    if "/" in normalized:
        hit = by_path_lower.get(normalized.lower())
        if hit:
            return hit
    segs = normalized.split("/")
    base = segs[-1].lower()
    candidates = by_basename_lower.get(base)
    if not candidates:
        return None
    if len(candidates) == 1:
        return candidates[0]

    def score(cid):
        rec = records_by_id[cid]
        s = 0
        if rec["topFolder"] == source_record["topFolder"]:
            s += 10
        a = rec["relDir"].split("/")
        b = source_record["relDir"].split("/")
        common = 0
        while common < len(a) and common < len(b) and a[common] == b[common]:
            common += 1
        s += common
        return s

    return sorted(candidates, key=lambda cid: (-score(cid), cid))[0]


# ---------------------------------------------------------------------------
# 3. Parse note/log bodies
# ---------------------------------------------------------------------------
def strip_frontmatter(text):
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            nl_after = text.find("\n", end + 4)
            return "" if nl_after == -1 else text[nl_after + 1:]
    return text


ASSET_RE = re.compile(r"\.(png|jpe?g|gif|svg|webp|pdf)$", re.IGNORECASE)


def is_asset_name(name):
    return bool(ASSET_RE.search(name))


DISPLAY_MATH_RE = re.compile(r"\$\$([\s\S]+?)\$\$")
INLINE_MATH_RE = re.compile(r"\$([^\$\n]+?)\$")
WIKILINK_RE = re.compile(r"(!?)\[\[([^\]]*)\]\]")


def parse_body(raw_text, record):
    text = strip_frontmatter(raw_text)

    math_tokens = []

    def sub_display(m):
        math_tokens.append({"tex": m.group(1).strip(), "display": True})
        return "@@MATH%d@@" % (len(math_tokens) - 1)

    text = DISPLAY_MATH_RE.sub(sub_display, text)

    def sub_inline(m):
        math_tokens.append({"tex": m.group(1).strip(), "display": False})
        return "@@MATH%d@@" % (len(math_tokens) - 1)

    text = INLINE_MATH_RE.sub(sub_inline, text)

    link_tokens = []

    def sub_link(m):
        bang, inner = m.group(1), m.group(2)
        embed = bang == "!"
        if "|" in inner:
            pipe_idx = inner.index("|")
            raw_target = inner[:pipe_idx].strip()
            alias = inner[pipe_idx + 1:].strip()
        else:
            raw_target = inner.strip()
            alias = None
        if not raw_target:
            return ""

        resolved_id = resolve_target(raw_target, record)
        if resolved_id:
            resolved_kind = records_by_id[resolved_id]["kind"]
        elif is_asset_name(raw_target):
            resolved_kind = "asset-missing"
        else:
            resolved_kind = "missing"

        link_tokens.append({
            "embed": embed, "rawTarget": raw_target, "alias": alias,
            "resolvedId": resolved_id, "resolvedKind": resolved_kind,
        })
        return "@@WIKILINK%d@@" % (len(link_tokens) - 1)

    text = WIKILINK_RE.sub(sub_link, text)

    return text.strip(), math_tokens, link_tokens


WORD_RE = re.compile(r"[A-Za-z][A-Za-z'-]*")


def word_count(template):
    stripped = re.sub(r"@@(MATH|WIKILINK)\d+@@", " ", template)
    return len(WORD_RE.findall(stripped))


def stage_of(wc):
    if wc < 15:
        return "seed"
    if wc < 90:
        return "budding"
    return "evergreen"


# ---------------------------------------------------------------------------
# 4. Build note/log objects
# ---------------------------------------------------------------------------
notes = {}
sketches = {}

for r in records:
    if r["kind"] == "sketch":
        sketches[r["id"]] = {"id": r["id"], "title": r["title"], "relDir": r["relDir"]}
        continue
    with open(r["full"], "r", encoding="utf-8") as f:
        raw = f.read()
    template, math_tokens, link_tokens = parse_body(raw, r)
    wc = word_count(template)
    notes[r["id"]] = {
        "id": r["id"], "title": r["title"], "kind": r["kind"],
        "topFolder": r["topFolder"], "relDir": r["relDir"],
        "template": template, "mathTokens": math_tokens, "linkTokens": link_tokens,
        "wordCount": wc, "stage": "log" if r["kind"] == "log" else stage_of(wc),
        "backlinks": [], "suggested": [],
    }

# ---------------------------------------------------------------------------
# 5. Backlinks (notes + sketches)
# ---------------------------------------------------------------------------
sketch_backlinks = {}
missing_backlinks = {}

for note in notes.values():
    for link in note["linkTokens"]:
        if link["resolvedKind"] in ("note", "log"):
            target = notes.get(link["resolvedId"])
            if target and note["id"] not in target["backlinks"]:
                target["backlinks"].append(note["id"])
        elif link["resolvedKind"] == "sketch":
            bl = sketch_backlinks.setdefault(link["resolvedId"], [])
            if note["id"] not in bl:
                bl.append(note["id"])
        elif link["resolvedKind"] == "missing":
            key = link["rawTarget"].lower()
            entry = missing_backlinks.setdefault(key, {"label": link["rawTarget"], "sources": []})
            if note["id"] not in entry["sources"]:
                entry["sources"].append(note["id"])

# ---------------------------------------------------------------------------
# 6. Curated suggested connections
#    These are inferred conceptual links added while preparing the garden --
#    the original note files are untouched; this list only affects rendering.
# ---------------------------------------------------------------------------
SUGGESTED = {
    "Math/Techniques/Surface Integral": [
        "Physics/Electromagnetism/Electricity/Gauss's Law",
        "Physics/Electromagnetism/Magnetism/Ampere's Law",
        "Physics/Electromagnetism/Flux",
        "Physics/Mechanics/Shell Theorem",
    ],
    "Math/Techniques/Characteristic Equation": [
        "Physics/Mechanics/Kinematics and Dynamics/Oscillatory Motion/Damped Harmonic Motion",
        "Physics/Mechanics/Kinematics and Dynamics/Oscillatory Motion/Driven Harmonic Motion",
        "Physics/Mechanics/Kinematics and Dynamics/Oscillatory Motion/Differentials for Kinematics",
        "Physics/Waves/String Wave Equation Derivation",
    ],
    "Math/Taylor Series": [
        "Math/Trignometery",
        "Math/Algebraic Identities/Binomial Expansion",
        "Physics/Mechanics/Kinematics and Dynamics/Oscillatory Motion/Simple Harmonic Motion",
    ],
    "Math/Trignometery": [
        "Math/Taylor Series",
        "Math/Euler's Formula",
        "Physics/Optics/Minimum Angle of Deviation through Prism",
    ],
    "Math/Euler's Formula": [
        "Math/Trignometery",
        "Physics/Mechanics/Kinematics and Dynamics/Oscillatory Motion/Differentials for Kinematics",
        "Physics/Waves/Spring Wave Equation Derivation",
    ],
    "Math/Generating Functions": [
        "Math/Binet's Formula for Fibonacci Sequence",
        "Math/Poisson Scheme",
        "Math/Algebraic Identities/Binomial Theorem",
        "Math/Algebraic Identities/Hockey Stick Identity",
        "Math/Techniques/Characteristic Equation",
    ],
    "Math/Binet's Formula for Fibonacci Sequence": [
        "Math/Techniques/Characteristic Equation",
        "Math/Generating Functions",
    ],
    "Math/Poisson Scheme": ["Math/Bayes' Theorem", "Physics/Thermodynamics/Statistical Mechanics"],
    "Math/Bayes' Theorem": [
        "Physics/Thermodynamics/Statistical Mechanics",
        "Physics/Thermodynamics/Entropy",
        "Math/Poisson Scheme",
    ],
    "Math/Algebraic Identities/Binomial Expansion": [
        "Math/Algebraic Identities/Binomial Theorem",
        "Math/Generating Functions",
    ],
    "Math/Algebraic Identities/Binomial Theorem": [
        "Math/Algebraic Identities/Binomial Expansion",
        "Math/Algebraic Identities/Hockey Stick Identity",
        "Math/Algebraic Identities/Pascal's Identity",
        "Math/Generating Functions",
    ],
    "Math/Algebraic Identities/Hockey Stick Identity": [
        "Math/Algebraic Identities/Pascal's Identity",
        "Math/Algebraic Identities/Binomial Theorem",
    ],
    "Math/Algebraic Identities/Pascal's Identity": [
        "Math/Algebraic Identities/Hockey Stick Identity",
        "Math/Algebraic Identities/Binomial Theorem",
    ],
    "Math/Algebraic Identities/Sophie Germain": ["Math/Algebraic Identities/Sum of 3 Cubes"],
    "Math/Algebraic Identities/Sum of 3 Cubes": ["Math/Algebraic Identities/Sophie Germain"],
    "Math/Linear Algebra/Basis": [
        "Math/Linear Algebra/Vector Spaces",
        "Math/Linear Algebra/Linear Transformations",
        "Physics/Mechanics/Kinematics and Dynamics/Oscillatory Motion/Generalized Coordinates",
    ],
    "Math/Linear Algebra/Vector Spaces": [
        "Math/Linear Algebra/Basis",
        "Math/Linear Algebra/Field",
        "Math/Techniques/Vectors or n-tuples",
    ],
    "Math/Linear Algebra/Field": ["Math/Linear Algebra/Vector Spaces"],
    "Math/Linear Algebra/Linear Transformations": [
        "Math/Linear Algebra/Linear Transformation Properties",
        "Math/Linear Algebra/Basis",
        "Physics/Mechanics/Kinematics and Dynamics/Relativity/Lorentz Transformations",
    ],
    "Math/Linear Algebra/Linear Transformation Properties": [
        "Math/Linear Algebra/Linear Transformations",
        "Physics/Mechanics/Kinematics and Dynamics/Relativity/Lorentz Transformations",
    ],
    "Math/Linear Algebra/Linear Functionals": [
        "Math/Linear Algebra/Vector Spaces",
        "Math/Linear Algebra/Transpose",
        "Physics/Quantum Mechanics/Expectation Value",
    ],
    "Math/Linear Algebra/Transpose": ["Math/Linear Algebra/Linear Functionals", "Math/Linear Algebra/Linear Transformations"],
    "Math/Linear Algebra/Lagrange Interpolation Formula": ["Math/Linear Algebra/Basis"],
    "Physics/Mechanics/Kinematics and Dynamics/Relativity/Lorentz Transformations": [
        "Math/Linear Algebra/Linear Transformations",
        "Physics/Mechanics/Kinematics and Dynamics/Relativity/Energy Momentum 4 Vector",
    ],
    "Physics/Quantum Mechanics/Expectation Value": [
        "Math/Linear Algebra/Linear Functionals",
        "Physics/Quantum Mechanics/Schrodinger Equation",
    ],
    "Physics/Thermodynamics/Statistical Mechanics": ["Math/Bayes' Theorem", "Math/Poisson Scheme"],
    "Physics/Thermodynamics/Entropy": ["Math/Bayes' Theorem"],
    "Math/Techniques/Vectors or n-tuples": ["Math/Linear Algebra/Vector Spaces"],
    "Math/Techniques/Induction": ["Math/Techniques/Cauchy's Induction", "Math/Techniques/Pigeon Hole Principle"],
    "Math/Techniques/Cauchy's Induction": ["Math/Techniques/Induction"],
    "Math/Techniques/Pigeon Hole Principle": [
        "Math/Ramsey Numbers(incomplete)",
        "Math/Schur Numbers Incomplete",
        "Math/Techniques/Ordered Sets",
    ],
    "Math/Ramsey Numbers(incomplete)": ["Math/Techniques/Pigeon Hole Principle", "Math/Schur Numbers Incomplete"],
    "Math/Schur Numbers Incomplete": ["Math/Techniques/Pigeon Hole Principle", "Math/Ramsey Numbers(incomplete)"],
    "Math/Techniques/Ordered Sets": ["Math/Techniques/Invariants and Semi-Invariants", "Math/Techniques/Pigeon Hole Principle"],
    "Math/Techniques/Invariants and Semi-Invariants": ["Math/Techniques/Ordered Sets"],
    "Math/Techniques/Plot Tricks": ["Physics/Mechanics/Kinematics and Dynamics/Rotation/Orbits"],
    "Physics/Mechanics/Kinematics and Dynamics/Rotation/Orbits": [
        "Physics/Mechanics/Kinematics and Dynamics/Rotation/Central Forces",
        "Math/Techniques/Plot Tricks",
    ],
    "Math/Euler's Formula for Planar Graphs": ["Math/Techniques/Pigeon Hole Principle"],
}

def resolve_suggested_id(raw_id):
    """Resolve a SUGGESTED-map id even if the note has since moved folders --
    falls back to a basename lookup so vault reorganization doesn't silently
    drop curated connections."""
    if raw_id in notes:
        return raw_id
    basename = raw_id.split("/")[-1].lower()
    candidates = [nid for nid in by_basename_lower.get(basename, []) if nid in notes]
    if len(candidates) == 1:
        return candidates[0]
    if len(candidates) > 1:
        return sorted(candidates)[0]
    return None


suggested_edges = set()
skipped = []
for a_raw, lst in SUGGESTED.items():
    a = resolve_suggested_id(a_raw)
    for b_raw in lst:
        b = resolve_suggested_id(b_raw)
        if not a or not b:
            skipped.append((a_raw, b_raw))
            continue
        suggested_edges.add(tuple(sorted((a, b))))

# ---------------------------------------------------------------------------
# 6.5 Inferred connections: when one note's title appears verbatim in another
#     note's prose, surface the pair as a suggested connection. Only titles of
#     two or more words qualify, so generic single words ("Energy", "Field")
#     never trigger a false match. Wikilinks are already tokenized out of the
#     template, so explicit links can't double-count as mentions.
# ---------------------------------------------------------------------------
TOKEN_RE = re.compile(r"@@(MATH|WIKILINK)\d+@@")

infer_patterns = []
for n in notes.values():
    t = n["title"]
    distinctive = (len(t) >= 8 and len(t.split()) >= 2) or (len(t) >= 10 and " " not in t)
    if n["kind"] == "note" and distinctive:
        infer_patterns.append((
            n["id"],
            re.compile(r"(?<![A-Za-z])" + re.escape(t) + r"(?![A-Za-z])", re.IGNORECASE),
        ))

inferred_edges = set()
for src in notes.values():
    if src["kind"] != "note":
        continue
    text = TOKEN_RE.sub(" ", src["template"])
    for tid, pat in infer_patterns:
        if tid != src["id"] and pat.search(text):
            inferred_edges.add(tuple(sorted((src["id"], tid))))

MAX_SUGGESTED_PER_NOTE = 8

def apply_edges(edges):
    for a, b in sorted(edges):
        if (b in notes[a]["backlinks"]) or (a in notes[b]["backlinks"]):
            continue
        if b in notes[a]["suggested"]:
            continue
        if (len(notes[a]["suggested"]) >= MAX_SUGGESTED_PER_NOTE
                or len(notes[b]["suggested"]) >= MAX_SUGGESTED_PER_NOTE):
            continue
        notes[a]["suggested"].append(b)
        notes[b]["suggested"].append(a)

apply_edges(suggested_edges)          # curated first, so they never get capped out
apply_edges(inferred_edges - suggested_edges)

for n in notes.values():
    n["suggested"].sort()

if skipped:
    print("WARNING: suggested-link ids not found (typo?):", skipped)

# ---------------------------------------------------------------------------
# 7. Folder tree (Physics + Math concept notes only; study logs and sketches
#    are surfaced in their own sidebar sections instead)
# ---------------------------------------------------------------------------
def new_node(name):
    return {"name": name, "dirs": {}, "files": []}


def build_tree(top_folder):
    root = new_node(top_folder)
    for note in notes.values():
        if note["kind"] != "note" or note["topFolder"] != top_folder:
            continue
        segs = [] if note["relDir"] == "" else note["relDir"].split("/")[1:]
        cursor = root
        for seg in segs:
            if seg not in cursor["dirs"]:
                cursor["dirs"][seg] = new_node(seg)
            cursor = cursor["dirs"][seg]
        cursor["files"].append({"id": note["id"], "title": note["title"], "stage": note["stage"]})

    def sort_node(node):
        node["files"].sort(key=lambda f: f["title"].lower())
        children = sorted(node["dirs"].values(), key=lambda c: c["name"].lower())
        for c in children:
            sort_node(c)
        node["children"] = children
        del node["dirs"]
        return node

    return sort_node(root)


tree = {"Physics": build_tree("Physics"), "Math": build_tree("Math")}

logs = sorted(
    ({"id": n["id"], "title": n["title"]} for n in notes.values() if n["kind"] == "log"),
    key=lambda l: l["title"].lower(),
)

# ---------------------------------------------------------------------------
# 8. Emit
# ---------------------------------------------------------------------------
note_count = sum(1 for n in notes.values() if n["kind"] == "note")
link_count = sum(
    sum(1 for l in n["linkTokens"] if l["resolvedKind"] == "note") for n in notes.values()
)
suggested_count = sum(len(n["suggested"]) for n in notes.values()) / 2
missing_count = len(missing_backlinks)

data = {
    "meta": {
        "noteCount": note_count,
        "sketchCount": len(sketches),
        "linkCount": link_count,
        "suggestedCount": suggested_count,
        "missingCount": missing_count,
    },
    "notes": notes,
    "sketches": sketches,
    "sketchBacklinks": sketch_backlinks,
    "missing": missing_backlinks,
    "tree": tree,
    "logs": logs,
}

# strip the transient "full" filesystem path never made it into notes/sketches, safe to dump directly
with open(OUT_FILE, "w", encoding="utf-8") as f:
    f.write("window.GARDEN_DATA = ")
    f.write(json.dumps(data, ensure_ascii=False))
    f.write(";\n")

print(f"Garden data built: {note_count} notes, {len(sketches)} sketches, "
      f"{link_count} explicit links, {suggested_count:.0f} suggested connections, "
      f"{missing_count} not-yet-written references.")

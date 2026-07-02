"""Daily vault sync for the digital garden.

Mirrors the live Obsidian vault (iCloud Drive) into the repo copy at
physics/physics, rebuilds garden/data.js, and commits + pushes when anything
changed. Only .md files are touched: everything else in the repo copy
(.obsidian state, .base files, git-ignored PDFs) is left alone, and the
source vault is never written to.

Usage:
    python sync_vault.py            # sync, rebuild, commit, push
    python sync_vault.py --no-push  # sync + rebuild only, leave git alone
"""
import datetime
import os
import subprocess
import sys

SOURCE = r"C:\Users\kz658\iCloudDrive\iCloud~md~obsidian\physics"
REPO = os.path.dirname(os.path.abspath(__file__))
DEST = os.path.join(REPO, "physics", "physics")


def md_files(root):
    """Map of relative path -> absolute path for every .md under root."""
    out = {}
    for r, dirs, files in os.walk(root):
        # skip Obsidian app state (.obsidian), deleted notes (.trash), etc.
        dirs[:] = [d for d in dirs if not d.startswith(".")]
        for fn in files:
            if fn.lower().endswith(".md"):
                full = os.path.join(r, fn)
                out[os.path.relpath(full, root)] = full
    return out


def read_bytes(path):
    with open(path, "rb") as f:
        return f.read()


def run(cmd, **kw):
    print("+", " ".join(cmd), flush=True)
    return subprocess.run(cmd, cwd=REPO, check=True, **kw)


def main():
    push = "--no-push" not in sys.argv
    print(f"=== vault sync {datetime.datetime.now():%Y-%m-%d %H:%M} ===", flush=True)

    if not os.path.isdir(SOURCE):
        sys.exit(f"ERROR: vault not found at {SOURCE} (iCloud Drive not available?)")

    src = md_files(SOURCE)
    dst = md_files(DEST)
    copied, deleted = 0, 0

    for rel, full in sorted(src.items()):
        target = os.path.join(DEST, rel)
        data = read_bytes(full)
        if rel in dst and read_bytes(target) == data:
            continue
        os.makedirs(os.path.dirname(target), exist_ok=True)
        with open(target, "wb") as f:
            f.write(data)
        copied += 1
        print("  updated", rel)

    for rel in sorted(set(dst) - set(src)):
        os.remove(os.path.join(DEST, rel))
        deleted += 1
        print("  removed", rel)

    # prune directories emptied by deletions (bottom-up)
    for r, dirs, files in os.walk(DEST, topdown=False):
        if r != DEST and not os.listdir(r):
            os.rmdir(r)

    print(f"sync done: {copied} updated, {deleted} removed")

    run([sys.executable, os.path.join("garden", "build.py")])

    if not push:
        print("(--no-push: skipping git)")
        return

    run(["git", "add", "-A", "physics", os.path.join("garden", "data.js")])
    staged = subprocess.run(
        ["git", "diff", "--cached", "--quiet"], cwd=REPO
    ).returncode != 0
    if not staged:
        print("nothing changed since last sync — no commit needed")
        return
    stamp = datetime.date.today().isoformat()
    run(["git", "commit", "-m", f"Daily vault sync {stamp}"])
    run(["git", "push"])
    print("pushed — GitHub Actions will redeploy the site")


if __name__ == "__main__":
    main()

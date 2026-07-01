"use strict";
/* my notes — client-side router, renderer, and graph views.
   All data comes from window.GARDEN_DATA (see build.js); nothing here
   ever touches the original vault. */

const DATA = window.GARDEN_DATA;
const $view = document.getElementById("view");

marked.setOptions({ gfm: true, breaks: false });

const STAGE_META = {
  seed: { icon: "🌱", label: "seed", color: "var(--cyan-300)" },
  budding: { icon: "🌿", label: "budding", color: "var(--blue-400)" },
  evergreen: { icon: "🌳", label: "evergreen", color: "var(--orange-400)" },
  log: { icon: "📋", label: "log", color: "var(--paper-dimmer)" },
};

const TOP_COLORS = {
  Physics: { base: "#5490ee", ring: "#74a8f5" },
  Math: { base: "#ff9a4d", ring: "#ffb877" },
};
const SUB_PALETTE = [
  "#74a8f5", "#8fe0e6", "#a4c6fb", "#5490ee", "#bcd6fc",
  "#ff9a4d", "#ffb877", "#cc5a1c", "#ff7a29", "#f7c59f",
];
function colorForNote(note) {
  const key = note.topFolder + "/" + (note.relDir.split("/")[1] || note.relDir);
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  if (note.topFolder === "Physics") return SUB_PALETTE[hash % 5];
  return SUB_PALETTE[5 + (hash % 5)];
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function noteHref(id) { return "#/n/" + encodeURIComponent(id); }
function sketchHref(id) { return "#/s/" + encodeURIComponent(id); }
function missingHref(key) { return "#/m/" + encodeURIComponent(key); }

// ---------------------------------------------------------------------------
// Seeded squiggle SVG for sketch placeholders (a stylized stand-in — the
// real hand-drawn Excalidraw canvases aren't renderable outside Obsidian).
// ---------------------------------------------------------------------------
function seededRandom(seed) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
  return function () {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
function sketchSvg(seed, w = 260, h = 90) {
  const rnd = seededRandom(seed);
  const pts = [];
  const n = 5 + Math.floor(rnd() * 3);
  for (let i = 0; i <= n; i++) {
    pts.push([(w / n) * i + (rnd() - 0.5) * 22, h / 2 + (rnd() - 0.5) * h * 0.7]);
  }
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const mx = (x0 + x1) / 2;
    d += ` Q ${x0.toFixed(1)} ${y0.toFixed(1)} ${mx.toFixed(1)} ${((y0 + y1) / 2).toFixed(1)}`;
  }
  const dots = Array.from({ length: 3 }, () => {
    const x = rnd() * w, y = rnd() * h;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1 + rnd() * 1.6).toFixed(1)}" fill="var(--orange-400)" opacity="0.7"/>`;
  }).join("");
  return `<svg class="sketch-svg" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <path d="${d}" fill="none" stroke="var(--blue-400)" stroke-width="2" stroke-linecap="round" opacity="0.85"/>
    ${dots}
  </svg>`;
}

// ---------------------------------------------------------------------------
// Markdown + math + wikilink rendering
// ---------------------------------------------------------------------------
function renderNoteBody(note) {
  let text = note.template;

  let html = marked.parse(text);

  html = html.replace(/@@MATH(\d+)@@/g, (_, i) => {
    const m = note.mathTokens[Number(i)];
    if (!m) return "";
    try {
      return katex.renderToString(m.tex, { throwOnError: false, displayMode: m.display });
    } catch (e) {
      return `<code>${escapeHtml(m.tex)}</code>`;
    }
  });

  html = html.replace(/@@WIKILINK(\d+)@@/g, (_, i) => {
    const link = note.linkTokens[Number(i)];
    if (!link) return "";
    return renderLink(link);
  });

  return html;
}

function pencilIcon() {
  return `<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`;
}
function imgIcon() {
  return `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`;
}
function sproutIcon() {
  return `<svg viewBox="0 0 24 24"><path d="M12 22v-9"/><path d="M12 13c0-4-3-7-7-7 0 4 3 7 7 7Z"/><path d="M12 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z"/></svg>`;
}

function renderLink(link) {
  const label = escapeHtml(link.alias || link.rawTarget.split("/").pop());
  if (link.resolvedKind === "note" || link.resolvedKind === "log") {
    const target = DATA.notes[link.resolvedId];
    return `<a class="wl" href="${noteHref(link.resolvedId)}" title="${escapeHtml(target.title)}">${label}</a>`;
  }
  if (link.resolvedKind === "sketch") {
    const sk = DATA.sketches[link.resolvedId];
    if (link.embed) {
      return `<a class="embed-card" href="${sketchHref(link.resolvedId)}">
        <div class="ec-row">
          <div class="ec-icon">${pencilIcon()}</div>
          <div><div class="ec-title">${escapeHtml(sk.title)}</div><div class="ec-sub">hand-drawn diagram &middot; open sketch</div></div>
        </div>
        ${sketchSvg(sk.id)}
      </a>`;
    }
    return `<a class="wl" href="${sketchHref(link.resolvedId)}">${label} ✏️</a>`;
  }
  if (link.resolvedKind === "asset-missing") {
    return `<span class="embed-card" style="cursor:default;">
      <div class="ec-row">
        <div class="ec-icon">${imgIcon()}</div>
        <div><div class="ec-title">${escapeHtml(link.rawTarget)}</div><div class="ec-sub">image attachment not included in this export</div></div>
      </div>
    </span>`;
  }
  // missing note
  const key = link.rawTarget.toLowerCase();
  if (link.embed) {
    return `<a class="embed-card" href="${missingHref(key)}">
      <div class="ec-row">
        <div class="ec-icon">${sproutIcon()}</div>
        <div><div class="ec-title">${label}</div><div class="ec-sub">not written yet</div></div>
      </div>
    </a>`;
  }
  return `<a class="wl-ghost" href="${missingHref(key)}" title="Not written yet">${label}</a>`;
}

// ---------------------------------------------------------------------------
// Sidebar
// ---------------------------------------------------------------------------
function buildTreeDom(node, container, ancestry) {
  node.children.forEach((child) => {
    const dirEl = document.createElement("div");
    dirEl.className = "nt-dir";
    dirEl.dataset.path = (ancestry ? ancestry + "/" : "") + child.name;
    const label = document.createElement("div");
    label.className = "nt-dir-label";
    label.innerHTML = `<span class="chev"></span><span>${escapeHtml(child.name)}</span>`;
    label.addEventListener("click", () => dirEl.classList.toggle("open"));
    const kids = document.createElement("div");
    kids.className = "nt-dir-children";
    dirEl.appendChild(label);
    dirEl.appendChild(kids);
    container.appendChild(dirEl);
    buildTreeDom(child, kids, dirEl.dataset.path);
  });
  node.files.forEach((f) => {
    const a = document.createElement("a");
    a.className = "nt-file";
    a.href = noteHref(f.id);
    a.dataset.id = f.id;
    const meta = STAGE_META[f.stage] || STAGE_META.budding;
    a.innerHTML = `<span class="stage-dot stage-${f.stage}"></span><span>${escapeHtml(f.title)}</span>`;
    a.title = meta.label + " note";
    container.appendChild(a);
  });
}

function renderSidebar() {
  const nav = document.getElementById("navTree");
  nav.innerHTML = "";

  const secPhysics = document.createElement("div");
  secPhysics.innerHTML = `<div class="nt-section-title">Physics</div>`;
  nav.appendChild(secPhysics);
  buildTreeDom(DATA.tree.Physics, nav, "Physics");

  const secMath = document.createElement("div");
  secMath.innerHTML = `<div class="nt-section-title">Math</div>`;
  nav.appendChild(secMath);
  buildTreeDom(DATA.tree.Math, nav, "Math");

  if (DATA.logs.length) {
    const secLog = document.createElement("div");
    secLog.innerHTML = `<div class="nt-section-title">Study Log</div>`;
    nav.appendChild(secLog);
    DATA.logs.forEach((l) => {
      const a = document.createElement("a");
      a.className = "nt-file";
      a.href = noteHref(l.id);
      a.dataset.id = l.id;
      a.innerHTML = `<span class="stage-dot stage-log"></span><span>${escapeHtml(l.title)}</span>`;
      nav.appendChild(a);
    });
  }

  const secSketch = document.createElement("div");
  secSketch.innerHTML = `<div class="nt-section-title">Sketches</div>`;
  nav.appendChild(secSketch);
  const skLink = document.createElement("a");
  skLink.className = "nt-file";
  skLink.href = "#/sketches";
  skLink.innerHTML = `<span class="stage-dot stage-seed"></span><span>All ${Object.keys(DATA.sketches).length} diagrams &rarr;</span>`;
  nav.appendChild(skLink);

  document.getElementById("statsLine").innerHTML =
    `<b>${DATA.meta.noteCount}</b> notes &middot; <b>${DATA.meta.linkCount}</b> links &middot; <b>${Math.round(DATA.meta.suggestedCount)}</b> suggested`;
}

function markCurrent(id) {
  document.querySelectorAll(".nt-file.current").forEach((e) => e.classList.remove("current"));
  const el = document.querySelector(`.nt-file[data-id="${CSS.escape(id)}"]`);
  if (el) {
    el.classList.add("current");
    let dir = el.closest(".nt-dir-children")?.parentElement;
    while (dir) {
      dir.classList.add("open");
      dir = dir.parentElement.closest(".nt-dir");
    }
    el.scrollIntoView({ block: "nearest" });
  }
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------
const searchIndex = [];
Object.values(DATA.notes).forEach((n) => searchIndex.push({ id: n.id, title: n.title, path: n.relDir, kind: n.kind, href: noteHref(n.id) }));
Object.values(DATA.sketches).forEach((s) => searchIndex.push({ id: s.id, title: s.title, path: s.relDir, kind: "sketch", href: sketchHref(s.id) }));

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
let activeIdx = -1;

function runSearch(q) {
  q = q.trim().toLowerCase();
  if (!q) { searchResults.classList.add("hidden"); searchResults.innerHTML = ""; return; }
  const hits = searchIndex
    .map((item) => {
      const t = item.title.toLowerCase();
      let score = -1;
      if (t === q) score = 100;
      else if (t.startsWith(q)) score = 80;
      else if (t.includes(q)) score = 50;
      else if (item.path.toLowerCase().includes(q)) score = 20;
      return { item, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 18);

  activeIdx = -1;
  if (!hits.length) {
    searchResults.innerHTML = `<div class="search-empty">no notes match "${escapeHtml(q)}" — yet.</div>`;
  } else {
    searchResults.innerHTML = hits.map((h, i) => `
      <div class="search-item" data-href="${h.item.href}" data-i="${i}">
        <span class="sr-title">${escapeHtml(h.item.title)}</span>
        <span class="sr-path">${escapeHtml(h.item.path)}</span>
      </div>`).join("");
  }
  searchResults.classList.remove("hidden");
}
searchInput.addEventListener("input", (e) => runSearch(e.target.value));
searchInput.addEventListener("focus", (e) => { if (e.target.value) runSearch(e.target.value); });
searchResults.addEventListener("click", (e) => {
  const item = e.target.closest(".search-item");
  if (item) { location.hash = item.dataset.href; searchInput.value = ""; searchResults.classList.add("hidden"); closeSidebarMobile(); }
});
searchInput.addEventListener("keydown", (e) => {
  const items = [...searchResults.querySelectorAll(".search-item")];
  if (e.key === "ArrowDown") { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, items.length - 1); }
  else if (e.key === "ArrowUp") { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); }
  else if (e.key === "Enter") { if (items[activeIdx]) { location.hash = items[activeIdx].dataset.href; searchInput.blur(); searchResults.classList.add("hidden"); searchInput.value = ""; } return; }
  else if (e.key === "Escape") { searchResults.classList.add("hidden"); searchInput.blur(); return; }
  else return;
  items.forEach((it, i) => it.classList.toggle("active", i === activeIdx));
  items[activeIdx]?.scrollIntoView({ block: "nearest" });
});
document.addEventListener("click", (e) => { if (!e.target.closest(".search-box")) searchResults.classList.add("hidden"); });
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
    e.preventDefault(); openSidebarMobile(); searchInput.focus();
  }
});

// ---------------------------------------------------------------------------
// Mobile sidebar toggle
// ---------------------------------------------------------------------------
const sidebarEl = document.getElementById("sidebar");
const scrimEl = document.getElementById("sidebarScrim");
function openSidebarMobile() { sidebarEl.classList.add("open"); scrimEl.classList.add("open"); }
function closeSidebarMobile() { sidebarEl.classList.remove("open"); scrimEl.classList.remove("open"); }
document.getElementById("menuToggle").addEventListener("click", () => sidebarEl.classList.contains("open") ? closeSidebarMobile() : openSidebarMobile());
document.getElementById("mobileSearchToggle").addEventListener("click", () => { openSidebarMobile(); searchInput.focus(); });
scrimEl.addEventListener("click", closeSidebarMobile);

document.getElementById("wanderBtn").addEventListener("click", () => {
  const ids = Object.keys(DATA.notes).filter((id) => DATA.notes[id].kind === "note");
  const pick = ids[Math.floor(Math.random() * ids.length)];
  location.hash = noteHref(pick);
});

// ---------------------------------------------------------------------------
// Graph rendering (shared by home full-graph and note ego-graph)
// ---------------------------------------------------------------------------
function buildGraphData(filterIds) {
  const allow = filterIds ? new Set(filterIds) : null;
  const nodes = [];
  const nodeSet = new Set();
  Object.values(DATA.notes).forEach((n) => {
    if (n.kind !== "note") return;
    if (allow && !allow.has(n.id)) return;
    nodes.push({ id: n.id, title: n.title, topFolder: n.topFolder, color: colorForNote(n), degree: 0 });
    nodeSet.add(n.id);
  });
  const links = [];
  const seen = new Set();
  Object.values(DATA.notes).forEach((n) => {
    if (!nodeSet.has(n.id)) return;
    n.linkTokens.forEach((l) => {
      if ((l.resolvedKind === "note") && nodeSet.has(l.resolvedId)) {
        const key = [n.id, l.resolvedId].sort().join("::e::");
        if (!seen.has(key)) { seen.add(key); links.push({ source: n.id, target: l.resolvedId, kind: "explicit" }); }
      }
    });
    n.suggested.forEach((sid) => {
      if (nodeSet.has(sid)) {
        const key = [n.id, sid].sort().join("::s::");
        if (!seen.has(key)) { seen.add(key); links.push({ source: n.id, target: sid, kind: "suggested" }); }
      }
    });
  });
  links.forEach((l) => {
    const s = nodes.find((n) => n.id === l.source); if (s) s.degree++;
    const t = nodes.find((n) => n.id === l.target); if (t) t.degree++;
  });
  return { nodes, links };
}

function renderGraph(svgEl, graphData, opts) {
  opts = opts || {};
  const svg = d3.select(svgEl);
  svg.selectAll("*").remove();
  const bbox = svgEl.getBoundingClientRect();
  const width = bbox.width || 800, height = bbox.height || 440;
  svg.attr("viewBox", `0 0 ${width} ${height}`);

  const g = svg.append("g");
  svg.call(d3.zoom().scaleExtent([0.35, 3]).on("zoom", (ev) => g.attr("transform", ev.transform)));

  const sim = d3.forceSimulation(graphData.nodes)
    .force("link", d3.forceLink(graphData.links).id((d) => d.id).distance((d) => (d.kind === "suggested" ? 70 : 46)).strength(0.55))
    .force("charge", d3.forceManyBody().strength(opts.charge || -140))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius((d) => 8 + Math.min(d.degree, 10)));

  const link = g.append("g").selectAll("line")
    .data(graphData.links).join("line")
    .attr("stroke", (d) => (d.kind === "suggested" ? "#ff9a4d" : "#5490ee"))
    .attr("stroke-opacity", (d) => (d.kind === "suggested" ? 0.4 : 0.55))
    .attr("stroke-dasharray", (d) => (d.kind === "suggested" ? "3,3" : null))
    .attr("stroke-width", 1.3);

  const node = g.append("g").selectAll("circle")
    .data(graphData.nodes).join("circle")
    .attr("r", (d) => (opts.big ? 5 + Math.min(d.degree, 10) * 1.1 : 4 + Math.min(d.degree, 8)))
    .attr("fill", (d) => d.color)
    .attr("stroke", "#12233f")
    .attr("stroke-width", 1.4)
    .style("cursor", "pointer")
    .call(d3.drag()
      .on("start", (ev, d) => { if (!ev.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on("drag", (ev, d) => { d.fx = ev.x; d.fy = ev.y; })
      .on("end", (ev, d) => { if (!ev.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }))
    .on("click", (ev, d) => { location.hash = noteHref(d.id); })
    .append("title").text((d) => d.title);

  const labels = g.append("g").selectAll("text")
    .data(graphData.nodes).join("text")
    .text((d) => d.title)
    .attr("font-size", opts.big ? 10 : 9)
    .attr("font-family", "Inter, sans-serif")
    .attr("fill", "#c2d0e8")
    .attr("dx", 8).attr("dy", 3)
    .style("pointer-events", "none")
    .style("opacity", opts.big ? 0 : 0.9);

  if (opts.big) {
    node.on("mouseenter", function (ev, d) {
      labels.filter((n2) => n2.id === d.id).style("opacity", 1);
    }).on("mouseleave", function (ev, d) {
      labels.filter((n2) => n2.id === d.id).style("opacity", 0);
    });
  }

  sim.on("tick", () => {
    link.attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
  });
}

// ---------------------------------------------------------------------------
// Page renderers
// ---------------------------------------------------------------------------
function categoryDesc(name) {
  const d = {
    Electromagnetism: "Fields, circuits, and the forces that carry charge.",
    Mechanics: "Forces, motion, rotation, and relativity.",
    Thermodynamics: "Heat, entropy, and statistical behavior.",
    Waves: "Wave equations across springs, strings, and sound.",
    Optics: "Light, refraction, and deviation.",
    "Quantum Mechanics": "Wavefunctions, operators, expectation values.",
    Misc: "Loose ends and useful tricks.",
    "Algebraic Identities": "Factoring tricks and binomial identities.",
    "Linear Algebra": "Vector spaces, transformations, duality.",
    Techniques: "The proof toolkit — induction, invariants, generating functions.",
  };
  return d[name] || "A cluster of connected notes.";
}

function renderHome() {
  document.title = "my notes";
  const physicsCats = DATA.tree.Physics.children;
  const mathCats = DATA.tree.Math.children;

  function countFiles(node) {
    let c = node.files.length;
    node.children.forEach((ch) => (c += countFiles(ch)));
    return c;
  }

  const catCards = (cats, top) => cats.map((c) => `
    <a class="cat-card" href="#/cat/${top}/${encodeURIComponent(c.name)}">
      <h4>${escapeHtml(c.name)}</h4>
      <p>${escapeHtml(categoryDesc(c.name))} &middot; ${countFiles(c)} notes</p>
    </a>`).join("");

  $view.innerHTML = `
    <div class="home-hero">
      <h1 class="home-title">Kevin's Notes</h1>
      <p class="home-sub">Hi! This is my own personal notes from studying physics and math. Each note
        should have connections to other notes, so feel free to explore! Some connections I drew,
        while others were suggested by AI. This is an incomplete project (will be complete when I
        stop learning), and is updated regularly. Note: I'm still working on implementing my sketches
        using Excalidraw.</p>
      <div class="home-actions">
        <a class="btn btn-primary" href="#/n/${encodeURIComponent(pickFeatured())}">Start somewhere &rarr;</a>
        <button class="btn btn-ghost" id="homeWander">🎲 wander the garden</button>
      </div>
      <div class="stat-row">
        <div class="stat-chip"><div class="stat-num">${DATA.meta.noteCount}</div><div class="stat-label">notes</div></div>
        <div class="stat-chip"><div class="stat-num orange">${DATA.meta.linkCount}</div><div class="stat-label">explicit links</div></div>
        <div class="stat-chip"><div class="stat-num">${Math.round(DATA.meta.suggestedCount)}</div><div class="stat-label">suggested connections</div></div>
        <div class="stat-chip"><div class="stat-num orange">${DATA.meta.sketchCount}</div><div class="stat-label">hand-drawn sketches</div></div>
        <div class="stat-chip"><div class="stat-num">${DATA.meta.missingCount}</div><div class="stat-label">notes waiting to be written</div></div>
      </div>
    </div>

    <div class="graph-panel">
      <div class="graph-panel-head">
        <h3>the whole garden, mapped</h3>
        <div class="graph-legend">
          <span><span class="legend-dot" style="background:#5490ee"></span>physics</span>
          <span><span class="legend-dot" style="background:#ff9a4d"></span>math</span>
          <span><span class="legend-dot" style="background:transparent;border:1px dashed #ff9a4d;"></span>suggested</span>
        </div>
      </div>
      <svg id="graphSvg"></svg>
    </div>

    <div class="section-heading"><span class="tick"></span>Physics</div>
    <div class="category-grid">${catCards(physicsCats, "Physics")}</div>

    <div class="section-heading"><span class="tick"></span>Math</div>
    <div class="category-grid">${catCards(mathCats, "Math")}</div>
  `;

  document.getElementById("homeWander").addEventListener("click", () => document.getElementById("wanderBtn").click());
  requestAnimationFrame(() => renderGraph(document.getElementById("graphSvg"), buildGraphData(null), { big: true, charge: -160 }));
  markCurrent(null);
}

function pickFeatured() {
  const preferred = "Physics/Electromagnetism/Electricity/Electric Field";
  return DATA.notes[preferred] ? preferred : Object.keys(DATA.notes)[0];
}

function renderCategory(top, name) {
  const root = DATA.tree[top];
  function find(node) {
    if (node.name === name) return node;
    for (const c of node.children) { const r = find(c); if (r) return r; }
    return null;
  }
  const node = find(root) || root;
  function collect(n, acc) { n.files.forEach((f) => acc.push(f)); n.children.forEach((c) => collect(c, acc)); return acc; }
  const files = collect(node, []).sort((a, b) => a.title.localeCompare(b.title));

  document.title = `${name} — my notes`;
  $view.innerHTML = `
    <div class="crumbs"><a href="#/">garden</a><span class="sep">/</span>${escapeHtml(top)}<span class="sep">/</span>${escapeHtml(name)}</div>
    <h1 class="note-title" style="margin-bottom:22px;">${escapeHtml(name)}</h1>
    <div class="category-grid">
      ${files.map((f) => `
        <a class="cat-card" href="${noteHref(f.id)}">
          <h4>${escapeHtml(f.title)}</h4>
          <p>${STAGE_META[f.stage].icon} ${STAGE_META[f.stage].label}</p>
        </a>`).join("") || '<p class="conn-empty">No notes here yet.</p>'}
    </div>
  `;
  markCurrent(null);
}

function renderSketches() {
  document.title = "sketches — my notes";
  const list = Object.values(DATA.sketches).sort((a, b) => a.title.localeCompare(b.title));
  $view.innerHTML = `
    <div class="crumbs"><a href="#/">garden</a><span class="sep">/</span>sketches</div>
    <h1 class="note-title" style="margin-bottom:8px;">Hand-drawn sketches</h1>
    <p class="home-sub" style="margin-bottom:26px;">${list.length} Excalidraw canvases live in the vault. They're
      referenced from the notes below but rendered here as stylized placeholders — open the original in
      Obsidian to see the real ink.</p>
    <div class="sketch-grid">
      ${list.map((s) => `
        <a class="sketch-tile" href="${sketchHref(s.id)}">
          ${sketchSvg(s.id, 200, 70)}
          <div class="st-title">${escapeHtml(s.title)}</div>
        </a>`).join("")}
    </div>
  `;
  markCurrent(null);
}

function renderSketch(id) {
  const sk = DATA.sketches[id];
  if (!sk) return renderNotFound();
  const refs = DATA.sketchBacklinks[id] || [];
  document.title = `${sk.title} — sketch`;
  $view.innerHTML = `
    <div class="crumbs"><a href="#/">garden</a><span class="sep">/</span><a href="#/sketches">sketches</a><span class="sep">/</span>${escapeHtml(sk.title)}</div>
    <h1 class="note-title">${escapeHtml(sk.title)}</h1>
    <div class="embed-card" style="margin-top:22px;">
      <div class="ec-row"><div class="ec-icon">${pencilIcon()}</div>
        <div><div class="ec-title">Hand-drawn diagram</div><div class="ec-sub">${sk.relDir}</div></div>
      </div>
      ${sketchSvg(sk.id, 700, 220)}
    </div>
    <div class="connections">
      <div class="conn-group">
        <h5><span class="dot" style="background:var(--blue-400)"></span>referenced from</h5>
        <div class="conn-list">
          ${refs.length ? refs.map((r) => `<a class="conn-pill" href="${noteHref(r)}">${escapeHtml(DATA.notes[r].title)}</a>`).join("") : '<div class="conn-empty">Not referenced yet.</div>'}
        </div>
      </div>
    </div>
  `;
  markCurrent(null);
}

function renderMissing(key) {
  const m = DATA.missing[key];
  document.title = `${m ? m.label : key} — not yet written`;
  $view.innerHTML = `
    <div class="crumbs"><a href="#/">garden</a><span class="sep">/</span>not yet written</div>
    <div class="stub-box">
      <h2>🌱 “${escapeHtml(m ? m.label : key)}” hasn't been written yet</h2>
      <p style="color:var(--paper-dim); line-height:1.7;">This is a placeholder for a note that's referenced but doesn't
        exist in the garden yet — a to-do left behind by a wikilink. Nothing lost, just not planted.</p>
      <div class="conn-group" style="margin-top:20px;">
        <h5><span class="dot" style="background:var(--orange-400)"></span>referenced from</h5>
        <div class="conn-list">
          ${m ? m.sources.map((s) => `<a class="conn-pill" href="${noteHref(s)}">${escapeHtml(DATA.notes[s].title)}</a>`).join("") : ""}
        </div>
      </div>
    </div>
  `;
  markCurrent(null);
}

function renderNote(id) {
  const note = DATA.notes[id];
  if (!note) return renderNotFound();
  document.title = `${note.title} — my notes`;

  const crumbs = note.kind === "log"
    ? `<a href="#/">my notes</a><span class="sep">/</span>Study Log`
    : [note.topFolder, ...note.relDir.split("/").slice(1)].filter(Boolean).map((p, i, arr) => {
        if (i === 0) return `<a href="#/">${escapeHtml(p)}</a>`;
        return `<a href="#/cat/${arr[0]}/${encodeURIComponent(p)}">${escapeHtml(p)}</a>`;
      }).join('<span class="sep">/</span>');

  const meta = STAGE_META[note.stage];
  const bodyHtml = renderNoteBody(note);

  const outgoingIds = [...new Set(note.linkTokens.filter((l) => l.resolvedKind === "note").map((l) => l.resolvedId))];

  const connGroup = (title, dotColor, ids, cls) => `
    <div class="conn-group">
      <h5><span class="dot" style="background:${dotColor}"></span>${title}</h5>
      <div class="conn-list">
        ${ids.length ? ids.map((oid) => `<a class="conn-pill ${cls || ""}" href="${noteHref(oid)}">${escapeHtml(DATA.notes[oid].title)}</a>`).join("")
          : '<div class="conn-empty">None yet.</div>'}
      </div>
    </div>`;

  $view.innerHTML = `
    <div class="crumbs">${crumbs}${crumbs ? '<span class="sep">/</span>' : ""}${escapeHtml(note.title)}</div>
    <div class="note-head">
      <h1 class="note-title">${escapeHtml(note.title)}</h1>
      <span class="stage-badge">${meta.icon} ${meta.label}</span>
    </div>
    <div class="note-body">${bodyHtml}</div>
    ${note.kind === "note" ? `
    <div class="connections">
      ${connGroup("links to", "var(--blue-400)", outgoingIds)}
      ${connGroup("linked from", "var(--blue-300)", note.backlinks)}
      ${connGroup("you might also like", "var(--orange-400)", note.suggested, "suggested")}
    </div>
    ${(outgoingIds.length + note.backlinks.length + note.suggested.length) > 0 ? `
    <div class="ego-wrap">
      <svg id="egoSvg"></svg>
    </div>` : ""}
    ` : ""}
  `;

  if (note.kind === "note" && (outgoingIds.length + note.backlinks.length + note.suggested.length) > 0) {
    const egoIds = new Set([note.id, ...outgoingIds, ...note.backlinks, ...note.suggested]);
    requestAnimationFrame(() => renderGraph(document.getElementById("egoSvg"), buildGraphData(egoIds), { big: false, charge: -220 }));
  }

  markCurrent(id);
}

function renderNotFound() {
  $view.innerHTML = `<div class="notfound"><h2>🍂 nothing here</h2><p><a href="#/">back to the garden</a></p></div>`;
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------
function route() {
  closeSidebarMobile();
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  window.scrollTo(0, 0);

  if (parts.length === 0) return renderHome();
  if (parts[0] === "n") return renderNote(decodeURIComponent(parts.slice(1).join("/")));
  if (parts[0] === "s") return renderSketch(decodeURIComponent(parts.slice(1).join("/")));
  if (parts[0] === "m") return renderMissing(decodeURIComponent(parts.slice(1).join("/")));
  if (parts[0] === "sketches") return renderSketches();
  if (parts[0] === "cat") return renderCategory(decodeURIComponent(parts[1]), decodeURIComponent(parts[2]));
  return renderNotFound();
}

window.addEventListener("hashchange", route);
renderSidebar();
route();

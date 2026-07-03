"use strict";
/* my notes — client-side router, renderer, and graph views.
   All data comes from window.GARDEN_DATA (see build.js); nothing here
   ever touches the original vault. */

const DATA = window.GARDEN_DATA;
const $view = document.getElementById("view");

marked.setOptions({ gfm: true, breaks: false });

/* LaTeX commands used in the vault that KaTeX doesn't ship with. */
const KATEX_MACROS = {
  "\\mathbfit": "\\boldsymbol{#1}",
  "\\matrix": "\\begin{matrix}#1\\end{matrix}",
};

/* Generated inline icons (1em, stroke = currentColor) — no emoji anywhere. */
const ICONS = {
  seed: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 21v-8"/><path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6Z"/></svg>`,
  budding: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 21V11"/><path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6Z"/><path d="M12 11c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5Z"/></svg>`,
  evergreen: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 3 5 13h4l-3 6h12l-3-6h4L12 3Z"/><path d="M12 19v3"/></svg>`,
  log: `<svg class="ic" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>`,
  dice: `<svg class="ic" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.3" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="1.3" fill="currentColor" stroke="none"/><circle cx="9" cy="15" r="1.3" fill="currentColor" stroke="none"/><circle cx="15" cy="15" r="1.3" fill="currentColor" stroke="none"/></svg>`,
  pencil: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  rocket: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 2c3 2.5 4 6 4 9.5L12 15l-4-3.5C8 8 9 4.5 12 2Z"/><path d="M8 11c-2 1-3 3-3 6 2.5 0 4.5-1 5.5-2.5"/><path d="M16 11c2 1 3 3 3 6-2.5 0-4.5-1-5.5-2.5"/><circle cx="12" cy="8" r="1.3"/></svg>`,
  land: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 3v11"/><path d="m8 10 4 4 4-4"/><path d="M4 20h16"/></svg>`,
  burst: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 2v5M12 17v5M2 12h5M17 12h5M4.9 4.9l3.5 3.5M15.6 15.6l3.5 3.5M19.1 4.9l-3.5 3.5M8.4 15.6l-3.5 3.5"/></svg>`,
  flame: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 22c-4 0-6.5-2.5-6.5-6C5.5 12 9 10 9 6c2.5 1.5 3 3.5 3 5 1-1 2-3 2-5.5 3.5 2.5 4.5 5.5 4.5 10.5 0 3.5-2.5 6-6.5 6Z"/></svg>`,
  leaf: `<svg class="ic" viewBox="0 0 24 24"><path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16Z"/><path d="M4 20c4-6 8-10 12-12"/></svg>`,
};

const STAGE_META = {
  seed: { icon: ICONS.seed, label: "seed", color: "var(--green)" },
  budding: { icon: ICONS.budding, label: "budding", color: "var(--yellow)" },
  evergreen: { icon: ICONS.evergreen, label: "evergreen", color: "var(--red)" },
  log: { icon: ICONS.log, label: "log", color: "var(--pink)" },
};

/* Palette from Matisse's "The Terrace, Saint-Tropez": physics in sky blues,
   math in terracotta/ochre/rose, on sun-bleached cream. */
const PALETTE = {
  ink: "#24403a",
  cream: "#f2eee0",
  white: "#fbf9f0",
  blue: "#4a7aa8",
  red: "#c25b41",
  yellow: "#d9a95f",
  green: "#4f9d7d",
};
const TOP_COLORS = {
  Physics: { base: PALETTE.blue, ring: "#93b7d6" },
  Math: { base: PALETTE.red, ring: "#d98d6b" },
};
const SUB_PALETTE = [
  "#4a7aa8", "#6f9cc4", "#2f5a80", "#93b7d6", "#3c6d96",
  "#c25b41", "#d9a95f", "#a34630", "#d5a09b", "#cb7a52",
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
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1 + rnd() * 1.6).toFixed(1)}" fill="var(--red)" opacity="0.7"/>`;
  }).join("");
  return `<svg class="sketch-svg" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <path d="${d}" fill="none" stroke="var(--blue)" stroke-width="2" stroke-linecap="round" opacity="0.85"/>
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
      return katex.renderToString(m.tex, { throwOnError: false, displayMode: m.display, macros: KATEX_MACROS });
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
        ${sk.svg ? `<div class="xd-embed">${sk.svg}</div>` : sketchSvg(sk.id)}
      </a>`;
    }
    return `<a class="wl" href="${sketchHref(link.resolvedId)}">${label} ${ICONS.pencil}</a>`;
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
  secPhysics.innerHTML = `<div class="nt-section-title st-yellow">Physics</div>`;
  nav.appendChild(secPhysics);
  buildTreeDom(DATA.tree.Physics, nav, "Physics");

  const secMath = document.createElement("div");
  secMath.innerHTML = `<div class="nt-section-title st-coral">Math</div>`;
  nav.appendChild(secMath);
  buildTreeDom(DATA.tree.Math, nav, "Math");

  if (DATA.logs.length) {
    const secLog = document.createElement("div");
    secLog.innerHTML = `<div class="nt-section-title st-mint">Study Log</div>`;
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
  secSketch.innerHTML = `<div class="nt-section-title st-pink">Sketches</div>`;
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

document.getElementById("wanderBtn").addEventListener("click", (e) => {
  wiggle(e.currentTarget);
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
    .attr("stroke", (d) => (d.kind === "suggested" ? PALETTE.green : PALETTE.blue))
    .attr("stroke-opacity", (d) => (d.kind === "suggested" ? 0.45 : 0.4))
    .attr("stroke-dasharray", (d) => (d.kind === "suggested" ? "3,3" : null))
    .attr("stroke-width", 1.3);

  const node = g.append("g").selectAll("circle")
    .data(graphData.nodes).join("circle")
    .attr("r", (d) => (opts.big ? 5 + Math.min(d.degree, 10) * 1.1 : 4 + Math.min(d.degree, 8)))
    .attr("fill", (d) => d.color)
    .attr("stroke", PALETTE.white)
    .attr("stroke-width", 1.6)
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
    .attr("fill", PALETTE.ink)
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
// 3D garden — the whole vault as an orbitable constellation (three.js via
// 3d-force-graph). One live instance at a time; torn down on every route
// change so WebGL contexts don't pile up.
// ---------------------------------------------------------------------------
let garden3D = null;
function destroyGarden3D() {
  if (!garden3D) return;
  if (game) endGame(false);
  try {
    if (typeof garden3D._destructor === "function") garden3D._destructor();
    else garden3D.pauseAnimation();
  } catch (e) { /* already gone */ }
  garden3D = null;
}

function render3DGraph(container, graphData) {
  destroyGarden3D();
  garden3D = ForceGraph3D()(container)
    .width(container.clientWidth)
    .height(container.clientHeight)
    .backgroundColor(PALETTE.white)
    .showNavInfo(false)
    .nodeColor((d) => d.color)
    .nodeVal((d) => 1 + Math.min(d.degree, 10) * 0.7)
    .nodeOpacity(0.95)
    .nodeLabel((d) => `<span style="color:${PALETTE.ink};background:${PALETTE.cream};padding:3px 9px;border-radius:8px;font-family:Inter,sans-serif;font-size:12px;font-weight:600;box-shadow:0 2px 8px rgba(34,38,75,.18);">${escapeHtml(d.title)}</span>`)
    .linkColor((l) => (l.kind === "suggested" ? PALETTE.green : PALETTE.blue))
    .linkOpacity(0.4)
    .linkWidth((l) => (l.kind === "suggested" ? 0.5 : 1))
    .onNodeClick((d) => { location.hash = noteHref(d.id); })
    .graphData(graphData);
  garden3D.cameraPosition({ z: 320 });
}

// ---------------------------------------------------------------------------
// Garden Flyer — pilot a low-poly ship through the 3D garden. Every note
// sphere and connection line is solid: touch one and you crash. three.js is
// lazy-loaded the first time the game starts.
// ---------------------------------------------------------------------------
let game = null;

function nodeHitRadius(d) {
  // mirror of three-forcegraph's drawn size: nodeRelSize(4) * cbrt(nodeVal)
  return 4 * Math.cbrt(1 + Math.min(d.degree, 10) * 0.7);
}

function segDist2(p, a, b) {
  const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
  const apx = p.x - a.x, apy = p.y - a.y, apz = p.z - a.z;
  const len2 = abx * abx + aby * aby + abz * abz || 1e-9;
  let t = (apx * abx + apy * aby + apz * abz) / len2;
  t = Math.max(0, Math.min(1, t));
  const dx = apx - abx * t, dy = apy - aby * t, dz = apz - abz * t;
  return dx * dx + dy * dy + dz * dz;
}

function buildShip(THREE) {
  const ship = new THREE.Group();
  const hull = new THREE.Group(); // banks (rolls) inside the steering group
  const mat = (c) => new THREE.MeshLambertMaterial({ color: c, flatShading: true });

  const body = new THREE.Mesh(new THREE.ConeGeometry(2.2, 9, 6), mat(0xc25b41));
  body.rotation.x = -Math.PI / 2; // nose forward (-Z)
  hull.add(body);

  const cockpit = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 0), mat(0xd9a95f));
  cockpit.position.set(0, 1.1, 0.4);
  hull.add(cockpit);

  const wingGeo = new THREE.BoxGeometry(6.5, 0.4, 2.6);
  const wingL = new THREE.Mesh(wingGeo, mat(0x4f9d7d));
  wingL.position.set(-3.6, -0.3, 2.2);
  wingL.rotation.z = 0.18;
  hull.add(wingL);
  const wingR = new THREE.Mesh(wingGeo, mat(0x4f9d7d));
  wingR.position.set(3.6, -0.3, 2.2);
  wingR.rotation.z = -0.18;
  hull.add(wingR);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.4, 2.6, 2.2), mat(0x35755b));
  fin.position.set(0, 1.6, 3);
  hull.add(fin);

  const glow = new THREE.Mesh(
    new THREE.ConeGeometry(1.1, 3.2, 5),
    new THREE.MeshBasicMaterial({ color: 0xedd6a8, transparent: true, opacity: 0.9 })
  );
  glow.rotation.x = Math.PI / 2; // points backwards
  glow.position.set(0, 0, 5.6);
  hull.add(glow);

  ship.add(hull);
  ship.userData.hull = hull;
  ship.userData.glow = glow;
  return ship;
}

function flyerHudHtml() {
  return `
    <div class="fh-top">
      <span class="fh-chip" id="fhTime">0.0s</span>
      <span class="fh-chip" id="fhBest"></span>
    </div>
    <div class="fh-hint">&larr;&rarr; steer &middot; &uarr;&darr; pitch &middot; shift boost &middot; space brake &middot; esc land</div>
    <div class="fh-ready" id="fhReady">${ICONS.rocket} engines on — go!</div>`;
}

async function startGame() {
  if (game || !garden3D) return;
  const graphAtStart = garden3D;
  let THREE;
  try {
    document.getElementById("flyBtn")?.setAttribute("disabled", "");
    THREE = window.__THREE
      || (window.__THREE = await import("https://cdn.jsdelivr.net/npm/three@0.172.0/build/three.module.js"));
  } catch (e) {
    console.warn("Garden Flyer: couldn't load three.js", e);
    const b = document.getElementById("flyBtn");
    if (b) { b.removeAttribute("disabled"); b.innerHTML = `${ICONS.rocket} fly (offline?)`; }
    return;
  }
  // the route (and with it the graph) may have changed while three.js loaded
  if (game || !garden3D || garden3D !== graphAtStart) {
    document.getElementById("flyBtn")?.removeAttribute("disabled");
    return;
  }
  const btn = document.getElementById("flyBtn");
  if (btn) { btn.removeAttribute("disabled"); btn.innerHTML = `${ICONS.land} land`; }

  const scene = garden3D.scene();
  const camera = garden3D.camera();
  const stage = document.getElementById("graph3d");
  const panel = document.querySelector(".graph-panel");

  garden3D.controls().enabled = false;
  garden3D.enablePointerInteraction(false);
  garden3D.enableNodeDrag(false); // separate toggle — spheres must not move mid-flight
  if (panel) {
    panel.classList.add("playing");
    garden3D.width(stage.clientWidth).height(stage.clientHeight);
  }
  // Take over rendering: the graph's own loop calls controls().update() every
  // frame, which re-asserts the orbit camera and fights the chase camera.
  garden3D.pauseAnimation();

  const hud = document.createElement("div");
  hud.className = "fly-hud";
  hud.innerHTML = flyerHudHtml();
  stage.parentElement.appendChild(hud);

  const ship = buildShip(THREE);
  scene.add(ship);

  game = {
    THREE, ship, hud, camera, panel,
    savedCam: { pos: camera.position.clone(), quat: camera.quaternion.clone() },
    pos: new THREE.Vector3(0, 30, 420),
    quat: new THREE.Quaternion(),
    speed: 60, bank: 0, keys: {},
    t0: performance.now(), prev: performance.now(),
    crashed: false, shards: [], raf: 0,
    best: Number(localStorage.getItem("gardenFlyerBest") || 0),
  };
  window.__gardenFlyer = game; // handy for curious pilots (and debugging)
  const bestEl = document.getElementById("fhBest");
  if (bestEl && game.best) bestEl.textContent = `best ${game.best.toFixed(1)}s`;
  setTimeout(() => document.getElementById("fhReady")?.classList.add("gone"), 1600);

  game.onKey = (e) => {
    const codes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "KeyA", "KeyD", "KeyW", "KeyS", "Space", "ShiftLeft", "ShiftRight", "KeyR", "Escape"];
    if (!codes.includes(e.code)) return;
    e.preventDefault();
    game.keys[e.code] = e.type === "keydown";
    if (e.type === "keydown" && e.code === "Escape") endGame();
    else if (e.type === "keydown" && e.code === "KeyR" && game.crashed) restartFlight();
  };
  window.addEventListener("keydown", game.onKey);
  window.addEventListener("keyup", game.onKey);

  game.raf = requestAnimationFrame(flightTick);
}

function restartFlight() {
  const g = game;
  if (!g) return;
  g.hud.querySelector(".fly-crash")?.remove();
  g.shards.forEach((s) => s.mesh.parent && s.mesh.parent.remove(s.mesh));
  g.shards = [];
  g.pos.set(0, 30, 420);
  g.quat.identity();
  g.speed = 60; g.bank = 0;
  g.crashed = false;
  g.t0 = performance.now();
  g.ship.visible = true;
  const ready = document.getElementById("fhReady");
  if (ready) { ready.classList.remove("gone"); setTimeout(() => ready.classList.add("gone"), 1600); }
}

function crashFlight(cause) {
  const g = game;
  const T = g.THREE;
  g.crashed = true;
  const survived = (performance.now() - g.t0) / 1000;
  if (survived > g.best) {
    g.best = survived;
    localStorage.setItem("gardenFlyerBest", String(survived.toFixed(1)));
  }
  g.ship.visible = false;
  for (let i = 0; i < 18; i++) { // low-poly debris
    const mesh = new T.Mesh(
      new T.TetrahedronGeometry(0.5 + Math.random() * 1.1),
      new T.MeshLambertMaterial({ color: [0xc25b41, 0x4f9d7d, 0xd9a95f][i % 3], flatShading: true, transparent: true })
    );
    mesh.position.copy(g.pos);
    g.ship.parent.add(mesh);
    g.shards.push({
      mesh,
      vel: new T.Vector3((Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60),
      spin: new T.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6),
      life: 1.4,
    });
  }
  const flash = document.createElement("div");
  flash.className = "fly-flash";
  g.hud.appendChild(flash);
  setTimeout(() => flash.remove(), 600);

  setTimeout(() => {
    if (!game || !game.crashed) return;
    const card = document.createElement("div");
    card.className = "fly-crash";
    card.innerHTML = `
      <h4>${ICONS.burst} ${escapeHtml(cause)}</h4>
      <p>you survived <b>${survived.toFixed(1)}s</b>${g.best ? ` &middot; best ${g.best.toFixed(1)}s` : ""}</p>
      <div class="fc-actions">
        <button class="btn btn-primary" id="fcAgain">fly again <span class="kbd">R</span></button>
        <button class="btn btn-ghost" id="fcLand">land <span class="kbd">esc</span></button>
      </div>`;
    g.hud.appendChild(card);
    document.getElementById("fcAgain").addEventListener("click", restartFlight);
    document.getElementById("fcLand").addEventListener("click", () => endGame());
  }, 650);
}

function flightTick(now) {
  const g = game;
  if (!g) return;
  g.raf = requestAnimationFrame(flightTick);
  const T = g.THREE;
  const dt = Math.min((now - g.prev) / 1000, 0.05);
  g.prev = now;

  if (g.crashed) { // debris only
    g.shards.forEach((s) => {
      s.life -= dt;
      s.mesh.position.addScaledVector(s.vel, dt);
      s.mesh.rotation.x += s.spin.x * dt;
      s.mesh.rotation.y += s.spin.y * dt;
      s.mesh.material.opacity = Math.max(0, s.life / 1.4);
      if (s.life <= 0 && s.mesh.parent) s.mesh.parent.remove(s.mesh);
    });
    g.shards = g.shards.filter((s) => s.life > 0);
    renderFlightFrame(g);
    return;
  }

  const k = (c) => !!g.keys[c];
  const yaw = (k("ArrowLeft") || k("KeyA") ? 1 : 0) - (k("ArrowRight") || k("KeyD") ? 1 : 0);
  const pitch = (k("ArrowUp") || k("KeyW") ? 1 : 0) - (k("ArrowDown") || k("KeyS") ? 1 : 0);
  const boost = k("ShiftLeft") || k("ShiftRight");
  const target = k("Space") ? 24 : boost ? 125 : 62;
  g.speed += (target - g.speed) * Math.min(1, dt * 3);

  g.quat.multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0, 1, 0), yaw * 1.7 * dt));
  g.quat.multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(1, 0, 0), pitch * 1.25 * dt));

  // soft wall: past the garden's edge, ease the nose back toward the middle
  if (g.pos.length() > 720) {
    const home = new T.Matrix4().lookAt(g.pos, new T.Vector3(0, 0, 0), new T.Vector3(0, 1, 0));
    g.quat.slerp(new T.Quaternion().setFromRotationMatrix(home), Math.min(1, dt * 1.2));
  }

  const fwd = new T.Vector3(0, 0, -1).applyQuaternion(g.quat);
  g.pos.addScaledVector(fwd, g.speed * dt);

  g.ship.position.copy(g.pos);
  g.bank += (yaw * -0.65 - g.bank) * Math.min(1, dt * 6);
  g.ship.quaternion.copy(g.quat)
    .multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0, 0, 1), g.bank));
  const glow = g.ship.userData.glow;
  glow.scale.setScalar(1 + Math.random() * 0.25 + (boost ? 0.7 : 0));

  const camOff = new T.Vector3(0, 6, 22).applyQuaternion(g.ship.quaternion);
  g.camera.position.lerp(g.pos.clone().add(camOff), 1 - Math.pow(0.0001, dt));
  g.camera.up.copy(new T.Vector3(0, 1, 0).applyQuaternion(g.ship.quaternion));
  g.camera.lookAt(g.pos.clone().addScaledVector(fwd, 14));

  const elapsed = (now - g.t0) / 1000;
  const timeEl = document.getElementById("fhTime");
  if (timeEl) timeEl.innerHTML = `${elapsed.toFixed(1)}s${boost ? ICONS.flame : ""}`;

  if (elapsed > 1.4) { // spawn grace, then everything is solid
    const { nodes, links } = garden3D.graphData();
    for (const n of nodes) {
      const r = nodeHitRadius(n) + 2.4;
      const dx = g.pos.x - n.x, dy = g.pos.y - n.y, dz = g.pos.z - n.z;
      if (dx * dx + dy * dy + dz * dz < r * r) {
        return crashFlight(`you crashed into “${n.title}”`);
      }
    }
    for (const l of links) {
      if (typeof l.source !== "object" || typeof l.target !== "object") continue;
      if (segDist2(g.pos, l.source, l.target) < 2.8 * 2.8) {
        const kind = l.kind === "suggested" ? "suggested connection" : "link";
        return crashFlight(`you clipped the ${kind} between “${l.source.title}” and “${l.target.title}”`);
      }
    }
  }

  renderFlightFrame(g);
}

function renderFlightFrame(g) {
  if (!garden3D) return;
  garden3D.renderer().render(garden3D.scene(), g.camera);
}

function endGame(restoreView = true) {
  const g = game;
  if (!g) return;
  game = null;
  delete window.__gardenFlyer;
  cancelAnimationFrame(g.raf);
  window.removeEventListener("keydown", g.onKey);
  window.removeEventListener("keyup", g.onKey);
  g.shards.forEach((s) => s.mesh.parent && s.mesh.parent.remove(s.mesh));
  if (g.ship.parent) g.ship.parent.remove(g.ship);
  g.hud.remove();
  const btn = document.getElementById("flyBtn");
  if (btn) btn.innerHTML = `${ICONS.rocket} fly`;
  if (g.panel) g.panel.classList.remove("playing");
  if (restoreView && garden3D) {
    const stage = document.getElementById("graph3d");
    if (stage) garden3D.width(stage.clientWidth).height(stage.clientHeight);
    g.camera.up.set(0, 1, 0);
    garden3D.resumeAnimation();
    garden3D.controls().enabled = true;
    garden3D.enablePointerInteraction(true);
    garden3D.enableNodeDrag(true);
    garden3D.cameraPosition(
      { x: g.savedCam.pos.x, y: g.savedCam.pos.y, z: g.savedCam.pos.z },
      { x: 0, y: 0, z: 0 },
      900
    );
  }
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
  document.title = "Kevin and Mahith's garden";
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
      <svg class="hero-cutouts" viewBox="0 0 300 220" aria-hidden="true">
        <path fill="${PALETTE.yellow}" d="M58 34c24-20 56-12 62 10 6 21-11 32-30 41-21 10-47 7-54-11-7-17 6-28 22-40z"/>
        <path fill="${PALETTE.red}" d="M196 14c7 23 28 32 26 55-2 21-25 28-40 15-16-13-13-36-4-53 5-11 14-19 18-17z"/>
        <path fill="${PALETTE.blue}" d="M104 122c32-9 66 4 68 29 2 24-25 39-55 34-28-4-47-21-42-40 3-15 15-20 29-23z"/>
        <path fill="${PALETTE.green}" d="M240 118c15 2 28 17 24 34-4 16-22 26-37 19-14-6-17-25-8-38 6-10 13-16 21-15z"/>
      </svg>
      <h1 class="home-title">Kevin &amp; Mahith's garden of<br><span class="accent-blue">physics</span> &amp; <span class="accent-red">math</span></h1>
      <p class="home-sub">Hi! These are our personal notes from studying physics and math. Each note
        connects to others, so feel free to explore — some connections I drew myself, others were
        suggested. This garden will be complete when I stop learning, so it's updated regularly.
        (Sketches via Excalidraw are still on the way.)</p>
      <div class="home-actions">
        <a class="btn btn-primary" href="#/n/${encodeURIComponent(pickFeatured())}">Start somewhere &rarr;</a>
        <button class="btn btn-ghost" id="homeWander">${ICONS.dice} wander the garden</button>
      </div>
      <div class="stat-row">
        <div class="stat-chip"><div class="stat-num">${DATA.meta.noteCount}</div><div class="stat-label">notes</div></div>
        <div class="stat-chip"><div class="stat-num">${DATA.meta.linkCount}</div><div class="stat-label">explicit links</div></div>
        <div class="stat-chip"><div class="stat-num">${Math.round(DATA.meta.suggestedCount)}</div><div class="stat-label">suggested connections</div></div>
        <div class="stat-chip"><div class="stat-num">${DATA.meta.sketchCount}</div><div class="stat-label">hand-drawn sketches</div></div>
        <div class="stat-chip"><div class="stat-num">${DATA.meta.missingCount}</div><div class="stat-label">waiting to be written</div></div>
      </div>
    </div>

    <div class="graph-panel">
      <div class="graph-panel-head">
        <h3>the whole garden, mapped</h3>
        <div class="graph-head-right">
          <div class="graph-legend">
            <span><span class="legend-dot" style="background:${PALETTE.blue}"></span>physics</span>
            <span><span class="legend-dot" style="background:${PALETTE.red}"></span>math</span>
            <span><span class="legend-dot" style="background:transparent;border:1.5px dashed ${PALETTE.green};"></span>suggested</span>
          </div>
          <button id="flyBtn" class="fly-btn">${ICONS.rocket} fly</button>
          <div class="dim-toggle">
            <button id="dim3dBtn" class="on">3D</button>
            <button id="dim2dBtn">2D</button>
          </div>
        </div>
      </div>
      <div class="graph-stage">
        <div id="graph3d"></div>
        <svg id="graphSvg" style="display:none;"></svg>
        <div class="graph-hint" id="graphHint">drag to orbit &middot; scroll to zoom &middot; click a note to visit it</div>
      </div>
    </div>

    <div class="section-heading"><span class="tick"></span>Physics</div>
    <div class="category-grid">${catCards(physicsCats, "Physics")}</div>

    <div class="section-heading"><span class="tick"></span>Math</div>
    <div class="category-grid">${catCards(mathCats, "Math")}</div>
  `;

  document.getElementById("homeWander").addEventListener("click", () => document.getElementById("wanderBtn").click());

  const stage3d = document.getElementById("graph3d");
  const stage2d = document.getElementById("graphSvg");
  const btn3d = document.getElementById("dim3dBtn");
  const btn2d = document.getElementById("dim2dBtn");
  let rendered2d = false;

  const flyBtn = document.getElementById("flyBtn");
  function show3D() {
    btn3d.classList.add("on"); btn2d.classList.remove("on");
    stage2d.style.display = "none"; stage3d.style.display = "block";
    flyBtn.style.display = "";
    document.getElementById("graphHint").textContent = "drag to orbit · scroll to zoom · click a note to visit it";
    if (!garden3D) render3DGraph(stage3d, buildGraphData(null));
  }
  function show2D() {
    btn2d.classList.add("on"); btn3d.classList.remove("on");
    stage3d.style.display = "none"; stage2d.style.display = "block";
    flyBtn.style.display = "none";
    document.getElementById("graphHint").textContent = "drag nodes · scroll to zoom · click a note to visit it";
    destroyGarden3D();
    stage3d.innerHTML = "";
    if (!rendered2d) {
      rendered2d = true;
      renderGraph(stage2d, buildGraphData(null), { big: true, charge: -160 });
    }
  }
  btn3d.addEventListener("click", show3D);
  btn2d.addEventListener("click", show2D);
  flyBtn.addEventListener("click", () => (game ? endGame() : startGame()));

  // setTimeout, not requestAnimationFrame: rAF never fires in hidden tabs,
  // which would leave the garden blank until the tab regains focus.
  setTimeout(() => {
    if (typeof ForceGraph3D === "function") show3D();
    else { btn3d.style.display = "none"; show2D(); }
  }, 0);
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

  document.title = `${name} — Kevin and Mahith's garden`;
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
  const list = Object.values(DATA.sketches)
    .sort((a, b) => (!!b.svg - !!a.svg) || a.title.localeCompare(b.title));
  $view.innerHTML = `
    <div class="crumbs"><a href="#/">garden</a><span class="sep">/</span>sketches</div>
    <h1 class="note-title" style="margin-bottom:8px;">Hand-drawn sketches</h1>
    <p class="home-sub" style="margin-bottom:26px;">${list.length} Excalidraw canvases live in the vault —
      ${DATA.meta.drawnCount} of them are rendered here as real ink, straight from the drawing data.
      The empty ones show a placeholder squiggle until they get drawn.</p>
    <div class="sketch-grid">
      ${list.map((s) => `
        <a class="sketch-tile" href="${sketchHref(s.id)}">
          ${s.svg ? `<div class="xd-thumb">${s.svg}</div>` : sketchSvg(s.id, 200, 70)}
          <div class="st-title">${s.svg ? ICONS.pencil + " " : ""}${escapeHtml(s.title)}</div>
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
    ${sk.svg ? `<div class="xd-page">${sk.svg}</div>` : `
    <div class="embed-card" style="margin-top:22px;">
      <div class="ec-row"><div class="ec-icon">${pencilIcon()}</div>
        <div><div class="ec-title">Nothing drawn on this canvas yet</div><div class="ec-sub">${sk.relDir}</div></div>
      </div>
      ${sketchSvg(sk.id, 700, 220)}
    </div>`}
    <div class="connections">
      <div class="conn-group">
        <h5><span class="dot" style="background:var(--blue)"></span>referenced from</h5>
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
      <h2>${ICONS.seed} “${escapeHtml(m ? m.label : key)}” hasn't been written yet</h2>
      <p style="line-height:1.7;">This is a placeholder for a note that's referenced but doesn't
        exist in the garden yet — a to-do left behind by a wikilink. Nothing lost, just not planted.</p>
      <div class="conn-group" style="margin-top:20px;">
        <h5><span class="dot" style="background:var(--green)"></span>referenced from</h5>
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
  document.title = `${note.title} — Kevin and Mahith's garden`;

  const crumbs = note.kind === "log"
    ? `<a href="#/">garden</a><span class="sep">/</span>Study Log`
    : [note.topFolder, ...note.relDir.split("/").slice(1)].filter(Boolean).map((p, i, arr) => {
        if (i === 0) return `<a href="#/">${escapeHtml(p)}</a>`;
        return `<a href="#/cat/${arr[0]}/${encodeURIComponent(p)}">${escapeHtml(p)}</a>`;
      }).join('<span class="sep">/</span>');

  const meta = STAGE_META[note.stage];
  const bodyHtml = renderNoteBody(note);

  const outgoingIds = [...new Set(note.linkTokens.filter((l) => l.resolvedKind === "note").map((l) => l.resolvedId))];

  // notes growing on the same branch (same folder), minus ones already connected
  const connected = new Set([note.id, ...outgoingIds, ...note.backlinks, ...note.suggested]);
  const siblings = Object.values(DATA.notes)
    .filter((n) => n.kind === "note" && n.relDir === note.relDir && !connected.has(n.id))
    .map((n) => n.id)
    .sort((a, b) => DATA.notes[a].title.localeCompare(DATA.notes[b].title))
    .slice(0, 6);

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
      <span class="stage-badge stage-badge-${note.stage}">${meta.icon} ${meta.label}</span>
    </div>
    <div class="note-body">${bodyHtml}</div>
    ${note.kind === "note" ? `
    <div class="connections">
      ${connGroup("links to", "var(--blue)", outgoingIds, "out")}
      ${connGroup("linked from", "var(--red)", note.backlinks, "in")}
      ${connGroup("you might also like", "var(--green)", note.suggested, "suggested")}
      ${siblings.length ? connGroup("nearby on this branch", "var(--yellow)", siblings, "sibling") : ""}
    </div>
    ${(outgoingIds.length + note.backlinks.length + note.suggested.length) > 0 ? `
    <div class="ego-wrap">
      <h6>this note's neighborhood</h6>
      <svg id="egoSvg"></svg>
    </div>` : ""}
    ` : ""}
  `;

  if (note.kind === "note" && (outgoingIds.length + note.backlinks.length + note.suggested.length) > 0) {
    const egoIds = new Set([note.id, ...outgoingIds, ...note.backlinks, ...note.suggested]);
    setTimeout(() => renderGraph(document.getElementById("egoSvg"), buildGraphData(egoIds), { big: false, charge: -220 }), 0);
  }

  markCurrent(id);
}

function renderNotFound() {
  $view.innerHTML = `<div class="notfound"><h2>${ICONS.leaf} nothing here</h2><p><a href="#/">back to the garden</a></p></div>`;
}

// ---------------------------------------------------------------------------
// Animations (anime.js). Entrance animations run after every route render;
// transforms are cleared on completion so CSS :hover transforms keep working.
// Skipped entirely when the user prefers reduced motion.
// ---------------------------------------------------------------------------
const ANIMATE = typeof anime === "function"
  && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function clearTransforms(a) {
  a.animatables.forEach((x) => { x.target.style.transform = ""; x.target.style.opacity = ""; });
}

function animateView() {
  if (!ANIMATE) return;
  anime({
    targets: "#view > *",
    translateY: [16, 0],
    opacity: [0, 1],
    duration: 480,
    delay: anime.stagger(70),
    easing: "easeOutCubic",
    complete: clearTransforms,
  });
  anime({
    targets: "#view .cat-card, #view .conn-pill, #view .sketch-tile, #view .stat-chip",
    scale: [0.92, 1],
    opacity: [0, 1],
    duration: 420,
    delay: anime.stagger(22, { start: 120 }),
    easing: "easeOutQuad",
    complete: clearTransforms,
  });
  const cutouts = document.querySelectorAll(".hero-cutouts path");
  if (cutouts.length) {
    anime({
      targets: cutouts,
      scale: [0, 1],
      duration: 700,
      delay: anime.stagger(110, { start: 150 }),
      easing: "easeOutBack",
      complete: () => anime({          // then drift forever, like paper cut-outs settling
        targets: cutouts,
        translateY: [-5, 5],
        direction: "alternate",
        loop: true,
        duration: 2800,
        delay: anime.stagger(340),
        easing: "easeInOutSine",
      }),
    });
  }
}

function wiggle(el) {
  if (!ANIMATE || !el) return;
  anime({
    targets: el,
    rotate: [{ value: -5 }, { value: 5 }, { value: 0 }],
    duration: 380,
    easing: "easeInOutSine",
    complete: clearTransforms,
  });
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------
function route() {
  closeSidebarMobile();
  destroyGarden3D();
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  window.scrollTo(0, 0);

  if (parts.length === 0) renderHome();
  else if (parts[0] === "n") renderNote(decodeURIComponent(parts.slice(1).join("/")));
  else if (parts[0] === "s") renderSketch(decodeURIComponent(parts.slice(1).join("/")));
  else if (parts[0] === "m") renderMissing(decodeURIComponent(parts.slice(1).join("/")));
  else if (parts[0] === "sketches") renderSketches();
  else if (parts[0] === "cat") renderCategory(decodeURIComponent(parts[1]), decodeURIComponent(parts[2]));
  else renderNotFound();

  animateView();
}

window.addEventListener("hashchange", route);
renderSidebar();
route();

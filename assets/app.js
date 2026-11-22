(() => {
  document.documentElement.classList.add("js");
  const G = window.GLA;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const lei = n => new Intl.NumberFormat("ro-RO").format(n) + " lei";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const wa = t => `https://wa.me/${G.config.whatsapp}?text=${encodeURIComponent(t)}`;
  const byId = id => G.courses.find(c => c.id === id);
  const img = n => `assets/img/${n}.webp`;
  const arrow = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`;

  /* nav */
  const nav = $(".nav"), burger = $(".burger"), menu = $("#menu");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 12);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const setMenu = o => { menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Închide meniul" : "Deschide meniul"); };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  const waGeneral = wa("Bună! Am o întrebare despre cursurile Gabriela Paraschiv Lash Academy.");
  ["#waLink", "#waLink2", "#waFloat"].forEach(s => { const a = $(s); if (a) a.href = waGeneral; });

  /* reveal on scroll */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
  const watch = root => $$(".reveal:not(.in)", root).forEach((el, i) => { el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`; io.observe(el); });

  /* courses */
  const priceLabel = c => c.priceMax ? `${new Intl.NumberFormat("ro-RO").format(c.price)}–${lei(c.priceMax)}` : lei(c.price);
  function renderCourses(filter = "all") {
    const list = G.courses.filter(c => filter === "all" || c.group === filter);
    const rail = $("#courseList");
    rail.innerHTML = list.map((c, i) => `
      <li class="ccard" data-details="${c.id}" tabindex="0" role="button" aria-label="${esc(c.name)}, ${esc(c.days)}. Vezi detalii">
        <div class="ccard-img">
          <img src="${img(c.img)}" alt="" loading="lazy">
          <span class="ccard-tag">${esc(c.tag)}</span>
          <span class="ccard-num">${String(i + 1).padStart(2, "0")}</span>
          ${c.accredited ? '<span class="ccard-acc">Acreditat</span>' : ""}
        </div>
        <div class="ccard-body">
          <h3>${esc(c.name)}</h3>
          <span class="ccard-next">${esc(G.next[c.dates])}</span>
          <div class="ccard-foot">
            <div class="ccard-price">${c.full
              ? `<b>${lei(c.full)}</b><s>${lei(c.price)}</s><small>integral · avans ${lei(c.advance)}</small>`
              : `<b>${priceLabel(c)}</b><small>avans ${lei(c.advance)}</small>`}</div>
            <button class="btn ccard-book" data-book="${c.id}" type="button">${c.request ? "Formular" : "Rezervă"}</button>
          </div>
        </div>
      </li>`).join("");
    rail.scrollLeft = 0;
    updateRail();
  }
  function updateRail() {
    const rail = $("#courseList"), cards = rail.children;
    if (!cards.length) return;
    const step = cards[0].offsetWidth + 14;
    const i = Math.min(cards.length - 1, Math.round(rail.scrollLeft / step));
    $("#railCount").innerHTML = `${String(i + 1).padStart(2, "0")} <i>/ ${String(cards.length).padStart(2, "0")}</i>`;
    const max = rail.scrollWidth - rail.clientWidth;
    $("#railBar").style.width = `${max > 0 ? Math.max(100 / cards.length, (rail.scrollLeft / max) * 100) : 100}%`;
  }
  $("#courseList").addEventListener("scroll", updateRail, { passive: true });
  addEventListener("resize", updateRail);
  renderCourses();
  $$(".chip").forEach(t => t.addEventListener("click", () => {
    $$(".chip").forEach(x => { x.classList.toggle("is-on", x === t); x.setAttribute("aria-selected", x === t); });
    renderCourses(t.dataset.filter);
  }));

  /* calendar */
  /* „30, 31 ianuarie și 1 februarie” → [{d:30,m:"ian"},{d:31,m:"ian"},{d:1,m:"feb"}] */
  const MON = { ianuarie: "ian", februarie: "feb", martie: "mar", aprilie: "apr", mai: "mai", iunie: "iun" };
  const parseDays = txt => {
    const out = [], toks = txt.match(/\d+|[a-zăâîșț]+/gi) || [];
    let pend = [];
    toks.forEach(t => { if (/^\d+$/.test(t)) pend.push(+t); else if (MON[t.toLowerCase()]) { pend.forEach(d => out.push({ d, m: MON[t.toLowerCase()] })); pend = []; } });
    return out;
  };
  const dayHtml = ds => ds.map(x => `<span class="day"><b>${x.d}</b><small>${x.m}</small></span>`).join("");
  $("#calGrid").innerHTML = G.calendar.map((r, i) => {
    const month = r.m.replace(" 2027", "");
    const ext = parseDays(r.ext), lam = r.lam.flatMap(parseDays);
    return `
    <li class="mrow reveal${i === 0 ? " is-next" : ""}">
      <div class="mhead"><span class="mn">${String(i + 1).padStart(2, "0")}</span><h3>${month}</h3><span class="my">2027</span></div>
      ${i === 0 ? '<span class="mflag">Următoarea grupă</span>' : ""}
      <div class="mgroup${r.extFull ? " is-full" : ""}"><small>Extensii 1-3D <em>${r.extFull ? '<b class="mfull">Locuri ocupate</b>' : r.ext}</em></small><div class="days days--ext" aria-label="Extensii: ${esc(r.ext)}${r.extFull ? ", locuri ocupate" : ""}">${dayHtml(ext)}</div></div>
      <div class="mgroup"><small>Laminare <em>2 locuri / grupă</em></small><div class="days" aria-label="Laminare: ${esc(r.lam.join(", "))}">${dayHtml(lam)}</div></div>
    </li>`;
  }).join("");

  /* reel + mosaic */
  $("#reel").innerHTML = G.videos.map(v => `
    <button class="vid" data-vid="${v}" aria-label="Redă videoclip de la curs">
      <img src="assets/video/p-${v}.webp" alt="" loading="lazy">
      <span class="play"><i></i>De la curs</span>
    </button>`).join("");
  $("#mosaic").innerHTML = G.gallery.map(n => `<button data-zoom="${n}" aria-label="Mărește poza"><img src="${img(n)}" alt="Lucrare realizată de o cursantă" loading="lazy"></button>`).join("");
  const mos = $("#mosaic");
  if (G.gallery.length > 8) {
    mos.classList.add("collapsed");
    mos.insertAdjacentHTML("afterend", `<div class="more"><button class="btn btn-line" id="moreBtn" aria-expanded="false">Vezi toate lucrările (${G.gallery.length})</button></div>`);
    $("#moreBtn").addEventListener("click", e => { const open = mos.classList.toggle("collapsed") === false; e.currentTarget.setAttribute("aria-expanded", open); e.currentTarget.textContent = open ? "Arată mai puține" : `Vezi toate lucrările (${G.gallery.length})`; if (!open) mos.scrollIntoView({ behavior: "smooth", block: "start" }); });
  }

  /* background video only plays when visible */
  const bgv = $(".arch-video video");
  if (bgv) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) bgv.removeAttribute("autoplay");
    new IntersectionObserver(([e]) => { if (e.isIntersecting) { bgv.preload = "auto"; bgv.play().catch(() => {}); } else bgv.pause(); }, { threshold: .2 }).observe(bgv);
  }

  /* dialogs */
  const cd = $("#courseDialog"), bd = $("#bookDialog"), lb = $("#lightbox");
  document.addEventListener("click", e => {
    if (e.target.closest("[data-close]")) { e.target.closest("dialog").close(); return; }
    if (e.target.tagName === "DIALOG") { e.target.close(); return; }
    const b = e.target.closest("[data-book]"); if (b) { openBook(b.dataset.book); return; }
    const d = e.target.closest("[data-details]"); if (d) { openDetails(d.dataset.details); return; }
    const v = e.target.closest(".vid");
    if (v && !v.classList.contains("on")) {
      $$(".vid.on video").forEach(x => x.pause());
      v.classList.add("on");
      const el = document.createElement("video");
      Object.assign(el, { src: `assets/video/v-${v.dataset.vid}.mp4`, controls: true, autoplay: true, playsInline: true, loop: true });
      v.querySelector("img").replaceWith(el);
    }
    const z = e.target.closest("[data-zoom]");
    if (z) { lb.querySelector("img").src = img(z.dataset.zoom); lb.showModal(); }
  });
  document.addEventListener("keydown", e => {
    const d = e.target.closest?.("[data-details]"); if (e.target.closest?.("button")) return;
    if (d && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openDetails(d.dataset.details); }
  });

  function openDetails(id) {
    const c = byId(id);
    $("#courseBody").innerHTML = `
      <div class="d-hero"><img src="${img(c.img)}" alt=""></div>
      <div class="d-body">
        <div><p class="kicker"><span class="dot"></span>${esc(c.tag)}</p><h3 id="cdTitle">${esc(c.name)}</h3></div>
        <p>${esc(c.lead)}</p>
        ${c.intro.map(p => `<p>${esc(p)}</p>`).join("")}
        <div class="d-price">
          <div><small>Preț</small><b>${priceLabel(c)}</b></div>
          <div><small>${c.full ? "Plată integrală" : "Avans"}</small><b>${c.full ? lei(c.full) : lei(c.advance)}</b></div>
        </div>
        ${c.sections.map(s => `<div class="d-sec"><h4>${esc(s.t)}</h4><ul>${s.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("")}
        <div class="d-sec"><h4>Ce primești</h4><ul>${c.gets.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>
        <div class="d-sec"><h4>Cui se adresează</h4><p>${esc(c.audience)}</p></div>
        ${c.addons.length ? `<p class="d-note">Opțional: ${c.addons.map(a => `${G.addons[a].label} ${lei(G.addons[a].price)}`).join(" · ")}. ${c.full ? `Avans pentru rezervare: ${lei(c.advance)}.` : ""}</p>` : (c.full ? `<p class="d-note">Avans pentru rezervare: ${lei(c.advance)}.</p>` : "")}
        <p class="d-note">${c.accredited ? "Diplomă de participare, plus diplomă acreditată opțional." : "Program de specializare neacreditat, cu certificat de participare."} Grupe de maximum 2 cursante.</p>
        <div class="d-cta"><button class="btn btn-dark btn-block" data-book="${c.id}">${c.request ? "Completează formularul" : "Rezervă-ți locul"} <span class="arr" aria-hidden="true">→</span></button></div>
      </div>`;
    cd.showModal(); cd.scrollTop = 0;
  }

  /* booking */
  const f = $("#bookForm");
  const datesFor = c => c.dates === "extensii" ? G.calendar.filter(r => !r.extFull).map(r => `${r.ext} 2027`)
    : c.dates === "laminare" ? G.calendar.flatMap(r => r.lam.map(d => `${d} 2027`))
    : ["Stabilim data împreună"];
  function openBook(id) {
    const c = byId(id);
    if (c.request) { cd.close(); bd.close(); $("#practica").scrollIntoView({ behavior: "smooth" }); setTimeout(() => $("#practiceForm select").focus({ preventScroll: true }), 700); return; }
    cd.close();
    $("#bookCourse").innerHTML = G.courses.filter(x => !x.request).map(x => `<option value="${x.id}">${esc(x.name)} · ${esc(x.days)}</option>`).join("");
    $("#bookCourse").value = id;
    refreshBook(); $("#bookMsg").textContent = ""; $("#bookMsg").className = "form-msg";
    bd.showModal(); bd.scrollTop = 0;
  }
  function refreshBook() {
    const c = byId($("#bookCourse").value);
    $("#bookDate").innerHTML = datesFor(c).map(d => `<option>${esc(d)}</option>`).join("");
    $("#choiceWrap").hidden = !c.choices;
    if (c.choices) $("#bookChoice").innerHTML = c.choices.map(x => `<option>${esc(x)}</option>`).join("");
    $("#addonWrap").hidden = !c.addons.length;
    $("#addonList").innerHTML = c.addons.map(a => `<label class="opt"><input type="checkbox" data-addon="${a}"><span>${G.addons[a].label}</span><em>+${lei(G.addons[a].price)}</em></label>`).join("");
    $("#payAdvance").textContent = lei(c.advance);
    $("#payFull").textContent = lei(c.full);
    updateSum();
  }
  function calc() {
    const c = byId($("#bookCourse").value);
    const addons = $$("[data-addon]:checked").map(x => x.dataset.addon);
    const addSum = addons.reduce((s, a) => s + G.addons[a].price, 0);
    const mode = f.plata.value;
    const now = mode === "avans" ? c.advance : c.full + addSum;
    const rest = mode === "avans" ? c.price + addSum - c.advance : 0;
    return { c, addons, addSum, mode, now, rest };
  }
  function updateSum() {
    const { now, rest, mode, addSum } = calc();
    $("#sumNow").textContent = lei(now);
    $("#sumNote").textContent = mode === "avans"
      ? `Restul de ${lei(rest)}${addSum ? ", cu opțiunile alese," : ""} se achită ulterior, conform înțelegerii cu Gabriela.`
      : (addSum ? `Include opțiunile alese (${lei(addSum)}).` : "Plată integrală, la preț redus.");
  }
  $("#bookCourse").addEventListener("change", refreshBook);
  f.addEventListener("change", updateSum);

  function validate(form) {
    let ok = true, first;
    $$("[required]", form).forEach(el => {
      const v = el.value.trim();
      const bad = el.type === "checkbox" ? !el.checked : !v || (el.type === "email" && !/^\S+@\S+\.\S+$/.test(v)) || (el.type === "tel" && v.replace(/\D/g, "").length < 9);
      el.classList.toggle("invalid", bad); el.setAttribute("aria-invalid", bad);
      if (bad) { ok = false; first = first || el; }
    });
    first?.focus();
    return ok;
  }
  f.addEventListener("submit", async e => {
    e.preventDefault();
    const msg = $("#bookMsg");
    if (!validate(f)) { msg.textContent = "Completează câmpurile marcate."; msg.className = "form-msg err"; return; }
    const { c, addons, mode, now, rest } = calc();
    const p = { curs: c.name, durata: c.days, data: f.data.value, efect: c.choices ? f.efect.value : null, optiuni: addons.map(a => G.addons[a].label), plata: mode, deplata_acum: now, rest, nume: f.nume.value.trim(), telefon: f.telefon.value.trim(), email: f.email.value.trim() };
    const btn = $("#bookSubmit");
    if (G.config.checkoutEndpoint) {
      btn.disabled = true; btn.firstChild.textContent = "Se pregătește plata... ";
      try {
        const r = await fetch(G.config.checkoutEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p) });
        const j = await r.json(); if (!j.url) throw 0; location.href = j.url; return;
      } catch { msg.textContent = "Nu am putut deschide plata. Încearcă din nou sau scrie-ne pe WhatsApp."; msg.className = "form-msg err"; btn.disabled = false; btn.firstChild.textContent = "Continuă către plată "; return; }
    }
    const text = `Bună, Gabriela! Vreau să rezerv locul la: ${p.curs} (${p.durata})\nData: ${p.data}${p.efect ? `\nEfect: ${p.efect}` : ""}${p.optiuni.length ? `\nOpțiuni: ${p.optiuni.join(", ")}` : ""}\nPlata: ${mode === "avans" ? "avans" : "integral"} ${lei(now)}\nNume: ${p.nume}\nTelefon: ${p.telefon}\nEmail: ${p.email}`;
    msg.textContent = "Se deschide WhatsApp cu cererea ta. Gabriela îți confirmă locul și detaliile de plată.";
    msg.className = "form-msg ok";
    window.open(wa(text), "_blank", "noopener");
  });

  /* zi de practică */
  const pf = $("#practiceForm");
  pf.addEventListener("submit", async e => {
    e.preventDefault();
    const m = $("#practiceMsg");
    if (!validate(pf)) { m.textContent = "Completează câmpurile marcate."; m.className = "form-msg err"; return; }
    const d = Object.fromEntries(new FormData(pf));
    if (G.config.leadEndpoint) {
      try { await fetch(G.config.leadEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) }); m.textContent = "Mulțumim! Gabriela te contactează personal."; m.className = "form-msg ok"; pf.reset(); return; } catch { /* WhatsApp */ }
    }
    m.textContent = "Se deschide WhatsApp ca să trimiți solicitarea.";
    m.className = "form-msg ok";
    window.open(wa(`Bună, Gabriela! Mă interesează o zi de practică.\nDomeniu: ${d.domeniu}\nProbleme întâmpinate: ${d.probleme}\nTelefon: ${d.telefon}`), "_blank", "noopener");
  });
  $$("input,select,textarea").forEach(el => el.addEventListener("input", () => { el.classList.remove("invalid"); el.removeAttribute("aria-invalid"); }));

  watch(document);
})();

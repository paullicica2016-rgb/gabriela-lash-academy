// Creează plata Stripe Checkout pentru o rezervare de curs.
// Rulează pe Vercel (funcție serverless). Cheia secretă vine din variabila STRIPE_SECRET_KEY,
// setată în Vercel → Settings → Environment Variables. Nu se scrie niciodată în cod.
//
// Prețurile NU vin din browser: se recalculează aici din assets/data.js, ca nimeni să nu poată plăti mai puțin.

const fs = require("fs");
const path = require("path");

let GLA;
function data() {
  if (!GLA) {
    const src = fs.readFileSync(path.join(__dirname, "..", "assets", "data.js"), "utf8");
    const win = {};
    new Function("window", src)(win);
    GLA = win.GLA;
  }
  return GLA;
}

// Aceeași regulă ca în assets/app.js (datesFor)
function datesFor(G, c) {
  if (c.dates === "extensii") return G.calendar.filter(r => !r.extFull).map(r => `${r.ext} 2027`);
  if (c.dates === "laminare") return G.calendar.flatMap(r => r.lam.map(d => `${d} 2027`));
  return ["Stabilim data împreună"];
}

// Aceeași regulă ca în assets/app.js (calc)
function quote(G, b) {
  const c = G.courses.find(x => x.id === b.curs_id);
  if (!c || c.request) throw new Error("Curs invalid");
  if (!datesFor(G, c).includes(b.data)) throw new Error("Dată invalidă");
  if (c.choices && !c.choices.includes(b.efect)) throw new Error("Efect invalid");
  const addons = [...new Set(Array.isArray(b.optiuni) ? b.optiuni : [])];
  if (addons.some(a => !c.addons.includes(a))) throw new Error("Opțiune invalidă");
  const mode = b.plata === "integral" ? "integral" : "avans";
  const addSum = addons.reduce((s, a) => s + G.addons[a].price, 0);
  const now = mode === "avans" ? c.advance : c.full + addSum;
  const rest = mode === "avans" ? c.price + addSum - c.advance : 0;
  return { c, addons, mode, now, rest };
}

const clean = (v, max = 120) => String(v ?? "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max);

function buildParams(G, b, origin) {
  const q = quote(G, b);
  const nume = clean(b.nume, 80), telefon = clean(b.telefon, 30), email = clean(b.email, 120);
  if (!nume || telefon.replace(/\D/g, "").length < 9 || !/^\S+@\S+\.\S+$/.test(email)) throw new Error("Date de contact invalide");

  const optLabels = q.addons.map(a => G.addons[a].label);
  const title = `${q.c.name} · ${q.c.days}${q.c.choices ? ` · ${b.efect}` : ""}`;
  const what = q.mode === "avans" ? "Avans rezervare loc" : "Plată integrală";
  const desc = [`Data: ${b.data}`, optLabels.length ? `Opțiuni: ${optLabels.join(", ")}` : "", q.mode === "avans" ? `Rest de plată: ${q.rest} lei` : ""].filter(Boolean).join(" · ");
  const meta = {
    curs: title, data: b.data, plata: q.mode, de_plata_acum: `${q.now} lei`, rest: `${q.rest} lei`,
    optiuni: optLabels.join(", ") || "-", nume, telefon, email
  };

  const p = new URLSearchParams();
  p.set("mode", "payment");
  p.set("locale", "ro");
  p.set("customer_email", email);
  p.set("success_url", `${origin}/multumim.html?session_id={CHECKOUT_SESSION_ID}`);
  p.set("cancel_url", `${origin}/#cursuri`);
  p.set("line_items[0][quantity]", "1");
  p.set("line_items[0][price_data][currency]", "ron");
  p.set("line_items[0][price_data][unit_amount]", String(q.now * 100));
  p.set("line_items[0][price_data][product_data][name]", `${what}: ${title}`);
  p.set("line_items[0][price_data][product_data][description]", desc);
  p.set("payment_intent_data[description]", `${what}: ${title} · ${b.data} · ${nume}`);
  for (const [k, v] of Object.entries(meta)) {
    p.set(`metadata[${k}]`, clean(v, 450));
    p.set(`payment_intent_data[metadata][${k}]`, clean(v, 450));
  }
  return { params: p, quote: q };
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") { res.status(405).json({ error: "Doar POST" }); return; }
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) { res.status(500).json({ error: "Plata nu e configurată încă" }); return; }

  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } }
  const origin = (process.env.SITE_URL || `https://${req.headers["x-forwarded-host"] || req.headers.host}`).replace(/\/$/, "");

  let built;
  try { built = buildParams(data(), b || {}, origin); }
  catch (e) { res.status(400).json({ error: e.message }); return; }

  try {
    const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/x-www-form-urlencoded" },
      body: built.params.toString()
    });
    const j = await r.json();
    if (!r.ok || !j.url) { console.error("Stripe:", j.error && j.error.message); res.status(502).json({ error: "Stripe a refuzat plata" }); return; }
    res.status(200).json({ url: j.url });
  } catch (e) {
    console.error(e);
    res.status(502).json({ error: "Nu am putut contacta Stripe" });
  }
};

module.exports._test = { buildParams, quote, data };

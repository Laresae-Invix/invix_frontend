import React, { useEffect } from "react";

/**
 * Invix — Landing Layout (React + Tailwind)
 * -------------------------------------------------
 * Versi: Clean & siap preview. Tanpa Navbar sesuai permintaan.
 * Isi teks sudah diambil dari UX writing kamu.
 */

// ====== Design Tokens ======
const tokens = {
  brand: {
    primary: "#181A4D",
    surface: "#F5F9FF",
    accent: "#6F7CFF",
    dark: "#0F1224",
  },
  radius: { xl: "rounded-3xl", lg: "rounded-2xl", md: "rounded-xl" },
  shadow: { md: "shadow-[0_8px_30px_rgba(0,0,0,0.08)]" },
};

// ====== Copy (UX Writing) ======
const copy = {
  hero: {
    title: "✨ Undangan Digital Cerdas & Ramah Lingkungan",
    subtitle:
      "Buat undangan acara lebih cepat, hemat, dan modern — lengkap dengan RSVP otomatis & desain menarik.",
    primaryCta: "Pesan Undangan Sekarang",
    secondaryCta: "Lihat Demo",
    badges: ["Ramah lingkungan", "Share via link/QR", "RSVP otomatis"],
  },
  about: {
    title: "Kenapa Pilih INVIX?",
    points: [
      { title: "Hemat waktu & biaya", desc: "Tanpa cetak & distribusi fisik." },
      { title: "Mudah dibagikan", desc: "Cukup share link atau QR code." },
      { title: "Ramah lingkungan", desc: "Kurangi limbah kertas & emisi karbon." },
    ],
  },
  services: {
    title: "Layanan Kami",
    items: [
      { icon: "🎓", title: "Kampus & Organisasi Mahasiswa", desc: "Seminar, workshop, wisuda." },
      { icon: "🤝", title: "Komunitas & Event Sosial", desc: "Gathering, festival, charity event." },
      { icon: "🏪", title: "UMKM & Bisnis", desc: "Grand opening, promo event, launching produk." },
      { icon: "💍", title: "Personal Event", desc: "Ulang tahun, engagement, pernikahan (opsional)." },
    ],
  },
  features: {
    title: "Fitur yang Membuat Acara Lebih Praktis",
    items: [
      { icon: "✅", title: "RSVP otomatis", desc: "Tamu konfirmasi hadir dengan sekali klik." },
      { icon: "⏰", title: "Reminder sebelum acara", desc: "Pengingat otomatis ke tamu." },
      { icon: "🎨", title: "Desain modern & custom", desc: "Sesuai tema acara kamu." },
      { icon: "📊", title: "Tracking tamu real‑time", desc: "Tahu berapa banyak peserta secara langsung." },
    ],
  },
  portfolio: {
    title: "Contoh Undangan Digital INVIX",
    subtitle: "Lihat bagaimana undangan digital bisa tampil profesional & interaktif.",
    demos: [
      { label: "Demo Undangan Kampus", href: "#demo-kampus" },
      { label: "Demo Undangan UMKM", href: "#demo-umkm" },
      { label: "Demo Undangan Komunitas", href: "#demo-komunitas" },
    ],
  },
  pricing: {
    title: "Harga Terjangkau untuk Semua Acara",
    plans: [
      { name: "Paket Basic", price: "Mulai Rp150.000", features: ["Template standar", "RSVP otomatis"], cta: "Pesan Basic" },
      { name: "Paket Custom", price: "Mulai Rp300.000", features: ["Desain khusus sesuai tema", "Reminder", "Analitik tamu"], cta: "Pesan Custom", highlighted: true },
    ],
    note: "Harga bisa disesuaikan dengan kebutuhan acara.",
  },
  testimonials: {
    title: "Dipercaya oleh Komunitas & Kampus",
    items: [
      { quote: "Undangan seminar kami jadi lebih profesional dan mudah disebarkan. Mahasiswa tinggal klik link, langsung RSVP. Simple banget!", name: "Himpunan Mahasiswa XYZ" },
      { quote: "Grand opening toko kami lebih terkontrol karena bisa tracking tamu. INVIX bikin acara lebih rapi.", name: "UMKM Kuliner Bandung" },
    ],
  },
  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    items: [
      { q: "Berapa lama pengerjaan undangan?", a: "1–3 hari kerja, tergantung paket yang dipilih." },
      { q: "Apakah undangan bisa dibagikan lewat WhatsApp & Instagram?", a: "Bisa, cukup share link atau QR code." },
      { q: "Apakah bisa request desain khusus?", a: "Bisa! Untuk paket Custom kami sediakan desain sesuai tema acara Anda." },
      { q: "Bagaimana cara pemesanan?", a: "Klik tombol ‘Pesan Sekarang’ → Isi form → Tim kami akan menghubungi Anda." },
    ],
  },
  cta: {
    title: "Siap Buat Acara Lebih Modern?",
    subtitle: "Buat undangan digital sekarang juga.",
    button: "Pesan Undangan Digital Sekarang",
    wa: "https://wa.me/6281234567890?text=Halo%20Invix%2C%20saya%20ingin%20pesan%20undangan%20digital",
  },
  footer: {
    cols: [
      { title: "Invix", links: [{ label: "Tentang", href: "#" }, { label: "Kontak", href: "#" }] },
      { title: "Produk", links: [{ label: "Fitur", href: "#features" }, { label: "Harga", href: "#pricing" }] },
      { title: "Bantuan", links: [{ label: "FAQ", href: "#faq" }] },
    ],
    bottom: "© " + new Date().getFullYear() + " Invix. All rights reserved.",
  },
};

// ====== Utils ======
const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

// ====== Components ======
function SectionTitle({ id, eyebrow, title, subtitle }: { id?: string; eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div id={id} className="text-center max-w-3xl mx-auto">
      {eyebrow && <p className="text-sm font-medium text-slate-600">{eyebrow}</p>}
      <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-16 sm:pb-24"
      style={{ background: `linear-gradient(180deg, ${tokens.brand.surface}, #ffffff)` }}
    >
      <div className={`${container} grid lg:grid-cols-2 gap-10 items-center`}>
        {/* Copy (center aligned) */}
        <div className="text-center">
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {copy.hero.title}
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            {copy.hero.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={copy.cta.wa}
              className="rounded-xl px-5 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: tokens.brand.primary }}
            >
              {copy.hero.primaryCta}
            </a>
            <a
              href="#portfolio"
              className="rounded-xl px-5 py-3 text-sm font-semibold border border-slate-300 text-slate-800"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-slate-600">
            {copy.hero.badges.map((b) => (
              <li key={b} className="px-3 py-1 border border-slate-200 rounded-full">
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Auto-moving template preview (centered) */}
        <div
          className={`${tokens.shadow.md} ${tokens.radius.xl} bg-white p-4 sm:p-6 border border-slate-100`}
          aria-label="Preview area"
        >
          <div className="w-full overflow-hidden">
            <div className="relative mx-auto max-w-xl">
              {/* Viewport */}
              <div className="aspect-[4/3] rounded-2xl border border-slate-200 overflow-hidden">
                {/* Track */}
                <div className="h-full w-[300%] flex animate-[slider_14s_linear_infinite]">
                  {/* Slide 1 */}
                  <div className="w-1/3 grid place-items-center bg-[color:var(--invix-surface)]">
                    <div className="grid gap-3 text-center">
                      <div className="mx-auto w-24 h-14 bg-slate-200 rounded" />
                      <span className="text-slate-500">Template A (HP)</span>
                    </div>
                  </div>
                  {/* Slide 2 */}
                  <div className="w-1/3 grid place-items-center bg-white">
                    <div className="grid gap-3 text-center">
                      <div className="mx-auto w-40 h-24 bg-slate-200 rounded" />
                      <span className="text-slate-500">Template B (Laptop)</span>
                    </div>
                  </div>
                  {/* Slide 3 */}
                  <div className="w-1/3 grid place-items-center bg-[color:var(--invix-surface)]">
                    <div className="grid gap-3 text-center">
                      <div className="mx-auto w-28 h-16 bg-slate-200 rounded" />
                      <span className="text-slate-500">Template C (Tablet)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="absolute inset-x-0 -bottom-6 flex justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for slider */}
      <style>{`
        @keyframes slider {
          0% { transform: translateX(0%); }
          30% { transform: translateX(0%); }
          35% { transform: translateX(-33.333%); }
          65% { transform: translateX(-33.333%); }
          70% { transform: translateX(-66.666%); }
          95% { transform: translateX(-66.666%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}

function AboutWhy() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className={container}>
        <SectionTitle title={copy.about.title} />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {copy.about.points.map((p) => (
            <div key={p.title} className={`bg-white ${tokens.radius.lg} border border-slate-200 p-6 ${tokens.shadow.md}`}>
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: tokens.brand.surface }}>
      <div className={container}>
        <SectionTitle title={copy.services.title} />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.services.items.map((s) => (
            <div key={s.title} className={`bg-white ${tokens.radius.lg} p-6 border border-slate-200 ${tokens.shadow.md}`}>
              <div className="text-2xl" aria-hidden>{s.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className={container}>
        <SectionTitle title={copy.features.title} />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.features.items.map((f) => (
            <div key={f.title} className={`bg-white ${tokens.radius.lg} p-6 border border-slate-200 ${tokens.shadow.md}`}>
              <div className="text-2xl" aria-hidden>{f.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-24" style={{ backgroundColor: tokens.brand.surface }}>
      <div className={container}>
        <SectionTitle title="Cara kerja INVIX" />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[{ num: "01", title: "Pilih template", desc: "Pilih visual sesuai tema acara." }, { num: "02", title: "Masukkan detail", desc: "Nama, tanggal, lokasi, foto, dan cerita." }, { num: "03", title: "Bagikan", desc: "Share link/QR ke tamu — selesai!" }].map((s) => (
            <div key={s.num} className={`bg-white ${tokens.radius.lg} border border-slate-200 p-6 ${tokens.shadow.md}`}>
              <div className="text-sm font-mono text-slate-500">{s.num}</div>
              <h3 className="mt-2 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24" style={{ background: `linear-gradient(180deg, #fff, ${tokens.brand.surface})` }}>
      <div className={container}>
        <SectionTitle title={copy.portfolio.title} subtitle={copy.portfolio.subtitle} />
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {copy.portfolio.demos.map((d) => (
            <a key={d.label} href={d.href} className="px-4 py-2 text-sm border border-slate-300 rounded-full bg-white hover:shadow">{d.label}</a>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`bg-white ${tokens.radius.lg} border border-slate-200 overflow-hidden ${tokens.shadow.md}`}>
              <div className="aspect-[4/3] bg-slate-100 grid place-items-center text-slate-500">
                <span>Mockup Undangan #{i + 1}</span>
              </div>
              <div className="p-4">
                <div className="h-4 w-2/3 bg-slate-200 rounded" />
                <div className="mt-2 h-3 w-1/2 bg-slate-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className={container}>
        <SectionTitle title={copy.pricing.title} />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {copy.pricing.plans.map((p) => (
            <div key={p.name} className={`relative ${tokens.radius.xl} border ${p.highlighted ? "border-transparent" : "border-slate-200"} bg-white p-6 ${tokens.shadow.md}`} style={p.highlighted ? { background: `linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg, ${tokens.brand.primary}, ${tokens.brand.accent}) border-box`, border: "2px solid transparent" } : {}}>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-2 text-2xl font-bold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-1">✔</span><span>{f}</span></li>
                ))}
              </ul>
              <a href={copy.cta.wa} className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: tokens.brand.primary }}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">{copy.pricing.note}</p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: tokens.brand.surface }}>
      <div className={container}>
        <SectionTitle title={copy.testimonials.title} />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {copy.testimonials.items.map((t, i) => (
            <figure key={i} className={`bg-white ${tokens.radius.lg} p-6 border border-slate-200 ${tokens.shadow.md}`}>
              <blockquote className="text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className={container}>
        <SectionTitle title={copy.faq.title} />
        <div className="mt-8 divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
          {copy.faq.items.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">{f.q}<span className="transition-transform group-open:rotate-45 text-xl">+</span></summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigCTA() {
  return (
    <section className="py-16 sm:py-24" style={{ background: `linear-gradient(135deg, ${tokens.brand.primary}, ${tokens.brand.accent})` }}>
      <div className={`${container} text-center text-white`}>
        <h2 className="text-2xl sm:text-3xl font-bold">{copy.cta.title}</h2>
        <p className="mt-2 opacity-90">{copy.cta.subtitle}</p>
        <a href={copy.cta.wa} className="mt-6 inline-flex rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20">{copy.cta.button}</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-white border-t border-slate-200">
      <div className={`${container} grid sm:grid-cols-2 lg:grid-cols-4 gap-8`}>
        <div>
          <div className="text-lg font-semibold" style={{ color: tokens.brand.primary }}>Invix</div>
          <p className="mt-3 text-sm text-slate-600">Platform undangan digital modern untuk semua acara.</p>
        </div>
        {copy.footer.cols.map((col) => (
          <div key={col.title}>
            <div className="text-sm font-semibold text-slate-900">{col.title}</div>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-600 hover:text-slate-900">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-xs text-slate-500">{copy.footer.bottom}</div>
    </footer>
  );
}

// ====== Root Component ======
export default function InvixLanding() {
  useEffect(() => {
    document.documentElement.style.setProperty("--invix-primary", tokens.brand.primary);
    document.documentElement.style.setProperty("--invix-surface", tokens.brand.surface);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <Hero />
        <AboutWhy />
        <Services />
        <Features />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <BigCTA />
      </main>
      <Footer />
    </div>
  );
}

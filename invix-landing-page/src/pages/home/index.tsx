import React from "react";
import { Link } from "react-router-dom"; 
import FeatureSection from "./sections/features-section";
import TemplateSection from "./sections/template-section";
import HowSection from "./sections/how-section";
import PricingSection from "./sections/pricing-section";
import TestiSection from "./sections/testi-section";
import FaqSection from "./sections/faq-section";
import CtaSection from "./sections/cta-section";
import FooterSection from "./sections/footer-section";

// Invix — Landing Page (React + Tailwind)
// Theme: Biru & Kuning (modern, simple, cepat, energik)

export default function LandingPage() {
  
  return (
    
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ===== HERO (full screen, centered) ===== */}
 <section
  className={[
    "relative min-h-[calc(100svh-64px)] flex items-center overflow-hidden",
    "bg-[radial-gradient(ellipse_at_top_left,theme(colors.yellow.200)/.35,transparent_55%),radial-gradient(ellipse_at_bottom_right,rgb(67_81_188_/_0.28),transparent_55%)]",
  ].join(" ")}
>
  {/* Keyframes */}
  <style>{`
    @keyframes float { 0%{transform:translateY(0)} 50%{transform:translateY(-10px)} 100%{transform:translateY(0)} }
    @keyframes slowSpin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
    @keyframes fadeUp { from{opacity:0; transform:translateY(8px)} to{opacity:1; transform:translateY(0)} }
  `}</style>

  {/* Soft blobs */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div
      className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-300/35 blur-3xl"
      style={{ animation: "float 8s ease-in-out infinite" }}
    />
    <div
      className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#4351BC]/25 blur-3xl"
      style={{ animation: "slowSpin 60s linear infinite" }}
    />
  </div>

  <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-10 place-items-center">
      {/* Kiri: konten hero (center) */}
      <div className="text-left animate-[fadeUp_700ms_ease-out_forwards] opacity-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Undangan <span className="text-[#4351BC]">Digital Cerdas </span>
          <span className="text-[#D8E63C]"> & </span>
          <span className="text-[#4351BC]">Ramah Lingkungan </span>
        </h1>

        <p className="mt-4 text-slate-600 text-lg mx-auto max-w-[58ch]">
          Pilih template, atur detail, <span className="font-semibold text-[#4351BC]">tinggal klik</span> — lengkap dengan RSVP otomatis & desain menarik.
        </p>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#4351BC] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#4351BC]/90 transition"
          >
            Buat Undangan Sekarang <ArrowIcon />
          </a>
          <a
            href="#templates"
            className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50 transition"
          >
            Lihat Template
          </a>
        </div>

        {/* Chips ikon fitur */}
        <ul className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-slate-600 text-[#4351BC]">
          <li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
            <QrIcon /> QR Share
          </li>
          <li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
            <UsersMiniIcon /> RSVP Live
          </li>
          <li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
            <CameraMiniIcon /> Galeri
          </li>
          <li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
            <MapPinIcon /> Maps
          </li>
          <li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
            <ClockIcon /> Countdown
          </li>
          <li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
            <GiftIcon /> Gift
          </li>
        </ul>

        {/* Stats ringkas */}
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-md mx-auto text-center text-[#4351BC]">
          <Stat big="1K+" small="Template dipakai" />
          <Stat big="64%" small="RSVP rate rerata" />
          <Stat big="<2 mnt" small="Waktu publish" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-500">
          <ShieldIcon /> Keamanan link & RSVP terjaga • <SparkIcon /> Template baru tiap minggu
        </div>
      </div>

      {/* Kanan: mock preview (center + float) */}
      <div className="w-full max-w-lg animate-[fadeUp_900ms_ease-out_forwards] opacity-0">
        <div className="rounded-2xl border border-slate-200 bg-white/80 shadow-lg p-3 mx-auto">
          {/* gradient header: ganti from/via biru ke #4351BC */}
          <div className="rounded-xl bg-gradient-to-br from-[#4351BC] via-[#4351BC] to-yellow-300 p-1">
            <div className="rounded-xl bg-white p-5">
              <div
                className="h-56 rounded-xl bg-slate-100 flex items-center justify-center"
                style={{ animation: "float 7s ease-in-out infinite" }}
              >
                <span className="text-slate-400 text-sm">Preview Template “Aurora”</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-16 rounded-xl bg-slate-100" />
                <div className="h-16 rounded-xl bg-slate-100" />
                <div className="h-16 rounded-xl bg-slate-100" />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <button className="rounded-xl bg-[#4351BC] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4351BC]/90 transition">
                  Gunakan
                </button>
                <button className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50 transition">
                  Pratinjau
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll hint (center bawah) */}
    <a
      href="#features"
      className="mt-10 mb-4 block w-fit mx-auto text-xs font-medium text-slate-500 hover:text-slate-700 transition"
    >
      <span className="inline-flex items-center gap-2 mt-12">
        Gulir untuk melihat fitur
        <svg className="h-4 w-4 animate-bounce" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 16l-6-6h12z" />
        </svg>
      </span>
    </a>
  </div>
</section>


      {/* ===== FEATURES ===== */}
      <section>
        <FeatureSection />
      </section>

      {/* ===== TEMPLATES ===== */}
     <section>
        <TemplateSection />
     </section>

      {/* ===== HOW IT WORKS ===== */}
     <section>
        <HowSection />
     </section>

      {/* ===== PRICING ===== */}
     <section>
        <PricingSection />
     </section>

      {/* ===== TESTIMONIALS ===== */}
    <section>
          <TestiSection />
    </section>

      {/* ===== FAQ ===== */}
      <section>
        <FaqSection />
      </section>

      {/* ===== CTA ===== */}
      <section>
        <CtaSection />
      </section>

      {/* ===== FOOTER ===== */}
     <section>
          <FooterSection/>
     </section>
    </div>
  );
}

/* ================== Reusable Components ================== */
function Stat({ big, small }: { big: string; small: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-2xl font-extrabold tracking-tight text-[#4351BC]">{big}</p>
      <p className="text-xs text-slate-600">{small}</p>
    </div>
  );
}

/* ================== Icons (inline) ================== */
function ArrowIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="m13.5 5-1.4 1.4L16.7 11H4v2h12.7l-4.6 4.6l1.4 1.4L21 12z"/></svg>)}
function QrIcon(){return(<svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M3 3h8v8H3V3m2 2v4h4V5H5m6-2h8v8h-8V3m2 2v4h4V5h-4M3 13h8v8H3v-8m2 2v4h4v-4H5m10-2h2v2h-2m0 4h2v2h-2m4-4h2v2h-2m0 4h2v2h-2v-2m-4 0h-4v-2h4v2Z"/></svg>)}
function ShieldIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M12 2l7 4v6c0 5-3.1 9.2-7 10c-3.9-.8-7-5-7-10V6z"/></svg>)}
function SparkIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4 text-yellow-500"><path fill="currentColor" d="M11 2v5l-4 2l4 2v5l4-4l-4-2l4-2z"/></svg>)}


/* Ikon mini untuk chips */
function UsersMiniIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M16 11a3 3 0 1 0-3-3a3 3 0 0 0 3 3m-8 0a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.74 1.07-3.23 2.7-4.06C11.58 12.35 9.99 13 8 13"/></svg>)}
function CameraMiniIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M9.4 5l1.6-2h4l1.6 2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5.4"/></svg>)}
function MapPinIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>)}
function ClockIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m.5 5h-1v6l5 3l.5-.86l-4.5-2.64Z"/></svg>)}
function GiftIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M20 12v8a2 2 0 0 1-2 2h-6v-7h8m-10 0v7H6a2 2 0 0 1-2-2v-8h6m10-6h-2.18A3 3 0 0 0 13 5a3 3 0 0 0-4.82 1H6a2 2 0 0 0-2 2v3h16V8a2 2 0 0 0-2-2"/></svg>)}
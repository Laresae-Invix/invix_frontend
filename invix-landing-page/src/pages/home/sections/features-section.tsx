import { Link } from "react-router-dom";
import React from "react";

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 scroll-mt-24"
    >
      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">
          Kenapa Invix
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
          Semua yang kamu butuhkan untuk undangan digital
        </h2>
        <p className="mt-2 text-slate-600">
          Dari desain sampai RSVP — semuanya dalam satu tempat.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Feature
          icon={<BrushIcon />}
          title="Kustomisasi Penuh"
          desc="Ganti warna, font, musik, dan layout sesuai brand/event."
        />
        <Feature
          icon={<QrIcon />}
          title="Link & QR Code"
          desc="Sekali klik, bagikan via WA, IG, atau cetak QR untuk venue."
        />
        <Feature
          icon={<CameraIcon />}
          title="Foto & Video"
          desc="Galeri cantik dengan kompresi cerdas biar cepat diakses."
        />
        <Feature
          icon={<CalendarIcon />}
          title="Detail Acara"
          desc="Tanggal jam, lokasi, Google Maps, itinerary, hingga countdown."
        />
        <Feature
          icon={<UsersIcon />}
          title="RSVP Realtime"
          desc="Kelola tamu, seat, dan notifikasi ke panitia secara instan."
        />
        <Feature
          icon={<ChartIcon />}
          title="Analitik"
          desc="Lihat performa view, share, dan konversi RSVP harian."
        />
      </div>
    </section>
  );
}

/* ================== Reusable Components ================== */
function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800 mb-3">
        {icon}
      </div>
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function BrushIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M20.71 4.63a2 2 0 0 0-2.82 0l-9.9 9.9a4 4 0 0 0-1.06 1.82l-.63 2.53l2.53-.63c.68-.17 1.3-.52 1.82-1.04l9.9-9.9a2 2 0 0 0 0-2.82M7 18a1 1 0 0 1-1 1a2 2 0 0 1-2-2a1 1 0 0 1 1-1h2Z"
      />
    </svg>
  );
}
function QrIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M3 3h8v8H3V3m2 2v4h4V5H5m6-2h8v8h-8V3m2 2v4h4V5h-4M3 13h8v8H3v-8m2 2v4h4v-4H5m10-2h2v2h-2m0 4h2v2h-2m4-4h2v2h-2m0 4h2v2h-2v-2m-4 0h-4v-2h4v2Z"
      />
    </svg>
  );
}
function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M9.4 5l1.6-2h4l1.6 2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5.4M12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
      />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 15H5V9h14z"
      />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M16 11a3 3 0 1 0-3-3a3 3 0 0 0 3 3m-8 0a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.74 1.07-3.23 2.7-4.06C11.58 12.35 9.99 13 8 13m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2c0-2.66-5.33-4-8-4Z"
      />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M3 3h2v18H3zm4 10h2v8H7zm4-6h2v14h-2zm4 4h2v10h-2zm4-7h2v17h-2z"
      />
    </svg>
  );
}

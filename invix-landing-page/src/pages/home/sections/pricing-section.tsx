export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center">
        <h3 className="text-2xl font-bold tracking-tight">Harga Terjangkau</h3>
        <p className="text-slate-600 mt-2">
          Lengkap dengan template elegan, RSVP online, dan tautan/QR yang siap dibagikan.
        </p>
      </div>

      {/* Flexbox untuk memastikan kartu tetap center dan sejajar */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <PriceCard
          tier="Basic"
          price="Rp 150.000"
          features={["Template Standar", "RSVP Otomatis"]}
          cta="Pilih Paket Basic"
          highlight=""
          ribbon=""
        />
        <PriceCard
          tier="Costum"
          price="Rp 300.000"
          features={["Design Khusus Sesuai Tema", "Fitur Reminder", "Custom domain", "Analitik Tamu"]}
          cta="Pilih Paket Costum"
          highlight="pop"
          ribbon="Terlaris"
        />
      </div>
    </section>
  );
}

/* ================== Reusable Components ================== */

function PriceCard(
  { tier, price, features, cta, highlight, ribbon }:
  { tier: string; price: string; features: string[]; cta: string; highlight?: "pop" | ""; ribbon?: string }
) {
  const ring = highlight === "pop" ? "ring-2 ring-yellow-300" : "ring-1 ring-slate-200";
  return (
    <div className={`relative max-w-sm w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${ring} transition-transform transform hover:scale-105 duration-200 ease-in-out`}>
      {ribbon && (
        <div className="absolute -top-3 right-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900 shadow">
          {ribbon}
        </div>
      )}
      <p className="text-sm font-semibold">{tier}</p>
      <p className="mt-1 text-3xl font-extrabold tracking-tight text-[#4351BC]">
        {price}
        <span className="text-sm text-slate-500 font-medium"> /Package</span>
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2"><CheckIcon /> {f}</li>
        ))}
      </ul>
      <div className="mt-5 flex justify-center">
        <button className="w-full rounded-2xl bg-[#4351BC] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out">
          {cta}
        </button>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-600" aria-hidden="true">
      <path fill="currentColor" d="m9 16.2l-3.5-3.5L4 14.2L9 19l11-11l-1.5-1.5z"/>
    </svg>
  );
}

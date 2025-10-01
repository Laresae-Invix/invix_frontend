export default function PricingSection() {
    return (
         <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-tight">Harga yang Simple</h3>
          <p className="text-slate-600">Bayar saat butuh. Tidak ada biaya tersembunyi.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <PriceCard tier="Gratis" price="Rp 0" features={["1 undangan aktif", "Template basic", "RSVP standar"]} cta="Coba Sekarang" highlight="" ribbon="" />
          <PriceCard tier="Pro" price="Rp 79.000" features={["10 undangan aktif", "Semua template", "Domain invix.link", "Analitik"]} cta="Pilih Pro" highlight="pop" ribbon="Terlaris" />
          <PriceCard tier="Business" price="Rp 199.000" features={["Tak terbatas", "Team access", "Custom domain", "Support prioritas"]} cta="Hubungi Sales" highlight="" ribbon="" />
        </div>
      </section>
    );
}

/* ================== Reusable Components ================== */

function PriceCard({ tier, price, features, cta, highlight, ribbon }: { tier: string; price: string; features: string[]; cta: string; highlight?: "pop" | ""; ribbon?: string }) {
  const ring = highlight === "pop" ? "ring-2 ring-yellow-300" : "ring-1 ring-slate-200";
  return (
    <div className={`relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${ring}`}>
      {ribbon && (
        <div className="absolute -top-3 right-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900 shadow">{ribbon}</div>
      )}
      <p className="text-sm font-semibold">{tier}</p>
      <p className="mt-1 text-3xl font-extrabold tracking-tight text-blue-700">
        {price}<span className="text-sm text-slate-500 font-medium"> /bulan</span>
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2"><CheckIcon /> {f}</li>
        ))}
      </ul>
      <button className="mt-5 w-full rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{cta}</button>
    </div>
  );
}

function CheckIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-600"><path fill="currentColor" d="m9 16.2l-3.5-3.5L4 14.2L9 19l11-11l-1.5-1.5z"/></svg>)}
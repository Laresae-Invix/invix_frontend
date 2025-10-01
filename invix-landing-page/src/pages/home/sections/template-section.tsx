export default function TemplateSection() {
    return (
         <section id="templates" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Template Unggulan</h3>
            <p className="text-slate-600">Pilih gaya kamu. Semua responsif dan siap pakai.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">
            Lihat semua template
          </a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Aurora", tag: "Wedding" },
            { name: "Spark", tag: "Birthday" },
            { name: "Metro", tag: "Event" },
            { name: "Luxe", tag: "Wedding" },
            { name: "Neon", tag: "Festival" },
            { name: "Bloom", tag: "Aqiqah" },
          ].map((t) => (
            <TemplateCard key={t.name} name={t.name} tag={t.tag} />
          ))}
        </div>
      </section>
    );
}

/* ================== Reusable Components ================== */

function TemplateCard({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow transition">
      <div className="h-44 rounded-xl bg-slate-100 flex items-center justify-center">
        <span className="text-slate-400 text-sm">Preview {name}</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-slate-500">{tag}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-xl border px-3 py-1.5 text-xs font-semibold hover:bg-slate-50">Pratinjau</button>
          <button className="rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">Gunakan</button>
        </div>
      </div>
    </div>
  );
}

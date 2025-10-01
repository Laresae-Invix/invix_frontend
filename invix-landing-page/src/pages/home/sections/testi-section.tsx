export default function TestiSection() {
    return (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <Quote name="Raka & Sinta" text="Undangannya kerasa premium, tinggal share link. RSVP-nya realtime, mantap!" />
            <Quote name="Maya" text="Bikin undangan ulang tahun 1 menit beneran bisa. Template ‘Spark’ lucu bgt." />
            <Quote name="Event LX" text="Analitiknya bantu kami prediksi jumlah tamu hadir. Super helpful." />
          </div>
        </div>
      </section>
    );
}

/* ================== Reusable Components ================== */
function Quote({ name, text }: { name: string; text: string }) {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-5">
      <blockquote className="text-sm text-slate-700">“{text}”</blockquote>
      <figcaption className="mt-3 text-xs text-slate-500">— {name}</figcaption>
    </figure>
  );
}
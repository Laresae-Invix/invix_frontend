export default function HowSection() {
    return (
         <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-tight">Cara Kerja</h3>
          <p className="text-slate-600">
            3 langkah mudah — selesai dalam <span className="font-semibold">kurang dari 2 menit</span>.
          </p>
        </div>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          <Step no={1} title="Pilih Template" desc="Temukan gaya favoritmu dari ratusan pilihan." />
          <Step no={2} title="Isi Detail" desc="Nama, tanggal, lokasi, dan foto/video." />
          <Step no={3} title="Bagikan" desc="Link & QR siap disebar ke semua tamu." />
        </ol>
      </section>
    );
}

/* ================== Reusable Components ================== */

function Step({ no, title, desc }: { no: number; title: string; desc: string }) {
  return (
    <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">{no}</div>
      <p className="mt-3 font-semibold">{title}</p>
      <p className="text-sm text-slate-600">{desc}</p>
    </li>
  );
}
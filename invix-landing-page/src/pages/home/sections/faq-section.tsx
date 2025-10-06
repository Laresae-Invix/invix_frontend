
export default function FaqSection() {
    return (
        <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-tight">Pertanyaan Umum</h3>
          <p className="text-slate-600">Kalau masih bingung, tinggal tanya aja 😉</p>
        </div>
        <div className="mt-8 grid gap-4">
          <Faq q="Berapa lama pengerjaan undangan?" a=" 1–3 hari kerja, tergantung paket yang kamu pilih." />
          <Faq q="Apakah undangan bisa dibagikan lewat WhatsApp & Instagram?" a="Bisa, cukup share link atau QR code." />
          <Faq q="Apakah bisa request desain khusus?" a=" Bisa! Untuk paket Custom kami sediakan desain sesuai tema acara Anda." />
          <Faq q="Bagaimana cara pemesanan?" a=" Klik tombol “Pesan Sekarang” → Isi form → Tim kami akan menghubungi Anda." />
        </div>
      </section>
    );
}

/* ================== Reusable Components ================== */
function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="font-semibold">{q}</p>
      <p className="mt-1 text-sm text-slate-600">{a}</p>
    </div>
  );
}
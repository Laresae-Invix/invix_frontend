
export default function FaqSection() {
    return (
        <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-tight">Pertanyaan Umum</h3>
          <p className="text-slate-600">Kalau masih bingung, tinggal tanya aja 😉</p>
        </div>
        <div className="mt-8 grid gap-4">
          <Faq q="Apakah bisa custom domain?" a="Bisa. Paket Business mendukung custom domain & branding kamu." />
          <Faq q="Bisa ganti musik?" a="Bisa. Kamu bisa unggah musik sendiri atau pilih dari pustaka kami." />
          <Faq q="Apakah ada undangan fisik?" a="Invix fokus di undangan digital. Tapi kamu bisa cetak QR untuk tamu." />
          <Faq q="Bisa tambah admin?" a="Bisa di paket Business (team access)." />
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
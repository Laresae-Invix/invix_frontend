import {
  BrushIcon,
  CalendarIcon,
  CameraIcon,
  ChartIcon,
  Feature,
  QrIcon,
  UsersIcon,
} from "../../../components/icon";

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 scroll-mt-24"
    >
      {/* Header Section */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-5 py-2 text-sm font-semibold ring-2 ring-[#4C7A99] mb-6 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-indigo-500 animate-fadeInMove">
  Kenapa Invix
</span>

        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Semua yang kamu butuhkan untuk undangan digital
        </h2>
        <p className="mt-4 text-slate-600 text-lg sm:text-xl">
          Dari desain sampai RSVP — semuanya dalam satu tempat.
        </p>
      </div>

      {/* Feature Cards Section */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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

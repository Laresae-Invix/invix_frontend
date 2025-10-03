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

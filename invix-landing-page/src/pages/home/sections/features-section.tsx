import { Sparkles } from "lucide-react";
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
			className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24"
		>
			{/* Header Section */}
			<div className="text-center mb-10">
				<div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
					<Sparkles className="h-4 w-4" style={{ color: "#4351BC" }} />
					<span className="text-sm font-medium" style={{ color: "#4351BC" }}>
						Kenapa Pilih Invix?
					</span>
				</div>

				<h2 className="mt-4 mb-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
					Semua yang kamu butuhkan untuk undangan digital
				</h2>
				<p className="mt-4 text-slate-600 text-lg sm:text-xl">
					Dari desain sampai RSVP — semuanya dalam satu tempat.
				</p>
			</div>

			{/* Feature Cards Section */}
			<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
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

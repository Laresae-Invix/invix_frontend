import SectionNavigator from "../../../../components/sectionNavigator";
import ProductCoupleSectionItemsEngangement from "../items/couple-section-items-engangement";
import ProductCoupleSectionItemsWedding from "../items/couple-section-items-wedding";

export default function ProductCoupleSection() {
	const items = [
		{
			key: "wedding",
			label: "Wedding",
			element: <ProductCoupleSectionItemsWedding />,
		},
		{
			key: "engangement",
			label: "Engagement",
			element: <ProductCoupleSectionItemsEngangement />,
		},
	];

	return (
		<section className="relative">
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-20 -left-10 h-56 w-56 rounded-full bg-[#4351BC]/10 blur-3xl" />
				<div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
			</div>

			<div className="mx-auto max-w-full sm:max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
				<div className="mb-8 text-center">
					<span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-slate-600 bg-white/70 backdrop-blur">
						Koleksi Couple
					</span>
					<h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
						Pilih Momen <span className="text-[#4351BC]">Terbaik</span> Kamu
					</h2>
					<p className="mt-2 text-sm text-slate-600">
						Jelajahi template untuk akad, resepsi, atau lamaran—semua serba
						instan.
					</p>
				</div>
				<SectionNavigator items={items} defaultKey="wedding" />
			</div>
		</section>
	);
}

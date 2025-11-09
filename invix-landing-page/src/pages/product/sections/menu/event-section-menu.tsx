import SectionNavigator from "../../../../components/sectionNavigator";
import ProductEventSectionItemsBirthday from "../items/event-section-items-birthday";
import ProductEventSectionItemsEvent from "../items/event-section-items-event";
import ProductEventSectionItemsFamily from "../items/event-section-items-family";
import ProductEventSectionItemsKomunitas from "../items/event-section-items-komunitas";
import ProductEventSectionItemsKorporat from "../items/event-section-items-koporat";

export default function ProductEventSection() {
	const items = [
		{
			key: "komunitas",
			label: "Komunitas",
			element: <ProductEventSectionItemsKomunitas />,
		},
		{
			key: "koporat",
			label: "Korporat",
			element: <ProductEventSectionItemsKorporat />,
		},
		{
			key: "event",
			label: "Event",
			element: <ProductEventSectionItemsEvent />,
		},
		{
			key: "family",
			label: "Family",
			element: <ProductEventSectionItemsFamily />,
		},
		{
			key: "birthday",
			label: "Birthday",
			element: <ProductEventSectionItemsBirthday />,
		},
	];

	return (
		<section className="relative">
			<div className="mx-auto max-w-full sm:max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
				<div className="mb-8 text-center">
					<span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-slate-600 bg-white/70 backdrop-blur">
						Koleksi Event
					</span>
					<h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
						Event <span className="text-[#4351BC]">Pribadi</span> &{" "}
						<span className="text-[#4351BC]">Profesional</span>
					</h2>
					<p className="mt-2 text-sm text-slate-600">
						Dari komunitas sampai korporat—pilih template yang pas buat acara
						pentingmu.
					</p>
				</div>
				<SectionNavigator
					items={items}
					defaultKey="event" // Pastikan defaultKey valid
				/>
			</div>
		</section>
	);
}

import SectionNavigator from "../../../../components/sectionNavigator";
import ProductEventSectionItemsEvent from "../items/event-section-items-event";
import ProductEventSectionItemsKomunitas from "../items/event-section-items-komunitas";
import ProductEventSectionItemsKorporat from "../items/event-section-items-koporat";

export default function ProductCoupleSection() {
	const items = [
		{
			key: "komunitas",
			label: "Komunitas",
			element: <ProductEventSectionItemsKomunitas />,
		},
		{
			key: "koporat",
			label: "Koporat",
			element: <ProductEventSectionItemsKorporat />,
		},
		{
			key: "event",
			label: "Event",
			element: <ProductEventSectionItemsEvent />,
		},
	];

	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<SectionNavigator items={items} defaultKey="" />
		</div>
	);
}

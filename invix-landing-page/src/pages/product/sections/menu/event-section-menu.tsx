import SectionNavigator from "../../../../components/sectionNavigator";
import ProductEventSectionItemsEvent from "../items/event-section-items-event";
import ProductEventSectionItemsFamily from "../items/event-section-items-family";
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
		{
			key: "family",
			label: "Family",
			element: <ProductEventSectionItemsFamily />,
		},
	];

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
			<SectionNavigator items={items} defaultKey="" />
		</div>
	);
}

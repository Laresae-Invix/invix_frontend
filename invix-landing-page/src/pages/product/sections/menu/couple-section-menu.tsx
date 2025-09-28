import SectionNavigator from "../../../../components/sectionNavigator";
import ProductCoupleSectionItemsEngangement from "../items/couple-section-items-engangement";
import ProductCoupleSectionItemsWedding from "../items/couple-section-items-wedding";

export default function ProductCoupleSection() {
	const items = [
		{
			key: "wedding",
			label: "Wdding",
			element: <ProductCoupleSectionItemsWedding />,
		},
		{
			key: "engangement",
			label: "Engangement",
			element: <ProductCoupleSectionItemsEngangement />,
		},
	];

	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<SectionNavigator items={items} defaultKey="" />
		</div>
	);
}

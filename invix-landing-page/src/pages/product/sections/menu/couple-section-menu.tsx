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
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
			<SectionNavigator items={items} defaultKey="" />
		</div>
	);
}

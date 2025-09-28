import SectionNavigator from "../../components/sectionNavigator";
import ProductCoupleSection from "./sections/menu/couple-section-menu";
import ProductEventSection from "./sections/menu/event-section-menu";

export default function ProductPage() {
	const items = [
		{ key: "couple", label: "Couple", element: <ProductCoupleSection /> },
		{ key: "event", label: "Event", element: <ProductEventSection /> },
	];

	return (
		<div className="space-y-4">
			<SectionNavigator items={items} defaultKey="product" />
		</div>
	);
}

import ProductCard from "../../../../components/ProductkCard";

export default function ProductEventSectionItemsEvent() {
	const products = [
		{
			id: 1,
			title: "Event 1",
			description: "Deskripsi singkat produk Event 1.",
		},
		{
			id: 3,
			title: "Event 3",
			description: "Deskripsi singkat produk Event 3.",
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{products.map((p) => (
				<ProductCard
					key={p.id}
					title={p.title}
					description={p.description}
					// imageUrl={p.imageUrl}
				/>
			))}
		</div>
	);
}

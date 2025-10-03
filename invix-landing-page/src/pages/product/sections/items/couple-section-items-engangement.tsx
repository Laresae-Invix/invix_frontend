import ProductCard from "../../../../components/ProductkCard";

export default function ProductCoupleSectionItemsEngangement() {
	const products = [
		{
			id: 1,
			title: "Engangement 1",
			description: "Deskripsi singkat produk Engangement 1.",
		},
		{
			id: 2,
			title: "Engangement 2",
			description: "Deskripsi singkat produk Engangement 2.",
		},
		{
			id: 3,
			title: "Engangement 3",
			description: "Deskripsi singkat produk Engangement 3.",
		},
		{
			id: 3,
			title: "Engangement 3",
			description: "Deskripsi singkat produk Engangement 3.",
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

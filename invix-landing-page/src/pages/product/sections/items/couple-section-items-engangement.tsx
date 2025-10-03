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
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
			{products.map((p) => (
				<ProductCard key={p.id} title={p.title} description={p.description} />
			))}
		</div>
	);
}

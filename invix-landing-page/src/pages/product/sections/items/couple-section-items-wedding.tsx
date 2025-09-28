import ProductCard from "../../../../components/ProductkCard";

export default function ProductCoupleSectionItemsWedding() {
	const products = [
		{
			id: 1,
			title: "Couple 1",
			description: "Deskripsi singkat produk couple 1.",
		},
		{
			id: 2,
			title: "Couple 2",
			description: "Deskripsi singkat produk couple 2.",
		},
		{
			id: 3,
			title: "Couple 3",
			description: "Deskripsi singkat produk couple 3.",
		},
	];

	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((p) => (
				<ProductCard key={p.id} title={p.title} description={p.description} />
			))}
		</div>
	);
}

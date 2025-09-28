import ProductCard from "../../../../components/ProductkCard";

export default function ProductEventSectionItemsFamily() {
	const products = [
		{
			id: 1,
			title: "Family 1",
			description: "Deskripsi singkat produk Family 1.",
		},
		{
			id: 2,
			title: "Family 2",
			description: "Deskripsi singkat produk Family 2.",
		},
		{
			id: 3,
			title: "Family 3",
			description: "Deskripsi singkat produk Family 3.",
		},
		{
			id: 4,
			title: "Family 4",
			description: "Deskripsi singkat produk Family 4.",
		},
		{
			id: 5,
			title: "Family 5",
			description: "Deskripsi singkat produk Family 4.",
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

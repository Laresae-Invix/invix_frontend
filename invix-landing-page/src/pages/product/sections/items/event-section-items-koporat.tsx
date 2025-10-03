import ProductCard from "../../../../components/ProductkCard";

export default function ProductEventSectionItemsKorporat() {
	const products = [
		{
			id: 1,
			title: "Korporat 1",
			description: "Deskripsi singkat produk Korporat 1.",
		},
		{
			id: 2,
			title: "Korporat 2",
			description: "Deskripsi singkat produk Korporat 2.",
		},
		{
			id: 3,
			title: "Korporat 3",
			description: "Deskripsi singkat produk Korporat 3.",
		},
		{
			id: 4,
			title: "Korporat 4",
			description: "Deskripsi singkat produk Korporat 4.",
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

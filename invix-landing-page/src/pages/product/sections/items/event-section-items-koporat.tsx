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

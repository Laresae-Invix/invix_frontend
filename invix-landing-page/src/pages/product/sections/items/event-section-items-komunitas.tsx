import ProductCard from "../../../../components/ProductkCard";

export default function ProductEventSectionItemsKomunitas() {
	const products = [
		{
			id: 1,
			title: "Komunitas 1",
			description: "Deskripsi singkat produk Komunitas 1.",
			// imageUrl
		},
		{
			id: 2,
			title: "Komunitas 2",
			description: "Deskripsi singkat produk Komunitas 2.",
			// imageUrl
		},
		{
			id: 3,
			title: "Komunitas 3",
			description: "Deskripsi singkat produk Komunitas 3.",
			// imageUrl
		},
		{
			id: 5,
			title: "Komunitas 5",
			description: "Deskripsi singkat produk Komunitas 5.",
			// imageUrl
		},
		{
			id: 6,
			title: "Komunitas 6",
			description: "Deskripsi singkat produk Komunitas 6.",
			// imageUrl
		},
	];

	return (
		<div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
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

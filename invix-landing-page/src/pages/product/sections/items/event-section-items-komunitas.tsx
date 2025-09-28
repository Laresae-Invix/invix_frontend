import ProductCard from "../../../../components/ProductkCard";

export default function ProductEventSectionItemsKomunitas() {
	const products = [
		{
			id: 1,
			title: "Komunitas 1",
			description: "Deskripsi singkat produk Komunitas 1.",
		},
		{
			id: 2,
			title: "Komunitas 2",
			description: "Deskripsi singkat produk Komunitas 2.",
		},
		{
			id: 3,
			title: "Komunitas 3",
			description: "Deskripsi singkat produk Komunitas 3.",
		},
		{
			id: 5,
			title: "Komunitas 5",
			description: "Deskripsi singkat produk Komunitas 5.",
		},
		{
			id: 6,
			title: "Komunitas 6",
			description: "Deskripsi singkat produk Komunitas 6.",
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

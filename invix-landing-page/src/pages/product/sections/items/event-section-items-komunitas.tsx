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
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
			{products.map((p) => (
				<ProductCard key={p.id} title={p.title} description={p.description} />
			))}
		</div>
	);
}

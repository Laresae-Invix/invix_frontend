import ProductCard from "../../../../components/ProductkCard";

export default function ProductEventSectionItems() {
	const products = [
		{
			id: 1,
			title: "Event 1",
			description: "Deskripsi singkat produk event 1.",
		},
		{
			id: 2,
			title: "Event 2",
			description: "Deskripsi singkat produk event 2.",
		},
		{
			id: 3,
			title: "Event 3",
			description: "Deskripsi singkat produk event 3.",
		},
		{
			id: 4,
			title: "Event 3",
			description: "Deskripsi singkat produk event 3.",
		},
		{
			id: 5,
			title: "Event 3",
			description: "Deskripsi singkat produk event 3.",
		},
		{
			id: 6,
			title: "Event 3",
			description: "Deskripsi singkat produk event 3.",
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

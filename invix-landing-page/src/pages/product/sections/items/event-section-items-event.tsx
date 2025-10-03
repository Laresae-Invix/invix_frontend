import ProductCard from "../../../../components/ProductkCard";

export default function ProductEventSectionItemsEvent() {
	const products = [
		{
			id: 1,
			title: "Event 1",
			description: "Deskripsi singkat produk Event 1.",
		},
		{
			id: 3,
			title: "Event 3",
			description: "Deskripsi singkat produk Event 3.",
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

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
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
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
		</div>
	);
}

import undangan_dua from "@/assets/undangan_couple_dua.webp";
import undangan_satu from "@/assets/undangan_couple_satu.webp";
import ProductCard from "@/components/ProductkCard";

export default function ProductCoupleSectionItemsWedding() {
	const products = [
		{
			id: 1,
			title: "Couple 1",
			description: "Deskripsi singkat produk couple 1.",
			imageUrl: undangan_satu,
		},
		{
			id: 2,
			title: "Couple 2",
			description: "Deskripsi singkat produk couple 2.",
			imageUrl: undangan_dua,
		},
		{
			id: 3,
			title: "Couple 3",
			description: "Deskripsi singkat produk couple 3.",
			imageUrl: undangan_satu,
		},
	];

	return (
		<div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((p) => (
				<ProductCard
					key={p.id}
					title={p.title}
					description={p.description}
					imageUrl={p.imageUrl}
				/>
			))}
		</div>
	);
}

import ProductCard from "../../components/ProdakCard";

export default function ProductPage() {
	const products = [
		{ id: 1, title: "Product 1", description: "Deskripsi singkat produk 1." },
		{ id: 2, title: "Product 2", description: "Deskripsi singkat produk 2." },
		{ id: 3, title: "Product 3", description: "Deskripsi singkat produk 3." },
	];

	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((p) => (
				<ProductCard key={p.id} title={p.title} description={p.description} />
			))}
		</div>
	);
}

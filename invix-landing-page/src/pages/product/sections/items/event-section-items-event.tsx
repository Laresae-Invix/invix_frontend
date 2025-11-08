import { Link } from "react-router-dom";
import ProductCard from "../../../../components/ProductkCard";

export default function ProductEventSectionItemsEvent() {
	const products = [
		{
			id: 1,
			title: "Event 1",
			description: "Deskripsi singkat produk Event 1.",
			link: "/koleksi-event/Event1",
			// imageUrl: komunitas_satu,
		},
		{
			id: 3,
			title: "Event 3",
			description: "Deskripsi singkat produk Event 3.",
		},
	];

	return (
		<div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((p) => (
				<Link to={p.link ?? "/product"} key={p.id}>
					<ProductCard
						title={p.title}
						description={p.description}
						// imageUrl={p.imageUrl}
					/>
				</Link>
			))}
		</div>
	);
}

import { Link } from "react-router-dom";
import birthday_satu from "@/assets/undangan_birthday_satu.webp";
import ProductCard from "../../../../components/ProductkCard";
export default function ProductEventSectionItemsBirthday() {
	const products = [
		{
			id: 1,
			title: "Birthday 1",
			description: "Deskripsi singkat produk Birthday 1.",
			link: "http://localhost:5174/category_birthday/birthday_one",
			imageUrl: birthday_satu,
		},
		{
			id: 2,
			title: "Birthday ",
			description: "Deskripsi singkat produk Birthday 1.",
			// link: "/koleksi-event/Event1",
			// imageUrl: komunitas_satu,
		},
		{
			id: 3,
			title: "Birthday ",
			description: "Deskripsi singkat produk Birthday 1.",
			// link: "/koleksi-event/Event1",
			// imageUrl: komunitas_satu,
		},
		{
			id: 4,
			title: "Birthday ",
			description: "Deskripsi singkat produk Birthday 1.",
			// link: "/koleksi-event/Event1",
			// imageUrl: komunitas_satu,
		},
		{
			id: 5,
			title: "Birthday ",
			description: "Deskripsi singkat produk Birthday 1.",
			// link: "/koleksi-event/Event1",
			// imageUrl: komunitas_satu,
		},
		{
			id: 6,
			title: "Birthday ",
			description: "Deskripsi singkat produk Birthday 1.",
			// link: "/koleksi-event/Event1",
			// imageUrl: komunitas_satu,
		},
	];

	return (
		<div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((p) => (
				<Link to={p.link ?? "/product"} key={p.id}>
					<ProductCard
						title={p.title}
						description={p.description}
						imageUrl={p.imageUrl}
					/>
				</Link>
			))}
		</div>
	);
}

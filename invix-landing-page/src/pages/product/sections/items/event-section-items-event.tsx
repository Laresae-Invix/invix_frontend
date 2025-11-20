import { Link } from "react-router-dom";
import event_dua from "@/assets/undangan_event_dua.webp";
import event_empat from "@/assets/undangan_event_empat.webp";
import event_lima from "@/assets/undangan_event_five.webp";
import event_satu from "@/assets/undangan_event_satu.webp";
import event_tiga from "@/assets/undangan_event_tiga.webp";
import ProductCard from "../../../../components/ProductkCard";

export default function ProductEventSectionItemsEvent() {
	const products = [
		{
			id: 1,
			title: "Event Wisuda 1",
			description: "Deskripsi singkat produk Event 1.",
			link: "http://localhost:5174/category_wisuda/wisuda_one",
			imageUrl: event_satu,
		},
		{
			id: 2,
			title: "Event Wisuda 2",
			description: "Deskripsi singkat produk Event 2.",
			link: "http://localhost:5174/category_wisuda/wisuda_two",
			imageUrl: event_dua,
		},
		{
			id: 3,
			title: "Event Wisuda 3",
			description: "Deskripsi singkat produk Event 3.",
			link: "http://localhost:5174/category_wisuda/wisuda_three",
			imageUrl: event_tiga,
		},
		{
			id: 4,
			title: "Event Wisuda 4",
			description: "Deskripsi singkat produk Event 3.",
			link: "http://localhost:5174/category_wisuda/wisuda_four",
			imageUrl: event_empat,
		},
		{
			id: 5,
			title: "Event Wisuda 5",
			description: "Deskripsi singkat produk Event 5.",
			link: "http://localhost:5174/category_wisuda/wisuda_five",
			imageUrl: event_lima,
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

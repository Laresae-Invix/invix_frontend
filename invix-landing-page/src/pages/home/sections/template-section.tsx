import { Sparkles } from "lucide-react";
import { useState } from "react";
import undangan_dua from "@/assets/undangan_couple_dua.webp";
import undangan_satu from "@/assets/undangan_couple_satu.webp";
import ProductCard from "@/components/ProductkCard";

const allProducts = [
	{
		id: 1,
		title: "Couple 1",
		description: "Deskripsi singkat produk couple 1.",
		imageUrl: undangan_satu,
		category: "Wedding",
	},
	{
		id: 2,
		title: "Couple 2",
		description: "Deskripsi singkat produk couple 2.",
		imageUrl: undangan_dua,
		category: "Wedding",
	},
	{
		id: 3,
		title: "Couple 3",
		description: "Deskripsi singkat produk couple 3.",
		imageUrl: undangan_satu,
		category: "we",
	},
	{
		id: 4,
		title: "Couple 4",
		description: "Deskripsi singkat produk couple 4.",
		imageUrl: undangan_dua,
		category: "Event",
	},
	{
		id: 5,
		title: "Couple 5",
		description: "Deskripsi singkat produk couple 5.",
		imageUrl: undangan_satu,
		category: "Birthday",
	},
	{
		id: 6,
		title: "Couple 6",
		description: "Deskripsi singkat produk couple 6.",
		imageUrl: undangan_dua,
		category: "Birthday",
	},
];

const CATEGORIES = ["Semua", "Wedding", "Event", "Birthday"] as const;
type Category = (typeof CATEGORIES)[number];

export default function TemplateSection() {
	const [selected, setSelected] = useState<Category>("Semua");

	// Filter produk berdasarkan kategori yang dipilih
	const products =
		selected === "Semua"
			? allProducts
			: allProducts.filter((p) => p.category === selected);

	return (
		<section
			id="templates"
			className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14"
		>
			{/* Header */}

			<div className="text-center">
				<div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-sm border border-gray-200">
					<Sparkles className="h-4 w-4" style={{ color: "#4351BC" }} />
					<span className="text-sm font-medium" style={{ color: "#4351BC" }}>
						Template Invix Nih!
					</span>
				</div>
				<h2 className="mt-3 mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
					Template Unggulan
				</h2>
				<p className="text-slate-600 text-lg  max-w-2xl mx-auto">
					Pilih gaya kamu. Semua responsif dan siap pakai.
				</p>

				{/* Button group (sejajar) */}
				<div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
					{CATEGORIES.map((cat) => {
						const active = selected === cat;
						return (
							<button
								key={cat}
								type="button"
								onClick={() => setSelected(cat)}
								aria-pressed={active}
								className={[
									"inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all",
									"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600",
									active
										? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
										: "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 hover:-translate-y-0.5",
								].join(" ")}
							>
								{cat}
							</button>
						);
					})}
				</div>
			</div>

			{/* Grid Product */}
			<div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 place-items-center">
				{products.map((product) => (
					<div key={product.id} className="w-full max-w-xs">
						<ProductCard
							title={product.title}
							description={product.description}
							imageUrl={product.imageUrl}
						/>
					</div>
				))}
			</div>

			<div className="mt-8 flex justify-center">
				<a
					href="/product"
					className="inline-block px-5 py-3 text-sm font-semibold text-white bg-[#4351BC] rounded-lg hover:bg-[#3b45a1] transition duration-300"
				>
					Lihat Semua Template
				</a>
			</div>

			{/* {products.length === 0 && (
        <p className="mt-8 text-center text-slate-500">Belum ada template di kategori ini.</p>
      )} */}
		</section>
	);
}

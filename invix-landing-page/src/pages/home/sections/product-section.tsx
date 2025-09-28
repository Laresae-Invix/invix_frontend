import { Link } from "react-router-dom";

export default function ProductSection() {
	return (
		<section
			id="product-section"
			className="min-h-[60vh] flex flex-col items-center justify-center bg-white"
		>
			<h2 className="text-3xl font-bold">Our Products</h2>
			<p className="mt-2 text-gray-600 max-w-lg text-center">
				ini sisnya produk ini itu wkwkkwkwkwkw
			</p>
			<Link
				to="/product"
				className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black"
			>
				More
			</Link>
		</section>
	);
}

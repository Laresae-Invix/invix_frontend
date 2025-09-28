import AboutSection from "./sections/about-section";
import ProductSection from "./sections/product-section";

export default function HomePage() {
	return (
		<div>
			<section className="grid place-items-center min-h-[60vh] bg-gradient-to-b from-gray-100 to-white">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
						weelcome to INVIX
					</h1>
					<p className="mt-3 text-gray-600 max-w-xl mx-auto">
						React + TypeScript + Vite + Tailwind v4. ini gacor bet gacor no
						debat
					</p>
				</div>
			</section>
			<AboutSection />
			<ProductSection />
		</div>
	);
}

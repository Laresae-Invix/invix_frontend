import { useState } from "react";
import {
	FaFacebook,
	FaInstagram,
	FaMapMarkerAlt,
	FaTwitter,
} from "react-icons/fa";
export default function HeroSection() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Fungsi untuk toggle mobile menu
	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	return (
		<section className="relative w-full min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-black text-white overflow-hidden">
			{/* Mobile Menu */}
			<div
				className={`absolute top-0 right-0 w-full h-screen bg-black bg-opacity-50 transition-all ${
					isMobileMenuOpen ? "flex" : "hidden"
				} md:hidden flex-col justify-center items-center space-y-4`}
			>
				<a
					href="#contact"
					className="text-white text-2xl px-6 py-2 bg-orange-500 hover:bg-orange-400 rounded-lg"
				>
					Contact Me
				</a>
			</div>

			{/* Main Content (Hero Section) */}
			<div className="container mx-auto px-6 min-h-screen flex items-center relative z-10">
				{/* Left Info */}
				<div className="w-full lg:w-1/3 mb-12 lg:mb-0 flex justify-center">
					<div className="flex flex-col items-center text-center">
						<div className="mb-6">
							<span className="inline-block px-3 py-1 bg-indigo-700 rounded-full text-sm font-semibold tracking-wide">
								UI/UX Designer
							</span>
							<p className="mt-2 text-sm uppercase text-indigo-300">
								Based in USA
							</p>
						</div>

						<div className="mb-6">
							<span className="inline-block px-3 py-1 bg-indigo-700 rounded-full text-sm font-semibold tracking-wide">
								Say hello to
							</span>
							<p className="mt-2 text-sm">
								<a
									href="mailto:doe@gmail.com"
									className="text-indigo-300 hover:text-indigo-100"
								>
									doe@gmail.com
								</a>
							</p>
						</div>

						<div className="flex items-center space-x-6 mt-4 text-indigo-300">
							<a
								href="/"
								aria-label="facebook"
								className="hover:text-indigo-100"
							>
								<FaFacebook size={22} />
							</a>
							<a
								href="/"
								aria-label="twitter"
								className="hover:text-indigo-100"
							>
								<FaTwitter size={22} />
							</a>
							<a
								href="/"
								aria-label="instagram"
								className="hover:text-indigo-100"
							>
								<FaInstagram size={22} />
							</a>
						</div>
					</div>
				</div>

				{/* Center Portrait (foto dengan overlay dan teks di bawah) */}
				<div className="w-full lg:w-1/3 flex justify-center mb-12 lg:mb-0 relative">
					<div className="w-full h-[600px] lg:h-[816px] bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl grid place-items-center relative">
						<img
							src="https://via.placeholder.com/601x816.png?text=Portrait"
							alt="Jonathon Doe"
							className="rounded-xl shadow-2xl object-cover w-full h-full"
						/>
						{/* Overlay - Di depan foto */}
						<div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
						{/* Nama Jonathon Doe memanjang di depan foto */}
						<div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white z-20 w-full">
							<h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold lowercase tracking-tighter bg-gradient-to-r from-pink-500 via-amber-400 to-indigo-400 text-transparent bg-clip-text whitespace-nowrap">
								Jonathon Doe
							</h1>
						</div>
					</div>
				</div>

				{/* Right Stats (sejajar dengan foto) */}
				<div className="w-full lg:w-1/3 lg:pl-12 flex justify-center">
					<div className="space-y-12 w-full">
						<div>
							<h3 className="text-4xl font-extrabold">100%</h3>
							<p className="mt-2 text-sm uppercase tracking-wider text-indigo-300">
								Client Satisfaction
							</p>
							<div className="border-t border-indigo-700/60 mt-6"></div>
						</div>
						<div>
							<h3 className="text-4xl font-extrabold">690+</h3>
							<p className="mt-2 text-sm uppercase tracking-wider text-indigo-300">
								Project Done
							</p>
							<div className="border-t border-indigo-700/60 mt-6"></div>
						</div>
						<div>
							<h3 className="text-4xl font-extrabold">8+</h3>
							<p className="mt-2 text-sm uppercase tracking-wider text-indigo-300">
								Years Experience
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom venue & CTA */}
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center px-6">
				<p className="mt-4 inline-flex items-center justify-center text-lg text-white">
					<FaMapMarkerAlt className="mr-2" />
					<span>123 Market St, San Francisco, CA</span>
				</p>
			</div>
		</section>
	);
}

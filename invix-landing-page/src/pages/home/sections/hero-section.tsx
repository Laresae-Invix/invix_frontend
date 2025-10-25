import { Sparkles } from "lucide-react";
import SplitText from "@/components/SplitText";

const handleAnimationComplete = () => {
	console.log("All letters have animated!");
};

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center mb-12">
			{/* Background dengan Kotak Gradien Ungu yang Lebih Halus */}
			<div className="absolute inset-x-0 bottom-0 z-0 flex justify-center items-end">
				{/* Kotak Kiri ke Tengah (Besar ke Kecil) */}
				<div className="hidden sm:block w-32 h-140 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-200" />
				<div className="hidden sm:block w-32 h-120 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-160" />
				<div className="hidden sm:block w-32 h-100 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-120" />
				<div className="w-32 h-80 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-80" />
				<div className="w-32 h-80 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-60" />

				{/* Kotak Tengah */}
				<div className="w-32 h-40 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-45 sm:w-46 sm:h-40" />

				{/* Kotak Kanan ke Tengah (Kecil ke Besar) */}
				<div className="w-32 h-140 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-60" />
				<div className="w-32  h-120 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-80" />
				<div className="hidden sm:block w-32 h-100 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-120" />
				<div className="hidden sm:block w-32 h-80 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-160" />
				<div className="hidden sm:block w-32 h-80 bg-gradient-to-t from-purple-600 to-transparent blur-lg opacity-35 sm:w-46 sm:h-200" />
			</div>

			{/* Konten */}
			<div className="relative z-10 text-center px-6 sm:px-12">
				<div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-sm border border-gray-200">
					<Sparkles className="h-4 w-4" style={{ color: "#4351BC" }} />
					<span className="text-sm font-medium" style={{ color: "#4351BC" }}>
						Create Beautiful Digital Invitations
					</span>
				</div>
				<div className="max-w-6xl text-center mx-auto">
					{/* Main Heading */}
					<h1 className="text-[clamp(48px,8vw,80px)] font-extrabold text-[#4351BC] leading-tight">
						<SplitText
							text="Buat Undangan Digital Menakjubkan dengan INVIX"
							className="text-[clamp(48px,8vw,80px)] text-[#4351BC]"
							delay={100}
							duration={0.8}
							ease="power3.out"
							splitType="chars"
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 0 }}
							threshold={0.1}
							rootMargin="-100px"
							textAlign="center"
							onLetterAnimationComplete={handleAnimationComplete}
						/>
					</h1>

					{/* Subheading */}
					<p className="mt-6 text-lg md:text-xl text-slate-600 mx-auto max-w-7xl leading-relaxed">
						Desain dan kirim undangan yang indah dan ramah lingkungan dengan
						pelacakan RSVP yang lancar & manajemen tamu.
					</p>
				</div>

				{/* CTA Buttons */}
				<div className="mt-12 flex flex-wrap justify-center gap-6">
					{/* 1) WhatsApp Icon */}
					<a
						href="https://wa.me/6285157609919?text=Halo%20Invix%2C%20saya%20ingin%20konsultasi%20undangan"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-2 rounded-full border-2 border-[#4351BC] bg-white px-5 py-2.5 text-sm font-semibold text-[#4351BC] transition-colors duration-200 hover:bg-[#4351BC] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4351BC]/60"
						aria-label="Chat via WhatsApp"
					>
						{/* WhatsApp Icon */}
						<svg
							viewBox="0 0 24 24"
							className="h-4 w-4 text-[#25D366] mr-1.5 group-hover:text-white"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.39 0 .03 5.36.03 11.98c0 2.11.56 4.07 1.53 5.78L0 24l6.39-1.67a11.96 11.96 0 0 0 5.66 1.45h.01c6.62 0 12-5.36 12-11.98 0-3.2-1.26-6.2-3.53-8.32zM12.09 22.02h-.01a10.06 10.06 0 0 1-5.12-1.39l-.37-.22-3.79 1 .99-3.69-.24-.38a10.02 10.02 0 0 1-1.56-5.38c0-5.55 4.53-10.06 10.11-10.06 2.7 0 5.24 1.05 7.15 2.96a10 10 0 0 1 2.96 7.12c0 5.55-4.53 10.04-10.12 10.04zm5.58-7.54c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.23-.64.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.68-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.9-2.19-.24-.57-.48-.49-.66-.5-.17-.01-.37-.01-.57-.01-.2 0-.53.07-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.48.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.2-.57-.35z" />
						</svg>
						Hubungi Kami
					</a>

					{/* 2) Button Buat Undangan */}
					<a
						href="/buat-undangan"
						className="group inline-flex items-center gap-2 rounded-full border-2 border-[#4351BC] bg-white px-5 py-2.5 text-sm font-semibold text-[#4351BC] transition-colors duration-200 hover:bg-[#4351BC] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4351BC]/60"
					>
						Buat Undangan Sekarang
					</a>
				</div>
			</div>
		</section>
	);
}

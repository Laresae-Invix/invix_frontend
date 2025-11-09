import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/button"; // Pastikan Button sudah diimpor dari komponen Button

export const CTASection = () => {
	return (
		<section
			className="section-padding min-h-[60vh] flex items-center justify-center relative overflow-hidden"
			style={{
				background: "linear-gradient(135deg, #273287 0%, #5b6bd2 100%)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className="cta-container"
					style={{
						position: "relative",
						zIndex: 10,
					}}
				>
					<div className="text-center max-w-4xl mx-auto">
						{/* Icon */}
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
							<Sparkles className="h-8 w-8 text-white" />
						</div>

						{/* Heading */}
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Sudah Siap Untuk Membuat Undangan Yang Sempurna?
						</h2>

						{/* Description */}
						<p className="text-xl text-white/90 mb-8">
							Bergabunglah dengan ribuan pengguna yang puas yang telah mengubah
							acara mereka dengan Invix. Mulailah membuat undangan digital yang
							menakjubkan hari ini - Gratis!
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								size="lg"
								href="/product"
								className="cta-button-white text-lg px-8 py-6 group border-2 border-white text-white hover:bg-[#5b6bd2] hover:border-[#5b6bd2] hover:text-white transition-all"
							>
								Yuk Coba Sekarang
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								href="/product"
								className="cta-button-outline-white text-lg px-8 py-6 border-2 border-white text-white hover:bg-[#5b6bd2] hover:border-[#5b6bd2] hover:text-white transition-all"
							>
								Lihat Template
							</Button>
						</div>

						{/* Trust Indicator */}
						<p className="text-white/80 text-sm mt-6">
							Bikin Undangan Gampang • Acara Jadi Praktis • Tunggu Apalagi Yuk
							Pake Invix!
						</p>
					</div>
				</div>
			</div>

			{/* Background pattern using ::before */}
			<div
				style={{
					content: "''",
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="1.5" fill="white" opacity="0.1"/></svg>')`,
					pointerEvents: "none",
				}}
			></div>
		</section>
	);
};



export default CTASection;

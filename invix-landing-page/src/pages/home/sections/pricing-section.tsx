import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/button"; // Pastikan Button sudah diimpor dari komponen Button

export const PricingSection = () => {
	return (
		<section id="pricing" className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title and Badge */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 mb-6">
						<Sparkles className="h-4 w-4" style={{ color: "#4351BC" }} />
						<span className="text-sm font-medium" style={{ color: "#4351BC" }}>
							Berapa Harga Layanan Invix?
						</span>
					</div>

					<div>
						<h2 className="mt-2 mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
							Pilih Paket yang Tepat untuk Anda
						</h2>
						<p className="text-slate-600 text-lg  max-w-2xl mx-auto">
							Tentukan rencana yang sesuai untuk Anda. Mulai dari gratis,
							tingkatkan seiring berkembangnya kebutuhan.
						</p>
					</div>
				</div>

				{/* Grid Layout */}
				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{mockPricingPlans.map((plan) => (
						<div
							key={plan.id}
							className={`relative p-8 rounded-2xl transition-all transform ${
								plan.popular
									? "border-2 border-[#4351BC] z-10 scale-105 bg-white" // Kartu tengah dengan border lebih besar
									: "bg-white scale-100 " // Kartu lainnya tetap dengan border
							} hover:scale-105 cursor-pointer hover:shadow-xl`} // Efek hover dengan shadow dan scale
						>
							{/* Badge Most Popular */}
							{plan.popular && (
								<div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-[#4351BC] text-white text-xs px-4 py-2 rounded-full">
									<Sparkles className="h-4 w-4 mr-1 inline" />
									Most Popular
								</div>
							)}

							<div className="flex flex-col items-center">
								<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
								<p className="text-gray-600 mb-6 text-center">
									{plan.description}
								</p>

								{/* Price */}
								<div className="flex items-baseline mb-6 justify-center">
									<span className="text-3xl font-bold text-[#273287]">
										{typeof plan.price === "number"
											? `IDR ${new Intl.NumberFormat("id-ID").format(plan.price)}`
											: `IDR ${plan.price}`}
									</span>
									<span className="text-gray-600 ml-2">/{plan.period}</span>
								</div>

								{/* CTA Button */}
								<Button
									className={`w-full mb-6 border-2 border-[#4351BC] text-[#273287] hover:bg-[#273287] hover:text-white`}
									size="lg"
								>
									<a
										href="https://wa.me/6285157609919?text=Halo%20Invix%2C%20saya%20ingin%20konsultasi%20undangan"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center"
									>
									{plan.price === 0 ? "Start Free" : "Get Started"}
									</a>
									
								</Button>

								{/* Features */}
								<div className="space-y-3">
									{plan.features.map((feature) => (
										<div key={feature} className="flex items-start space-x-3">
											<Check className="h-5 w-5 text-[#273287]" />
											<span className="text-sm text-gray-700">{feature}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Note */}
				{/* <div className="text-center mt-18">
					<p className="text-[#4351BC] font-medium text-sm mx-auto">
						"Temukan paket yang tepat di Invix! Mulai gratis atau pilih premium
						untuk fitur lengkap."
					</p>
				</div> */}
			</div>
		</section>
	);
};

export default PricingSection;

// Pricing Plans Mock Data
export const mockPricingPlans = [
	{
		id: 1,
		name: "Gratis",
		price: 0,
		period: "Undangan",
		description: "Mulai tanpa biaya — sempurna untuk mencoba fitur dasar.",
		features: [
			"Template dasar yang mudah digunakan",
			"Pengiriman email otomatis",
			"Pelacakan RSVP sederhana",
			"Dukungan admin standar",
		],
		popular: false,
	},
	{
		id: 2,
		name: "Pro",
		price: 150000,
		period: "Undangan",
		description:
			"Tingkatkan acara Anda dengan fitur premium untuk penyelenggara.",
		features: [
			"Template premium",
			"Pengiriman multi-saluran",
			"Pelacakan RSVP canggih",
			"Domain kustom",
			"Dukungan prioritas",
			"QR code RSVP",
		],
		popular: true,
	},
	{
		id: 3,
		name: "Costum",
		price: "???",
		period: "Undangan",
		description:
			"Solusi lengkap untuk perencana profesional dan tim dengan dukungan khusus.",
		features: ["Hubungi kami untuk undangan khusus Anda"],
		popular: false,
	},
];

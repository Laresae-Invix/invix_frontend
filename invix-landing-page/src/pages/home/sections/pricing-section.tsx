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
						<h2 className="mt-3 mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
							Simple, Transparent Pricing
						</h2>
						<p className="text-slate-600 text-lg  max-w-2xl mx-auto">
							Choose the perfect plan for your needs. Start free, upgrade as you
							grow.
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
									<span className="text-4xl font-bold text-[#273287]">
										${plan.price}
									</span>
									<span className="text-gray-600 ml-2">/{plan.period}</span>
								</div>

								{/* CTA Button */}
								<Button
									className={`w-full mb-6 border-2 border-[#4351BC] text-[#273287] hover:bg-[#273287] hover:text-white`}
									size="lg"
								>
									{plan.price === 0 ? "Start Free" : "Get Started"}
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

				{/* Additional Info */}
				{/* <div className="text-center mt-12">
					<p className="text-gray-600">
						All plans include 14-day free trial. No credit card required.
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
		name: "Free",
		price: 0,
		period: "forever",
		description: "Perfect for getting started",
		features: [
			"5 invitations per month",
			"Basic templates",
			"Email delivery",
			"Basic RSVP tracking",
			"Community support",
		],
		popular: false,
	},
	{
		id: 2,
		name: "Pro",
		price: 19,
		period: "month",
		description: "For frequent event hosts",
		features: [
			"Unlimited invitations",
			"Premium templates",
			"Multi-channel delivery",
			"Advanced RSVP tracking",
			"Custom branding",
			"Priority support",
			"Analytics dashboard",
		],
		popular: true,
	},
	{
		id: 3,
		name: "Business",
		price: 49,
		period: "month",
		description: "For professional event planners",
		features: [
			"Everything in Pro",
			"Team collaboration",
			"White-label solution",
			"API access",
			"Dedicated account manager",
			"Custom integrations",
			"24/7 phone support",
		],
		popular: false,
	},
];

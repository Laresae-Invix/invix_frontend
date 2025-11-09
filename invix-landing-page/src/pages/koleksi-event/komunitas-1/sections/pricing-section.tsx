import { Ticket } from "lucide-react";

const pricingPlans = [
	{
		name: "Early Bird",
		price: 200,
		description:
			"Time to sit down and think about what kind of content should be created, time to stop.",
		progress: 50,
		sold: 350,
		total: 500,
		featured: false,
	},
	{
		name: "Gold",
		price: 399,
		description:
			"Time to sit down and think about what kind of content should be created, time to stop.",
		progress: 50,
		sold: 350,
		total: 500,
		featured: true,
		tag: "Exclusive author",
	},
	{
		name: "Platinum",
		price: 499,
		description:
			"Time to sit down and think about what kind of content should be created, time to stop.",
		progress: 50,
		sold: 350,
		total: 500,
		featured: false,
	},
];

export default function Pricing() {
	return (
		<section
			id="pricing"
			className="py-24 bg-cover bg-center relative"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920)",
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-600/90"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<span className="text-blue-300 text-lg font-semibold mb-2 block">
						Our plans
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-white">
						Get Your Ticket
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{pricingPlans.map((plan) => (
						<div
							key={plan.name}
							className={`relative rounded-2xl overflow-hidden transition-all transform hover:scale-105 ${
								plan.featured
									? "bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-2xl scale-105"
									: "bg-white shadow-xl"
							}`}
						>
							{plan.tag && (
								<div className="absolute top-0 right-0 bg-gray-900 text-white px-6 py-2 rounded-bl-2xl text-sm font-semibold">
									{plan.tag}
								</div>
							)}

							<div className="p-8 text-center">
								<h4
									className={`text-2xl font-bold uppercase mb-6 ${plan.featured ? "text-white" : "text-gray-900"}`}
								>
									{plan.name}
								</h4>

								<div className="mb-8">
									<h2
										className={`text-6xl font-bold ${plan.featured ? "text-white" : "text-blue-600"}`}
									>
										<small className="text-3xl">$</small>
										{plan.price}
									</h2>
								</div>

								<p
									className={`mb-4 leading-relaxed ${plan.featured ? "text-white" : "text-gray-600"}`}
								>
									{plan.description}
								</p>

								<strong
									className={`block mb-4 ${plan.featured ? "text-white" : "text-gray-700"}`}
								>
									All prices exclude 25% VAT
								</strong>

								<div className="mb-2">
									<div
										className={`w-full h-3 rounded-full overflow-hidden ${plan.featured ? "bg-white/30" : "bg-gray-200"}`}
									>
										<div
											className={`h-full rounded-full ${plan.featured ? "bg-white" : "bg-blue-600"}`}
											style={{ width: `${plan.progress}%` }}
										></div>
									</div>
								</div>

								<div
									className={`mb-8 text-sm ${plan.featured ? "text-white" : "text-gray-600"}`}
								>
									{plan.sold}/{plan.total}
								</div>

								<a
									href="/"
									className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition ${
										plan.featured
											? "bg-white text-yellow-500 hover:bg-gray-100"
											: "bg-blue-600 text-white hover:bg-blue-700"
									}`}
								>
									<Ticket size={20} />
									Buy Ticket
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

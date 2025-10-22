import { Calendar, Gift, Heart, Sparkles, Users } from "lucide-react";

export const AboutSection = () => {
	const stats = [
		{
			icon: Heart,
			value: "10,000+",
			label: "Undangan pernikahan",
			color: "#273287",
		},
		{
			icon: Gift,
			value: "50,000+",
			label: "Undangan Ulang Tahun",
			color: "#273287",
		},
		{
			icon: Calendar,
			value: "99.9%",
			label: "Undangan Event",
			color: "#D8E63C",
		},
		{
			icon: Users,
			value: "4.9/5",
			label: "Undangan Multi Event",
			color: "#D8E63C",
		},
	];

	return (
		<section
			id="about"
			className=" min-h-[50vh] py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center bg-gray-50"
		>
			<div className="max-w-7xl mx-auto">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-8">
						<div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
							<Sparkles className="h-4 w-4" style={{ color: "#4351BC" }} />
							<span
								className="text-sm font-medium"
								style={{ color: "#4351BC" }}
							>
								Ada Apa Aja Sih di Invix?
							</span>
						</div>
						<h2 className="mt-4 mb-8 text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
							Masa Depan Undangan Acara Ada di Tangan Anda
						</h2>

						{/* Key Benefits */}
						<div className="space-y-6">
							<div className="flex items-start space-x-3">
								<div className="text-green-500 text-xl">✓</div>
								<div>
									<h4 className="font-semibold mb-1">Pengiriman Instan</h4>
									<p className="text-gray-600 text-sm">
										Kirim undangan ke semua tamu secara bersamaan melalui email
										atau SMS
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<div className="text-[#4351BC] text-xl">✓</div>
								<div>
									<h4 className="font-semibold mb-1">
										Pilihan Ramah Lingkungan
									</h4>
									<p className="text-gray-600 text-sm">
										Hemat pohon dan kurangi jejak karbon dengan undangan tanpa
										kertas
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<div className="text-[#4351BC] text-xl">✓</div>
								<div>
									<h4 className="font-semibold mb-1">
										Pengelolaan RSVP Cerdas
									</h4>
									<p className="text-gray-600 text-sm">
										Lacak tanggapan secara real-time dan kelola daftar tamu
										dengan mudah
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Content - Stats */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
						{stats.map((stat) => {
							const IconComponent = stat.icon;
							return (
								<div
									key={stat.label}
									className="flex flex-col items-center justify-center space-y-4 p-6 "
									style={{
										color: stat.color,
										textAlign: "center",
										animation: "floating 2s ease-in-out infinite",
									}}
								>
									<div className="mb-4">
										<IconComponent
											className="h-12 w-12 mx-auto"
											style={{ color: stat.color }}
										/>
									</div>
									<div className="text-3xl font-semibold mb-2">
										{stat.value}
									</div>
									<div className="text-sm text-gray-700">{stat.label}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

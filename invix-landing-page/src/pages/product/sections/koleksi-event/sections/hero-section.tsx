import { Building, Clock, MapPin } from "lucide-react";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundBlendMode: "overlay",
			}}
		>
			<div className="absolute inset-0 bg-blue-900/70"></div>

			<div className="relative container mx-auto px-4 text-center z-10">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
						Digital World Conference
					</h2>
					<ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-white text-lg mb-8">
						<li className="flex items-center gap-2">
							<MapPin className="text-blue-300" size={24} />
							Jakarta, Indonesia
						</li>
						<li className="flex items-center gap-2">
							<Clock className="text-blue-300" size={24} />5 - 7 June 2020
						</li>
						<li className="flex items-center gap-2">
							<Building className="text-blue-300" size={24} />
							Edition
						</li>
					</ul>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
		</section>
	);
}

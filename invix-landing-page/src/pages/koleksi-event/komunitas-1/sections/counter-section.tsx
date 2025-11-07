import { Calendar, MessageSquare } from "lucide-react";

export default function Counter() {
	return (
		<section
			className="py-24 bg-cover bg-center relative"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920)",
			}}
		>
			<div className="absolute inset-0 bg-blue-900/85"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="text-white">
						<span className="text-blue-300 text-lg font-semibold mb-2 block">
							Why Join Ovent
						</span>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Join us at 110th oVent Expo.
						</h2>
						<h5 className="text-xl mb-8">
							Shift your perspective on digital business
						</h5>

						<ul className="space-y-6">
							<li className="flex gap-4">
								<Calendar className="text-blue-300 flex-shrink-0" size={32} />
								<span className="text-gray-200">
									Study in a newly-refreshed campus located in the heart of
									Berlin, Europe's start-up capital. Berlin is a fantastic place
									to study as there
								</span>
							</li>
							<li className="flex gap-4">
								<MessageSquare
									className="text-blue-300 flex-shrink-0"
									size={32}
								/>
								<span className="text-gray-200">
									Study in a newly-refreshed campus located in the heart of
									Berlin, Europe's start-up capital. Berlin is a fantastic place
									to study as there
								</span>
							</li>
						</ul>
					</div>

					<div className="grid grid-cols-2 gap-6">
						<div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white shadow-2xl transform hover:scale-105 transition">
							<div className="text-5xl font-bold mb-2">20+</div>
							<p className="text-lg">Sponsors</p>
						</div>

						<div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-center text-white shadow-2xl transform hover:scale-105 transition">
							<div className="text-5xl font-bold mb-2">100+</div>
							<p className="text-lg">Cool Speakers</p>
						</div>

						<div className="col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white shadow-2xl transform hover:scale-105 transition">
							<div className="text-5xl font-bold mb-2">5+</div>
							<p className="text-lg">Happy People</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

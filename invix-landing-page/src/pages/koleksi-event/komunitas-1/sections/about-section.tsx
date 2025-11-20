import { Ticket } from "lucide-react";

export default function AboutSection() {
	return (
		<section id="about" className="py-24 bg-white relative">
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="order-2 lg:order-1">
						<div className="space-y-6">
							<div>
								<span className="text-6xl font-bold text-gray-100">Event</span>
								<span className="block text-blue-600 text-lg font-semibold mb-2 mt-4">
									Why Join Event
								</span>
								<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
									Why You Should Join Event
								</h2>
								<h5 className="text-xl text-gray-700 font-medium">
									Shift your perspective on digital business
								</h5>
							</div>

							<div className="space-y-4">
								<p className="text-gray-600 leading-relaxed">
									Study in a newly-refreshed campus located in the heart of
									Berlin, Europe's start-up capital. Berlin is a fantastic place
									to study as there are excellent travel.
								</p>
								<p className="text-gray-600 leading-relaxed">
									The process of planning and coordinating the event is usually
									referred to as event planning and which can include budgeting,
									scheduling, site selection, acquiring necessary permits,
									coordinating transportation and parking, arranging for
									speakers or entertainers.
								</p>
								<a
									href="#pricing"
									className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition font-medium mt-4"
								>
									<Ticket size={20} />
									Buy Ticket
								</a>
							</div>
						</div>
					</div>

					<div className="order-1 lg:order-2">
						<div
							className="relative rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center"
							style={{
								backgroundImage:
									"url(https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800)",
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
								<button
									type="button"
									className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition shadow-lg group"
								>
									<div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

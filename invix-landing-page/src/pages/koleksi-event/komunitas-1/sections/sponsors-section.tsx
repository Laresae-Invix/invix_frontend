import { Ticket } from "lucide-react";

export default function Sponsors() {
	return (
		<section className="py-24 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center mb-16">
					<div className="mb-6 md:mb-0">
						<span className="text-blue-600 text-lg font-semibold mb-2 block">
							Sponsors
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
							Happy Sponsors
						</h2>
					</div>
					<a
						href="#pricing"
						className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition font-medium"
					>
						<Ticket size={20} />
						Buy Ticket
					</a>
				</div>

				<div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 mb-16">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
						<div
							key={num}
							className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex items-center justify-center group"
						>
							<div className="w-full h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 group-hover:bg-blue-50 transition">
								<span className="font-bold text-lg">Logo {num}</span>
							</div>
						</div>
					))}
				</div>

				<div
					className="relative rounded-3xl overflow-hidden shadow-2xl h-96 bg-cover bg-center"
					style={{
						backgroundImage:
							"url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920)",
					}}
				>
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center text-white text-center p-8">
						<button
							type="button"
							className="w-24 h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition shadow-2xl mb-6 group"
						>
							<div className="w-0 h-0 border-t-12 border-t-transparent border-l-[20px] border-l-blue-600 border-b-12 border-b-transparent ml-2"></div>
						</button>
						<h2 className="text-4xl font-bold mb-4">Intro Video</h2>
						<p className="text-xl text-gray-200">
							The issue with any content strategy is time.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

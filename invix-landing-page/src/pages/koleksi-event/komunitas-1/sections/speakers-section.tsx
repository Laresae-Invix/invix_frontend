import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const speakers = [
	{
		name: "James D. Franklin",
		role: "Founder & CEO",
		company: "Fire Epic Ltd.",
		position: "Content Writer",
		image:
			"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
		tag: "",
	},
	{
		name: "Natosha W. Green",
		role: "Founder & CEO",
		company: "Fire Epic Ltd.",
		position: "Content Writer",
		image:
			"https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
		tag: "",
	},
	{
		name: "Brian J. Swanson",
		role: "Founder & CEO",
		company: "Fire Epic Ltd.",
		position: "Content Writer",
		image:
			"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
		tag: "Gold",
	},
	{
		name: "Stephanie D. Gray",
		role: "Founder & CEO",
		company: "Fire Epic Ltd.",
		position: "Content Writer",
		image:
			"https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
		tag: "",
	},
	{
		name: "James D. Franklin",
		role: "Founder & CEO",
		company: "Fire Epic Ltd.",
		position: "Content Writer",
		image:
			"https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
		tag: "",
	},
	{
		name: "Natosha W. Green",
		role: "Founder & CEO",
		company: "Fire Epic Ltd.",
		position: "Content Writer",
		image:
			"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
		tag: "",
	},
	{
		name: "Brian J. Swanson",
		role: "Founder & CEO",
		company: "Fire Epic Ltd.",
		position: "Content Writer",
		image:
			"https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=400",
		tag: "",
	},
	{
		name: "Stephanie D. Gray",
		role: "Founder & CEO",
		company: "Fire Epic Ltd.",
		position: "Content Writer",
		image:
			"https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
		tag: "",
	},
];

export default function Speakers() {
	return (
		<section id="team" className="py-24 bg-gray-50 relative overflow-hidden">
			<div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
			<div className="absolute bottom-20 left-10 w-48 h-48 bg-green-100 rounded-full opacity-20 animate-pulse delay-75"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<span className="text-blue-600 text-lg font-semibold mb-2 block">
						Angels
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
						Event Speakers
					</h2>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{speakers.map((speaker) => (
						<div key={speaker.name} className="relative group">
							<div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
								{speaker.tag && (
									<div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
										{speaker.tag}
									</div>
								)}

								<div className="mb-6">
									<img
										src={speaker.image}
										alt={speaker.name}
										className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100"
									/>
								</div>

								<h5 className="text-xl font-bold text-gray-900 mb-1">
									{speaker.name}
								</h5>
								<p className="text-gray-600 mb-1">{speaker.role}</p>
								<strong className="text-blue-600 text-sm">
									{speaker.company}
								</strong>

								<div className="flex justify-center gap-3 my-6 py-4 border-t border-b border-gray-200">
									<a
										href="/"
										className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition"
									>
										<FaFacebook size={16} />
									</a>
									<a
										href="/"
										className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition"
									>
										<FaTwitter size={16} />
									</a>
									<a
										href="/"
										className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition"
									>
										<FaInstagram size={16} />
									</a>
								</div>

								<span className="text-gray-500 text-sm">
									{speaker.position}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

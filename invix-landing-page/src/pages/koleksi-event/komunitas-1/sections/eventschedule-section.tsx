import { Clock, Coffee, MapPin, Ticket, Video } from "lucide-react";
import { useState } from "react";

const eventData = [
	{
		avatar:
			"https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200",
		name: "Rosalina William",
		role: "UX Design",
		location: "Waterfront Hotel, London",
		time: "9.30 - 10.30 AM",
		title: "UX Design Trend Party 2019",
		description:
			"In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.",
		icon: <Video size={24} />,
	},
	{
		avatar:
			"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
		name: "Kelian M. Bappe",
		role: "Youtubing",
		location: "Waterfront Hotel, London",
		time: "9.30 - 10.30 AM",
		title: "Rokolo DJ Dancing 2019",
		description:
			"In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.",
		icon: <Video size={24} />,
	},
	{
		avatar:
			"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
		name: "Hiliniam Nelson",
		role: "UX Design",
		location: "Waterfront Hotel, London",
		time: "9.30 - 10.30 AM",
		title: "Google Youtube Strategic Party",
		description:
			"In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.",
		icon: <Video size={24} />,
	},
	{
		avatar:
			"https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=200",
		name: "Kimjing J. Jalim",
		role: "UX Design",
		location: "Waterfront Hotel, London",
		time: "9.30 - 10.30 AM",
		title: "Intro Jiknim Jikis 2019",
		description:
			"In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.",
		icon: <Video size={24} />,
	},
];

const days = [
	{ id: 1, name: "First Day", date: "10th January 2019" },
	{ id: 2, name: "Second Day", date: "10th January 2019" },
	{ id: 3, name: "Third Day", date: "10th January 2019" },
	{ id: 4, name: "Fourth Day", date: "10th January 2019" },
];

export default function EventSchedule() {
	const [activeDay, setActiveDay] = useState(1);

	return (
		<section className="py-24 bg-white relative">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<span className="text-blue-600 text-lg font-semibold mb-2 block">
						Event
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
						Event On Trend
					</h2>
				</div>

				<div className="mb-12">
					<div className="grid md:grid-cols-4 gap-4 mb-8">
						{days.map((day) => (
							<button
								key={day.id}
								type="button"
								onClick={() => setActiveDay(day.id)}
								className={`p-6 rounded-xl transition-all ${
									activeDay === day.id
										? "bg-blue-600 text-white shadow-xl"
										: "bg-gray-100 text-gray-800 hover:bg-gray-200"
								}`}
							>
								<Clock
									className={`mx-auto mb-3 ${activeDay === day.id ? "text-white" : "text-blue-600"}`}
									size={32}
								/>
								<div className="font-bold text-lg">{day.name}</div>
								<div
									className={`text-sm mt-1 ${activeDay === day.id ? "text-blue-100" : "text-gray-600"}`}
								>
									{day.date}
								</div>
							</button>
						))}
					</div>

					<div className="space-y-6">
						{eventData.map((event) => (
							<div
								key={event.title}
								className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition"
							>
								<div className="grid lg:grid-cols-12 gap-6">
									<div className="lg:col-span-2">
										<div className="flex flex-col items-center text-center">
											<img
												src={event.avatar}
												alt={event.name}
												className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
											/>
											<h5 className="font-bold text-gray-900">{event.name}</h5>
											<p className="text-gray-600 text-sm">{event.role}</p>
											<ul className="mt-4 space-y-2 text-sm text-gray-600">
												<li className="flex items-center gap-2">
													<Coffee size={16} className="text-blue-600" />
													Coffee & Snacks
												</li>
												<li className="flex items-center gap-2">
													<Video size={16} className="text-blue-600" />
													Video Streaming
												</li>
											</ul>
										</div>
									</div>

									<div className="lg:col-span-10 relative">
										<div className="absolute -right-2 -top-2 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
											{event.icon}
										</div>

										<ul className="flex flex-wrap gap-4 mb-4 text-gray-600">
											<li className="flex items-center gap-2">
												<MapPin size={18} className="text-blue-600" />
												{event.location}
											</li>
											<li className="flex items-center gap-2">
												<Clock size={18} className="text-blue-600" />
												{event.time}
											</li>
										</ul>

										<h2 className="text-2xl font-bold text-gray-900 mb-4">
											{event.title}
										</h2>
										<p className="text-gray-600 leading-relaxed mb-6">
											{event.description}
										</p>

										<div className="flex flex-wrap gap-4">
											<a
												href="/"
												className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
											>
												<Ticket size={18} />
												Buy Ticket
											</a>
											<a
												href="/"
												className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-200 transition"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="text-center mt-12">
					<a
						href="/"
						className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition font-medium"
					>
						More Program +
					</a>
				</div>
			</div>
		</section>
	);
}

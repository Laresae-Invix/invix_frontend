import { MessageCircle, User } from "lucide-react";

const blogPosts = [
	{
		image:
			"https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
		title: "The issue with any content strategy is time.",
		excerpt:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		comments: 35,
		author: "Admin",
	},
	{
		image:
			"https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
		title: "Time to sit down and think about what kind of content",
		excerpt:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		comments: 35,
		author: "Admin",
		featured: true,
	},
	{
		image:
			"https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
		title: "Should be created, time to stop and write, or record.",
		excerpt:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		comments: 35,
		author: "Admin",
	},
	{
		image:
			"https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
		title: "User Experience Psychology And Performance Smashing",
		excerpt:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		comments: 35,
		author: "Admin",
	},
];

export default function Blog() {
	return (
		<section id="blog" className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<span className="text-blue-600 text-lg font-semibold mb-2 block">
						Feeds
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
						News Feeds
					</h2>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{blogPosts.map((post) => (
						<div
							key={post.title}
							className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
								post.featured ? "md:col-span-2 lg:col-span-1" : ""
							}`}
						>
							<div className="relative h-56 overflow-hidden">
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
								/>
							</div>

							<div className="p-6">
								<div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
									<div className="flex items-center gap-1">
										<MessageCircle size={16} className="text-blue-600" />
										{post.comments} Comments
									</div>
									<div className="flex items-center gap-1">
										<User size={16} className="text-blue-600" />
										by {post.author}
									</div>
								</div>

								<h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">
									<a href="/">{post.title}</a>
								</h4>

								<p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

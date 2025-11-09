import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer
			className="bg-cover bg-center relative"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920)",
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-blue-900/95"></div>

			<div className="relative z-10 py-20">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-4xl mx-auto ">
						<div className="mb-8 mt-24">
							<a href="#home" className="text-4xl font-bold text-white">
								Eventes
							</a>
						</div>

						<p className="text-gray-300 text-lg leading-relaxed mb-8">
							The issue with any content strategy is time. Time to sit down and
							think about what kind of content should be created, time to stop
							and write, or record, edit and publish, and time to engage with
							your audience to promote the content you created.
						</p>

						<div className="flex justify-center gap-4 mb-12">
							<a
								href="/"
								className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition"
							>
								<FaFacebook size={20} />
							</a>
							<a
								href="/"
								className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition"
							>
								<FaTwitter size={20} />
							</a>
							<a
								href="/"
								className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition"
							>
								<FaInstagram size={20} />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="relative z-10 border-t border-white/10 py-8">
				<div className="container mx-auto px-4">
				</div>
			</div>
		</footer>
	);
}

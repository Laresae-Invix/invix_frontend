import { Link } from "react-router-dom";

export default function AboutSection() {
	return (
		<section
			id="about-section"
			className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50"
		>
			<h2 className="text-3xl font-bold">About INVIX</h2>
			<p className="mt-2 text-gray-600 max-w-lg text-center">
				ini ceritanya bla bla bla Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Amet deserunt quod mollitia magni modi, voluptates
				nobis qui maxime in assumenda!
			</p>
			<Link
				to="/about"
				className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black"
			>
				More
			</Link>
		</section>
	);
}

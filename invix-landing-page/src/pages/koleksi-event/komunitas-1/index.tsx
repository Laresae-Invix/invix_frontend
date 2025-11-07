import About from "./sections/about-section";
import Blog from "./sections/blog-section";
import Counter from "./sections/counter-section";
import EventSchedule from "./sections/eventschedule-section";
import Footer from "./sections/footer-section";
import Header from "./sections/header-section";
import Hero from "./sections/hero-section";
import Pricing from "./sections/pricing-section";
import Speakers from "./sections/speakers-section";
import Sponsors from "./sections/sponsors-section";

function Komunitas1() {
	return (
		<div className="min-h-screen">
			<Header />
			<main className="">
				<Hero />
				<About />
				<Speakers />
				<Counter />
				<EventSchedule />
				<Pricing />
				<Sponsors />
				<Blog />
			</main>
			<Footer />
		</div>
	);
}

export default Komunitas1;

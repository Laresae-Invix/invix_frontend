import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Reveal from "@/components/reveal";
import { SECTION_IDS, type Target } from "../../constant/section_ids";
import AboutSection from "./sections/about-section";
import CtaSection from "./sections/cta-section";
import FaqSection from "./sections/faq-section";
import FeatureSection from "./sections/features-section";
import FooterSection from "./sections/footer-section";
import HeroSection from "./sections/hero-section";
import PricingSection from "./sections/pricing-section";
// import TemplateSection from "./sections/template-section";

export default function LandingPage() {
	const location = useLocation();

	useEffect(() => {
		const sectionKey = (location.state as { scrollTo?: Target } | null)
			?.scrollTo;
		if (sectionKey) {
			const id = SECTION_IDS[sectionKey];
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		if (!sectionKey && location.hash) {
			const id = location.hash.slice(1);
			document
				.getElementById(id)
				?.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, [location.state, location.hash]);

	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<div className="overflow-hidden">
				<section
					id={SECTION_IDS.hero}
					className="relative min-h-[100dvh] supports-[height:100svh]:min-h-[100svh] mb-16" // Menambahkan margin bawah
				>
					<Reveal direction="up" once>
						<HeroSection />
					</Reveal>
				</section>

				<section
					id={SECTION_IDS.product}
					className="scroll-mt-16 mb-16" // Menambahkan margin bawah lebih banyak
				>
					<Reveal direction="down" once>
						<AboutSection />
					</Reveal>
				</section>

				<section
					id={SECTION_IDS.feature}
					className="scroll-mt-16 mb-16 py-16 container mx-auto" // Margin bawah lebih besar dan padding vertikal
				>
					<Reveal direction="left" once>
						<FeatureSection />
					</Reveal>
				</section>

				{/* di ilanin dlu */}
				{/* <section
					id={SECTION_IDS.template}
					className="scroll-mt-12 mb-16" // Menambahkan margin bawah
				>
					<Reveal direction="right" once>
						<TemplateSection />
					</Reveal>
				</section> */}

				<section
					id={SECTION_IDS.pricing}
					className="scroll-mt-16 mb-16 " // Menambahkan margin bawah dan padding vertikal
				>
					<Reveal direction="up" once>
						<PricingSection />
					</Reveal>
				</section>

				<section
					id={SECTION_IDS.cta}
					className="scroll-mt-32 py-12 mb-16" // Margin bawah untuk jarak antar section
				>
					<Reveal direction="up" once>
						<CtaSection />
					</Reveal>
				</section>

				<section
					id={SECTION_IDS.faq}
					className="scroll-mt-16 mb-16" // Margin bawah agar jarak antar section lebih rapi
				>
					<Reveal direction="up" once>
						<FaqSection />
					</Reveal>
				</section>

				<section
					className="scroll-mt-16" // Margin bawah pada section terakhir
				>
					<Reveal direction="up" once>
						<FooterSection />
					</Reveal>
				</section>
			</div>
		</div>
	);
}

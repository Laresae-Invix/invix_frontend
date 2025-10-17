import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SECTION_IDS, type Target } from "../../constant/section_ids";
import CtaSection from "./sections/cta-section";
import FaqSection from "./sections/faq-section";
import FooterSection from "./sections/footer-section";
import HowSection from "./sections/how-section";
import PricingSection from "./sections/pricing-section";
import TemplateSection from "./sections/template-section";
import TestiSection from "./sections/testi-section";
import HeroSection from "./sections/hero-section";
import FeatureSection from "./sections/features-section";
import Reveal from "@/components/reveal";

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
			<div className="min-h-screen bg-slate-50 text-slate-900">
  <section id={SECTION_IDS.hero} className="relative min-h-[100dvh] supports-[height:100svh]:min-h-[100svh]">
    <Reveal direction="up" once>
      <HeroSection />
    </Reveal>
  </section>

  <section id={SECTION_IDS.product} className="scroll-mt-16 py-6">
    <Reveal direction="up" once rootMargin="0px 0px -15% 0px">
      <HowSection />
    </Reveal>
  </section>

  <section id={SECTION_IDS.feature} className="scroll-mt-16 mb-12 py-6 container mx-auto">
    <Reveal direction="left" once>
      <FeatureSection />
    </Reveal>
  </section>

  <section id={SECTION_IDS.template} className="scroll-mt-12">
    <Reveal direction="right" once>
      <TemplateSection />
    </Reveal>
  </section>

  {/* HowSection kedua, kasih delay kecil biar beda feel */}

  <section id={SECTION_IDS.pricing} className="scroll-mt-16 py-12">
    <Reveal direction="up" once>
      <PricingSection />
    </Reveal>
  </section>

  <section className="scroll-mt-16">
    <Reveal direction="up" once>
      <TestiSection />
    </Reveal>
  </section>

  <section id={SECTION_IDS.faq} className="scroll-mt-16">
    <Reveal direction="up" once>
      <FaqSection />
    </Reveal>
  </section>

  <section id={SECTION_IDS.cta} className="scroll-mt-16">
    <Reveal direction="up" once>
      <CtaSection />
    </Reveal>
  </section>

  <section className="scroll-mt-16">
    <Reveal direction="up" once>
      <FooterSection />
    </Reveal>
  </section>
</div>

		</div>
	);
	
}



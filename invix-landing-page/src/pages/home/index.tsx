import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CircularGallery from "@/components/CircularGallery";
import {
	
	CameraMiniIcon,
	ClockIcon,
	GiftIcon,
	MapPinIcon,
	QrIcon,
	ShieldIcon,
	SparkIcon,
	UsersMiniIcon,
} from "../../components/icon";
import TextType from "../../components/TextType";
import { SECTION_IDS, type Target } from "../../constant/section_ids";
import CtaSection from "./sections/cta-section";
import FaqSection from "./sections/faq-section";
import FeatureSection from "./sections/features-section";
import FooterSection from "./sections/footer-section";
import HowSection from "./sections/how-section";
import PricingSection from "./sections/pricing-section";
import TemplateSection from "./sections/template-section";
import TestiSection from "./sections/testi-section";

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
			<section
				className={[
					"relative min-h-[85svh] flex items-center justify-center overflow-hidden mb-12",
					// background gradien lembut
					"bg-[radial-gradient(ellipse_at_top_left,theme(colors.yellow.200)/.35,transparent_55%),radial-gradient(ellipse_at_bottom_right,rgb(67_81_188_/_0.28),transparent_55%)]",
				].join(" ")}
			>
				{/* Keyframes */}
				<style>{`
					@keyframes float { 0%{transform:translateY(0)} 50%{transform:translateY(-10px)} 100%{transform:translateY(0)} }
					@keyframes slowSpin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
					@keyframes fadeUp { from{opacity:0; transform:translateY(8px)} to{opacity:1; transform:translateY(0)} }
				`}</style>
				
				
				{/* Soft blobs */}
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div
						className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-300/35 blur-3xl"
						style={{ animation: "float 8s ease-in-out infinite" }}
					/>
					<div
						className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#4351BC]/25 blur-3xl"
						style={{ animation: "slowSpin 60s linear infinite" }}
					/>
				</div>
				
				{/* Konten pusat */}
				<div className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8 text-center mt-8">
					 <div className="flex flex-col items-center">
					<h1 className="inline-block mx-auto md:whitespace-nowrap text-[clamp(28px,6vw,64px)] font-extrabold tracking-tight leading-tight">
						<TextType
							text={["Undangan Digital Cerdas", " & ", "Ramah Lingkungan"]}
							typingSpeed={80}
							pauseDuration={1500}
							showCursor={true}
							cursorCharacter="_"
							cursorBlinkDuration={0.5}
							textColors={["#4351BC", "#D8E63C", "#4351BC", "#D8E63C"]}
							className="align-baseline"
						/>
					</h1>
					<p className="mt-4 text-slate-600 text-lg mx-auto max-w">
						Pilih template, atur detail,{" "}
						<span className="font-semibold text-[#4351BC]">tinggal klik</span> —
						lengkap dengan RSVP otomatis & desain menarik.
					</p>
					</div>
					{/* Chips */}
					<ul className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-[#4351BC]">
  <li className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-5 py-2 text-sm font-semibold ring-2 ring-[#4C7A99] mb-6 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-indigo-500 animate-fadeInMove">
    <QrIcon/> QR Share
  </li>
  <li className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-5 py-2 text-sm font-semibold ring-2 ring-[#4C7A99] mb-6 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-indigo-500 animate-fadeInMove">
    <UsersMiniIcon/> RSVP Live
  </li>
  <li className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-5 py-2 text-sm font-semibold ring-2 ring-[#4C7A99] mb-6 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-indigo-500 animate-fadeInMove">
    <CameraMiniIcon/> Galeri
  </li>
  <li className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-5 py-2 text-sm font-semibold ring-2 ring-[#4C7A99] mb-6 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-indigo-500 animate-fadeInMove">
    <MapPinIcon/> Maps
  </li>
  <li className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-5 py-2 text-sm font-semibold ring-2 ring-[#4C7A99] mb-6 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-indigo-500 animate-fadeInMove">
    <ClockIcon/> Countdown
  </li>
  <li className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-5 py-2 text-sm font-semibold ring-2 ring-[#4C7A99] mb-6 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-indigo-500 animate-fadeInMove">
    <GiftIcon/> Gift
  </li>
</ul>

					
					{/* Preview mock (tetap center) */}
					<div style={{ height: "600px", position: "relative" }}>
						<CircularGallery
							bend={3}
							textColor="#ffffff"
							borderRadius={0.05}
							scrollEase={0.02}
						/>
					</div>
					<div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-500">
						<ShieldIcon /> Keamanan link & RSVP terjaga • <SparkIcon /> Template
						baru tiap minggu
					</div>
				
				</div>
			</section>

			<section id={SECTION_IDS.about} className="scroll-mt-16 mb-12 py-6">
				<FeatureSection />
			</section>

			<section id={SECTION_IDS.product} className="scroll-mt-12">
				<TemplateSection />
			</section>
			
			<section id={SECTION_IDS.product} className="scroll-mt-16 py-6">
				<HowSection />
			</section>

			<section id={SECTION_IDS.pricing} className="scroll-mt-16 py-12">
				<PricingSection />
			</section>

			{/* ===== TESTIMONIALS ===== */}
			<section className="scroll-mt-16">
				<TestiSection />
			</section>

			{/* ===== FAQ ===== */}
			<section id={SECTION_IDS.faq} className="scroll-mt-16">
				<FaqSection />
			</section>

			{/* ===== CTA ===== */}
			<section id={SECTION_IDS.cta} className="scroll-mt-16">
				<CtaSection />
			</section>

			{/* ===== FOOTER ===== */}
			<section className="scroll-mt-16">
				<FooterSection />
			</section>
		</div>
	);
	
}



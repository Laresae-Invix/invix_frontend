import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
	ArrowIcon,
	CameraMiniIcon,
	ClockIcon,
	GiftIcon,
	MapPinIcon,
	QrIcon,
	ShieldIcon,
	SparkIcon,
	Stat,
	UsersMiniIcon,
} from "../../components/icon";
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
					"relative min-h-[calc(100svh-64px)] flex items-center overflow-hidden",
					"bg-[radial-gradient(ellipse_at_top_left,theme(colors.yellow.200)/.35,transparent_55%),radial-gradient(ellipse_at_bottom_right,rgb(67_81_188_/_0.28),transparent_55%)]",
				].join(" ")}
			>
				<style>{`
          @keyframes float { 0%{transform:translateY(0)} 50%{transform:translateY(-10px)} 100%{transform:translateY(0)} }
          @keyframes slowSpin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
          @keyframes fadeUp { from{opacity:0; transform:translateY(8px)} to{opacity:1; transform:translateY(0)} }
        `}</style>
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

				<div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-10 place-items-center">
						<div className="text-left animate-[fadeUp_700ms_ease-out_forwards] opacity-0">
							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
								Undangan <span className="text-[#4351BC]">Digital Cerdas </span>
								<span className="text-[#D8E63C]"> & </span>
								<span className="text-[#4351BC]">Ramah Lingkungan </span>
							</h1>

							<p className="mt-4 text-slate-600 text-lg mx-auto max-w-[58ch]">
								Pilih template, atur detail,{" "}
								<span className="font-semibold text-[#4351BC]">
									tinggal klik
								</span>{" "}
								— lengkap dengan RSVP otomatis & desain menarik.
							</p>

							<div className="mt-6 flex flex-wrap justify-center items-center gap-3">
								<a
									href="#cta"
									className="inline-flex items-center gap-2 rounded-2xl bg-[#4351BC] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#4351BC]/90 transition"
								>
									Buat Undangan Sekarang <ArrowIcon />
								</a>
								<a
									href="#templates"
									className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50 transition"
								>
									Lihat Template
								</a>
							</div>

							<ul className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-[#4351BC]">
								<li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
									<QrIcon /> QR Share
								</li>
								<li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
									<UsersMiniIcon /> RSVP Live
								</li>
								<li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
									<CameraMiniIcon /> Galeri
								</li>
								<li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
									<MapPinIcon /> Maps
								</li>
								<li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
									<ClockIcon /> Countdown
								</li>
								<li className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
									<GiftIcon /> Gift
								</li>
							</ul>

							<div className="mt-6 grid grid-cols-3 gap-4 max-w-md mx-auto text-center text-[#4351BC]">
								<Stat big="1K+" small="Template dipakai" />
								<Stat big="64%" small="RSVP rate rerata" />
								<Stat big="<2 mnt" small="Waktu publish" />
							</div>

							<div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-500">
								<ShieldIcon /> Keamanan link & RSVP terjaga • <SparkIcon />{" "}
								Template baru tiap minggu
							</div>
						</div>

						<div className="w-full max-w-lg animate-[fadeUp_900ms_ease-out_forwards] opacity-0">
							<div className="rounded-2xl border border-slate-200 bg-white/80 shadow-lg p-3 mx-auto">
								<div className="rounded-xl bg-gradient-to-br from-[#4351BC] via-[#4351BC] to-yellow-300 p-1">
									<div className="rounded-xl bg-white p-5">
										<div
											className="h-56 rounded-xl bg-slate-100 flex items-center justify-center"
											style={{ animation: "float 7s ease-in-out infinite" }}
										>
											<span className="text-slate-400 text-sm">
												Preview Template “Aurora”
											</span>
										</div>
										<div className="mt-4 grid grid-cols-3 gap-3">
											<div className="h-16 rounded-xl bg-slate-100" />
											<div className="h-16 rounded-xl bg-slate-100" />
											<div className="h-16 rounded-xl bg-slate-100" />
										</div>
										<div className="mt-4 flex items-center justify-center gap-2">
											<button
												type="button"
												className="rounded-xl bg-[#4351BC] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4351BC]/90 transition"
											>
												Gunakan
											</button>
											<button
												type="button"
												className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50 transition"
											>
												Pratinjau
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<a
						href="#features"
						className="mt-10 mb-4 block w-fit mx-auto text-xs font-medium text-slate-500 hover:text-slate-700 transition"
					>
						<span className="inline-flex items-center gap-2 mt-12">
							Gulir untuk melihat fitur
							<svg
								className="h-4 w-4 animate-bounce"
								viewBox="0 0 24 24"
								role="img"
								aria-label="Gulir ke bawah"
							>
								<title>Gulir ke bawah</title>
								<path fill="currentColor" d="M12 16l-6-6h12z" />
							</svg>
						</span>
					</a>
				</div>
			</section>

			<section id={SECTION_IDS.about} className="scroll-mt-16">
				<FeatureSection />
			</section>

			<section id={SECTION_IDS.product} className="scroll-mt-16">
				<TemplateSection />
				<HowSection />
			</section>

			<section id={SECTION_IDS.pricing} className="scroll-mt-16">
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

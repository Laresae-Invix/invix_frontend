// src/App.tsx
import type React from "react";
import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

type Service = {
	title: string;
	description: string;
	icon: string;
};

type Skill = {
	name: string;
	level: string; // persentase dalam string, misal "85%"
};

type Project = {
	title: string;
	description: string;
	tag: string;
};

type Testimonial = {
	name: string;
	role: string;
	message: string;
};

const services: Service[] = [
	{
		title: "Web Development",
		description:
			"Membangun website modern, responsif, dan cepat menggunakan stack JavaScript/TypeScript.",
		icon: "💻",
	},
	{
		title: "UI/UX Design",
		description:
			"Merancang antarmuka yang rapi, konsisten, dan fokus pada kenyamanan pengguna.",
		icon: "🎨",
	},
	{
		title: "Consulting",
		description:
			"Membantu menganalisis kebutuhan digital dan memberi rekomendasi solusi teknis.",
		icon: "🧠",
	},
];

const skills: Skill[] = [
	{ name: "React & TypeScript", level: "90%" },
	{ name: "Tailwind CSS", level: "85%" },
	{ name: "UI/UX & Design System", level: "80%" },
	{ name: "REST API & Integrasi", level: "75%" },
];

const projects: Project[] = [
	{
		title: "Dashboard Analytics",
		description:
			"Dashboard interaktif untuk memantau metrik bisnis dengan visualisasi data real-time.",
		tag: "Web App",
	},
	{
		title: "Landing Page Campaign",
		description:
			"Landing page high-conversion untuk kampanye produk digital dengan A/B testing.",
		tag: "Marketing",
	},
	{
		title: "E-Learning Platform",
		description:
			"Platform pembelajaran online dengan sistem modul, kuis, dan progress tracking.",
		tag: "Education",
	},
];

const testimonials: Testimonial[] = [
	{
		name: "Ahmad Setiawan",
		role: "Product Manager",
		message:
			"Sangat komunikatif dan cepat menangkap kebutuhan bisnis. Hasil akhirnya rapi dan mudah digunakan.",
	},
	{
		name: "Dewi Lestari",
		role: "Founder Startup",
		message:
			"Website kampanye kami naik konversinya setelah redesign. Prosesnya profesional dari awal sampai akhir.",
	},
];

const navItems = [
	{ id: "home", label: "Beranda" },
	{ id: "about", label: "Tentang" },
	{ id: "services", label: "Layanan" },
	{ id: "skills", label: "Skill" },
	{ id: "portfolio", label: "Portofolio" },
	{ id: "testimonials", label: "Testimoni" },
	{ id: "contact", label: "Kontak" },
];

const EventThree: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleNavClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		setIsMenuOpen(false);
	};

	const handleSubmitContact: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		alert("Form dikirim (demo saja, belum terhubung ke backend).");
	};

	return (
		<div className="min-h-screen bg-slate-950 text-slate-50">
			{/* Header / Navbar */}
			<header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
				<div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
					<button
						type="button"
						className="cursor-pointer text-lg font-semibold tracking-tight bg-transparent border-0 p-0 text-left"
						onClick={() => handleNavClick("home")}
					>
						EP Portal
					</button>

					{/* Desktop nav */}
					<div className="flex items-center gap-3">
						<button
							type="button"
							className="hidden rounded-full border border-slate-700 px-4 py-2 text-xs font-medium hover:border-slate-500 md:inline-flex"
						>
							Add to Calendar
						</button>
						<button
							type="button"
							className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-lg hover:bg-indigo-400"
						>
							Contact Me
						</button>
					</div>
				</div>

				{/* Mobile nav menu */}
			</header>

			{/* Main Content */}
			<main className="mx-auto max-w-5xl space-y-32 px-4 pb-24 pt-16">
				{/* Hero */}
				<section
					id="home"
					className="grid items-center gap-10 md:grid-cols-[1.6fr,1fr]"
				>
					<div className="space-y-6">
						<p className="text-xl font-medium uppercase tracking-[0.25em] text-indigo-400 text-center">
							Undangan Wisuda
						</p>
						<h1 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-4xl text-center justify-center">
							Lorem Ipsum dolor{" "}
							<span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
								Nama Lengkap Kamu
							</span>
							.
						</h1>

						<div className="flex justify-center md:justify-center">
							<div className="relative h-82 w-62 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-[2px] shadow-[0_0_40px_rgba(79,70,229,0.4)] sm:h-104 sm:w-72">
								<div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-slate-950">
									<p className="text-sm font-medium text-slate-200">
										Foto Kamu
									</p>
									<p className="text-xs text-slate-400 justify-center mt-8">
										Jurusan & Angkatan
									</p>
								</div>
								<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-slate-700/60" />
							</div>
						</div>

						<p className="max-w-auto text-sm text-slate-300 sm:text-base text-center justify-center mt-4 mb-8">
							Lorem ipsum dolor alamet
						</p>

						<div className="flex flex-wrap items-center gap-4 justify-center mt-10">
							<button
								type="button"
								onClick={() => handleNavClick("portfolio")}
								className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-400"
							>
								Lihat Portofolio
							</button>
							<button
								type="button"
								onClick={() => handleNavClick("contact")}
								className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-indigo-400 hover:text-indigo-300"
							>
								Kontak Saya
							</button>
						</div>

						<div className="flex flex-wrap gap-18 pt-3 text-xl text-slate-300 mt-8 justify-center">
							<div>
								<FaMapLocationDot className="text-indigo-400 mb-2 mt-2" />
								<p>Nama Tempat</p>
							</div>
							<div>
								<MdOutlineDateRange className="text-indigo-400 mb-2 mt-2" />
								<p>Tanggal </p>
							</div>

							<div>
								<IoTimeOutline className="text-indigo-400 mb-2 mt-2" />
								<p>Waktu</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
				© INVIX. All Right Reserved.
			</footer>
		</div>
	);
};

export default EventThree;

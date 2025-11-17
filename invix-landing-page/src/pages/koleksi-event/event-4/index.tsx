import { motion } from "framer-motion";
import type React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const EventFour: React.FC = () => {
	return (
		// ROOT: flex-col supaya footer bisa "nempel" di bawah
		<div className="min-h-screen bg-slate-950 font-sans text-slate-50 flex flex-col">
			{/* NAVBAR FIXED */}
			<header className="fixed inset-x-0 top-0 z-40 border-b border-emerald-900 bg-slate-950/80 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-emerald-400 via-teal-400 to-lime-300" />
						<span className="text-lg font-semibold tracking-tight">Invix</span>
					</div>

					<div className="flex items-center gap-3">
						<button
							type="button"
							className="hidden rounded-full border border-slate-700 px-4 py-2 text-xs font-medium hover:border-emerald-400 md:inline-flex"
						>
							Add to Calendar
						</button>
						<button
							type="button"
							className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-lg hover:bg-emerald-400"
						>
							Contact Me
						</button>
					</div>
				</div>
			</header>

			{/* HEADER / HERO UNDANGAN WISUDA */}
			<motion.header
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				// flex-1 + flex items-center => konten di tengah vertikal
				className="relative mt-16 flex-1 overflow-hidden border-b border-emerald-900 bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950 flex items-center"
			>
				<div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-4 py-10 md:py-12 lg:flex-row lg:py-16">
					{/* KONTEN KIRI – TEKS UNDANGAN */}
					<div className="w-full lg:w-1/2">
						<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
							Undangan Wisuda
						</p>
						<h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
							Perayaan Wisuda{" "}
							<span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
								Maria Ilvor
							</span>
						</h1>
						<p className="mt-4 text-sm text-slate-200 sm:text-base">
							Dengan penuh rasa syukur, kami mengundang Anda untuk hadir dalam
							acara wisuda atas kelulusan{" "}
							<span className="font-semibold text-slate-50">Maria Ilvor</span>.
						</p>

						{/* INFO TANGGAL & LOKASI */}
						<div className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
							<div className="rounded-2xl border border-emerald-800 bg-slate-900/80 p-4">
								<p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
									Tanggal & Waktu
								</p>
								<p className="mt-1 text-sm font-semibold text-slate-50">
									Sabtu, 20 Juli 2025
								</p>
								<p className="text-xs text-slate-400">
									Pukul 09.00 WIB – selesai
								</p>
							</div>
							<div className="rounded-2xl border border-emerald-800 bg-slate-900/80 p-4">
								<p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
									Tempat
								</p>
								<p className="mt-1 text-sm font-semibold text-slate-50">
									Aula Utama Universitas Contoh
								</p>
								<p className="text-xs text-slate-400">
									Jl. Pendidikan No. 123, Jakarta
								</p>
							</div>
						</div>

						{/* CTA + SOSMED (IKON DI BAWAH TOMBOL) */}
						<div className="mt-8 space-y-4">
							{/* Tombol utama */}
							<div className="flex flex-wrap gap-3">
								<button
									type="button"
									className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400"
								>
									Buka Undangan
								</button>
								<button
									type="button"
									className="rounded-full border border-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
								>
									Save the Date
								</button>
							</div>

							{/* Kontak IG & WA di bawah tombol */}
							<div className="flex items-center gap-3 text-sm text-slate-300 mt-8">
								<a
									href="https://instagram.com/username"
									target="_blank"
									rel="noreferrer"
									className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-xl text-pink-400 transition hover:border-pink-400 hover:bg-slate-900"
									aria-label="Instagram"
								>
									<FaInstagram />
								</a>
								<a
									href="https://wa.me/6281234567890"
									target="_blank"
									rel="noreferrer"
									className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-xl text-green-400 transition hover:border-green-400 hover:bg-slate-900"
									aria-label="WhatsApp"
								>
									<FaWhatsapp />
								</a>
							</div>
						</div>
					</div>

					{/* KANAN – KARTU FOTO DENGAN ANIMASI (DIBESARKAN) */}
					<div className="relative flex w-full items-center justify-center lg:w-1/2">
						{/* Kartu foto utama */}
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.7, delay: 0.1 }}
							className="relative h-80 w-80 overflow-hidden rounded-3xl border border-emerald-700 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-[3px] shadow-[0_0_50px_rgba(16,185,129,0.6)] sm:h-96 sm:w-80"
						>
							<div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-slate-950">
								<div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-emerald-400/80 bg-slate-800">
									{/* Ganti src dengan foto asli */}
									<img
										src="/foto-wisuda.jpg"
										alt="Foto Wisuda Maria Ilvor"
										className="h-full w-full object-cover"
									/>
								</div>
								<p className="text-sm font-semibold text-slate-50">
									Maria Ilvor, S.Kom.
								</p>
								<p className="mt-1 text-xs text-slate-400">
									Fakultas Ilmu Komputer · 2025
								</p>
							</div>
						</motion.div>

						{/* Badge kecil animasi kiri atas */}
						<motion.div
							initial={{ opacity: 0, y: -10, x: -10 }}
							animate={{ opacity: 1, y: [0, -8, 0], x: [0, -4, 0] }}
							transition={{
								duration: 3,
								delay: 0.4,
								repeat: Infinity,
								repeatType: "mirror",
							}}
							className="pointer-events-none absolute -left-2 top-2 hidden rounded-2xl border border-emerald-500/60 bg-slate-900/90 px-3 py-2 text-xs text-emerald-100 shadow-lg sm:block"
						>
							<p className="font-semibold">Kelulusan 2025</p>
							<p className="text-[11px] text-emerald-300">Summa Cum Laude</p>
						</motion.div>

						{/* Badge kecil animasi kanan bawah */}
						<motion.div
							initial={{ opacity: 0, y: 10, x: 10 }}
							animate={{ opacity: 1, y: [0, 8, 0], x: [0, 4, 0] }}
							transition={{
								duration: 3,
								delay: 0.8,
								repeat: Infinity,
								repeatType: "mirror",
							}}
							className="pointer-events-none absolute -right-1 bottom-0 rounded-2xl border border-lime-400/50 bg-slate-900/90 px-3 py-2 text-[11px] text-lime-100 shadow-lg"
						>
							<p className="font-semibold">RSVP</p>
							<p className="text-[10px] text-lime-300">
								Konfirmasi kehadiran via WA
							</p>
						</motion.div>
					</div>
				</div>

				{/* Dekorasi background lingkaran blur (warna baru) */}
				<div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-emerald-500/25 blur-3xl" />
				<div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-lime-400/15 blur-3xl" />
			</motion.header>

			{/* FOOTER */}
			<footer className="border-t border-emerald-900 py-4 text-center text-xs text-slate-500">
				© {new Date().getFullYear()} Maria Ilvor. All rights reserved.
			</footer>
		</div>
	);
};

export default EventFour;

import CircularGallery from "@/components/CircularGallery";

import {
	CameraMiniIcon,
	ClockIcon,
	GiftIcon,
	MapPinIcon,
	QrIcon,
	UsersMiniIcon,
} from "@/components/icon";
import TextType from "@/components/TextType";

export default function HeroSection() {
	return (
		<section
			className={[
				"relative min-h-[85svh] flex items-center justify-center overflow-hidden mb-12",
				// background gradien lembut
				"bg-[radial-gradient(ellipse_at_top_left,theme(colors.yellow.200)/.35,transparent_55%),radial-gradient(ellipse_at_bottom_right,rgb(67_81_188_/_0.28),transparent_55%)]",
			].join(" ")}
		>
			{/* Keyframes */}
			<style>{`
  @keyframes chipFloat { 
    0% { transform: translateY(0) } 
    50% { transform: translateY(-6px) } 
    100% { transform: translateY(0) } 
  }
  @keyframes chipDrift { 
    0% { transform: translateX(0) } 
    50% { transform: translateX(6px) } 
    100% { transform: translateX(0) } 
  }
`}</style>

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
				<ul className="flex flex-wrap justify-center gap-3 text-[11px] sm:text-xs text-[#4351BC] mt-8">
					{/* 1 */}
					<li
						className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-3 py-1.5 font-semibold ring-1 ring-[#4C7A99]/80 shadow-sm
               transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80"
						style={{
							animation:
								"chipFloat 6s ease-in-out infinite, chipDrift 7s ease-in-out infinite",
							animationDelay: "0s",
						}}
					>
						<QrIcon /> <span>QR Share</span>
					</li>

					{/* 2 */}
					<li
						className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-3 py-1.5 font-semibold ring-1 ring-[#4C7A99]/80 shadow-sm
               transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80"
						style={{
							animation:
								"chipFloat 6.5s ease-in-out infinite, chipDrift 7.5s ease-in-out infinite",
							animationDelay: "0.15s",
						}}
					>
						<UsersMiniIcon /> <span>RSVP Live</span>
					</li>

					{/* 3 */}
					<li
						className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-3 py-1.5 font-semibold ring-1 ring-[#4C7A99]/80 shadow-sm
               transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80"
						style={{
							animation:
								"chipFloat 7s ease-in-out infinite, chipDrift 8s ease-in-out infinite",
							animationDelay: "0.3s",
						}}
					>
						<CameraMiniIcon /> <span>Galeri</span>
					</li>

					{/* 4 */}
					<li
						className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-3 py-1.5 font-semibold ring-1 ring-[#4C7A99]/80 shadow-sm
               transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80"
						style={{
							animation:
								"chipFloat 7.5s ease-in-out infinite, chipDrift 8.5s ease-in-out infinite",
							animationDelay: "0.45s",
						}}
					>
						<MapPinIcon /> <span>Maps</span>
					</li>

					{/* 5 */}
					<li
						className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-3 py-1.5 font-semibold ring-1 ring-[#4C7A99]/80 shadow-sm
               transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80"
						style={{
							animation:
								"chipFloat 6.25s ease-in-out infinite, chipDrift 7.25s ease-in-out infinite",
							animationDelay: "0.6s",
						}}
					>
						<ClockIcon /> <span>Countdown</span>
					</li>

					{/* 6 */}
					<li
						className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99] text-white px-3 py-1.5 font-semibold ring-1 ring-[#4C7A99]/80 shadow-sm
               transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80"
						style={{
							animation:
								"chipFloat 6.75s ease-in-out infinite, chipDrift 7.75s ease-in-out infinite",
							animationDelay: "0.75s",
						}}
					>
						<GiftIcon /> <span>Gift</span>
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
				{/* === CTA Buttons: WhatsApp & Buat Undangan === */}
				<div className="mt-6 flex flex-wrap justify-center gap-6">
					{/* 1) WhatsApp Ikon */}
					<a
						href="https://wa.me/6281234567890?text=Halo%20Invix%2C%20saya%20ingin%20konsultasi%20undangan"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-2 rounded-full border-2 border-[#4351BC] 
               bg-white px-5 py-2.5 text-sm font-semibold text-[#4351BC]
               transition-colors duration-200
               hover:bg-[#4351BC] hover:text-white
               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4351BC]/60"
						aria-label="Chat via WhatsApp"
					>
						{/* Ikon WhatsApp hijau */}
						<svg
							viewBox="0 0 24 24"
							className="h-4 w-4 text-[#25D366] mr-1.5 group-hover:text-white" /* hijau + jarak kecil */
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.39 0 .03 5.36.03 11.98c0 2.11.56 4.07 1.53 5.78L0 24l6.39-1.67a11.96 11.96 0 0 0 5.66 1.45h.01c6.62 0 12-5.36 12-11.98 0-3.2-1.26-6.2-3.53-8.32zM12.09 22.02h-.01a10.06 10.06 0 0 1-5.12-1.39l-.37-.22-3.79 1 .99-3.69-.24-.38a10.02 10.02 0 0 1-1.56-5.38c0-5.55 4.53-10.06 10.11-10.06 2.7 0 5.24 1.05 7.15 2.96a10 10 0 0 1 2.96 7.12c0 5.55-4.53 10.04-10.12 10.04zm5.58-7.54c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.23-.64.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.68-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.9-2.19-.24-.57-.48-.49-.66-.5-.17-.01-.37-.01-.57-.01-.2 0-.53.07-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.48.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.2-.57-.35z" />
						</svg>
						Hubungi Kami
					</a>

					{/* 2) Button Buat Undangan*/}
					<a
						href="/buat-undangan"
						className="group inline-flex items-center gap-2 rounded-full border-2 border-[#4351BC]
               bg-white px-5 py-2.5 text-sm font-semibold text-[#4351BC]
               transition-colors duration-200
               hover:bg-[#4351BC] hover:text-white
               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4351BC]/60"
					>
						Buat Undangan Sekarang
					</a>
				</div>
			</div>
		</section>
	);
}

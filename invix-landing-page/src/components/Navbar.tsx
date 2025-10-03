import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SECTION_IDS, type Target } from "../constant/section_ids";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Navbar() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { direction, scrolled } = useScrollDirection(8);
	const [open, setOpen] = useState(false);

	const hidden = direction === "down" && scrolled;
	const isHome = pathname === "/";

	function smoothScrollById(id: string) {
		const el = document.getElementById(id);
		if (!el) return;
		el.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	function pindahPage(target: Target) {
		const id = SECTION_IDS[target];

		if (isHome) {
			smoothScrollById(id);
		} else {
			navigate("/", { state: { scrollTo: target } });
		}
	}

	return (
		<header
			className={[
				"sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 transition-all duration-300",
				hidden
					? "-translate-y-full opacity-0 pointer-events-none"
					: "translate-y-0 opacity-100",
				scrolled ? "shadow-sm" : "",
			].join(" ")}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<Link
					to="/"
					className="flex items-center gap-2 group"
					onClick={() => setOpen(false)}
				>
					<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white font-bold">
						Ix
					</span>
					<div className="leading-tight">
						<p className="font-semibold tracking-tight">Invix</p>
						<p className="text-[11px] text-slate-500">Digital Invitation</p>
					</div>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-6 text-sm">
					{!isHome && (
						<Link
							to="/"
							className="inline-flex items-center rounded-2xl border border-transparent px-3 py-2 font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition"
						>
							Home
						</Link>
					)}
					<button
						type="button"
						onClick={() => pindahPage("about")}
						className="px-3 py-2 rounded-2xl text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition font-medium"
					>
						About
					</button>
					<button
						type="button"
						onClick={() => pindahPage("product")}
						className="px-3 py-2 rounded-2xl text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition font-medium"
					>
						Product
					</button>
				</nav>

				<div className="hidden md:flex items-center gap-2">
					<button
						type="button"
						onClick={() => pindahPage("cta")}
						className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
					>
						Mulai Gratis <ArrowIcon />
					</button>
				</div>

				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					aria-label="Buka menu"
					aria-expanded={open}
					aria-controls="mobile-menu"
					className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-slate-50"
				>
					<MenuIcon />
				</button>
			</div>

			{open && (
				<div
					id="mobile-menu"
					className="md:hidden border-t border-slate-200 bg-white"
				>
					<nav className="px-4 py-3 flex flex-col gap-3 text-sm">
						{!isHome && (
							<Link
								to="/"
								onClick={() => setOpen(false)}
								className="py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
							>
								Home
							</Link>
						)}
						<button
							type="button"
							onClick={() => {
								pindahPage("about");
								setOpen(false);
							}}
							className="py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50 text-left"
						>
							About
						</button>
						<button
							type="button"
							onClick={() => {
								pindahPage("product");
								setOpen(false);
							}}
							className="py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50 text-left"
						>
							Product
						</button>

						<div className="pt-2 flex items-center gap-2">
							<button
								type="button"
								onClick={() => {
									pindahPage("cta");
									setOpen(false);
								}}
								className="inline-flex items-center gap-2 rounded-2xl bg-[#4351BC] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#4351BC]"
							>
								Mulai Gratis <ArrowIcon />
							</button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}

function MenuIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-5 w-5 text-slate-700"
			aria-hidden="true"
			focusable="false"
		>
			<path
				fill="currentColor"
				d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
			/>
		</svg>
	);
}
function ArrowIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-4 w-4"
			aria-hidden="true"
			focusable="false"
		>
			<path
				fill="currentColor"
				d="m13.5 5-1.4 1.4L16.7 11H4v2h12.7l-4.6 4.6l1.4 1.4L21 12z"
			/>
		</svg>
	);
}

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/Logo.webp";
import { SECTION_IDS, type Target } from "@/constant/section_ids";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { ArrowIcon } from "@/components/icon";
import { MenuIcon } from "lucide-react";


export default function Header() {
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
		if (target === "product") {
			navigate("/product"); // Direct navigation to the Product Page
		} else if (isHome) {
			const id = SECTION_IDS[target];
			smoothScrollById(id);
		} else {
			navigate("/", { state: { scrollTo: target } });
		}
	}

	return (
		<header
			className={[
				"sticky top-0 z-50  backdrop-blur border-b border-slate-200 transition-all duration-300",
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
					<img
						src={logo} //engarahkan ke file logo.webp
						alt="Logo"
						className="h-8 w-8 rounded-2xl object-contain"
					/>
					<div className="leading-tight">
						<p className="font-semibold tracking-tight">Invix</p>
						<p className="text-[11px] text-slate-500">Digital Invitation</p>
					</div>
				</Link>


				<div className="hidden md:flex items-center gap-2">
					<button
						type="button"
						onClick={() => pindahPage("cta")}
						className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
					>
						Contact Me  <ArrowIcon />
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
						<div className="pt-2 flex items-center gap-2 ">
							<button
								type="button"
								onClick={() => {
									pindahPage("cta");
									setOpen(false);
								}}
								className="inline-flex items-center gap-2 rounded-2xl bg-[#4351BC] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#4351BC]"
							>
								Contact Me  <ArrowIcon />
							</button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}

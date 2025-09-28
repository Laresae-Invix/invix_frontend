import { Link, useLocation, useNavigate } from "react-router-dom";
import { SECTION_IDS } from "../constant/section_ids";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Navbar() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { direction, scrolled } = useScrollDirection(8);

	const hidden = direction === "down" && scrolled;

	function pindahPage(target: "about" | "product") {
		if (pathname === "/") {
			const id = SECTION_IDS[target];
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		} else {
			navigate(`/${target}`);
		}
	}

	return (
		<header
			className={[
				"sticky top-0 z-50 border-b bg-white/80 backdrop-blur transition-all duration-300",
				hidden
					? "-translate-y-full opacity-0 pointer-events-none"
					: "translate-y-0 opacity-100",
				scrolled ? "shadow-sm" : "",
			].join(" ")}
		>
			<div className="container mx-auto flex items-center justify-between px-4 py-3">
				<Link to="/" className="text-lg font-bold tracking-tight">
					INVIX
				</Link>

				<nav className="flex gap-2">
					{pathname !== "/" && (
						<Link
							to="/"
							className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200"
						>
							Home
						</Link>
					)}

					<button
						type="button"
						onClick={() => pindahPage("about")}
						className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200"
					>
						About
					</button>

					<button
						type="button"
						onClick={() => pindahPage("product")}
						className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200"
					>
						Product
					</button>
				</nav>
			</div>
		</header>
	);
}

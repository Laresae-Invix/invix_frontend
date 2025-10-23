import { useEffect, useMemo, useRef, useState } from "react";
import BlueIcon from "@/components/blueIcon";
import { STEPS } from "@/constant/steps";

const BRAND = { navy: "#17184B", indigo: "#3927FF", deep: "#1100D1" };

export default function HowSection() {
	const [active, setActive] = useState(0);
	const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
	const obsRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (obsRef.current) obsRef.current.disconnect();
		const obs = new IntersectionObserver(
			(entries) => {
				const vis = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (vis) setActive(Number(vis.target.getAttribute("data-index") || 0));
			},
			{ threshold: [0.2, 0.5, 0.8] },
		);
		obsRef.current = obs;
		itemsRef.current.length = STEPS.length;
		itemsRef.current.forEach((el) => {
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);

	const handlers = useMemo(
		() => ({
			onMouseEnter: (i: number) => () => setActive(i),
			onFocus: (i: number) => () => setActive(i),
		}),
		[],
	);

	return (
		<section
			id="how-section"
			className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
		>
			{/* GRID: kiri heading (text-left), kanan timeline */}

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-32 lg:items-center">
				{/* LEFT — heading kiri terpusat vertikal */}
				<header className="lg:col-span-4 lg:self-center lg:flex lg:flex-col lg:justify-center">
					{/* CHIP */}
					<span
						className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99]
               text-white px-5 py-2 text-sm font-semibold ring-2 ring-[#4C7A99] mb-4
               transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-md hover:ring-indigo-500
               animate-fadeInMove w-max"
					>
						Layanan Kami
					</span>

					{/* TITLE */}
					<h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-left">
						Layanan untuk Setiap Kesempatan
					</h3>

					{/* SUBTITLE */}
					<p className="mt-3 text-slate-600 text-left">
						assalamualikum ya ahli kubur
					</p>

					{/* ACCENT LINE */}
					<div className="mt-6 h-[3px] w-24 rounded-full bg-slate-200 overflow-hidden">
						<span
							className="block h-full w-full"
							style={{
								backgroundImage: `linear-gradient(135deg, ${BRAND.indigo}, ${BRAND.deep})`,
							}}
						/>
					</div>
				</header>

				{/* RIGHT — timeline zig-zag (desktop) + vertikal (mobile) */}
				<div className="lg:col-span-8 relative">
					{/* garis pusat dashed */}
					<div
						aria-hidden
						className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
					>
						<svg
							viewBox="0 0 4 100"
							className="h-full w-full text-slate-300"
							fill="none"
							preserveAspectRatio="none"
						/>
						<path
							d="M2 0 L2 100"
							stroke="currentColor"
							strokeWidth="2"
							strokeDasharray="6 8"
							strokeLinecap="round"
						/>
					</div>

					{/* DESKTOP: zig-zag kiri/kanan */}
					<ol className="hidden lg:flex flex-col gap-14">
						{STEPS.map((s, i) => {
							const left = i % 2 === 0;
							const isActive = i === active;
							return (
								<li
									key={s.title}
									data-index={i}
									ref={(el: HTMLLIElement | null) => {
										itemsRef.current[i] = el;
									}}
									className="grid grid-cols-[1fr_88px_1fr] items-start"
									onMouseEnter={handlers.onMouseEnter(i)}
									onFocus={handlers.onFocus(i)}
								>
									{/* KIRI */}
									<div
										className={`flex ${left ? "justify-end" : "opacity-0 pointer-events-none select-none"}`}
									>
										{left && (
											<div className="max-w-sm text-right">
												<div
													className={[
														"ml-auto grid place-items-center rounded-full border-2 border-dashed h-20 w-20 transition-all duration-300",
														isActive
															? "border-[#3927FF] scale-105 shadow-[0_0_0_8px_rgba(57,39,255,0.06)]"
															: "border-slate-300",
													].join(" ")}
												>
													<BlueIcon name={s.icon} className="h-6 w-6" />
												</div>
												<h4
													className={`mt-3 text-lg font-semibold ${isActive ? "text-[#17184B]" : "text-slate-900"}`}
												>
													{s.title}
												</h4>
												<p
													className={`mt-1.5 text-sm leading-6 ${isActive ? "text-slate-600" : "text-slate-500"}`}
												>
													{s.desc}
												</p>
											</div>
										)}
									</div>

									{/* TENGAH — lengan ke garis */}
									<div className="flex items-center justify-center">
										<svg
											viewBox="0 0 80 36"
											className="h-7 w-20 text-slate-300"
											fill="none"
											preserveAspectRatio="none"
										/>
										{left ? (
											<path
												d="M80 18 C 58 2, 36 2, 14 18"
												stroke="currentColor"
												strokeWidth="2"
												strokeDasharray="6 8"
												strokeLinecap="round"
											/>
										) : (
											<path
												d="M0 18 C 22 2, 44 2, 66 18"
												stroke="currentColor"
												strokeWidth="2"
												strokeDasharray="6 8"
												strokeLinecap="round"
											/>
										)}
									</div>

									{/* KANAN */}
									<div
										className={`${left ? "opacity-0 pointer-events-none select-none" : ""}`}
									>
										{!left && (
											<div className="max-w-sm text-left">
												<div
													className={[
														"grid place-items-center rounded-full border-2 border-dashed h-20 w-20 transition-all duration-300",
														isActive
															? "border-[#3927FF] scale-105 shadow-[0_0_0_8px_rgba(57,39,255,0.06)]"
															: "border-slate-300",
													].join(" ")}
												>
													<BlueIcon name={s.icon} className="h-6 w-6" />
												</div>
												<h4
													className={`mt-3 text-lg font-semibold ${isActive ? "text-[#17184B]" : "text-slate-900"}`}
												>
													{s.title}
												</h4>
												<p
													className={`mt-1.5 text-sm leading-6 ${isActive ? "text-slate-600" : "text-slate-500"}`}
												>
													{s.desc}
												</p>
											</div>
										)}
									</div>
								</li>
							);
						})}
					</ol>

					{/* MOBILE/TABLET: vertikal kebawah */}
					<ol className="lg:hidden relative space-y-10 pt-2">
						<span
							aria-hidden
							className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px"
						>
							<svg
								viewBox="0 0 4 100"
								className="h-full w-full text-slate-300"
								fill="none"
							/>
							<path
								d="M2 0 L2 100"
								stroke="currentColor"
								strokeWidth="2"
								strokeDasharray="6 8"
								strokeLinecap="round"
							/>
						</span>

						{STEPS.map((s, i) => {
							const isActive = i === active;
							return (
								<li
									key={s.title}
									data-index={i}
									ref={(el: HTMLLIElement | null) => {
										itemsRef.current[i] = el;
									}}
									className="relative flex flex-col items-center text-center"
									onMouseEnter={handlers.onMouseEnter(i)}
									onFocus={handlers.onFocus(i)}
								>
									<div
										className={[
											"grid place-items-center rounded-full border-2 border-dashed h-20 w-20 transition-all duration-300 bg-transparent",
											isActive
												? "border-[#3927FF] scale-105 shadow-[0_0_0_8px_rgba(57,39,255,0.06)]"
												: "border-slate-300",
										].join(" ")}
									>
										<BlueIcon name={s.icon} className="h-6 w-6" />
									</div>
									<h4
										className={`mt-3 text-base font-semibold ${isActive ? "text-[#17184B]" : "text-slate-900"}`}
									>
										{s.title}
									</h4>
									<p
										className={`mt-1.5 text-sm leading-6 ${isActive ? "text-slate-600" : "text-slate-500"}`}
									>
										{s.desc}
									</p>

									{i < STEPS.length - 1 && (
										<div aria-hidden className="mt-4 h-12 w-px">
											<svg
												aria-hidden="true"
												viewBox="0 0 4 48"
												className="h-full w-full text-slate-300"
												fill="none"
											>
												<path
													d="M2 0 L2 48"
													stroke="currentColor"
													strokeWidth="2"
													strokeDasharray="6 8"
													strokeLinecap="round"
												/>
											</svg>
										</div>
									)}
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		</section>
	);
}

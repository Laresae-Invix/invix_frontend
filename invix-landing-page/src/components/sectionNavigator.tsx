import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type SectionItem = {
	key: string;
	label: string;
	element: React.ReactNode;
};

type SectionNavigatorProps = {
	items: SectionItem[];
	defaultKey?: string;
	className?: string;
	onChange?(key: string): void;
};

export default function SectionNavigator({
	items,
	defaultKey,
	className = "",
	onChange,
}: SectionNavigatorProps) {
	const firstKey = useMemo(
		() => defaultKey ?? items[0]?.key,
		[defaultKey, items],
	);
	const [active, setActive] = useState(firstKey);

	const activeItem = useMemo(
		() => items.find((i) => i.key === active) ?? items[0],
		[active, items],
	);

	const navRef = useRef<HTMLDivElement | null>(null);
	const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
	const [indicatorStyle, setIndicatorStyle] = useState<{
		left: number;
		width: number;
	}>({
		left: 0,
		width: 0,
	});

	const updateIndicator = useCallback(() => {
		const nav = navRef.current;
		const btn = btnRefs.current[active ?? ""];
		if (!nav || !btn) return;
		const navRect = nav.getBoundingClientRect();
		const btnRect = btn.getBoundingClientRect();
		setIndicatorStyle({
			left: btnRect.left - navRect.left,
			width: btnRect.width,
		});
	}, [active]);

	useEffect(() => {
		updateIndicator();
		window.addEventListener("resize", updateIndicator);
		return () => window.removeEventListener("resize", updateIndicator);
	}, [updateIndicator]);

	function select(key: string) {
		setActive(key);
		onChange?.(key);
	}

	function onKeyDown(e: React.KeyboardEvent) {
		if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
		e.preventDefault();
		const idx = items.findIndex((i) => i.key === active);
		if (idx === -1) return;
		const next =
			e.key === "ArrowRight"
				? items[(idx + 1) % items.length]
				: items[(idx - 1 + items.length) % items.length];
		select(next.key);
		btnRefs.current[next.key]?.focus();
	}

	return (
		<div className={className}>
			<div
				ref={navRef}
				role="tablist"
				aria-label="Section navigator"
				onKeyDown={onKeyDown}
				className="relative mx-auto w-full overflow-x-auto no-scrollbar rounded-2xl  p-2 "
			>
				<span
					aria-hidden
					className="pointer-events-none absolute top-2 bottom-2 rounded-xl bg-slate-900/5 shadow-inner transition-all duration-300"
					style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
				/>

				<div className="relative z-10 flex justify-center gap-2">
					{items.map((it) => {
						const isActive = it.key === activeItem?.key;
						return (
							<button
								key={it.key}
								ref={(el) => {
									btnRefs.current[it.key] = el;
								}}
								type="button"
								role="tab"
								aria-selected={isActive}
								aria-controls={`panel-${it.key}`}
								onClick={() => select(it.key)}
								className={[
									"px-4 py-2 text-sm font-medium rounded-xl transition",
									"focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4351BC]/40",
									isActive
										? "text-slate-900"
										: "text-slate-600 hover:text-slate-900",
								].join(" ")}
							>
								{it.label}
							</button>
						);
					})}
				</div>
			</div>
			<div
				id={`panel-${activeItem?.key}`}
				role="tabpanel"
				aria-labelledby={activeItem?.key}
				className="mt-6"
			>
				{activeItem?.element}
			</div>
		</div>
	);
}

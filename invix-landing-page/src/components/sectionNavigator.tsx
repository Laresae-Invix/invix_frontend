import type React from "react";
import { useMemo, useState } from "react";

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

	function select(key: string) {
		setActive(key);
		onChange?.(key);
	}

	return (
		<div className={className}>
			<div className="mb-4 flex flex-wrap gap-2 rounded-xl border bg-white/70 p-2 backdrop-blur">
				{items.map((it) => {
					const isActive = it.key === activeItem?.key;
					return (
						<button
							key={it.key}
							type="button"
							onClick={() => select(it.key)}
							className={[
								"px-3 py-2 text-sm font-medium rounded-lg transition",
								isActive
									? "bg-gray-900 text-white shadow-sm"
									: "text-gray-700 hover:bg-gray-200",
							].join(" ")}
						>
							{it.label}
						</button>
					);
				})}
			</div>

			<div className="rounded-2xl border bg-white p-4 shadow-sm">
				{activeItem?.element}
			</div>
		</div>
	);
}

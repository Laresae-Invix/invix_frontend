import { BRAND } from "@/constant/steps";
import type { IconName } from "@/types/steps";

interface BlueIconProps {
	name: IconName;
	className?: string;
}

export default function BlueIcon({
	name,
	className = "h-6 w-6",
}: BlueIconProps) {
	const fill = BRAND.indigo;

	switch (name) {
		case "wedding":
			return (
				<svg
					viewBox="0 0 24 24"
					className={className}
					fill={fill}
					aria-hidden="true"
				>
					<path d="M8.5 7a3.5 3.5 0 0 1 5-3.16l.9-.9a1 1 0 1 1 1.4 1.42l-.76.75A3.5 3.5 0 1 1 8.5 7Zm-3 5.5a5.5 5.5 0 1 1 9.33 4.04l-3.27 3.04a1.5 1.5 0 0 1-2.12 0l-3.27-3.04A5.47 5.47 0 0 1 5.5 12.5Zm11 0a5.5 5.5 0 0 1 2.6 10.3l-2.03 1.2a1 1 0 0 1-1.02-1.72l2.03-1.2A3.5 3.5 0 1 0 16.5 12.5Z" />
				</svg>
			);

		case "birthday":
			return (
				<svg
					viewBox="0 0 24 24"
					className={className}
					fill={fill}
					aria-hidden="true"
				>
					<path d="M12 2c1 0 1.8.8 1.8 1.8 0 .3-.1.6-.2.8l-.6 1H11l-.6-1c-.1-.2-.2-.5-.2-.8C10.2 2.8 11 2 12 2Z" />
					<path d="M4 11h16l2 3v6H2v-6l2-3Zm2 7h12v-2H6v2Zm10.5-6-1-2h-7l-1 2h9Z" />
				</svg>
			);

		case "event":
			return (
				<svg
					viewBox="0 0 24 24"
					className={className}
					fill={fill}
					aria-hidden="true"
				>
					<path d="M7 2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h2V2ZM3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8Zm4 3h4v4H7v-4Z" />
				</svg>
			);

		case "multi":
			return (
				<svg
					viewBox="0 0 24 24"
					className={className}
					fill={fill}
					aria-hidden="true"
				>
					<path d="M12 3 2 8l10 5 10-5-10-5Zm0 8L2 6v4l10 5 10-5V6l-10 5Zm0 4L2 10v4l10 5 10-5v-4l-10 5Z" />
				</svg>
			);

		default:
			return null;
	}
}

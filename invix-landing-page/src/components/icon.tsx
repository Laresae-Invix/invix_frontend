export function Stat({ big, small }: { big: string; small: string }) {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
			<p className="text-2xl font-extrabold tracking-tight text-[#4351BC]">
				{big}
			</p>
			<p className="text-xs text-slate-600">{small}</p>
		</div>
	);
}

export function ArrowIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-4 w-4"
			role="img"
			aria-labelledby="arrowIconTitle"
		>
			<title id="arrowIconTitle">Arrow icon</title>
			<path
				fill="currentColor"
				d="m13.5 5-1.4 1.4L16.7 11H4v2h12.7l-4.6 4.6l1.4 1.4L21 12z"
			/>
		</svg>
	);
}

export function ShieldIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-4 w-4"
			role="img"
			aria-labelledby="shieldIconTitle"
		>
			<title id="shieldIconTitle">Shield icon</title>
			<path
				fill="currentColor"
				d="M12 2l7 4v6c0 5-3.1 9.2-7 10c-3.9-.8-7-5-7-10V6z"
			/>
		</svg>
	);
}
export function SparkIcon() {
	return (
		<svg viewBox="0 0 24 24" className="h-4 w-4 text-yellow-500">
			<title id="sparkIconTitle">Spark icon</title>
			<path fill="currentColor" d="M11 2v5l-4 2l4 2v5l4-4l-4-2l4-2z" />
		</svg>
	);
}

/* Ikon mini untuk chips */
export function UsersMiniIcon() {
	return (
		<svg viewBox="0 0 24 24" className="h-4 w-4">
			<title id="usersMiniIconTitle">Users icon</title>
			<path
				fill="currentColor"
				d="M16 11a3 3 0 1 0-3-3a3 3 0 0 0 3 3m-8 0a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.74 1.07-3.23 2.7-4.06C11.58 12.35 9.99 13 8 13"
			/>
		</svg>
	);
}
export function CameraMiniIcon() {
	return (
		<svg viewBox="0 0 24 24" className="h-4 w-4">
			<title id="cameraMiniIconTitle">Camera icon</title>
			<path
				fill="currentColor"
				d="M9.4 5l1.6-2h4l1.6 2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5.4"
			/>
		</svg>
	);
}
export function MapPinIcon() {
	return (
		<svg viewBox="0 0 24 24" className="h-4 w-4">
			<title id="mapPinIconTitle">Map pin icon</title>
			<path
				fill="currentColor"
				d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
			/>
		</svg>
	);
}
export function ClockIcon() {
	return (
		<svg viewBox="0 0 24 24" className="h-4 w-4">
			<title id="clockIconTitle">Clock icon</title>
			<path
				fill="currentColor"
				d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m.5 5h-1v6l5 3l.5-.86l-4.5-2.64Z"
			/>
		</svg>
	);
}
export function GiftIcon() {
	return (
		<svg viewBox="0 0 24 24" className="h-4 w-4">
			<title id="giftIconTitle">Gift icon</title>
			<path
				fill="currentColor"
				d="M20 12v8a2 2 0 0 1-2 2h-6v-7h8m-10 0v7H6a2 2 0 0 1-2-2v-8h6m10-6h-2.18A3 3 0 0 0 13 5a3 3 0 0 0-4.82 1H6a2 2 0 0 0-2 2v3h16V8a2 2 0 0 0-2-2"
			/>
		</svg>
	);
}

export function Feature({
	icon,
	title,
	desc,
}: {
	icon: React.ReactNode;
	title: string;
	desc: string;
}) {
	return (
		<div className="p-5 bg-white border-1 border-blue-200 rounded-xl shadow-lg hover:shadow-m transition-shadow duration-300">
			<div className="group inline-flex h-12 w-12 mb-2">
				<div
					className="text-blue-600 transition-all duration-300"
					style={{
						animation: "floating 2s ease-in-out infinite",
					}}
				>
					{icon}
				</div>
			</div>

			<p className="font-semibold">{title}</p>
			<p className="mt-1 text-sm text-slate-600">{desc}</p>
		</div>
	);
}

export function BrushIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-6 w-6"
			role="img"
			aria-labelledby="brushIconTitle"
		>
			<title id="brushIconTitle">Brush icon</title>
			<path
				fill="currentColor"
				d="M20.71 4.63a2 2 0 0 0-2.82 0l-9.9 9.9a4 4 0 0 0-1.06 1.82l-.63 2.53l2.53-.63c.68-.17 1.3-.52 1.82-1.04l9.9-9.9a2 2 0 0 0 0-2.82M7 18a1 1 0 0 1-1 1a2 2 0 0 1-2-2a1 1 0 0 1 1-1h2Z"
			/>
		</svg>
	);
}
export function QrIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-6 w-6"
			role="img"
			aria-labelledby="qrIconTitle"
		>
			<title id="qrIconTitle">QR code icon</title>
			<path
				fill="currentColor"
				d="M3 3h8v8H3V3m2 2v4h4V5H5m6-2h8v8h-8V3m2 2v4h4V5h-4M3 13h8v8H3v-8m2 2v4h4v-4H5m10-2h2v2h-2m0 4h2v2h-2m4-4h2v2h-2m0 4h2v2h-2v-2m-4 0h-4v-2h4v2Z"
			/>
		</svg>
	);
}
export function CameraIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-6 w-6"
			role="img"
			aria-labelledby="cameraIconTitle"
		>
			<title id="cameraIconTitle">Camera icon</title>
			<path
				fill="currentColor"
				d="M9.4 5l1.6-2h4l1.6 2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5.4M12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
			/>
		</svg>
	);
}
export function CalendarIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-6 w-6"
			role="img"
			aria-labelledby="calendarIconTitle"
		>
			<title id="calendarIconTitle">Calendar icon</title>
			<path
				fill="currentColor"
				d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 15H5V9h14z"
			/>
		</svg>
	);
}
export function UsersIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-6 w-6"
			role="img"
			aria-labelledby="usersIconTitle"
		>
			<title id="usersIconTitle">Users icon</title>
			<path
				fill="currentColor"
				d="M16 11a3 3 0 1 0-3-3a3 3 0 0 0 3 3m-8 0a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.74 1.07-3.23 2.7-4.06C11.58 12.35 9.99 13 8 13m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2c0-2.66-5.33-4-8-4Z"
			/>
		</svg>
	);
}

export function ChartIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="h-6 w-6"
			role="img"
			aria-labelledby="chartIconTitle"
		>
			<title id="chartIconTitle">Chart icon</title>
			<path
				fill="currentColor"
				d="M3 3h2v18H3zm4 10h2v8H7zm4-6h2v14h-2zm4 4h2v10h-2zm4-7h2v17h-2z"
			/>
		</svg>
	);
}

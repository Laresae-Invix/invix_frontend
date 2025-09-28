import { Outlet } from "react-router-dom";

export default function AboutLayout() {
	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-bold">ABOT</h2>
			<Outlet />
		</div>
	);
}

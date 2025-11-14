import { Outlet } from "react-router-dom";

export default function KomunitasLayout() {
	return (
		<div className="space-y-6">
			<Outlet />
		</div>
	);
}

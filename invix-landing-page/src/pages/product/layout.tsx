import { Outlet } from "react-router-dom";

export default function ProductLayout() {
	return (
		<div className="space-y-6">
			<Outlet />
		</div>
	);
}

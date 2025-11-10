// invix-landing-page/src/pages/login/layout.tsx
import { Outlet } from "react-router-dom";

export default function RegisterLayout() {
	return (
		<div className="space-y-6">
			<Outlet />
		</div>
	);
}

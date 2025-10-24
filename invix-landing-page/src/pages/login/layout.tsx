// invix-landing-page/src/pages/login/layout.tsx
import { Outlet } from "react-router-dom";

export default function LoginLayout() {
	return (
		<div className="space-y-6">
			<Outlet />
		</div>
	);
}

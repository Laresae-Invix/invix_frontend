import { Outlet } from "react-router-dom";

export default function InvitationsLayout() {
	return (
		<div className="min-h-screen bg-gray-50">
			<Outlet />
		</div>
	);
}

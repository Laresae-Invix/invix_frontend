import { useCheckAuth } from "../../hooks/api/use-login";

export default function DashboardPage() {
	const { data, isLoading } = useCheckAuth();

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-gray-500">Loading dashboard...</p>
			</div>
		);
	}

	if (!data) {
		// kalau cookie invalid / belum login
		window.location.href = "/login";
		return null;
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen bg-gray-50">
			<h1 className="text-4xl font-bold text-gray-800">
				Halo, {data.name || "User"} 👋
			</h1>
			<p className="mt-4 text-gray-600">Email: {data.email}</p>

			<button
				type="button"
				onClick={() => {
					// logout manual: hapus cookie dari backend
					fetch("https://api.invixinvitation.com/auth/logout", {
						method: "POST",
						credentials: "include",
					}).then(() => {
						window.location.href = "/login";
					});
				}}
				className="mt-8 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
			>
				Logout
			</button>
		</div>
	);
}

// src/pages/login/page.tsx
import { useEffect } from "react";
import { useCheckAuth, useLogin } from "../../hooks/api/use-login";

export default function LoginPage() {
	const { mutate: loginGoogle, isPending } = useLogin();
	const { data, isLoading } = useCheckAuth();

	useEffect(() => {
		if (!isLoading && data) {
			// kalo user udah login (cookie valid)
			window.location.href = "/dashboard"; // arahkan ke dashboard
		}
	}, [data, isLoading]);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-gray-500">Checking session...</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen bg-gray-50 space-y-6">
			<h1 className="text-3xl font-semibold text-gray-800">Login ke Invix</h1>
			<p className="text-gray-600">Pilih metode login kamu</p>

			<button
				type="button"
				onClick={() => loginGoogle()}
				disabled={isPending}
				className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 transition"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 48 48"
					width="24"
					height="24"
				>
					<title>Google logo</title>
					<path
						fill="#EA4335"
						d="M24 9.5c3.94 0 7.46 1.36 10.24 3.62l7.61-7.61C37.3 1.93 30.95 0 24 0 14.62 0 6.5 5.44 2.57 13.37l8.89 6.91C13.38 14.49 18.32 9.5 24 9.5z"
					/>
					<path
						fill="#34A853"
						d="M46.1 24.5c0-1.57-.14-3.07-.4-4.5H24v9.03h12.5c-.54 2.75-2.16 5.08-4.62 6.67l7.3 5.68C43.43 37.05 46.1 31.22 46.1 24.5z"
					/>
					<path
						fill="#4A90E2"
						d="M24 48c6.48 0 11.93-2.14 15.9-5.83l-7.3-5.68c-2.03 1.36-4.6 2.16-8.6 2.16-6.68 0-12.33-4.5-14.36-10.73l-8.9 6.9C6.5 42.56 14.62 48 24 48z"
					/>
					<path
						fill="#FBBC05"
						d="M9.64 28.7c-.46-1.36-.7-2.8-.7-4.2s.25-2.84.7-4.2l-8.9-6.9C.27 17.9 0 21.4 0 24.5s.27 6.6 2.57 9.9l8.9-6.9z"
					/>
				</svg>
				{isPending ? "Redirecting..." : "Login with Google"}
			</button>
		</div>
	);
}

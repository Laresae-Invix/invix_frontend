import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { useCheckAuth, useLoginManual, useLoginWithGoogle } from "../../hooks/api/use-login";

const LoginPage: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { data, isLoading } = useCheckAuth();
	const { mutate: loginManualFn, isPending: isLoginManual } = useLoginManual();
	const { mutate: loginGoogleFn, isPending: isLoginGoogle } = useLoginWithGoogle();

	// Jika user sudah login, redirect
	useEffect(() => {
		if (!isLoading && data) {
			window.location.href = "/dashboard";
		}
	}, [data, isLoading]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Jalankan login manual
		loginManualFn(
			{ email, password },
			{
				onSuccess: () => window.location.href = "/dashboard",
				onError: (err) => console.error("Login gagal:", err),
			}
		);
	};

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-gray-500">Checking session...</p>
			</div>
		);
	}

	return (
		<div className="fixed inset-0 -z-10">
			<div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900" />
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-50" />
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

			<div className="min-h-screen flex items-center justify-center p-4">
				<div className="w-full max-w-md">
					<div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">

						{/* HEADER */}
						<div className="text-center mb-8">
							<div className="inline-flex items-center justify-center w-20 h-20 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl mb-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
								<a href="/" className="w-full h-full flex items-center justify-center">
									<img src="/src/assets/Logo.webp" alt="Logo" className="w-14 h-14 object-contain" />
								</a>
							</div>
							<h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Invix</h1>
							<p className="text-white/70 text-sm">Undangan Digital Premium • Est. 2025</p>
						</div>

						{/* TITLE */}
						<div className="text-center mb-8">
							<h2 className="text-2xl font-semibold text-white mb-2">Selamat Datang! 🎉</h2>
							<p className="text-white/60 text-sm">Masuk untuk mulai membuat undangan impianmu</p>
						</div>

						{/* MANUAL LOGIN */}
						<form className="space-y-6" onSubmit={handleSubmit}>
							{/* Email Field */}
							<div className="relative group">
								<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
								<div className="relative">
									<div className="flex items-center bg-white/10 backdrop-blur-md border border-white/30 rounded-xl focus-within:border-white/60 transition-all duration-300">
										<div className="pl-4">
											<Mail className="w-5 h-5 text-white/70" />
										</div>
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="email@invix.com"
											className="w-full px-4 py-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-sm"
										/>
									</div>
								</div>
							</div>

							{/* Password Field */}
							<div className="relative group">
								<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
								<div className="relative">
									<div className="flex items-center bg-white/10 backdrop-blur-md border border-white/30 rounded-xl focus-within:border-white/60 transition-all duration-300">
										<div className="pl-4">
											<Lock className="w-5 h-5 text-white/70" />
										</div>
										<input
											type={showPassword ? "text" : "password"}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="••••••••"
											className="w-full px-4 py-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-sm flex-1"
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="pr-4 text-white/70 hover:text-white transition-colors"
										>
											{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
										</button>
									</div>
								</div>
							</div>

							{/* Manual Login Button */}
							<button
								type="submit"
								disabled={isLoginManual}
								className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group disabled:opacity-50"
							>
								<span className="relative z-10 flex items-center justify-center gap-2">
									{isLoginManual ? "Mencoba masuk..." : "Masuk Sekarang"}
								</span>
								<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
							</button>
						</form>

						{/* Google Login Button */}
						<div className="mt-6">
							<button
								type="button"
								onClick={() => loginGoogleFn()}
								disabled={isLoginGoogle}
								className="w-full flex items-center justify-center gap-3 py-3 bg-white rounded-xl shadow hover:shadow-lg transition"
							>
								<img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
								<span className="text-gray-700 font-medium">
									{isLoginGoogle ? "Redirecting..." : "Login with Google"}
								</span>
							</button>
						</div>

						{/* Alternatif: Register */}
						<div className="text-center mt-8">
							<p className="text-white/60 text-sm">
								Belum punya akun?{" "}
								<a href="/register" className="text-white font-semibold hover:underline underline-offset-4">
									Daftar gratis sekarang
								</a>
							</p>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

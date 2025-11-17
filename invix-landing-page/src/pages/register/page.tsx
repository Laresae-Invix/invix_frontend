// src/pages/RegisterPage.tsx

import { Eye, EyeOff, Lock, Mail, Sparkles, User } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Impor hook untuk navigasi

const RegisterPage: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [agreeTerms, setAgreeTerms] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate(); // Hook untuk redirect

	const passwordsMatch = password === confirmPassword && password.length > 0;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (agreeTerms && passwordsMatch) {
			setIsLoading(true);
			// Simulasi panggilan API (ganti dengan fetch atau axios nyata)
			setTimeout(() => {
				console.log("Registrasi berhasil:", { fullName, email, password });
				setIsLoading(false);
				// Redirect ke halaman login setelah sukses
				navigate("/login");
			}, 2000); // Simulasi delay 2 detik
		}
	};

	return (
		<div className="fixed inset-0 -z-10">
			<div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900" />
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-50" />
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

			<div className="min-h-screen flex items-center justify-center p-4">
				<div className="w-full max-w-md">
					<div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
						<div className="text-center mb-8">
							<div className="inline-flex items-center justify-center w-20 h-20 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl mb-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
								<a
									href="/"
									className="w-full h-full flex items-center justify-center"
								>
									<img
										src="/src/assets/Logo.webp"
										alt="Logo"
										className="w-14 h-14 object-contain"
									/>
								</a>
							</div>

							<h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
								Invix
							</h1>
							<p className="text-white/70 text-sm">
								Undangan Digital Premium • Est. 2025
							</p>
						</div>

						<div className="text-center mb-8">
							<h2 className="text-2xl font-semibold text-white mb-2">
								Buat Akun Baru! ✨
							</h2>
							<p className="text-white/60 text-sm">
								Daftar gratis dan mulai desain undanganmu hari ini
							</p>
						</div>

						<form className="space-y-6" onSubmit={handleSubmit}>
							<div className="relative group">
								<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
								<div className="relative">
									<div className="flex items-center bg-white/10 backdrop-blur-md border border-white/30 rounded-xl focus-within:border-white/60 transition-all duration-300">
										<div className="pl-4">
											<User className="w-5 h-5 text-white/70" />
										</div>
										<input
											type="text"
											value={fullName}
											onChange={(e) => setFullName(e.target.value)}
											placeholder="Nama Lengkap"
											className="w-full px-4 py-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-sm"
										/>
									</div>
								</div>
							</div>

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
											placeholder="Password"
											className="w-full px-4 py-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-sm flex-1"
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="pr-4 text-white/70 hover:text-white transition-colors"
										>
											{showPassword ? (
												<EyeOff className="w-5 h-5" />
											) : (
												<Eye className="w-5 h-5" />
											)}
										</button>
									</div>
								</div>
							</div>

							<div className="relative group">
								<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
								<div className="relative">
									<div
										className={`flex items-center bg-white/10 backdrop-blur-md border rounded-xl transition-all duration-300 ${passwordsMatch ? "border-green-500/50" : "border-white/30 focus-within:border-white/60"}`}
									>
										<div className="pl-4">
											<Lock className="w-5 h-5 text-white/70" />
										</div>
										<input
											type={showConfirmPassword ? "text" : "password"}
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
											placeholder="Konfirmasi Password"
											className="w-full px-4 py-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-sm flex-1"
										/>
										<button
											type="button"
											onClick={() =>
												setShowConfirmPassword(!showConfirmPassword)
											}
											className="pr-4 text-white/70 hover:text-white transition-colors"
										>
											{showConfirmPassword ? (
												<EyeOff className="w-5 h-5" />
											) : (
												<Eye className="w-5 h-5" />
											)}
										</button>
									</div>
									{!passwordsMatch && confirmPassword.length > 0 && (
										<p className="text-red-400 text-xs mt-1">
											Password tidak cocok
										</p>
									)}
								</div>
							</div>

							<div className="flex items-center text-sm">
								<input
									type="checkbox"
									checked={agreeTerms}
									onChange={(e) => setAgreeTerms(e.target.checked)}
									className="w-4 h-4 rounded border-white/30 bg-white/10 text-violet-500 focus:ring-violet-500 focus:ring-2 cursor-pointer"
								/>
								<label htmlFor="agreeTerms" className="ml-2 text-white/70">
									Saya setuju dengan{" "}
									<a href="/terms" className="text-white hover:underline">
										Syarat & Ketentuan
									</a>
								</label>
							</div>

							<button
								type="submit"
								disabled={!agreeTerms || !passwordsMatch || isLoading}
								className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-300 ${agreeTerms && passwordsMatch && !isLoading ? "hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:-translate-y-1" : "opacity-50 cursor-not-allowed"} relative overflow-hidden group`}
							>
								<span className="relative z-10 flex items-center justify-center gap-2">
									Daftar Sekarang
									<svg
										aria-hidden="true"
										className="w-5 h-5 group-hover:translate-x-1 transition-transform"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 7l5 5m0 0l-5 5m5-5H6"
										/>
									</svg>
								</span>
								<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
							</button>
						</form>

						<div className="text-center mt-8">
							<p className="text-white/60 text-sm">
								Sudah punya akun?{" "}
								<a
									href="/login"
									className="text-white font-semibold hover:underline underline-offset-4"
								>
									Masuk di sini
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Animasi loading sebagai overlay */}
			{isLoading && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 border-4 border-t-4 border-pink-500 border-t-violet-600 rounded-full animate-spin"></div>
						<p className="mt-4 text-white text-lg font-semibold">
							Membuat akun...
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default RegisterPage;

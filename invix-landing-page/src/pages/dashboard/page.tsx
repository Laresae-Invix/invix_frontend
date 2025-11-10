import {
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	Edit,
	HelpCircle,
	Home,
	Mail,
	PlusCircle,
	Trash2,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface Invitation {
	id: number;
	title: string;
	status: "draft" | "published";
}

const DashboardPage: React.FC = () => {
	const [invitations, setInvitations] = useState<Invitation[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4; // Menyesuaikan dengan 4 kotak di gambar

	useEffect(() => {
		// Simulasi fetch data undangan dari backend
		const dummyInvitations: Invitation[] = [
			{ id: 1, title: "Undangan Pernikahan", status: "published" },
			{ id: 2, title: "Undangan Wisuda", status: "draft" },
			{ id: 3, title: "Undangan Ulang Tahun", status: "published" },
			{ id: 4, title: "Undangan Acara Kantor", status: "draft" },
			{ id: 5, title: "Undangan Seminar", status: "published" },
		];
		setInvitations(dummyInvitations);
	}, []);

	const totalPages = Math.ceil(invitations.length / itemsPerPage);
	const paginatedInvitations = invitations.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100 flex">
			{/* Sidebar */}
			<aside className="w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 p-6 flex flex-col space-y-8">
				<div className="flex items-center space-x-2">
					<div className="w-8 h-8 bg-violet-600 text-white rounded-full flex justify-center items-center">
						<span>IV</span> {/* Inisial logo */}
					</div>
					<h1 className="text-2xl font-bold text-violet-800">Invix</h1>
				</div>
				<nav className="space-y-4">
					<a
						href="/dashboard"
						className="flex items-center space-x-3 text-violet-700 hover:text-violet-900 hover:bg-violet-100/50 p-2 rounded-lg transition-all duration-300"
					>
						<Home className="w-5 h-5" />
						<span className="font-medium">Homepage</span>
					</a>
					<a
						href="/invitations"
						className="flex items-center space-x-3 text-violet-700 hover:text-violet-900 hover:bg-violet-100/50 p-2 rounded-lg transition-all duration-300"
					>
						<Mail className="w-5 h-5" />
						<span className="font-medium">Undanganmu</span>
					</a>
				</nav>
			</aside>

			{/* Konten Utama */}
			<main className="flex-1 p-8">
				<header className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold text-violet-800">Undanganmu</h2>
					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-2 text-violet-600">
							<button
								type="button"
								className="w-5 h-5 cursor-pointer hover:text-violet-800 transition-colors"
								onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							>
								<ChevronLeft className="w-5 h-5" />
							</button>

							{Array.from({ length: totalPages }, (_, i) => (
								<button
									key={1}
									type="button"
									className={`cursor-pointer px-2 py-1 rounded ${
										currentPage === i + 1
											? "bg-violet-200 text-violet-800 font-bold"
											: "text-violet-600 hover:text-violet-800"
									}`}
									onClick={() => setCurrentPage(i + 1)}
								>
									{i + 1}
								</button>
							))}

							<button
								type="button"
								className="w-5 h-5 cursor-pointer hover:text-violet-800 transition-colors"
								onClick={() =>
									setCurrentPage((prev) => Math.min(prev + 1, totalPages))
								}
							>
								<ChevronRight className="w-5 h-5" />
							</button>
						</div>

						<div className="flex items-center space-x-2 text-violet-600 hover:text-violet-800 cursor-pointer transition-colors">
							<HelpCircle className="w-5 h-5" />
							<span className="font-medium">Contact Support</span>
						</div>
					</div>
				</header>

				{/* Bagian Undangan */}
				<div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl">
					<div className="flex justify-between items-center mb-6">
						<h3 className="text-2xl font-semibold text-violet-800">
							Judul Undangan
						</h3>
						<div className="flex space-x-4">
							<button
								type="button"
								className="px-4 py-2 bg-violet-100 text-violet-700 rounded-lg hover:bg-violet-200 transition-all duration-300 shadow-md"
							>
								View
							</button>
							<button
								type="button"
								className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-md flex items-center"
							>
								Share Link <ArrowRight className="w-4 h-4 ml-2" />
							</button>
						</div>
					</div>

					<div className="mb-6 text-center">
						<button
							type="button"
							className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto"
						>
							<PlusCircle className="w-5 h-5 mr-2" /> Start Build Invitation
						</button>
					</div>

					{/* Grid Undangan */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{paginatedInvitations.map((inv) => (
							<div
								key={inv.id}
								className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
							>
								<h4 className="text-lg font-semibold text-violet-800 mb-2">
									{inv.title}
								</h4>
								<p className="text-violet-600 text-sm">
									Status:{" "}
									{inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
								</p>
								<div className="mt-4 flex space-x-2">
									<button
										type="button"
										className="p-2 bg-violet-100 text-violet-700 rounded-full hover:bg-violet-200 transition-colors"
									>
										<Edit className="w-4 h-4" />
									</button>
									<button
										type="button"
										className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors"
									>
										<Trash2 className="w-4 h-4" />
									</button>
								</div>
							</div>
						))}
					</div>

					<div className="mt-6 text-right">
						<a
							href="/all-invitations"
							className="text-violet-600 hover:text-violet-800 font-medium flex items-center justify-end transition-colors"
						>
							See all <ArrowRight className="w-4 h-4 ml-1" />
						</a>
					</div>
				</div>
			</main>
		</div>
	);
};

export default DashboardPage;

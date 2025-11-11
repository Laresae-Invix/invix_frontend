import { AnimatePresence, motion } from "framer-motion";
import {
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	Edit,
	ExternalLink,
	Menu,
	PlusCircle,
	Trash2,
	X,
} from "lucide-react";
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { FaEnvelopeOpenText, FaEye, FaWhatsapp } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import Logo from "@/assets/Logo.webp";

interface Invitation {
	id: number;
	title: string;
	status: "draft" | "Event";
}

const StatusBadge: React.FC<{ status: Invitation["status"] }> = ({
	status,
}) => (
	<span
		className={
			"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium " +
			(status === "Event"
				? "bg-blue-100 text-blue-700"
				: "bg-purple-100 text-purple-700")
		}
	>
		<span
			className={
				"mr-1 h-1.5 w-1.5 rounded-full " +
				(status === "Event" ? "bg-blue-600" : "bg-purple-600")
			}
		/>
		{status.charAt(0).toUpperCase() + status.slice(1)}
	</span>
);
const SKELETON_KEYS = Array.from(
	{ length: 8 },
	(_, idx) => `skeleton-${idx + 1}`,
);

const SkeletonCard: React.FC = () => (
	<div className="rounded-xl border border-white/40 bg-white/50 p-4 shadow animate-pulse">
		<div className="mb-2 h-5 w-3/4 rounded bg-black/10" />
		<div className="mb-4 h-4 w-1/2 rounded bg-black/10" />
		<div className="flex gap-2">
			<div className="h-9 w-9 rounded-full bg-black/10" />
			<div className="h-9 w-9 rounded-full bg-black/10" />
		</div>
	</div>
);

const Sidebar: React.FC<{
	isOpen: boolean;
	onClose: () => void;
}> = ({ isOpen, onClose }) => {
	return (
		<>
			{/* Backdrop (mobile) */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						aria-hidden
						className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
					/>
				)}
			</AnimatePresence>

			{/* Sidebar – selalu dirender, cuma digeser di mobile */}
			<aside
				aria-label="Sidebar navigation"
				className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-white bg-white p-6 shadow-xl backdrop-blur-xl
  transform transition-transform duration-300
  lg:static lg:z-0 lg:flex lg:min-h-screen lg:w-64 lg:translate-x-0 lg:shadow-none
  ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
			>
				<div className="flex h-full w-full flex-col gap-8">
					{/* Logo di tengah */}
					<div className="relative flex items-center justify-center mt-4">
						<img
							src={Logo}
							alt="Logo Invix"
							className="h-14 w-auto object-contain"
						/>

						{/* Tombol close (mobile) */}
						<button
							type="button"
							onClick={onClose}
							className="absolute right-0 inline-flex h-9 w-9 items-center justify-center rounded-full text-[#4351BC] hover:bg-blue-50 lg:hidden"
							aria-label="Tutup sidebar"
						>
							<X className="h-5 w-5" />
						</button>
					</div>

					{/* MAIN MENU TITLE + NAV */}
					<div className="space-y-2">
						<p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400 mt-6">
							Main Menu
						</p>

						<nav className="space-y-1 mt-4">
							<a
								href="/dashboard"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#4351BC] transition-all hover:bg-blue-50 hover:text-[#2c357e]"
							>
								<MdOutlineDashboard className="h-5 w-5" />
								<span className="font-medium">Dashboard</span>
							</a>
							<a
								href="/invitations"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#4351BC] transition-all hover:bg-blue-50 hover:text-[#2c357e] mt-4"
							>
								<FaEnvelopeOpenText className="h-5 w-5" />
								<span className="font-medium">Undanganmu</span>
							</a>
						</nav>
					</div>

					<div className="mt-auto space-y-3">
						{/* Logout */}
						<a
							href="/login"
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#4351BC] transition-all hover:bg-blue-50 hover:text-[#2c357e]"
						>
							<TbLogout2 className="h-5 w-5" />
							<span className="font-medium">Logout</span>
						</a>

						{/* Contact Support */}
						<div className="rounded-xl border border-white/20 bg-gradient-to-br from-[#e2e5ff] to-[#f3f5ff] p-4">
							<p className="mb-3 text-sm font-semibold text-[#4351BC]">
								Perlu bantuan? Tim kami siap bantu setiap saat.
							</p>
							<a
								href="#support"
								className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#4351BC] to-[#6b7bff] px-3 py-2 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
							>
								<FaWhatsapp className="h-5 w-5" /> Contact Support
							</a>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
};

const Pagination: React.FC<{
	current: number;
	total: number;
	onPrev: () => void;
	onNext: () => void;
	onJump: (page: number) => void;
}> = ({ current, total, onPrev, onNext, onJump }) => {
	if (total <= 1) return null;

	// bikin array [1, 2, 3, ... total]
	const pages = Array.from({ length: total }, (_, idx) => idx + 1);

	return (
		<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-2 py-1 text-[#4351BC] shadow">
			<button
				type="button"
				className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-violet-100"
				onClick={onPrev}
				aria-label="Sebelumnya"
			>
				<ChevronLeft className="h-4 w-4" />
			</button>

			{pages.map((page) => (
				<button
					key={page} // ✅ bukan lagi pakai index `i`
					type="button"
					className={
						"min-w-[2rem] rounded-full px-2 py-1 text-sm font-medium " +
						(current === page
							? "bg-gradient-to-r from-[#4351BC] to-[#6b7bff] text-white"
							: "hover:bg-violet-100")
					}
					aria-current={current === page ? "page" : undefined}
					onClick={() => onJump(page)}
				>
					{page}
				</button>
			))}

			<button
				type="button"
				className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-violet-100"
				onClick={onNext}
				aria-label="Berikutnya"
			>
				<ChevronRight className="h-4 w-4" />
			</button>
		</div>
	);
};

const InvitationCard: React.FC<{
	inv: Invitation;
	onEdit: (id: number) => void;
	onDelete: (id: number) => void;
}> = ({ inv, onEdit, onDelete }) => {
	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -8 }}
			className="group rounded-xl border border-white/40 bg-white/60 p-4 shadow transition hover:-translate-y-0.5 hover:shadow-lg"
		>
			<div className="mb-2 flex items-start justify-between gap-2">
				<h4 className="line-clamp-1 text-lg font-semibold text-violet-900">
					{inv.title}
				</h4>
				<StatusBadge status={inv.status} />
			</div>
			<p className="text-sm text-violet-700/80">ID: #{inv.id}</p>
			<div className="mt-4 flex gap-2">
				<button
					type="button"
					onClick={() => onEdit(inv.id)}
					className="inline-flex items-center justify-center rounded-full bg-violet-100 p-2 text-violet-700 transition hover:bg-violet-200"
					aria-label={`Edit ${inv.title}`}
				>
					<Edit className="h-4 w-4" />
				</button>
				<button
					type="button"
					onClick={() => onDelete(inv.id)}
					className="inline-flex items-center justify-center rounded-full bg-rose-100 p-2 text-rose-700 transition hover:bg-rose-200"
					aria-label={`Hapus ${inv.title}`}
				>
					<Trash2 className="h-4 w-4" />
				</button>
			</div>
		</motion.div>
	);
};

const DashboardPage: React.FC = () => {
	const [invitations, setInvitations] = useState<Invitation[] | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const itemsPerPage = 8; // lebih responsif untuk grid (1/2/4)

	useEffect(() => {
		// Simulasi fetch data (loading state ditunjukkan SkeletonCard)
		const timer = setTimeout(() => {
			const data: Invitation[] = [
				{ id: 1, title: "Undangan Pernikahan", status: "Event" },
				{ id: 2, title: "Undangan Wisuda", status: "draft" },
				{ id: 3, title: "Undangan Ulang Tahun", status: "Event" },
				{ id: 4, title: "Undangan Acara Kantor", status: "draft" },
				{ id: 5, title: "Undangan Seminar", status: "Event" },
				{ id: 6, title: "Undangan Reuni Akbar", status: "draft" },
				{ id: 7, title: "Undangan Tasyakuran", status: "Event" },
				{ id: 8, title: "Undangan Launching Produk", status: "draft" },
				{ id: 9, title: "Undangan Khitanan", status: "Event" },
			];
			setInvitations(data);
		}, 600);
		return () => clearTimeout(timer);
	}, []);

	const totalPages = useMemo(
		() => Math.max(1, Math.ceil((invitations?.length ?? 0) / itemsPerPage)),
		[invitations],
	);

	const paginatedInvitations = useMemo(() => {
		if (!invitations) return [] as Invitation[];
		const start = (currentPage - 1) * itemsPerPage;
		return invitations.slice(start, start + itemsPerPage);
	}, [currentPage, invitations]);

	const handleDelete = (id: number) => {
		if (!invitations) return;
		const target = invitations.find((i) => i.id === id);
		const ok = confirm(
			`Hapus "${target?.title}"? Aksi ini tidak bisa dibatalkan.`,
		);
		if (ok) {
			setInvitations((prev) => (prev ?? []).filter((i) => i.id !== id));
			if (paginatedInvitations.length === 1 && currentPage > 1) {
				setCurrentPage((p) => p - 1);
			}
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-100">
			<div className="relative flex gap-0 lg:gap-6">
				{/* Sidebar */}
				<Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

				{/* Main */}
				<main className="flex-1 px-4 pb-10 pt-4 sm:px-6 lg:px-8">
					{/* Topbar (mobile) */}
					<div className="sticky top-0 z-30 -mx-4 mb-6 border-b border-white/60 bg-white/70 px-4 py-3 backdrop-blur lg:hidden">
						<div className="flex items-center justify-between">
							<button
								type="button"
								onClick={() => setSidebarOpen(true)}
								className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-violet-700 hover:bg-violet-100"
								aria-label="Buka menu"
							>
								<Menu className="h-5 w-5" />
								<span className="text-sm font-semibold">Menu</span>
							</button>
							{/* <a
								href="#support"
								className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-violet-700 hover:bg-violet-100"
							>
								<HelpCircle className="h-5 w-5" />
								<span className="text-sm font-medium">Support</span>
							</a> */}
						</div>
					</div>

					{/* Header */}

					<header className="mb-6 mt-8 flex flex-wrap items-center justify-end">
						<div className="flex flex-wrap">
							{/* <a
								href="#support"
								className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-violet-700"
							>
								<HelpCircle className="h-4 w-4" /> Contact Support
							</a> */}
						</div>
					</header>
					<div className="flex flex-wrap items-right justify-between gap-3 mb-2 p-4">
						<div>
							<h2 className="text-2xl font-extrabold tracking-tight text-[#4351BC] sm:text-3xl">
								Undanganmu
							</h2>
							<p className="mt-2 text-ml text-grey-200">
								Kelola draf dan undangan yang sudah terbit.
							</p>
						</div>

						<Pagination
							current={currentPage}
							total={totalPages}
							onPrev={() => setCurrentPage((p) => Math.max(1, p - 1))}
							onNext={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
							onJump={(page) => setCurrentPage(page)}
						/>
					</div>

					{/* Undanganmu Card */}
					<section className="mt-4 mb-4 rounded-3xl bg-white/10 p-4 sm:p-6">
						<div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,3fr)]">
							{/* Preview besar (kiri) */}
							<div className="flex h-48 items-center justify-center rounded-3xl border-2 border-[#4351BC]/80  sm:h-56 lg:h-64">
								<span className="text-sm text-blue-400">xxxx</span>
							</div>

							{/* Judul + tombol (kanan) */}
							<div className="flex h-auto flex-col justify-center gap-4">
								<div className="flex items-center justify-center  px-12 py-10 text-center mb-auto">
									<span className="line-clamp-2 text-base font-semibold text-slate-800 sm:text-lg">
										Pernikahan Lorem Ipsum Dolor Alamet
									</span>
								</div>

								<div className="flex flex-wrap items-center gap-3">
									<button
										type="button"
										className="mx-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4351BC] to-[#6b7bff] px-5 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
									>
										<FaEye className="h-5 w-5" /> Lihat Undangan
									</button>
									<button
										type="button"
										className="mx-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4351BC] to-[#6b7bff] px-5 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
									>
										<ExternalLink className="h-5 w-5" /> Bagikan Undangan
									</button>
								</div>
							</div>
						</div>
					</section>

					{/* Primary Card */}
					<section className="p-4">
						<div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
							<h3 className="text-xl font-semibold text-violet-900 sm:text-2xl">
								Start Build Invitation
							</h3>

							<div className="mt-6 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
								<a
									href="/all-invitations"
									className="inline-flex items-center text-violet-700 hover:text-violet-900"
								>
									See all <ArrowRight className="ml-1 h-4 w-4" />
								</a>
							</div>
							{/* <div className="flex flex-wrap gap-2">
								<button
									type="button"
									className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow hover:bg-violet-50"
								>
									View
								</button>
								<button
									type="button"
									className="inline-flex items-center gap-2 rounded-lg bg-[#4351BC] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#3642a0]"
								>
									Share Link <ArrowRight className="h-4 w-4" />
								</button>
							</div> */}
						</div>

						{/* Grid */}
						{invitations === null ? (
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
								{SKELETON_KEYS.map((key) => (
									<SkeletonCard key={key} />
								))}
							</div>
						) : invitations.length === 0 ? (
							<div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-violet-200 bg-violet-50/50 p-8 text-center">
								<p className="mb-4 text-violet-700">
									Belum ada undangan. Mulai buat sekarang.
								</p>
								<button
									type="button"
									className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
								>
									<PlusCircle className="h-4 w-4" /> Buat Undangan
								</button>
							</div>
						) : (
							<AnimatePresence mode="popLayout">
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
									{paginatedInvitations.map((inv) => (
										<InvitationCard
											key={inv.id}
											inv={inv}
											onEdit={(id) => alert(`Edit #${id}`)}
											onDelete={handleDelete}
										/>
									))}
								</div>
							</AnimatePresence>
						)}

						<div className="mt-6 flex flex-col-reverse items-center justify-end gap-4 sm:flex-row">
							<div className="text-sm text-violet-700/80">
								Menampilkan {paginatedInvitations.length || 0} dari{" "}
								{invitations?.length || 0} undangan
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default DashboardPage;

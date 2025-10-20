import { ArrowRight } from "lucide-react"; // Menggunakan ikon dari lucide-react

export default function CtaSection() {
	return (
		<section id="cta" className="relative">
			<div className="absolute inset-0 -z-10">
				<div className="absolute -top-10 left-1/2 -translate-x-1/2 h-60 w-[80%] rounded-full bg-blue-600 blur-3xl opacity-20" />
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
				<div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-yellow-400 p-1 shadow-lg">
					<div className="rounded-3xl bg-white px-6 py-10 sm:px-10">
						<div className="grid items-center gap-6 md:grid-cols-3">
							<div className="md:col-span-2">
								<h4 className="text-2xl font-bold tracking-tight">
									Siap Bikin Acara Lebih Modern?
								</h4>
								<p className="mt-2 text-slate-600">
									Ciptakan undangan digital profesional tanpa ribet. Gampang,
									cepat, langsung jadi.
								</p>
							</div>
							<div className="md:text-right">
								<a
									href="product"
									className="inline-flex items-center gap-2 rounded-2xl bg-[#4351BC] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
								>
									Buat Undangan Sekarang <ArrowRight className="h-4 w-4 ml-2" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// Reusable Component for Arrow Icon
function ArrowRightIcon() {
	return <ArrowRight className="h-4 w-4" />;
}

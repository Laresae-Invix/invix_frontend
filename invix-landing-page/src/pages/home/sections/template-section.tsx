import { TemplateCard } from "../../../components/templateCard";

export default function TemplateSection() {
	return (
		<section
			id="templates"
			className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14"
		>
			<div className="flex items-end justify-between gap-4">
				<div>
					<h3 className="text-2xl font-bold tracking-tight">
						Template Unggulan
					</h3>
					<p className="text-slate-600">
						Pilih gaya kamu. Semua responsif dan siap pakai.
					</p>
				</div>
				<a
					href="/product"
					className="text-sm font-semibold text-blue-700 hover:underline"
				>
					Lihat semua template
				</a>
			</div>

			<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{[
					{ name: "Aurora", tag: "Wedding" },
					{ name: "Spark", tag: "Birthday" },
					{ name: "Metro", tag: "Event" },
					{ name: "Luxe", tag: "Wedding" },
					{ name: "Neon", tag: "Festival" },
					{ name: "Bloom", tag: "Aqiqah" },
				].map((t) => (
					<TemplateCard key={t.name} name={t.name} tag={t.tag} />
				))}
			</div>
		</section>
	);
}

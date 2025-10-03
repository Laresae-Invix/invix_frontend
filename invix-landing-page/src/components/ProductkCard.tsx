type ProductCardProps = {
	title: string;
	description: string;
	imageUrl?: string;
	onDetailClick?: () => void;
};

export default function ProductCard({
	title,
	description,
	imageUrl,
	onDetailClick,
}: ProductCardProps) {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow transition">
			<div className="h-44 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={title}
						className="h-full w-full rounded-xl object-cover"
					/>
				) : (
					<span className="text-slate-400 text-sm">No Image</span>
				)}
			</div>

			<div className="mt-3 flex items-center justify-between">
				<div>
					<p className="font-semibold">{title}</p>
					<p className="text-xs text-slate-500">{description}</p>
				</div>

				{onDetailClick && (
					<button
						type="button"
						onClick={onDetailClick}
						className="rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
					>
						Detail
					</button>
				)}
			</div>
		</div>
	);
}

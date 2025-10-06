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
		<div className="mx-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg transition w-full max-w-xl">
			<div className="h-96 rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={title}
						className="h-full w-full rounded-2xl object-cover"
					/>
				) : (
					<span className="text-slate-400 text-lg">No Image</span>
				)}
			</div>

			<div className="mt-5 flex items-center justify-between">
				<div>
					<p className="font-semibold text-xl">{title}</p>
					<p className="text-base text-slate-500 mt-1">{description}</p>
				</div>

				{onDetailClick && (
					<button
						type="button"
						onClick={onDetailClick}
						className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
					>
						Detail
					</button>
				)}
			</div>
		</div>
	);
}

type ProductCardProps = {
	title: string;
	description: string;
	imageUrl?: string;
};

export default function ProductCard({
	title,
	description,
	imageUrl,
}: ProductCardProps) {
	return (
		<div className="rounded-2xl border bg-white p-4 shadow-sm">
			<div className="aspect-video rounded-xl bg-gray-100 flex items-center justify-center">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={title}
						className="h-full w-full rounded-xl object-cover"
					/>
				) : (
					<span className="text-gray-400 text-sm">No Image</span>
				)}
			</div>
			<h3 className="mt-3 font-semibold">{title}</h3>
			<p className="text-sm text-gray-600">{description}</p>
		</div>
	);
}

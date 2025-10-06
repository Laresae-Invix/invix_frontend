import frame_hp from "@/assets/framehp.png";
import no_content from "@/assets/no-content.webp";

type ProductCardProps = {
	title: string;
	description: string;
	imageUrl?: string;
	onDetailClick?: () => void;
};

export default function ProductCard({
	title,
	description,
	imageUrl = no_content,
	onDetailClick,
}: ProductCardProps) {
	return (
		<div className="mx-auto rounded-2xl p-4 shadow-sm hover:shadow-lg transition w-full max-w-xl">
			<div className="relative w-full flex items-center justify-center">
				{imageUrl && (
					<img
						src={imageUrl}
						alt={`${title} background`}
						className="w-[100%] h-[40vh] rounded-2xl object-cover opacity-80"
					/>
				)}

				<div className="absolute bottom-10 left-40 w-[55%] h-[55%]">
					<div className="relative w-full">
						<img
							src={frame_hp}
							alt="frame"
							className="w-full h-auto relative z-10"
						/>

						{imageUrl && (
							<img
								src={imageUrl}
								alt={title}
								className="
            absolute
            top-[5%]
            left-[5%]
            w-[90%]
            h-[93%]
            object-cover
            rounded-lg
            z-0
          "
							/>
						)}
					</div>
				</div>
			</div>

			<div className="mt-5 flex items-center justify-between w-[50%]">
				<div>
					<p className="font-semibold text-l">{title}</p>
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

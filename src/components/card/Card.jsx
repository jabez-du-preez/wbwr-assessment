import React from "react";
import { StyledCard } from "./styled";

/**
 * @method Card
 * @description takes in an image or video and displays it in a card
 */
export default function Card({
	image,
	imageAlt,
	id,
	video,
	videoAlt,
	showShopNow,
}) {
	return (
		<StyledCard id={id} className="flex flex-col h-full">
			<div className="group relative flex-grow flex">
				<div className="overflow-hidden rounded-sm flex-grow flex h-full w-full mb-2">
					{image && (
						<img
							src={image}
							alt={imageAlt}
							className="h-full w-full object-cover object-center"
						/>
					)}
					{video && (
						<video
							controls
							playsInline
							src={video}
							alt={videoAlt}
							className="h-full w-full object-cover"
						/>
					)}
				</div>
			</div>
			{showShopNow && (
				<a
					href="#best-gear"
					className="xs:hidden sm:hidden md:block text-sm underline font-semibold mt-2"
				>
					Shop now
				</a>
			)}
		</StyledCard>
	);
}

import React from "react";
import { StyledGrid } from "./styled";
import { gridConfig } from "./gridConfig";
import Card from "../card";
import SectionHeading from "../sectionHeading";
import Container from "../container";

/**
 * @method Grid
 * @description displays a grid of images and videos
 */
export default function Grid() {
	return (
		<section className="mb-8">
			<Container>
				<StyledGrid className="xs:mt-1 sm:mt-1 md:mt-1 lg:mt-6">
					<SectionHeading
						heading="What’s happening on Instagram"
						subHeading="Don’t miss out on the latest news and updates from Under Armour."
					/>
					<div className="grid-container grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 h-full min-h-full">
						{gridConfig.map((item, index) => {
							return item.featured ? (
								<div
									key={index}
									className="xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 row-span-2 flex h-full featured-item"
								>
									<Card key={index} {...item} />
								</div>
							) : (
								<div key={index} className="col-span-1 h-auto">
									<Card key={index} {...item} />
								</div>
							);
						})}
					</div>
				</StyledGrid>
			</Container>
		</section>
	);
}

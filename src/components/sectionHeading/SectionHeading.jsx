import React from "react";
import { StyledSectionHeading } from "./styled";

/**
 * @method SectionHeading
 * @description displays a section heading and subheading
 */
export default function SectionHeading({ heading, subHeading, className }) {
	return (
		<StyledSectionHeading className={`${className}`}>
			{heading && (
				<h2 className="section-heading font-bold xs:leading-8 sm:leading-8 md:leading-35 xs:text-22px sm:text-22px md:text-2xl">
					{heading}
				</h2>
			)}
			{subHeading && (
				<p className="section-sub-heading text-sm xs:leading-22 sm:leading-22 md:leading-5">
					{subHeading}
				</p>
			)}
		</StyledSectionHeading>
	);
}

import React from "react";
import { StyledSwiper } from "./styled";
import { Swiper as CustomSwiper } from "swiper/react";
import SectionHeading from "../sectionHeading";
import Container from "../container";

export default function Swiper({
	className,
	children,
	heading,
	subHeading,
	headingClassName,
}) {
	return (
		<Container>
			<StyledSwiper>
				<SectionHeading
					heading={heading}
					subHeading={subHeading}
					className={headingClassName}
				/>
				<CustomSwiper
					autoplay={{ delay: 3000 }}
					speed={1500}
					effect={"fade"}
					className={className}
					pagination={{
						clickable: true,
					}}
					spaceBetween={30}
					breakpoints={{
						280: {
							slidesPerView: 1.5,
							spaceBetween: 10,
						},
						320: {
							slidesPerView: 1.5,
							spaceBetween: 10,
						},
						640: {
							slidesPerView: 2.5,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3.5,
							spaceBetween: 10,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 10,
						},
					}}
				>
					{children}
				</CustomSwiper>
			</StyledSwiper>
		</Container>
	);
}

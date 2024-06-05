import React, { useEffect, useState } from "react";
import { StyledMidHero } from "./styled";
import midHeroBackgroundDesktop from "./../../images/UA_Theme_2_DT.jpg";
import midHeroBackgroundMobile from "./../../images/mobile/UA_Theme_2_MB.jpg";
import { useWindowSize } from "@uidotdev/usehooks";

/**
 * @method MidHero
 * @description displays the mid hero section of the page
 */
export default function MidHero({ className }) {
	const windowWidth = useWindowSize().width;

	const [backgroundImage, setBackgroundImage] = useState(
		midHeroBackgroundDesktop
	);

	useEffect(() => {
		// if the window width is less than 600px, set the background image to the mobile version
		if (windowWidth < 600) {
			setBackgroundImage(midHeroBackgroundMobile);
		} else {
			setBackgroundImage(midHeroBackgroundDesktop);
		}
	}, [windowWidth]);

	return (
		<StyledMidHero
			className={`${className} relative xs:w-full sm:w-full md:max-w-xl lg:max-w-4xl xl:max-w-6xl xs:mx-0 sm:mx-0 md:mx-0 lg:mx-auto`}
		>
			<div className="background-image sm:w-screen md:w-screen lg:w-full sm:block md:block">
				<img src={backgroundImage} alt="Under Armor" />
			</div>
			<div className="grid xs:grid-cols-1 sm:grid-cols1 md:grid-cols-3 gap-4 sm:relative md:absolute lg:absolute top-0 xs:mt-2 sm:mt-2 md:mt-2 lg:mt-8 md:w-screen lg:w-full h-full xs:p-3 sm:p-3 md:p-3 lg:p-0">
				<div className="xs:hidden sm:hidden md:block lg:block xs:col-span-0 sm:col-span-0 md:col-span-1 xs:row-span-0 sm:row-span-0 md:row-span-2 xs:h-0 sm:h-0 md:h-auto"></div>
				<div className="xs:hidden sm:hidden md:block lg:block xs:col-span-0 sm:col-span-0 md:col-span-1 xs:row-span-0 sm:row-span-0 md:row-span-2 xs:h-0 sm:h-0 md:h-auto"></div>
				<div className="col-span-1 h-auto xs:w-full md:w-full lg:w-9/12 xs:m-0 sm:m-0 md:m-0 lg:ml-6">
					<div className="ad-container flex flex-col w-full h-full justify-center align-middle">
						<p className="xs:text-black sm:text-black md:text-white lg:text-white text-base  font-semibold w-52 xs:mb-2 sm:mb-2 md:mb-2 lg:mb-4 xl:mb-4 2xl:mb-4 xs:leading-5 sm:leading-5 md:leading-5 lg:leading-4">
							Project Rock
						</p>
						<h1 className="xs:text-black sm:text-black md:text-white lg:text-white xs:text-5xl sm:text-5xl md:text-3xl lg:text-3xl xl:text-6xl 2xl:text-64px font-extrabold xs:mb-2 sm:mb-2 md:mb-2 lg:mb-4 xs:w-2/4 sm:w-2/4 md:w-full lg:w-60">
							EVERY SIDE OF STRONG
						</h1>
						<p className="text-sm xs:text-black sm:text-black md:text-white lg:text-white font-normal xs:2-11/12 sm:w-11/12 md:w-11/12 lg:w-full xs:mb-4 sm:mb-4 md:mb-4 lg:mb-8 xs:leading-5 sm:leading-5 md:leading-4 lg:leading-4">
							The Underground collection is inspired by the idea of a Project
							Rock fight club. A place where we push each other harder to make
							each other stronger. A drop dedicated to you and your crew. The
							neon colourways are a reflection of the energy we bring to every
							rep, every set and every challenge.
						</p>
						<button
							type="button"
							className="flex flex-row items-center justify-center text-sm xl:text-base text-white border-2 xs:bg-black sm:bg-black md:bg-transparent lg:bg-transparent xs:border-black sm:border-white md:border-white lg:border-white  xs:w-full sm:w-full md:w-full lg:w-64 h-11"
						>
							Shop Project Rock
						</button>
					</div>
				</div>
			</div>
		</StyledMidHero>
	);
}

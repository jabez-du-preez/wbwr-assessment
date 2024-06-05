import React from "react";
import { StyledHero } from "./styled";
import backgroundVideoDesktop from "./../../images/UA_Theme_1_DT.mp4";
import backgroundVideoMobile from "./../../images/mobile/UA_Theme_1_MB.mp4";

export default function Hero() {
	return (
		<StyledHero className="mb-60 relative">
			<div className="background-video xs:hidden sm:hidden md:hidden lg:block">
				<video autoPlay loop muted playsInline>
					<source src={backgroundVideoDesktop} type="video/mp4" />
				</video>
			</div>
			<div className="background-video sm:block md:block lg:hidden">
				<video autoPlay loop muted playsInline>
					<source src={backgroundVideoMobile} type="video/mp4" />
				</video>
			</div>
			<div className="ad-container xs:w-full sm:w-full md:max-w-xl sm:py-3 md:py-3 xs:px-3 sm:px-3 md:px-0 sm:relative md:relative lg:absolute flex top-0 flex-col w-full h-full justify-center align-middle">
				<h1 className="text-black xs:text-5xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-105px leading-1 font-extrabold mb-4 sm:w-3/4 md:w-3/4 lg:w-2/4 uppercase">
					Check out our latest gear
				</h1>
				<p className="text-black xs:text-sm sm:text-sm md:text-lg lg:text-xs xl:text-xs sm:w-full md:w-full lg:w-52 xs:mt-0 sm:mt-0 md:mt-0 lg:mt-4 xs:leading-5 sm:leading-5 md:leading-5 lg:leading-3 ">
					Advanced tech, superior comfort and all performance is what our latest
					UA gear is all about. Built to go further, push hard and break your
					boundaries.
				</p>
				<button
					type="button"
					className=" xs:text-xs sm:text-sm text-white bg-black sm:w-full md:w-full lg:w-64 h-11 xs:mt-6 sm:mt-6 md:mt-10"
				>
					Shop UA New Arrivals
				</button>
			</div>
		</StyledHero>
	);
}

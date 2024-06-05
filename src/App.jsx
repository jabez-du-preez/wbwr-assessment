import React from "react";
import "./index.css";
import "./fonts.css";
import "swiper/css";
import {
	Card,
	Footer,
	Grid,
	Header,
	Hero,
	MidHero,
	Swiper,
} from "./components";
import { gear, promos } from "./images";
import { SwiperSlide } from "swiper/react";

function App() {
	return (
		<main className="overflow-x-hidden">
			<Header />
			<Hero />
			<Swiper
				className={"mb-60"}
				headingClassName="mt-6 mb-4"
				heading="Our best gear"
				subHeading="Unlock your potential with the best UA Gear"
			>
				{gear.map((item, index) => (
					<SwiperSlide key={index}>
						<Card key={index} {...item} />
					</SwiperSlide>
				))}
			</Swiper>
			<MidHero className={"mb-60"} />
			<Swiper
				className={"mb-60"}
				headingClassName="xs:mt-0 sm:mt-0 md:mt-0 lg:mt-2 mb-4"
				heading="Discover our latest promotions"
				subHeading="Get the best deals on the best gear."
			>
				{promos.map((item, index) => (
					<SwiperSlide key={index}>
						<Card key={index} {...item} />
					</SwiperSlide>
				))}
			</Swiper>
			<Grid />
			<Footer />
		</main>
	);
}

export default App;

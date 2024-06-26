import React from "react";
import { StyledHeader } from "./styled";

/**
 * @method Header
 * @description displays the header of the page
 */
export default function Header() {
	return (
		<StyledHeader>
			<div className="header w-full h-20 bg-gray-500 flex flex-column justify-center items-center text-white">
				Header
			</div>
		</StyledHeader>
	);
}

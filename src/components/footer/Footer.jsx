import React from "react";
import { StyledFooter } from "./styled";

/**
 * @method Footer
 * @description displays the footer of the page
 */
export default function Footer() {
	return (
		<StyledFooter>
			<div className="header w-full h-400 bg-gray-500 flex flex-column justify-center items-center text-white">
				Footer
			</div>
		</StyledFooter>
	);
}

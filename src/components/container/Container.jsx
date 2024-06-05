import React from "react";
import { StyledContainer } from "./styled";

/**
 * @method Container
 * @description wraps children in a container
 */
export default function Container({ children, className }) {
	return (
		<StyledContainer
			className={`${className} xs:px-3 sm:px-3 md:px-0 xs:w-full sm:w-full md:max-w-xl lg:max-w-4xl xl:max-w-6xl xs:m-0 sm:m-0 md:mx-auto lg:mx-auto`}
		>
			{children}
		</StyledContainer>
	);
}

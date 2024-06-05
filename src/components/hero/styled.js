import styled from "styled-components";

export const StyledHero = styled.div`
	.ad-container {
		margin-left: 58%;

		@media screen and (min-width: 320px) {
			margin-left: 0;
		}

		@media screen and (min-width: 620px) {
			margin: auto;
		}

		@media screen and (min-width: 769px) {
			margin-left: auto;
		}

		@media screen and (min-width: 1024px) {
			margin-left: 58%;
		}
	}
`;

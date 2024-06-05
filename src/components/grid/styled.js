import styled from "styled-components";

export const StyledGrid = styled.div`
	.featured-item {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 100%;
	}

	.grid-container {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 1rem; /* Adjust gap as needed */
	}
`;

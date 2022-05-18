import styled from "styled-components";

export const CountryWrapper = styled.div`
	width: 200px;
	height: 250px;
	grid-template-rows: 50px repeat(4, 50px);
	border: 2px solid white;
	& > * {
		width: 100%;
		height: 100%;
		display: flex;
	}
`;

export const CounrtyHeader = styled.header`
	flex-direction: row;
	justify-content: start;
	align-items: center;
`;

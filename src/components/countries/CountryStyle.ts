import styled from "styled-components";

export const CountryWrapper = styled.div`
	width: 280px;
	height: 220px;
	grid-template-rows: 50px repeat(4, 50px);
	border: 2px solid white;
	padding-left: 15px;
	padding-right: 5px;
	/* overflow: hidden; */
	border-radius: 10px;
	--gap: 0;
	& > :not(button) {
		/* width: 100%;
		height: 100%; */
		display: flex;
		align-items: center;
	}
	& > section b {
		margin-right: 10px;
		color: #4cc0cd;
	}

	/* & > button {
		 width: 50%; 
		margin-bottom: 0.4em;
		border-radius: 5px;
	} */
`;

export const CounrtyHeader = styled.header`
	flex-direction: row;
	justify-content: start;
	align-items: center;
	/* overflow: hidden; */
	margin-right: 10px;

	& > span {
		margin-right: 10px;
	}
	& > h3 {
		height: 38px;
		color: #f0f0f4;
	}
`;

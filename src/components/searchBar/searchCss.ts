import styled from "styled-components";

export const SearchWrapper = styled.div`
	width: 90%;
	height: 200px;
	padding: 0.2em 1em;
	border: 2px solid rebeccapurple;
`;

export const InputSearch = styled.div`
	width: 400px;
	height: 40px;
	border: 1px solid gray;
	--gap: 0;
	overflow: hidden;
	border-radius: 0.2rem;

	input {
		width: 100%;
		padding: 0 1em;
	}

	.search-nav {
		/* position: absolute; */
		max-width: 50px;
		width: 40px;
		padding: 0.4em;
		height: 100%;
		img {
			width: 100%;
			height: 100%;
		}
	}
`;

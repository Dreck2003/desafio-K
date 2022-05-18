import styled from "styled-components";

export const SearchWrapper = styled.div`
	--gap: 0.5em;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	header > p {
		margin-bottom: 0.6em;
	}
`;

export const InputSearch = styled.form`
	width: 400px;
	height: 40px;
	/* border: 1px solid gray; */
	--gap: 0;
	overflow: hidden;
	border-radius: 0.2rem;

	input {
		width: 100%;
		padding: 0 1em;
		/* color: gray; */
	}

	.search-nav {
		/* position: absolute; */
		max-width: 50px;
		width: 40px;
		padding: 0.4em;
		height: 100%;
		cursor: pointer;
		img {
			width: 100%;
			height: 100%;
		}
	}
`;

export const ButtonsFilter = styled.section`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	/* margin-bottom: 2em; */
	margin-top: 2em;

	& > div {
		margin-right: 2.3em;
	}
	& button {
		margin-inline: 1em;
		padding: 0.8em 1em;
		border-radius: 5px;
		cursor: pointer;
	}
`;

import React from "react";
import { InputSearch, SearchWrapper } from "./searchCss";
export const SearchBar = (): JSX.Element => {
	return (
		<SearchWrapper className="flex">
			<InputSearch className="ps-rel flex">
				<input type="text" />
				<button className="search-nav bg-ligth">
					<img src="/images/bx-search.svg" alt="search"/>
				</button>
			</InputSearch>
		</SearchWrapper>
	);
};

import React from "react";
import { ButtonsFilter, InputSearch, SearchWrapper } from "./searchCss";
export const SearchBar = (): JSX.Element => {
	return (
		<SearchWrapper className="flex">
			<header>
				<h2 className="fs-800 text-contrast">
					Country <span className="text-ligth">Search</span>
				</h2>
				<p className="bold letter-s">Some random text</p>
			</header>
			<InputSearch className="ps-rel flex text-dark">
				<input type="text" className="bold" />
				<button className="search-nav bg-ligth">
					<img src="/images/bx-search.svg" alt="search" />
				</button>
			</InputSearch>
			<ButtonsFilter className="flex bold">
				<p className="fs-400">Group by : </p>
				<div>
					<button className="bg-ligth text-white bold letter-s">
						Continent
					</button>
					<button className=" bold letter-s">Language</button>
				</div>
			</ButtonsFilter>
		</SearchWrapper>
	);
};

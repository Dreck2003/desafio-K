import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Country } from "../../store/interface";
import {
	filter,
	setFilterName,
	setList,
	setName,
} from "../../store/slices/countries";
import {
	setCountriesContinent,
	setCountriesLenguage,
} from "../../store/slices/countries/actions";
import { ButtonsFilter, InputSearch, SearchWrapper } from "./searchCss";
export const SearchBar = (): JSX.Element => {
	const HashCountries = useAppSelector(state => state.countries.Hashcountries);
	const filtername = useAppSelector(state => state.countries.filterName);
	const name = useAppSelector(state => state.countries.name);
	const dispatch = useAppDispatch();

	const changeList = (letter: string) => {
		const filteredCountries = HashCountries.filter<Country>(
			letter,
			country => {
				return country.name.toLowerCase().startsWith(letter.toLowerCase());
			},
			-1
		);
		// console.log("Todos los que matchean: ", filteredCountries);

		let listCountries = {};
		if (filtername == filter.continent) {
			//Si el estato esta en continent:

			listCountries = setCountriesContinent(filteredCountries);
		} else {
			//Si el estato esta en lenguage:
			// console.log("SEteamos por el nombre: ", filtername);

			listCountries = setCountriesLenguage(filteredCountries);
		}

		// console.log("El nuevo hashMap: ", listCountries);
		dispatch(setList(listCountries));
		console.log("Se filtro!");
	};

	const handleClick = (event: any) => {
		event.preventDefault();
		const letter = event.target.name.value.trim();
		if (!letter) {
			alert("The name field cannot be empty");
			return;
		}
		// Queremos recorrer todo el HashMap para filtrar
		changeList(letter);
		dispatch(setName(letter));
	};
	useEffect(() => {
		changeList(name);
	}, [filtername]);

	return (
		<SearchWrapper className="flex">
			<header>
				<h2 className="fs-800 text-contrast">
					Country <span className="text-ligth">Search</span>
				</h2>
				<p className="bold letter-s">Some random text</p>
			</header>
			<InputSearch className="ps-rel flex text-dark" onSubmit={handleClick}>
				<input type="text" className="bold" name="name" />
				<button className="search-nav bg-ligth">
					<img src="/images/bx-search.svg" alt="search" />
				</button>
			</InputSearch>
			<ButtonsFilter className="flex bold">
				<p className="fs-400">Group by : </p>
				<div>
					<button
						className="bg-ligth text-white bold letter-s"
						onClick={event => {
							event.preventDefault();
							dispatch(setFilterName(filter.continent));
						}}
					>
						Continent
					</button>
					<button
						className=" bold letter-s"
						onClick={event => {
							event.preventDefault();
							dispatch(setFilterName(filter.language));
						}}
					>
						Language
					</button>
				</div>
			</ButtonsFilter>
		</SearchWrapper>
	);
};

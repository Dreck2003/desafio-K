/* eslint-disable linebreak-style */
import React, { useEffect } from "react";
import { SearchBar } from "./components/searchBar/searchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchCountries } from "./store/slices/countries/actions";
import { useAppDispatch } from "./hooks";
import { setHashCountries, setList, setLoaded } from "./store/slices/countries";
import HashTable from "./helpers/HashMap";
import { setCountriesContinent } from "./store/slices/countries/actions";
import { Country } from "./store/interface";
import { MainCards } from "./components/FilterCards/indext";

function Router() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		fetchCountries().then(response => {
			if (response[0]) {
				//Si trae respuesta entonces hay paises:
				dispatch(setHashCountries(response[1] as HashTable));
				const table = response[1] as HashTable;
				const countries = setCountriesContinent(table.table["a"] as Country[]);
				dispatch(setList(countries));
				dispatch(setLoaded(true));
			}
		});
	}, []);
	return (
		<div className="app_component grid bg-dark text-white">
			<BrowserRouter>
				<SearchBar />
				<Routes>
					<Route path="*" element={<MainCards />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default Router;

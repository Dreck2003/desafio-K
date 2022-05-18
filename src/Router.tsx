/* eslint-disable linebreak-style */
import React, { useEffect } from "react";
import { SearchBar } from "./components/searchBar/searchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { fetchCountries } from "./store/slices/countries/actions";
import { CardsContainer } from "./components/ContainerCards/CardContainer";

function Router() {
	useEffect(() => {
		// fetchCountries();
	}, []);
	return (
		<div className="app_component grid pages bg-dark text-white">
			<BrowserRouter>
				<SearchBar />
				<Routes>
					<Route path="*" element={<CardsContainer />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default Router;

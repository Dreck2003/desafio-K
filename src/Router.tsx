/* eslint-disable linebreak-style */
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { SearchBar } from "./components/searchBar/searchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const query = gql`
	query {
		countries {
			name
			code
		}
	}
`;

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Counties />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

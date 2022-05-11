/* eslint-disable linebreak-style */
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { SearchBar } from "./components/searchBar/searchBar";

const query = gql`
	query {
		countries {
			name
			code
		}
	}
`;

function App() {
	// const { data, error, loading } = useQuery(query);
	const response = useQuery(query);

	console.log(response);

	return (
		<div>
			<SearchBar/>
		</div>
	);
}

export default App;

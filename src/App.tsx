import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

	return <div className="App" />;
}

export default App;

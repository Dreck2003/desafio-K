/* eslint-disable linebreak-style */
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/clasessUtils.css";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./Router";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: "https://countries.trevorblades.com/",
	}),
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

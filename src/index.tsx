/* eslint-disable linebreak-style */
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/clasessUtils.css";
// import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
// import { ApolloProvider } from "@apollo/react-hooks";
import App from "./Router";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(<App />);

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import HashTable from "../../../helpers/HashMap";
import { PropString } from "../../interface";

export enum filter {
	continent = "continent",
	language = "language",
}

export interface InitialCountries {
	Hashcountries: HashTable;
	ListCountries: PropString;
	filterName: filter;
	name: string;
	loaded: boolean;
}

const initialState: InitialCountries = {
	Hashcountries: new HashTable(),
	ListCountries: {},
	filterName: filter.continent,
	name: "a",
	loaded: false,
};

export const stateCountries = createSlice({
	name: "countries",
	initialState: initialState,
	reducers: {
		setList: (state: InitialCountries, action: PayloadAction<PropString>) => {
			return {
				...state,
				ListCountries: action.payload,
			};
		},
		setHashCountries: (
			state: InitialCountries,
			action: PayloadAction<HashTable>
		) => {
			return {
				...state,
				Hashcountries: action.payload,
			};
		},
		setFilterName: (state: InitialCountries, action: PayloadAction<filter>) => {
			return {
				...state,
				filterName: action.payload,
			};
		},
		setName: (state: InitialCountries, action: PayloadAction<string>) => {
			return {
				...state,
				name: action.payload,
			};
		},
		setLoaded: (state: InitialCountries, action: PayloadAction<boolean>) => {
			return {
				...state,
				loaded: action.payload,
			};
		},
	},
});

export const { setHashCountries, setList, setFilterName, setName, setLoaded } =
	stateCountries.actions;

export default stateCountries.reducer;

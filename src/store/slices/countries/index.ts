import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import HashTable from "../../../helpers/HashMap";
import { PropString } from "../../interface";

export interface InitialCountries {
	countries: HashTable;
	ListCountries: PropString;
}

const initialState: InitialCountries = {
	countries: new HashTable(),
	ListCountries: {},
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
	},
});

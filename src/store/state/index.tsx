import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import stateCountries from "../slices/countries";

export const globalState = configureStore({
	reducer: {
		countries: stateCountries,
	},
	middleware: [
		...getDefaultMiddleware({
			serializableCheck: false,
		}),
	],
});

export type RootState = ReturnType<typeof globalState.getState>;
export type AppDispatch = typeof globalState.dispatch;

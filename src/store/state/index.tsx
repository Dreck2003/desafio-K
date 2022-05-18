import { configureStore } from "@reduxjs/toolkit";

export const globalState = configureStore({
	reducer: {
		countries: () => {
			console.log("wakaajaja");
		},
	},
});

export type RootState = ReturnType<typeof globalState.getState>;
export type AppDispatch = typeof globalState.dispatch;

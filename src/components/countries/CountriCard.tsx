import React from "react";
import { Country } from "../../store/interface";
import { CounrtyHeader, CountryWrapper } from "./CountryStyle";

export const CountryCard = ({
	name,
	capital,
	continent,
	emoji,
	lenguages,
}: Country) => {
	return (
		<CountryWrapper className="grid">
			<CounrtyHeader>
				<span>{emoji}</span>
				<h3 className="text-ligth uppercase">{name || "Nsot found"}</h3>
			</CounrtyHeader>
			<section>{capital}</section>
			<section>{continent}</section>
			<section>{lenguages}</section>
		</CountryWrapper>
	);
};

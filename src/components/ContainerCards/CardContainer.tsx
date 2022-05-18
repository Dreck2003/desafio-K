import React from "react";
import { Country } from "../../store/interface";
import { CountryCard } from "../countries/CountriCard";

interface ContainerProps {
	title: string;
	countries: Country[];
}

export const CardsContainer = ({ title, countries }: ContainerProps) => {
	return (
		<div className="card_container flex">
			<h3>{title || "Countries"}</h3>
			<div className="cards wrapper-all">
				{countries.map((country: Country) => {
					return (
						<CountryCard
							key={country.code}
							name={country.name}
							capital={country.capital}
							code={country.code}
							continent={country.continent}
							emoji={country.emoji}
							lenguages={country.lenguages}
						/>
					);
				})}
			</div>
		</div>
	);
};

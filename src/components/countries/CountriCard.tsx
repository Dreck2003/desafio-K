import React from "react";
import { FirstUp, textEllipsis } from "../../helpers/stringsFunc";
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
				<h3 className="text-white fs-500">
					{name ? FirstUp(textEllipsis(name, 12)) : "Not found"}
				</h3>
			</CounrtyHeader>
			<section>
				<b>Capital: </b>
				<br />
				<p>{capital ? textEllipsis(capital, 12) : "Not found"}</p>
			</section>
			<section>
				<b>Continent:</b>
				<p>{continent ? textEllipsis(continent, 12) : "Not found"}</p>
			</section>
			<section>
				<b>Lenguages:</b>
				<p>{lenguages.map(el => `${el} `)}</p>
			</section>
		</CountryWrapper>
	);
};

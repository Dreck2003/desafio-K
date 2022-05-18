import React from "react";
import { CountryCard } from "../countries/CountriCard";

const numeros = [1, 2, 3, 4, 5, 6];
export const CardsContainer = () => {
	return (
		<div className="cards wrapper-all flex">
			{numeros.map((i: number) => {
				return (
					<CountryCard
						key={i}
						name="dikson"
						capital="notredam"
						code="33"
						continent="Asia"
						emoji="😎"
						lenguages={["arabe", "others"]}
					/>
				);
			})}
		</div>
	);
};

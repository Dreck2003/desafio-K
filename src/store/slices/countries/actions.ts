import HashTable from "../../../helpers/HashMap";
import { Country, PropString } from "../../interface";

// Seting demostrate for continent or languaje:

export const setCountriesContinent = (countries: Country[]) => {
	const countriesList = countries.reduce((acc: PropString, el: Country) => {
		if (acc[el.continent]) {
			return {
				...acc,
				[`${el.continent}`]: acc[el.continent].concat(el),
			};
		} else {
			return {
				...acc,
				[`${el.continent}`]: [el],
			};
		}
	}, {});
	// console.log("La nueva Lista es: ", countriesList);

	return countriesList;
};

export const setCountriesLenguage = (countries: Country[]) => {
	const countriesList = countries.reduce((acc: PropString, el: Country) => {
		let returnState = {};
		el.lenguages.forEach((lenguage: string) => {
			// console.log("El lenguaje es: ", lenguage);

			if (acc[lenguage]) {
				returnState = {
					...acc,
					[lenguage]: acc[lenguage].concat(el),
				};
			} else {
				returnState = {
					...acc,
					[lenguage]: [el],
				};
			}
		});
		return returnState;
	}, {});
	// console.log("La nueva Lista  por lenguaje es: ", countriesList);

	return countriesList;
};

// // Setting HashMap Countries for autocomplete or set countries:
export const fetchCountries = async (): Promise<
	[boolean, HashTable | null]
> => {
	// Recibimos el nombre de cada country por el input
	const query = `
	query{
       countries{
        name
        code
        continent{
          name
        }
        currency
        capital
        languages{
          name
        }
        states{
          name
          code
        }
        emoji
      }
	}

	`;
	try {
		const response = await fetch("https://countries.trevorblades.com/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query: query }),
		});
		const data = await response.json();
		if (data.data && data.data.countries) {
			const createHashMap = new HashTable();

			data.data.countries.forEach((element: any) => {
				createHashMap.addItem<Country>(element.name, {
					name: element.name,
					capital: element.capital,
					continent: element.continent.name,
					emoji: element.emoji,
					lenguages: element.languages.map((len: any) => len.name),
					code: element.code,
				});
			});
			return [true, createHashMap];
		}
		return [false, null];
	} catch (error) {
		console.log("Error en fetchCountries: ", error);
		return [false, null];
	}
};

import React from "react";
import { useAppSelector } from "../../hooks";
import { PropString } from "../../store/interface";
import { CardsContainer } from "../ContainerCards/CardContainer";

const createLists = (list: PropString): JSX.Element[] => {
	const returnList: JSX.Element[] = [];
	for (const index in list) {
		returnList.push(
			<CardsContainer countries={list[index]} title={index} key={index} />
		);
	}

	return returnList;
};

export const MainCards = () => {
	const countriesList = useAppSelector(state => state.countries.ListCountries);
	const loaded = useAppSelector(state => state.countries.loaded);

	console.log("Se renderizo");
	const info = {
		parent: "",
	};
	if (!loaded || !Object.keys(countriesList).length) {
		// Si todavia no hay datos:
		info.parent = "empty"; // clase
	}
	return (
		<div className={`wrapper-all ${info.parent}`}>
			{loaded ? (
				Object.keys(countriesList).length ? (
					createLists(countriesList)
				) : (
					<b>Not content</b>
				)
			) : (
				<b>Loading...</b>
			)}
		</div>
	);
};

export const textEllipsis = (cadena: string, max: number): string => {
	if (cadena.length > max) {
		return `${cadena.slice(0, max)}...`;
	}
	return cadena;
};

export const FirstUp = (cadena: string) => {
	return cadena[0].toUpperCase() + cadena.slice(1).toLowerCase();
};

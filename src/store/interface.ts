export interface Country {
	name: string;
	emoji: string;
	code: string;
	continent: string;
	capital: string;
	lenguages: string[];
}

export interface PropString {
	[key: string]: Country[];
}

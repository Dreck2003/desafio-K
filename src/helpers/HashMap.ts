interface Table {
	[key: string]: any[];
}

export interface Hash {
	table: Table;
}

class HashTable {
	table: Table = {
		a: [],
		b: [],
		c: [],
		d: [],
		e: [],
		f: [],
		g: [],
		h: [],
		i: [],
		j: [],
		k: [],
		l: [],
		m: [],
		n: [],
		ñ: [],
		o: [],
		p: [],
		q: [],
		r: [],
		s: [],
		t: [],
		u: [],
		v: [],
		w: [],
		x: [],
		y: [],
		z: [],
	};

	/**
	 * addItem
	 * @name string for add a the table
	 * ```javascript
	 *  name="dikson"
	 * ```
	 */
	public addItem<T>(name: string, anything: T) {
		name = name.trim();
		const firstLetter: string = name[0].toLowerCase();
		// console.log("El name es: ", name);
		if (name && this.table[firstLetter]) {
			this.table[firstLetter].push(anything);
		}
	}

	/**
	 *
	 * @param nameBucket Bucket name
	 * @param callback callback for each object
	 * @param max Is the total iteration. If is -1 iteration=this.bucket[name].length
	 * @returns Array object for params
	 */
	public filter<T>(
		nameBucket: string,
		callback: (thing: T) => boolean,
		max = -1
	): T[] {
		const anything: string = nameBucket.toLowerCase()[0];
		if (!this.table[anything]) return [];

		// Si existe el bucket con el nombre, lo recorremos:
		const acc: T[] = [];
		const allObjects = this.table[anything];
		// Si el maximo es -1 quiere decir que recorremos todo
		const compare: () => boolean =
			max === -1 ? () => false : () => acc.length > max;

		let corte = 0;
		for (let i = 0; i < allObjects.length; i++) {
			if (corte > 1000) break;
			if (compare()) break;
			const isPassable: boolean = callback(allObjects[i]);
			//Si isPassable retorno true entonces el objeto cumplio la funcion
			if (isPassable) {
				acc.push(allObjects[i]);
			}
			corte++;
		}
		return acc;
	}
}

export default HashTable;

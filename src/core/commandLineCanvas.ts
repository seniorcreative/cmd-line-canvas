import { Canvas } from "./canvas";

export class CommandLineCanvas extends Canvas {

	constructor(width: number, height: number,) {
		super(width, height);
		this._matrix = this.createEmptyMatrix();
	}

	private createEmptyMatrix(): string[][] {
		const fullRow = new Array(this.width + 2).fill("-");
		const borderRow = [];
		const midRows = [];

		for (let col = 0; col <= this.width + 1; col++) {
			borderRow.push(col === 0 || col === this.width + 1 ? "|" : this.backgroundColor);
		}
		for (let row = 0; row < this.height; row++) {
			midRows.push([...borderRow]);
		}
		return [fullRow].concat(midRows).concat([fullRow]);
	}


}
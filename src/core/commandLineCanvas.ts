import { Canvas } from "./canvas";

export class CommandLineCanvas extends Canvas {

    constructor(width: number, height: number,) {
        super(width, height);
        this._matrix = this.createEmptyMatrix();
    }

    private createEmptyMatrix(): string[][] {
        let fullRow = new Array(this.width).fill('-');
        let borderRow = [];
        let midRows = [];

        for (let col: number = 0; col < this.width; col++) {
            borderRow.push(col === 0 || col === this.width - 1 ? '|' : this.backgroundColor);
        }
        for (let row: number = 0; row < this.height - 2; row++) {
            midRows.push([...borderRow]);
        }
        return [fullRow].concat(midRows).concat([fullRow]);
    }


}
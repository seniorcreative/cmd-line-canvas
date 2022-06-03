import { NumberUtils } from "../common/NumberUtils";
import { Point } from "../types/drawingTypes";

export abstract class Canvas {

    private _matrix: Array<Array<string>> = [];
    private _backgroundColor: string = ' ';

    constructor(
        public readonly width: number,
        public readonly height: number
    ) { }

    draw() {
        let fullRow = new Array(this.width).fill('-');
        let borderRow = [];
        let midRows = [];

        for (let col: number = 0; col < this.width; col++) {
            borderRow.push(col === 0 || col === this.width - 1 ? '|' : this.backgroundColor);
        }
        for (let row: number = 0; row < this.height - 2; row++) {
            midRows.push(JSON.parse(JSON.stringify(borderRow)));
        }
        this._matrix = [fullRow].concat(midRows).concat([fullRow]);
    }

    isWithin(point: Point): boolean {
        return true;
    }

    drawLine(from: Point, to: Point,): void {


        if (from.y === to.y) {  // Horizontal line
            let rowLine = this._matrix[from.y];
            for (let col = from.x; col <= to.x; col++) {
                rowLine[col] = 'x';
            }
        } else if (from.x === to.x) { // Vertical line
            for (let row = from.y; row <= to.y; row++) {
                this._matrix[row][from.x] = 'x';
            }
        } else {
            throw new Error("Line co-ords do not correspond with vertical or horizontal");
        }

    }

    drawRectangle(from: Point, to: Point, color: string): void {
        return;
    }

    fillArea(point: Point, color: string): void {
        return;
    }

    render() {
        // Print the canvas in the terminal
        NumberUtils.dumpOutput(this._matrix);
    }

    public get backgroundColor(): string {
        return this._backgroundColor;
    }

    public set backgroundColor(backgroundColor: string) {
        this._backgroundColor = backgroundColor;
    }

    public get matrix(): Array<Array<string>> {
        return this._matrix;
    }

    public set matrix(matrix: Array<Array<string>>) {
        this._matrix = matrix;
    }

}
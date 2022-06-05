import { NumberUtils } from "../common/numberUtils";
import { Point } from "../model/drawingTypes";

export abstract class Canvas {

    private _backgroundColor: string = ' ';
    public _matrix: string[][];

    constructor(
        public readonly width: number,
        public readonly height: number
    ) { }

    isWithin(point: Point): boolean {
        const xWithin = (point.x > 0) && (point.x < this.width)
        const yWithin = (point.y > 0) && (point.y < this.height)
        return xWithin && yWithin;
    }

    drawLine(from: Point, to: Point): void {
        if (!this.isWithin(from)) throw new Error('Point "from" is out of the canvas');
        if (!this.isWithin(to)) throw new Error('Point "to" is out of the canvas');
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

    drawRectangle(from: Point, to: Point): void {
        if (!this.isWithin(from)) throw new Error('Point "from" is out of the canvas');
        if (!this.isWithin(to)) throw new Error('Point "to" is out of the canvas');
        // Top row
        let rowLineTop = this._matrix[from.y];
        for (let col = from.x; col <= to.x; col++) {
            rowLineTop[col] = 'x';
        }

        // Mid rows (with fill if brushed inside)
        if ((from.y + 1) < to.y) {
            for (let row = from.y + 1; row < to.y; row++) {
                let rowLine = this._matrix[row];
                for (let col = from.x; col <= to.x; col++) {
                    if (col === from.x || col === to.x) {
                        rowLine[col] = 'x';
                    } else {
                        rowLine[col] = ' ';
                    }
                }
            }
        }

        // Bottom row
        let rowLineBottom = this._matrix[to.y];
        for (let col = from.x; col <= to.x; col++) {
            rowLineBottom[col] = 'x';
        }
    }

    fillArea(point: Point, color: string): void {
        if (!this.isWithin(point)) throw new Error('Point of brush mark is out of the canvas');
        //     // Brush coords need to be:
        //     // - within canvas bounds
        //     // - not on a line (or anything that is an 'x' char)
        //     // - inside a rect || outside a rect

        //     // Brush logic functions need to:
        //     // - paint canvas layer first 
        //     // - set a background color on canvas if brushed outside of a box
        //     // - fill canvas with background color 
        //     // - draw lines on top of the canvas
        //     // - draw rects on top of the canvas
        //     // - fill rects with fill color

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
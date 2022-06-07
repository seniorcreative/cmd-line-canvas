import { DrawRectangleCommandDescriptor } from "../model";
import { Point } from "../model/drawingTypes";

export abstract class Canvas {

	private _backgroundColor = " ";
	public _matrix: string[][] = [[]];
	private _borderColor = "x";

	constructor(
		public readonly width: number,
		public readonly height: number
	) { }

	isWithin(point: Point): boolean {
		const xWithin = (point.x > 0) && (point.x <= this.width);
		const yWithin = (point.y > 0) && (point.y <= this.height);
		return xWithin && yWithin;
	}

	drawLine(from: Point, to: Point): string[][] {
		if (!this.isWithin(from)) throw new Error("Point \"from\" is out of the canvas");
		if (!this.isWithin(to)) throw new Error("Point \"to\" is out of the canvas");

		if (from.y === to.y) {  // Horizontal line
			const rowLine = this._matrix[from.y];
			for (let col = from.x; col <= to.x; col++) {
				rowLine[col] = this._borderColor;
			}
			return this._matrix;
		} else if (from.x === to.x) { // Vertical line
			for (let row = from.y; row <= to.y; row++) {
				this._matrix[row][from.x] = this._borderColor;
			}
			return this._matrix;
		} else {
			throw new Error("Line co-ords do not correspond with vertical or horizontal");
		}
	}

	drawRectangle(from: Point, to: Point, fillColor?: string): string[][] {
		if (!this.isWithin(from)) throw new Error("Point \"from\" is out of the canvas");
		if (!this.isWithin(to)) throw new Error("Point \"to\" is out of the canvas");

		const rowLineTop = this._matrix[from.y];
		for (let col = from.x; col <= to.x; col++) {
			rowLineTop[col] = this._borderColor;
		}

		// Mid rows (with fill if brushed inside)
		if ((from.y + 1) < to.y) {
			for (let row = from.y + 1; row <= to.y; row++) {
				const rowLine = this._matrix[row];
				for (let col = from.x; col <= to.x; col++) {
					if (col === from.x || col === to.x) {
						rowLine[col] = this._borderColor;
					} else {
						rowLine[col] = fillColor || this.backgroundColor;
					}
				}
			}
		}

		// Bottom row
		const rowLineBottom = this._matrix[to.y];
		for (let col = from.x; col <= to.x; col++) {
			rowLineBottom[col] = this._borderColor;
		}
		return this._matrix;
	}

	fillArea(point: Point, color: string, rectangleCommands: DrawRectangleCommandDescriptor[]): void {
		if (!this.isWithin(point)) throw new Error("Point of brush mark is out of the canvas");
		this.fillObjectAtBrushPoint(point, color, rectangleCommands);
	}

	public fillObjectAtBrushPoint(point: Point, color: string, rectangleCommands: DrawRectangleCommandDescriptor[]) {
		const charAtBrushPoint: string = this._matrix[point.y][point.x];

		if (charAtBrushPoint === this._borderColor) {
			throw new Error("You can't brush on a line or border.");
		}

		const matchRectangles = rectangleCommands.filter((rectangleCommand: DrawRectangleCommandDescriptor) => {
			return rectangleCommand.from.x < point.x &&
				rectangleCommand.to.x > point.x &&
				rectangleCommand.from.y < point.y &&
				rectangleCommand.to.y > point.y;
		});

		if (matchRectangles.length) {
			matchRectangles.forEach((rectangleCommand: DrawRectangleCommandDescriptor) => {
				rectangleCommand.fillColor = color;
			});
		} else {
			this._backgroundColor = color;
		}

	}

	public get backgroundColor(): string {
		return this._backgroundColor;
	}

	public set backgroundColor(backgroundColor: string) {
		this._backgroundColor = backgroundColor;
	}

	public get matrix(): string[][] {
		return this._matrix;
	}

	public set matrix(matrix: string[][]) {
		this._matrix = matrix;
	}

}
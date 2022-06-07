import { Point } from "../model/drawingTypes";
import { OperationalError } from "./operationalError";

export abstract class Canvas {

	private _backgroundColor = " ";
	public _matrix: string[][] = [[]];
	private _borderColor = "x";

	constructor(
		public readonly width: number,
		public readonly height: number
	) {
		if (width < 3) throw new OperationalError("Width should be equal to or greater than 3");
		if (!Number.isInteger(width)) throw new OperationalError("Width should be an integer");
		if (height < 3) throw new OperationalError("Height should be equal to or greater than 3");
		if (!Number.isInteger(height)) throw new OperationalError("Height should be an integer");
	}

	isWithin(point: Point): boolean {
		const xWithin = (point.x > 0) && (point.x < this.width+1);
		const yWithin = (point.y > 0) && (point.y < this.height+1);
		return xWithin && yWithin;
	}

	validateDrawLine(from: Point, to: Point, lineCommands: Set<string>) : boolean {
		if (!this.isWithin(from)) throw new OperationalError("Point \"from\" is out of the canvas");
		if (!this.isWithin(to)) throw new OperationalError("Point \"to\" is out of the canvas");
		if (from.x != to.x && from.y != to.y) throw new OperationalError("The \"from\" point or \"to\" point for \"L\" command is not valid");
		lineCommands.add(JSON.stringify({command: "DRAW_LINE", from, to}));
		return true;
	}

	drawLine(from: Point, to: Point): string[][] {		
		if (from.y === to.y) {  // Horizontal line
			const rowLine = this.matrix[from.y];
			for (let col = from.x; col <= to.x; col++) {
				rowLine[col] = this._borderColor;
			}
		} else if (from.x === to.x) { // Vertical line
			for (let row = from.y; row <= to.y; row++) {
				this.matrix[row][from.x] = this._borderColor;
			}
		}
		
		return this.matrix;
	}

	validateDrawRectangle(from: Point, to: Point, fillColor: string | undefined, rectangleCommands: Set<string>): boolean {
		if (!this.isWithin(from)) throw new OperationalError("Point \"from\" is out of the canvas");
		if (!this.isWithin(to)) throw new OperationalError("Point \"to\" is out of the canvas");
		if (!fillColor) fillColor = " ";
		rectangleCommands.add(JSON.stringify({command: "DRAW_RECTANGLE", from, to, fillColor}));

		return true;
	}

	drawRectangle(from: Point, to: Point, fillColor: string | undefined): string[][] {
		
		const rowLineTop = this.matrix[from.y];
		for (let col = from.x; col <= to.x; col++) {
			rowLineTop[col] = this._borderColor;
		}

		// Mid rows (with fill if brushed inside)
		if ((from.y + 1) < to.y) {
			for (let row = from.y + 1; row <= to.y; row++) {
				const rowLine = this.matrix[row];
				for (let col = from.x; col <= to.x; col++) {
					if (col === from.x || col === to.x) {
						rowLine[col] = this._borderColor;
					} else {
						rowLine[col] = fillColor || " ";
					}
				}
			}
		}

		// Bottom row
		const rowLineBottom = this.matrix[to.y];
		for (let col = from.x; col <= to.x; col++) {
			rowLineBottom[col] = this._borderColor;
		}

		return this.matrix;
	}

	fillArea(point: Point, color: string, rectangleCommands: Set<string>): void {
		if (!this.isWithin(point)) throw new OperationalError("Point of brush mark is out of the canvas");
		if (color && color.length > 1) throw new OperationalError("Please use a color that is ony one character in length");
		this.fillObjectAtBrushPoint(point, color, rectangleCommands);
	}

	public fillObjectAtBrushPoint(point: Point, color: string, rectangleCommands: Set<string>) : void {
		const charAtBrushPoint: string = this.matrix[point.y][point.x];

		if (new Set([this._borderColor, "-" , "|"]).has(charAtBrushPoint)) {
			throw new OperationalError("You can't brush on a line or border");
		}

		const matchRectangles = [...rectangleCommands].filter((rectangleCommand: string) => {
			const parsedRectangleCommand = JSON.parse(rectangleCommand);
			return parsedRectangleCommand.from.x < point.x &&
				parsedRectangleCommand.to.x > point.x &&
				parsedRectangleCommand.from.y < point.y &&
				parsedRectangleCommand.to.y > point.y;
		});

		if (matchRectangles.length) {
			for (const rect in matchRectangles) {
				rectangleCommands.delete(matchRectangles[rect]);
				const parsedRectangleCommand = JSON.parse(matchRectangles[rect]);
				parsedRectangleCommand.fillColor = color;
				matchRectangles[rect] = JSON.stringify(parsedRectangleCommand);
				rectangleCommands.add(matchRectangles[rect]);
			}
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
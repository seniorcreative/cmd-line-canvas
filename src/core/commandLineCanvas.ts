import { CommandUtils } from "../common/commandUtils";
import { DrawLineCommandDescriptor, DrawRectangleCommandDescriptor } from "../model";
import { CommandStore } from "../model/commandStore";
import { Canvas } from "./canvas";

export class CommandLineCanvas extends Canvas {

	constructor(width: number, height: number) {
		super(width, height);
	}

	createEmptyMatrix(): string[][] {
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

	generate(commandStore: CommandStore): void {
		// Create empty matrix
		this._matrix = this.createEmptyMatrix();
		// Apply Lines
		commandStore.lineCommands.forEach((lineCommand: DrawLineCommandDescriptor) => {
			this._matrix = this.drawLine(lineCommand.from, lineCommand.to);
		});
		// Apply Rectangles
		commandStore.rectangleCommands.forEach((rectangleCommand: DrawRectangleCommandDescriptor) => {
			this._matrix = this.drawRectangle(rectangleCommand.from, rectangleCommand.to, rectangleCommand.fillColor);
		});
	}

	render(): void {
		// Print the canvas in the terminal
		CommandUtils.dumpOutput(this._matrix);
	}

}
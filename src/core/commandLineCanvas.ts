import { CommandUtils } from "../common/commandUtils";
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
		// Create empty matrix (with background color if set)
		this.matrix = this.createEmptyMatrix();
		// Apply Lines
		commandStore.lineCommands.forEach((lineCommand: string) => {
			const parsedLineCommand = JSON.parse(lineCommand);
			this.drawLine(parsedLineCommand.from, parsedLineCommand.to);
		});
		// Apply Rectangles (with fill colors if set)
		commandStore.rectangleCommands.forEach((rectangleCommand: string) => {
			const parsedRectangleCommand = JSON.parse(rectangleCommand);
			this.matrix = this.drawRectangle(parsedRectangleCommand.from, parsedRectangleCommand.to, parsedRectangleCommand.fillColor);
		});
	}

	render(): void {
		CommandUtils.drawCanvas(this.matrix);
	}

}
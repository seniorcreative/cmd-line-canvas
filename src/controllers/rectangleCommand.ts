import { CanvasProvider } from "../core/canvasProvider";
import { CommandLineCanvas } from "../core/commandLineCanvas";
import { Command } from "../model/commandTypes";
import { Point } from "../model/drawingTypes";
import { OperationalError } from "../core/operationalError";

export class RectangleCommand implements Command {

	constructor(
		public readonly from: Point,
		public readonly to: Point,
		public fillColor: string|undefined,
		private readonly canvasProvider: CanvasProvider,
		private readonly rectangleCommands: Set<string>
	) { 
		if (!canvasProvider.canvas) {
			throw new OperationalError("There's no canvas yet. Create one with the \"C\" command");
		}
	}

	execute(): void {
		const canvas: CommandLineCanvas | null = this.canvasProvider.canvas;
		if (canvas) {
			canvas.validateDrawRectangle(this.from, this.to, this.fillColor, this.rectangleCommands);
		}
	}
}
import { CanvasProvider } from "../core/canvasProvider";
import { CommandLineCanvas } from "../core/commandLineCanvas";
import { Command } from "../model/commandTypes";
import { Point } from "../model/drawingTypes";
import { OperationalError } from "../core/operationalError";

export class FillAreaCommand implements Command {

	constructor(
		public readonly point: Point,
		public readonly color: string,
		private readonly canvasProvider: CanvasProvider,
		private readonly rectangleCommands: Set<string>
	) { 
		if (!canvasProvider.canvas) {
			throw new OperationalError("There's no canvas yet. Create one with the \"C\" command");
		}
	}

	execute(): void {
		const canvas: CommandLineCanvas | null = this.canvasProvider.canvas;
		canvas && canvas.fillArea(this.point, this.color, this.rectangleCommands);
	}
}
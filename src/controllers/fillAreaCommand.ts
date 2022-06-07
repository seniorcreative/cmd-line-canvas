import { CanvasProvider } from "../core/canvasProvider";
import { CommandLineCanvas } from "../core/commandLineCanvas";
import { DrawRectangleCommandDescriptor } from "../model";
import { Command } from "../model/commandTypes";
import { Point } from "../model/drawingTypes";

export class FillAreaCommand implements Command {

	constructor(
		public readonly point: Point,
		public readonly color: string,
		private readonly canvasProvider: CanvasProvider,
		private readonly rectangleCommands: DrawRectangleCommandDescriptor[]
	) { }

	execute(): void {
		const canvas: CommandLineCanvas = this.canvasProvider.canvas;
		canvas.fillArea(this.point, this.color, this.rectangleCommands);
	}
}
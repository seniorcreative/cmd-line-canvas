import { CanvasProvider } from "../core/canvasProvider";
import { CommandLineCanvas } from "../core/commandLineCanvas";
import { Command } from "../model/commandTypes";
import { Point } from "../model/drawingTypes";

export class RectangleCommand implements Command {

	constructor(
		public readonly from: Point,
		public readonly to: Point,
		public fillColor: string | undefined,
		private readonly canvasProvider: CanvasProvider,
	) { }

	execute(): void {
		const canvas: CommandLineCanvas = this.canvasProvider.canvas;
		canvas.drawRectangle(this.from, this.to, this.fillColor);
	}
}
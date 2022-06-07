import { CommandLineCanvas } from "../core/commandLineCanvas";
import { CanvasProvider } from "../core/canvasProvider";
import { Command } from "../model/commandTypes";

export class CreateCanvasCommand implements Command {

	constructor(
		public readonly width: number,
		public readonly height: number,
		private readonly canvasProvider: CanvasProvider,
	) { }

	execute(): CanvasProvider {
		const canvas: CommandLineCanvas = new CommandLineCanvas(this.width, this.height);
		canvas.createEmptyMatrix();
		this.canvasProvider.register(canvas);
		return this.canvasProvider;
	}
}
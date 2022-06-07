import { CommandLineCanvas } from "../core/commandLineCanvas";
import { CanvasProvider } from "../core/canvasProvider";
import { Command } from "../model/commandTypes";
import { OperationalError } from "../core/operationalError";

export class CreateCanvasCommand implements Command {

	constructor(
		public readonly width: number,
		public readonly height: number,
		private readonly canvasProvider: CanvasProvider,
	) { 
		if (canvasProvider.canvas) {
			throw new OperationalError("There's already a canvas");
		}
	}

	execute(): CanvasProvider {
		const canvas: CommandLineCanvas = new CommandLineCanvas(this.width, this.height);

		this.canvasProvider.register(canvas);
		
		return this.canvasProvider;
	}
}
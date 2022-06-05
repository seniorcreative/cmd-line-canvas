import { CommandLineCanvas } from "../core/CommandLineCanvas";
import { CanvasProvider } from "../model/CanvasProvider";
import { Command } from "../types/commandTypes";

export class CreateCanvasCommand implements Command {

    constructor(
        public readonly width: number,
        public readonly height: number,
        private readonly canvasProvider: CanvasProvider,
    ) { }

    execute() {
        const canvas = new CommandLineCanvas(this.width, this.height);
        this.canvasProvider.register(canvas);
    }
}
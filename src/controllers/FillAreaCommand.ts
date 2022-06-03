import { CanvasProvider } from "../model/CanvasProvider";
import { Command } from "../types/commandTypes";
import { Point } from "../types/drawingTypes";

export class FillAreaCommand implements Command {

    constructor(
        public readonly point: Point,
        public readonly color: string,
        private readonly canvasProvider: CanvasProvider,
    ) { }

    execute() {
        const canvas = this.canvasProvider.canvas;
        canvas.fillArea(this.point, this.color);
    }
}
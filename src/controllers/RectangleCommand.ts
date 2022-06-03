import { CanvasProvider } from "../model/CanvasProvider";
import { Command } from "../types/commandTypes";
import { Point } from "../types/drawingTypes";

export class RectangleCommand implements Command {

    constructor(
        public readonly from: Point,
        public readonly to: Point,
        private readonly canvasProvider: CanvasProvider,
    ) { }

    execute() {
        const canvas = this.canvasProvider.canvas;
        canvas.drawRectangle(this.from, this.to);
    }
}
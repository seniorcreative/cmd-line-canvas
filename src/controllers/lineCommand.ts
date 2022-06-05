import { CanvasProvider } from "../core/canvasProvider";
import { Command } from "../model/commandTypes";
import { Point } from "../model/drawingTypes";

export class LineCommand implements Command {

    constructor(
        public readonly from: Point,
        public readonly to: Point,
        private readonly canvasProvider: CanvasProvider,
    ) { }

    execute(): void {
        const canvas = this.canvasProvider.canvas;
        canvas.drawLine(this.from, this.to);
    }
}
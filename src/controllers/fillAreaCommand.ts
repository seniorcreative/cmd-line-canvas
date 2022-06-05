import { CanvasProvider } from "../core/canvasProvider";
import { Command } from "../model/commandTypes";
import { Point } from "../model/drawingTypes";

export class FillAreaCommand implements Command {

    constructor(
        public readonly point: Point,
        public readonly color: string,
        private readonly canvasProvider: CanvasProvider,
    ) { }

    execute(): void {
        const canvas = this.canvasProvider.canvas;
        canvas.fillArea(this.point, this.color);
    }
}
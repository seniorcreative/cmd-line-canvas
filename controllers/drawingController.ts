import { CanvasProps } from "../types/drawingTypes";
import DrawingModel from "../model/drawingModel";

export function canvasMethod(canvasProps: CanvasProps) {

    const { width, height, backgroundColor } = canvasProps;

    let fullRow = new Array(width).fill(DrawingModel.borderColor);
    let borderRow = [];
    let midRows = [];

    for (let col: number = 0; col < width; col++) {
        borderRow.push(col === 0 || col === width - 1 ? DrawingModel.borderColor : backgroundColor);
    }
    for (let row: number = 0; row < height - 2; row++) {
        midRows.push(JSON.parse(JSON.stringify(borderRow)));
    }
    let matrix = [fullRow].concat(midRows).concat([fullRow]);

    return matrix;
}

import { CanvasProps, LineProps, RectProps } from "../types/drawingTypes";
import DrawingModel from "../model/drawingModel";

export function canvasMethod(canvasProps: CanvasProps) {

    const { width, height, backgroundColor } = canvasProps;

    let fullRow = new Array(width).fill('-');
    let borderRow = [];
    let midRows = [];

    for (let col: number = 0; col < width; col++) {
        borderRow.push(col === 0 || col === width - 1 ? '|' : backgroundColor);
    }
    for (let row: number = 0; row < height - 2; row++) {
        midRows.push(JSON.parse(JSON.stringify(borderRow)));
    }
    let matrix = [fullRow].concat(midRows).concat([fullRow]);

    return matrix;
}

export function lineMethod(lineProps: LineProps) {

    const { x1, y1, x2, y2 } = lineProps;

    let matrix = DrawingModel.drawingMatrix;

    if (y1 === y2) {  // Horizontal line
        let rowLine = matrix[y1];
        for (let col = x1; col <= x2; col++) {
            rowLine[col] = 'x';
        }
    } else if (x1 === x2) { // Vertical line
        for (let row = y1; row <= y2; row++) {
            matrix[row][x1] = 'x';
        }
    }

    return matrix;

}

export function rectMethod(rectProps: RectProps) {

    const { x1, y1, x2, y2 } = rectProps;

    let matrix = DrawingModel.drawingMatrix;

    // Top side
    let rowLineTop = matrix[y1];
    for (let col = x1; col <= x2; col++) {
        rowLineTop[col] = 'x';
    }
    // Left side
    for (let row = y1; row <= y2; row++) {
        matrix[row][x1] = 'x';
    }

    // Bottom side
    let rowLineBottom = matrix[y2];
    for (let col = x1; col <= x2; col++) {
        rowLineBottom[col] = 'x';
    }
    // Right side
    for (let row = y1; row <= y2; row++) {
        matrix[row][x2] = 'x';
    }

    return matrix;

}

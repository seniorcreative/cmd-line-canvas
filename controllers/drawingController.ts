import { CanvasProps, LineProps } from "../types/drawingTypes";
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

    // { x1: 1, y1: 2, x2: 3, y2: 2 }

    // let matrix = [['-', '-', '-', '-', '-'],
    // ['|', '', ' ', ' ', '|'],
    // ['|', '1,2', '2,2', '3,2', '|'],
    // ['|', ' ', ' ', ' ', '|'],
    // ['-', '-', '-', '-', '-']];

    let matrix = DrawingModel.drawingMatrix;

    if (y1 === y2) {
        // Horizontal line
        let rowLine = matrix[y1];
        for (let col = x1; col <= x2; col++) {
            rowLine[col] = 'x';
        }
    } else if (x1 === x2) {
        // Vertical line
        for (let row = y1; row <= y2; row++) {
            matrix[row][x1] = 'x';
        }
    } else {
        // Line not allowed

    }

    return matrix;

}

import { BrushProps, CanvasProps, LineProps, RectProps } from "../types/drawingTypes";
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
        midRows.push([...borderRow]);
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

    const { x1, y1, x2, y2, backgroundColor } = rectProps;

    let matrix = DrawingModel.drawingMatrix;

    // Top row
    let rowLineTop = matrix[y1];
    for (let col = x1; col <= x2; col++) {
        rowLineTop[col] = 'x';
    }

    // Mid rows (with fill if brushed inside)
    if ((y1 + 1) < y2) {
        for (let row = y1 + 1; row < y2; row++) {
            let rowLine = matrix[row];
            for (let col = x1; col <= x2; col++) {
                if (col === x1 || col === x2) {
                    rowLine[col] = 'x';
                } else {
                    rowLine[col] = backgroundColor ? backgroundColor : ' ';
                }
            }
        }
    }

    // Bottom row
    let rowLineBottom = matrix[y2];
    for (let col = x1; col <= x2; col++) {
        rowLineBottom[col] = 'x';
    }

    return matrix;

}

export function brushMethod(brushProps: BrushProps) {

    const { x, y, brushColor } = brushProps;

    // Brush coords need to be:
    // - within canvas bounds
    // - not on a line (or anything that is an 'x' char)
    // - inside a rect || outside a rect

    // Brush logic functions need to:
    // - paint canvas layer first 
    // - set a background color on canvas if brushed outside of a box
    // - fill canvas with background color 
    // - draw lines on top of the canvas
    // - draw rects on top of the canvas
    // - fill rects with fill color

}

import { CanvasProps } from "../types/drawingTypes";

export function canvasMethod(canvasProps: CanvasProps) {

    const { width, height, backgroundColor } = canvasProps;

    let fullRow = new Array(width).fill('X');
    //
    let borderRow = [];
    for (let col: number = 0; col < width; col++) {
        borderRow.push(col === 0 || col === width - 1 ? 'X' : backgroundColor);
    }
    // TODO: Make sure there is a test for w Min 3 and h min 3 - don't allow to have a canvas smaller [EDGE]
    let midRows = [];
    for (let row: number = 0; row < height - 2; row++) {
        midRows.push(JSON.parse(JSON.stringify(borderRow)));
    }
    let matrix = [fullRow].concat(midRows).concat([fullRow]);
    return matrix;
}

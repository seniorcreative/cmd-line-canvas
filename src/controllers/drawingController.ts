import { FillArea, Line, Rect } from "../types/drawingTypes";
import DrawModel from "../model/DrawModel";


// export function lineMethod(lineProps: Line) {

//     const { from, to } = lineProps;

//     let matrix = DrawModel.drawingMatrix;

//     if (from.y === to.y) {  // Horizontal line
//         let rowLine = matrix[from.y];
//         for (let col = from.x; col <= to.x; col++) {
//             rowLine[col] = 'x';
//         }
//     } else if (from.x === to.x) { // Vertical line
//         for (let row = from.y; row <= to.y; row++) {
//             matrix[row][from.x] = 'x';
//         }
//     }

//     return matrix;

// }

// export function rectMethod(rectProps: Rect) {

//     const { from, to, backgroundColor } = rectProps;

//     let matrix = DrawModel.drawingMatrix;

//     // Top row
//     let rowLineTop = matrix[from.y];
//     for (let col = from.x; col <= to.x; col++) {
//         rowLineTop[col] = 'x';
//     }

//     // Mid rows (with fill if brushed inside)
//     if ((from.y + 1) < to.y) {
//         for (let row = from.y + 1; row < to.y; row++) {
//             let rowLine = matrix[row];
//             for (let col = from.x; col <= to.x; col++) {
//                 if (col === from.x || col === to.x) {
//                     rowLine[col] = 'x';
//                 } else {
//                     rowLine[col] = backgroundColor ? backgroundColor : ' ';
//                 }
//             }
//         }
//     }

//     // Bottom row
//     let rowLineBottom = matrix[to.y];
//     for (let col = from.x; col <= to.x; col++) {
//         rowLineBottom[col] = 'x';
//     }

//     return matrix;

// }

// export function brushMethod(brushProps: FillArea) {

//     const { point, backgroundColor } = brushProps;

//     // Brush coords need to be:
//     // - within canvas bounds
//     // - not on a line (or anything that is an 'x' char)
//     // - inside a rect || outside a rect

//     // Brush logic functions need to:
//     // - paint canvas layer first 
//     // - set a background color on canvas if brushed outside of a box
//     // - fill canvas with background color 
//     // - draw lines on top of the canvas
//     // - draw rects on top of the canvas
//     // - fill rects with fill color

// }

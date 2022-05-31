export function canvasMethod(width: number, height: number) {
    let row = new Array(width).fill(0);
    let matrix = new Array(height).fill(JSON.parse(JSON.stringify(row)));
    return matrix;
}

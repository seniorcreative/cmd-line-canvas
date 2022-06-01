export default class DrawingModel {

    private static _backgroundColor: string = ' ';
    private static _borderColor: string = 'x';
    private static _canvasAvailable: boolean = false;
    private static _drawingMatrix: Array<Array<string>> = [];
    private static _instructions: any = { C: 2, L: 4, R: 4, B: 3, Q: 0 };


    static set backgroundColor(color: string) {
        DrawingModel._backgroundColor = color;
    }

    static get backgroundColor() {
        return DrawingModel._backgroundColor;
    }

    static set borderColor(color: string) {
        DrawingModel._borderColor = color;
    }

    static get borderColor() {
        return DrawingModel._borderColor;
    }

    static set canvasAvailable(available: boolean) {
        DrawingModel._canvasAvailable = available;
    }

    static get canvasAvailable() {
        return DrawingModel._canvasAvailable;
    }

    static set drawingMatrix(matrix: any) {
        DrawingModel._drawingMatrix = matrix;
    }

    static get drawingMatrix() {
        return DrawingModel._drawingMatrix;
    }

    static set instructions(instructions: any) {
        DrawingModel._instructions = instructions;
    }

    static get instructions() {
        return DrawingModel._instructions;
    }

}
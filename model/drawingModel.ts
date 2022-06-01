export default class DrawingModel {

    private static _backgroundColor: string = ' ';
    private static _canvasAvailable: boolean = false;
    private static _drawingMatrix: any[] = [];

    static set backgroundColor(color: string) {
        DrawingModel._backgroundColor = color;
    }

    static get backgroundColor() {
        return DrawingModel._backgroundColor;
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


}
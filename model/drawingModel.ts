export default class DrawingModel {

    private static _backgroundColor: string = ' ';
    private static _canvasAvailable: boolean = false;
    private static _drawingMatrix: Array<Array<string>> = [];
    private static _instructions: any = { C: 2, L: 4, R: 4, B: 3, Q: 0 };
    private static _stashedCommands: Array<string> = [];

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

    static set instructions(instructions: any) {
        DrawingModel._instructions = instructions;
    }

    static get instructions() {
        return DrawingModel._instructions;
    }

    static stashCommand(command: string) {
        DrawingModel._stashedCommands.push(command);
    }

    static get stashedCommands() {
        return DrawingModel._stashedCommands;
    }


}
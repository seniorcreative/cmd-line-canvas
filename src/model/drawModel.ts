export default class DrawModel {

    private static _canvasAvailable: boolean = false;
    private static _drawingMatrix: Array<Array<string>> = [];
    private static _instructions: any = { C: 2, L: 4, R: 4, B: 3, Q: 0 };
    private static _stashedCommands: string[] = [];

    static set canvasAvailable(available: boolean) {
        DrawModel._canvasAvailable = available;
    }

    static get canvasAvailable(): boolean {
        return DrawModel._canvasAvailable;
    }

    static set drawingMatrix(matrix: any) {
        DrawModel._drawingMatrix = matrix;
    }

    static get drawingMatrix(): string[][] {
        return DrawModel._drawingMatrix;
    }

    static set instructions(instructions: any) {
        DrawModel._instructions = instructions;
    }

    static get instructions(): any {
        return DrawModel._instructions;
    }

    static stashCommand(command: string) {
        DrawModel._stashedCommands.push(command);
    }

    static get stashedCommands(): string[] {
        return DrawModel._stashedCommands;
    }


}
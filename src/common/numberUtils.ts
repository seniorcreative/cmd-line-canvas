
import DrawingModel from "../model/drawModel";

export class NumberUtils {

    static cmdFirstLetterIsAlpha(cmd: string) {
        return isNaN(Number(this.cmdFirstLetter(cmd)));
    }

    static cmdFirstLetterIsValid(cmd: string) {
        const firstLetter: string = this.cmdFirstLetter(cmd);
        return Object(DrawingModel.instructions).hasOwnProperty(firstLetter);
    }

    static cmdHasCorrectNumArgs(cmd: string) {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = this.cmdFirstLetter(cmd);
        if (DrawingModel.instructions[firstLetter] === cmdSplit.length - 1)
            return DrawingModel.instructions[firstLetter];
        else {
            return false;
        }
    }

    // A canvas needs to be a minimum of 3 x 3
    static cmdCanvasParamsCheck(width: number, height: number): boolean {
        return (width > 2 && height > 2);
    }

    // A line needs to have either x or y values that are equal
    static cmdLineParamsCheck(cmd: string) {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = this.cmdFirstLetter(cmd);
        switch (firstLetter) {

            case 'L':
                const hasEitherMatches: boolean = (
                    this.parseIntOrThrow(cmdSplit[1], 'Line x1 must be an integer') === this.parseIntOrThrow(cmdSplit[3], 'Line x2 must be an integer') ||
                    this.parseIntOrThrow(cmdSplit[2], 'Line y1 must be an integer') === this.parseIntOrThrow(cmdSplit[4], 'Line y2 must be an integer'))
                return hasEitherMatches;

            default:
                return true;

        }

    }

    // A line needs to be drawn within the canvas bounds
    // A rect needs to be drawn within the canvas bounds
    // A brush needs to be applied within the canvas bounds
    static cmdBoundsCheck(cmd: string) {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = this.cmdFirstLetter(cmd);

        switch (firstLetter) {
            case "L":
            case "R":
                const x1WithinBounds: boolean = this.parseIntOrThrow(cmdSplit[1], 'x1 must be an integer') > 0 && this.parseIntOrThrow(cmdSplit[1], 'x1 must be an integer') < DrawingModel.drawingMatrix[0].length - 1;
                const y1WithinBounds: boolean = this.parseIntOrThrow(cmdSplit[2], 'y1 must be an integer') > 0 && this.parseIntOrThrow(cmdSplit[2], 'y1 must be an integer') < DrawingModel.drawingMatrix.length - 1;
                const x2WithinBounds: boolean = this.parseIntOrThrow(cmdSplit[3], 'x2 must be an integer') > 0 && this.parseIntOrThrow(cmdSplit[3], 'x2 must be an integer') < DrawingModel.drawingMatrix[0].length - 1;
                const y2WithinBounds: boolean = this.parseIntOrThrow(cmdSplit[4], 'y2 must be an integer') > 0 && this.parseIntOrThrow(cmdSplit[4], 'y2 must be an integer') < DrawingModel.drawingMatrix.length - 1;
                // console.log(x1WithinBounds, DrawingModel.drawingMatrix[0].length - 1, y1WithinBounds, DrawingModel.drawingMatrix.length - 1, x2WithinBounds, DrawingModel.drawingMatrix[0].length - 1, y2WithinBounds, DrawingModel.drawingMatrix.length - 1);
                return x1WithinBounds && y1WithinBounds && x2WithinBounds && y2WithinBounds;
            case "B":
                const xWithinBounds: boolean = this.parseIntOrThrow(cmdSplit[1], 'x must be an integer') > 0 && this.parseIntOrThrow(cmdSplit[1], 'x must be an integer') < DrawingModel.drawingMatrix[0].length - 1;
                const yWithinBounds: boolean = this.parseIntOrThrow(cmdSplit[2], 'y must be an integer') > 0 && this.parseIntOrThrow(cmdSplit[2], 'y must be an integer') < DrawingModel.drawingMatrix.length - 1;
                return xWithinBounds && yWithinBounds;
            default:
                return true;
        }

    }

    static cmdFirstLetter(cmd: string) {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = cmdSplit[0].toUpperCase();
        return firstLetter;
    }

    static parseIntOrThrow(value: any, errorMessage: string) {
        const number = parseInt(value);

        if (isNaN(number)) throw new Error(errorMessage)

        return number;
    }

    static dumpOutput(output: any) {
        for (let line in output) {
            console.log(output[line].join(''));
        }
    }

}
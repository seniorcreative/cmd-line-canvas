
import DrawingModel from "../model/DrawModel";

export class NumberUtils {

    static cmdHasMinSpaces(cmd: string, numSpaces: number) {
        return (cmd.split(" ").length - 1) >= numSpaces;
    }

    static cmdHasMaxSpaces(cmd: string, numSpaces: number) {
        return (cmd.split(" ").length - 1) <= numSpaces;
    }

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
    static cmdCanvasParamsCheck(cmd: string) {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = this.cmdFirstLetter(cmd);
        if (String(firstLetter) === 'C') {
            return (this.checkWholeNumber(cmdSplit[1]) >= 3 && this.checkWholeNumber(cmdSplit[2]) >= 3)
        } else {
            return true;
        }
    }

    // A line needs to have either x or y values that are equal
    static cmdLineParamsCheck(cmd: string) {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = this.cmdFirstLetter(cmd);
        switch (firstLetter) {

            case 'L':
                const hasEitherMatches: boolean = (this.checkWholeNumber(cmdSplit[1]) === this.checkWholeNumber(cmdSplit[3]) || this.checkWholeNumber(cmdSplit[2]) === this.checkWholeNumber(cmdSplit[4]))
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
                const x1WithinBounds: boolean = this.checkWholeNumber(cmdSplit[1]) > 0 && this.checkWholeNumber(cmdSplit[1]) < DrawingModel.drawingMatrix[0].length - 1;
                const y1WithinBounds: boolean = this.checkWholeNumber(cmdSplit[2]) > 0 && this.checkWholeNumber(cmdSplit[2]) < DrawingModel.drawingMatrix.length - 1;
                const x2WithinBounds: boolean = this.checkWholeNumber(cmdSplit[3]) > 0 && this.checkWholeNumber(cmdSplit[3]) < DrawingModel.drawingMatrix[0].length - 1;
                const y2WithinBounds: boolean = this.checkWholeNumber(cmdSplit[4]) > 0 && this.checkWholeNumber(cmdSplit[4]) < DrawingModel.drawingMatrix.length - 1;
                // console.log(x1WithinBounds, DrawingModel.drawingMatrix[0].length - 1, y1WithinBounds, DrawingModel.drawingMatrix.length - 1, x2WithinBounds, DrawingModel.drawingMatrix[0].length - 1, y2WithinBounds, DrawingModel.drawingMatrix.length - 1);
                return x1WithinBounds && y1WithinBounds && x2WithinBounds && y2WithinBounds;
            case "B":
                const xWithinBounds: boolean = this.checkWholeNumber(cmdSplit[1]) > 0 && this.checkWholeNumber(cmdSplit[1]) < DrawingModel.drawingMatrix[0].length - 1;
                const yWithinBounds: boolean = this.checkWholeNumber(cmdSplit[2]) > 0 && this.checkWholeNumber(cmdSplit[2]) < DrawingModel.drawingMatrix.length - 1;
                return xWithinBounds && yWithinBounds;
            default:
                return true;
        }

    }

    static canvasAvailableForCommand(cmd: string) {
        return this.cmdFirstLetter(cmd) !== "C" ? DrawingModel.canvasAvailable === true : true
    }

    // Check for trying to pass decimals
    static checkWholeNumber(val: any) {
        const num: number = Number(val);
        if (isNaN(num)) return 0;
        return num % 1 === 0 ? num : 0;
    }

    static cmdFirstLetter(cmd: string) {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = cmdSplit[0].toUpperCase();
        return firstLetter;
    }

    // Composite function
    static cmdIsValid(cmd: string) {
        return this.cmdHasMinSpaces(cmd, 2) &&
            this.cmdHasMaxSpaces(cmd, 4) &&
            this.cmdFirstLetterIsAlpha(cmd) &&
            this.cmdFirstLetterIsValid(cmd) &&
            this.cmdCanvasParamsCheck(cmd) &&
            this.cmdLineParamsCheck(cmd) &&
            this.cmdBoundsCheck(cmd) &&
            this.canvasAvailableForCommand(cmd) &&
            this.cmdHasCorrectNumArgs(cmd) === DrawingModel.instructions[this.cmdFirstLetter(cmd)]
    }

    static parseIntOrThrow(value: any, errorMessage: string) {
        if (parseInt(value)) {
            return parseInt(value)
        } else {
            throw new Error(errorMessage)
        }
    }

    static dumpOutput(output: any) {
        for (let line in output) {
            console.log(output[line].join(''));
        }
    }

}
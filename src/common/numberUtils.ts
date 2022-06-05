
import { Point } from "../model/drawingTypes";
import DrawingModel from "../model/drawModel";

export class NumberUtils {

    static cmdFirstLetterIsAlpha(cmd: string): boolean {
        return isNaN(Number(this.cmdFirstLetter(cmd)));
    }

    static cmdFirstLetterIsValid(cmd: string): boolean {
        const firstLetter: string = this.cmdFirstLetter(cmd);
        return Object(DrawingModel.instructions).hasOwnProperty(firstLetter);
    }

    static cmdHasCorrectNumArgs(cmd: string): boolean {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = this.cmdFirstLetter(cmd);
        if (DrawingModel.instructions[firstLetter] === cmdSplit.length - 1)
            return DrawingModel.instructions[firstLetter];
        else {
            return false;
        }
    }

    // A canvas needs to be a minimum of 3 x 3
    static cmdCanvasSizeCheckOrThrow(width: number, height: number, errorMessage: string): void {
        if (!(width > 2 && height > 2)) throw new Error(errorMessage);
    }

    // A line needs to have either x or y values that are equal
    static cmdLineParamsCheckOrThrow(from: Point, to: Point, errorMessage: string): boolean {

        const hasEitherMatches: boolean = (
            this.parseIntOrThrow(from.x, 'Line x1 must be an integer') === this.parseIntOrThrow(to.x, 'Line x2 must be an integer') ||
            this.parseIntOrThrow(from.y, 'Line y1 must be an integer') === this.parseIntOrThrow(to.y, 'Line y2 must be an integer'))
        if (!hasEitherMatches) throw new Error(errorMessage);

        return true;

    }

    static cmdFirstLetter(cmd: string): string {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = cmdSplit[0].toUpperCase();
        return firstLetter;
    }

    static parseIntOrThrow(value: any, errorMessage: string): number {
        const number = parseInt(value);

        if (isNaN(number)) throw new Error(errorMessage)

        return number;
    }

    static dumpOutput(output: any): void {
        for (let line in output) {
            console.log(output[line].join(''));
        }
    }

}
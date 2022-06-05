
import DrawingModel from "../model/drawModel";

export class CommandUtils {

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

    static cmdFirstLetter(cmd: string): string {
        const cmdSplit = cmd.split(" ");
        const firstLetter: string = cmdSplit[0].toUpperCase();
        return firstLetter;
    }

    static dumpOutput(output: any): void {
        for (let line in output) {
            console.log(output[line].join(''));
        }
    }

}
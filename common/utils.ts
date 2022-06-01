
import DrawingModel from "../model/drawingModel";

export function cmdHasMinSpaces(cmd: string, numSpaces: number) {
    return (cmd.split(" ").length - 1) >= numSpaces;
}

export function cmdHasMaxSpaces(cmd: string, numSpaces: number) {
    return (cmd.split(" ").length - 1) <= numSpaces;
}

export function cmdFirstLetterIsAlpha(cmd: string) {
    return isNaN(Number(cmdFirstLetter(cmd)));
}

export function cmdFirstLetterIsValid(cmd: string) {
    const firstLetter: string = cmdFirstLetter(cmd);
    return Object(DrawingModel.instructions).hasOwnProperty(firstLetter);
}

export function cmdHasCorrectNumArgs(cmd: string) {
    const cmdSplit = cmd.split(" ");
    const firstLetter: string = cmdFirstLetter(cmd);
    if (DrawingModel.instructions[firstLetter] === cmdSplit.length - 1)
        return DrawingModel.instructions[firstLetter];
    else {
        return false;
    }
}

// A canvas needs to be a minimum of 3 x 3
export function cmdCanvasParamsCheck(cmd: string) {
    const cmdSplit = cmd.split(" ");
    const firstLetter: string = cmdFirstLetter(cmd);
    if (String(firstLetter) === 'C') {
        return (checkWholeNumber(cmdSplit[1]) >= 3 && checkWholeNumber(cmdSplit[2]) >= 3)
    } else {
        return true;
    }
}

export function canvasAvailableForCommand(cmd: string) {
    return cmdFirstLetter(cmd) !== "C" ? DrawingModel.canvasAvailable === true : true
}

// Check for trying to pass decimals
export function checkWholeNumber(val: any) {
    const num: number = Number(val);
    if (isNaN(num)) return 0;
    return num % 1 === 0 ? num : 0;
}

export function cmdFirstLetter(cmd: string) {
    const cmdSplit = cmd.split(" ");
    const firstLetter: string = cmdSplit[0];
    return firstLetter;
}

// Composite function
export function cmdIsValid(cmd: string) {
    return cmdHasMinSpaces(cmd, 2) &&
        cmdHasMaxSpaces(cmd, 4) &&
        cmdFirstLetterIsAlpha(cmd) &&
        cmdFirstLetterIsValid(cmd) &&
        cmdCanvasParamsCheck(cmd) &&
        canvasAvailableForCommand(cmd) &&
        cmdHasCorrectNumArgs(cmd) === DrawingModel.instructions[cmd.split(" ")[0]]
}

export function dumpOutput(output: any) {
    for (let line in output) {
        console.log(output[line].join(''));
    }
}

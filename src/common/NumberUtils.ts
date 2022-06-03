
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

// A line needs to have either x or y values that are equal
export function cmdLineParamsCheck(cmd: string) {
    const cmdSplit = cmd.split(" ");
    const firstLetter: string = cmdFirstLetter(cmd);
    switch (firstLetter) {

        case 'L':
            const hasEitherMatches: boolean = (checkWholeNumber(cmdSplit[1]) === checkWholeNumber(cmdSplit[3]) || checkWholeNumber(cmdSplit[2]) === checkWholeNumber(cmdSplit[4]))
            return hasEitherMatches;

        default:
            return true;

    }

}

// A line needs to be drawn within the canvas bounds
// A rect needs to be drawn within the canvas bounds
// A brush needs to be applied within the canvas bounds
export function cmdBoundsCheck(cmd: string) {
    const cmdSplit = cmd.split(" ");
    const firstLetter: string = cmdFirstLetter(cmd);

    switch (firstLetter) {
        case "L":
        case "R":
            const x1WithinBounds: boolean = checkWholeNumber(cmdSplit[1]) > 0 && checkWholeNumber(cmdSplit[1]) < DrawingModel.drawingMatrix[0].length - 1;
            const y1WithinBounds: boolean = checkWholeNumber(cmdSplit[2]) > 0 && checkWholeNumber(cmdSplit[2]) < DrawingModel.drawingMatrix.length - 1;
            const x2WithinBounds: boolean = checkWholeNumber(cmdSplit[3]) > 0 && checkWholeNumber(cmdSplit[3]) < DrawingModel.drawingMatrix[0].length - 1;
            const y2WithinBounds: boolean = checkWholeNumber(cmdSplit[4]) > 0 && checkWholeNumber(cmdSplit[4]) < DrawingModel.drawingMatrix.length - 1;
            console.log(x1WithinBounds, DrawingModel.drawingMatrix[0].length - 1, y1WithinBounds, DrawingModel.drawingMatrix.length - 1, x2WithinBounds, DrawingModel.drawingMatrix[0].length - 1, y2WithinBounds, DrawingModel.drawingMatrix.length - 1);
            return x1WithinBounds && y1WithinBounds && x2WithinBounds && y2WithinBounds;
        case "B":
            const xWithinBounds: boolean = checkWholeNumber(cmdSplit[1]) > 0 && checkWholeNumber(cmdSplit[1]) < DrawingModel.drawingMatrix[0].length - 1;
            const yWithinBounds: boolean = checkWholeNumber(cmdSplit[2]) > 0 && checkWholeNumber(cmdSplit[2]) < DrawingModel.drawingMatrix.length - 1;
            return xWithinBounds && yWithinBounds;
        default:
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
    const firstLetter: string = cmdSplit[0].toUpperCase();
    return firstLetter;
}

// Composite function
export function cmdIsValid(cmd: string) {
    return cmdHasMinSpaces(cmd, 2) &&
        cmdHasMaxSpaces(cmd, 4) &&
        cmdFirstLetterIsAlpha(cmd) &&
        cmdFirstLetterIsValid(cmd) &&
        cmdCanvasParamsCheck(cmd) &&
        cmdLineParamsCheck(cmd) &&
        cmdBoundsCheck(cmd) &&
        canvasAvailableForCommand(cmd) &&
        cmdHasCorrectNumArgs(cmd) === DrawingModel.instructions[cmdFirstLetter(cmd)]
}

export function dumpOutput(output: any) {
    for (let line in output) {
        console.log(output[line].join(''));
    }
}
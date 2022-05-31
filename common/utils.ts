
// Constant
const instructions: any = { C: 2, L: 4, R: 4, B: 3, Q: 0 }

export function cmdHasMinSpaces(cmd: string, numSpaces: number) {
    return (cmd.split(" ").length - 1) >= numSpaces;
}

export function cmdHasMaxSpaces(cmd: string, numSpaces: number) {
    return (cmd.split(" ").length - 1) <= numSpaces;
}

export function cmdFirstLetterIsAlpha(cmd: string) {
    return isNaN(Number(cmd.split(" ")[0]));
}

export function cmdFirstLetterIsValid(cmd: string) {
    const key: string = cmd.split(" ")[0];
    return Object(instructions).hasOwnProperty(key);
}

export function cmdHasCorrectNumArgs(cmd: string) {
    const cmdSplit = cmd.split(" ");
    const key: string = cmdSplit[0]
    if (instructions[key] === cmdSplit.length - 1)
        return instructions[key];
    else {
        return false;
    }
}

// A canvas needs to be a minimum of 3 x 3
export function cmdCanvasParamsCheck(cmd: string) {
    const cmdSplit = cmd.split(" ");
    const key: string = cmdSplit[0];
    if (String(key) === 'C') {
        return (checkWholeNumber(cmdSplit[1]) >= 3 && checkWholeNumber(cmdSplit[2]) >= 3)
    } else {
        return true;
    }
}

// EDGE: Check for trying to pass decimals
export function checkWholeNumber(val: any) {
    const num: number = Number(val);
    if (isNaN(num)) return false;
    return num % 1 === 0 ? num : false;
}

// Composite function
export function cmdIsValid(cmd: string) {
    return cmdHasMinSpaces(cmd, 2) &&
        cmdHasMaxSpaces(cmd, 4) &&
        cmdFirstLetterIsAlpha(cmd) &&
        cmdFirstLetterIsValid(cmd) &&
        cmdCanvasParamsCheck(cmd) &&
        cmdHasCorrectNumArgs(cmd) === instructions[cmd.split(" ")[0]]
}

export function dumpOutput(output: any) {
    for (let line in output) {
        console.log(output[line].join(''));
    }
}


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

// Composite function
export function cmdIsValid(cmd: string) {
    return cmdHasMinSpaces(cmd, 2) &&
        cmdHasMaxSpaces(cmd, 4) &&
        cmdFirstLetterIsAlpha(cmd) &&
        cmdFirstLetterIsValid(cmd) &&
        cmdHasCorrectNumArgs(cmd) === instructions[cmd.split(" ")[0]]
}

export function dumpOutput(output: any) {
    for (let line in output) {
        console.log(output[line].join(''));
    }
}


export function cmdHasMinimumSpaces(cmd: string) {
    return cmd.split(" ").length > 2;
}

export function cmdFirstLetterIsAlpha(cmd: string) {
    return isNaN(Number(cmd.split(" ")[0]));
}

export function cmdFirstLetterIsValid(cmd: string) {
    const instructions = new Set(["C", "L", "R", "B", "Q"]);
    return instructions.has(cmd.split(" ")[0]);
}
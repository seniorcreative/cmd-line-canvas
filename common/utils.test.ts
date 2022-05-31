import { cmdHasMinSpaces, cmdHasMaxSpaces, cmdFirstLetterIsAlpha, cmdFirstLetterIsValid, cmdHasCorrectNumArgs, cmdIsValid, cmdCanvasParamsCheck } from './utils';

describe('check valid command input', () => {
    it('should contain at least (x) spaces', () => {
        const input = 'a 1';
        expect(cmdHasMinSpaces(input, 2)).toBeFalsy();
    })

    it('should contain at most (x) spaces', () => {
        const input = 'a 1 1 1 5';
        expect(cmdHasMaxSpaces(input, 3)).toBeFalsy();
    })

    it('first command is a letter', () => {
        const input = 'a 1';
        expect(cmdFirstLetterIsAlpha(input)).toBeTruthy();
    })

    it('first command is an instruction letter', () => {
        const input = 'C 1';
        expect(cmdFirstLetterIsValid(input)).toBeTruthy();
    })

    it('command has correct num args (for C should be 2)', () => {
        const input = 'C 1 2';
        expect(cmdHasCorrectNumArgs(input)).toBe(2);
    })

    it('command has correct num args (for L should be 4)', () => {
        const input = 'L 1 2 3 4';
        expect(cmdHasCorrectNumArgs(input)).toBe(4);
    })

    it('command has correct num args (for B should be 3)', () => {
        const input = 'B 1 2 4';
        expect(cmdHasCorrectNumArgs(input)).toBe(3);
    })

    it('command has correct num args (for Q should be 0)', () => {
        const input = 'Q';
        expect(cmdHasCorrectNumArgs(input)).toBe(0);
    })

    it('command has min param values (for C should be >= 3)', () => {
        const inputA = 'C 3 3';
        const inputB = 'C 2 2';
        expect(cmdCanvasParamsCheck(inputA)).toBeTruthy()
        expect(cmdCanvasParamsCheck(inputB)).toBeFalsy();
    })

    it('is a valid command', () => {
        const input = 'C 4 4';
        expect(cmdIsValid(input)).toBeTruthy();
    })

})
import { cmdHasMinSpaces, cmdHasMaxSpaces, cmdFirstLetterIsAlpha, cmdFirstLetterIsValid, cmdHasCorrectNumArgs, cmdIsValid, cmdCanvasParamsCheck } from './utils';

describe('check valid command input', () => {
    it('should contain the optimum number of spaces', () => {
        const inputA = 'a 1';
        const inputB = 'a 1 1 1 5';
        expect(cmdHasMinSpaces(inputA, 2)).toBeFalsy();
        expect(cmdHasMaxSpaces(inputB, 3)).toBeFalsy();
    })

    it('first command is an instruction letter', () => {
        const input = 'C 1';
        expect(cmdFirstLetterIsAlpha(input)).toBeTruthy();
        expect(cmdFirstLetterIsValid(input)).toBeTruthy();
    })

    it('command has correct number of args based on the first letter', () => {
        const inputA = 'C 1 2';
        const inputB = 'L 1 2 3 4';
        const inputC = 'B 1 2 4';
        const inputD = 'Q';
        expect(cmdHasCorrectNumArgs(inputA)).toBe(2);
        expect(cmdHasCorrectNumArgs(inputB)).toBe(4);
        expect(cmdHasCorrectNumArgs(inputC)).toBe(3);
        expect(cmdHasCorrectNumArgs(inputD)).toBe(0);
    })

    it('command for canvas has minimum param values for width and height', () => {
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
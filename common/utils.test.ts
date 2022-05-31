import { cmdHasMinimumSpaces, cmdFirstLetterIsAlpha, cmdFirstLetterIsValid } from './utils';

describe('check valid command input', () => {
    it('should contain at least 2 spaces', () => {
        const input = 'a 1';
        expect(cmdHasMinimumSpaces(input)).toBeFalsy();
    })

    it('first command is a letter', () => {
        const input = 'a 1';
        expect(cmdFirstLetterIsAlpha(input)).toBeTruthy();
    })

    it('first command is a valid letter command', () => {
        const input = 'C 1';
        expect(cmdFirstLetterIsValid(input)).toBeTruthy();
    })
})
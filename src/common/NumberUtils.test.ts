import DrawingModel from '../model/drawingModel';
import {
    cmdHasMinSpaces,
    cmdHasMaxSpaces,
    cmdFirstLetterIsAlpha,
    cmdFirstLetterIsValid,
    cmdHasCorrectNumArgs,
    cmdIsValid,
    cmdCanvasParamsCheck,
    cmdLineParamsCheck,
    cmdBoundsCheck,
    canvasAvailableForCommand
} from './utils';

describe('check valid command sequences', () => {
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

    it('checks if canvas becomes available', () => {
        expect(DrawingModel.canvasAvailable).toBeFalsy()
        DrawingModel.canvasAvailable = true;
        expect(DrawingModel.canvasAvailable).toBeTruthy();
    })

    it('checks if canvas is available for command', () => {
        DrawingModel.canvasAvailable = false;
        const inputA = 'L 3 3 3 3';
        expect(canvasAvailableForCommand(inputA)).toBeFalsy();
        DrawingModel.canvasAvailable = true;
        const inputB = 'C 3 3';
        expect(canvasAvailableForCommand(inputB)).toBeTruthy();
        DrawingModel.canvasAvailable = true;
        const inputC = 'L 3 3 4 4';
        expect(canvasAvailableForCommand(inputC)).toBeTruthy();
    })

    it('command for canvas has valid param values for width and height', () => {
        const inputA = 'C 3 3';
        const inputB = 'C 2 2';
        const inputC = 'C 4.5 4.5';
        expect(cmdCanvasParamsCheck(inputA)).toBeTruthy();
        expect(cmdCanvasParamsCheck(inputB)).toBeFalsy();
        expect(cmdCanvasParamsCheck(inputC)).toBeFalsy();
    })

    it('command for line has valid param values for x1,y1,x2,y2 meaning it will be horizontal or vertical', () => {
        DrawingModel.drawingMatrix = [
            ['-', '-', '-', '-', '-'],
            ['|', ' ', ' ', ' ', '|'],
            ['|', ' ', ' ', ' ', '|'],
            ['|', ' ', ' ', ' ', '|'],
            ['|', ' ', ' ', ' ', '|'],
            ['-', '-', '-', '-', '-']];

        const inputA = 'L 2 3 3 3';
        expect(cmdLineParamsCheck(inputA)).toBeTruthy();
        const inputB = 'L 3 3 4 4';
        expect(cmdLineParamsCheck(inputB)).toBeFalsy();
        const inputC = 'L 1 1 10 10';
        expect(cmdLineParamsCheck(inputC)).toBeFalsy();
    })

    it('commands for drawings have param values within bounds ', () => {
        DrawingModel.drawingMatrix = [
            ['-', '-', '-', '-', '-'],
            ['|', ' ', ' ', ' ', '|'],
            ['|', ' ', ' ', ' ', '|'],
            ['|', ' ', ' ', ' ', '|'],
            ['|', ' ', ' ', ' ', '|'],
            ['-', '-', '-', '-', '-']];

        const inputA = 'L 2 3 3 3';
        expect(cmdBoundsCheck(inputA)).toBeTruthy();
        const inputB = 'R 3 3 9 9';
        expect(cmdBoundsCheck(inputB)).toBeFalsy();
        const inputC = 'B 20 6 o';
        expect(cmdBoundsCheck(inputC)).toBeFalsy();
    })

    it('is a valid command', () => {
        const input = 'C 4 4';
        expect(cmdIsValid(input)).toBeTruthy();
    })

})
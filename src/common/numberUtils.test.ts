import DrawingModel from '../model/drawModel';
import { NumberUtils } from "./numberUtils";

describe('check valid command sequences', () => {

    it('first command is an instruction letter', () => {
        const input = 'C 1';
        expect(NumberUtils.cmdFirstLetterIsAlpha(input)).toBeTruthy();
        expect(NumberUtils.cmdFirstLetterIsValid(input)).toBeTruthy();
    })

    it('command has correct number of args based on the first letter', () => {
        const inputA = 'C 1 2';
        const inputB = 'L 1 2 3 4';
        const inputC = 'B 1 2 4';
        const inputD = 'Q';
        expect(NumberUtils.cmdHasCorrectNumArgs(inputA)).toBe(2);
        expect(NumberUtils.cmdHasCorrectNumArgs(inputB)).toBe(4);
        expect(NumberUtils.cmdHasCorrectNumArgs(inputC)).toBe(3);
        expect(NumberUtils.cmdHasCorrectNumArgs(inputD)).toBe(0);
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
        expect(NumberUtils.cmdLineParamsCheck(inputA)).toBeTruthy();
        const inputB = 'L 3 3 4 4';
        expect(NumberUtils.cmdLineParamsCheck(inputB)).toBeFalsy();
        const inputC = 'L 1 1 10 10';
        expect(NumberUtils.cmdLineParamsCheck(inputC)).toBeFalsy();
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
        expect(NumberUtils.cmdBoundsCheck(inputA)).toBeTruthy();
        const inputB = 'R 3 3 9 9';
        expect(NumberUtils.cmdBoundsCheck(inputB)).toBeFalsy();
        const inputC = 'B 20 6 o';
        expect(NumberUtils.cmdBoundsCheck(inputC)).toBeFalsy();
    })

})
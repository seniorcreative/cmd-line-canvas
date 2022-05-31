import { canvasMethod } from './drawingController';

describe('matrix operations', () => {
    it('outputs the correct sized empty canvas matrix when w=4 and height=4', () => {
        expect(canvasMethod(4, 4)).toEqual([['X', 'X', 'X', 'X'], ['X', ' ', ' ', 'X'], ['X', ' ', ' ', 'X'], ['X', 'X', 'X', 'X']]);
    });
})


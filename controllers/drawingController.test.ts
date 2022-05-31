
// enter command: C 4 4
// canvasMethod rec 4 4
// [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

import { canvasMethod } from './drawingController';

describe('matrix operations', () => {
    it('outputs the right size empty canvas matrix for w 4 and height 4', () => {
        expect(canvasMethod(4, 4)).toEqual([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
    });
})


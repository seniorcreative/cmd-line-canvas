import { canvasMethod } from './drawingController';
import { CanvasProps } from "../types/drawingTypes";

describe('matrix operations', () => {
    it('outputs the correct sized empty canvas matrix when w=4 and height=4', () => {
        const canvasProps: CanvasProps = { width: 4, height: 4 };
        expect(canvasMethod(canvasProps)).toEqual([['X', 'X', 'X', 'X'], ['X', ' ', ' ', 'X'], ['X', ' ', ' ', 'X'], ['X', 'X', 'X', 'X']]);
    });
})


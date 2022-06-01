import { canvasMethod } from './drawingController';
import { CanvasProps } from "../types/drawingTypes";
import DrawingModel from "../model/drawingModel";

describe('matrix operations', () => {
    it('outputs the correct sized empty canvas matrix when w=4 and height=4', () => {

        const backgroundColor = DrawingModel.backgroundColor;
        const canvasProps: CanvasProps = { width: 4, height: 4, backgroundColor };

        expect(canvasMethod(canvasProps)).toEqual([
            ['X', 'X', 'X', 'X'],
            ['X', backgroundColor, backgroundColor, 'X'],
            ['X', backgroundColor, backgroundColor, 'X'],
            ['X', 'X', 'X', 'X']]);
    });

    it('sets drawing matrix on the drawing model', () => {

        const backgroundColor = DrawingModel.backgroundColor;
        const canvasProps: CanvasProps = { width: 4, height: 4, backgroundColor };

        DrawingModel.drawingMatrix = canvasMethod(canvasProps);

        expect(DrawingModel.drawingMatrix).toContainEqual(['X', 'X', 'X', 'X'])
    })


})


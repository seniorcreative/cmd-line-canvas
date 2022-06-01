import { canvasMethod, lineMethod, rectMethod } from './drawingController';
import { CanvasProps, LineProps, RectProps } from "../types/drawingTypes";
import DrawingModel from "../model/drawingModel";

describe('matrix operations', () => {
    it('outputs the correct sized empty canvas matrix when w=4 and height=4', () => {

        const { backgroundColor } = DrawingModel;
        const canvasProps: CanvasProps = { width: 4, height: 4, backgroundColor };

        expect(canvasMethod(canvasProps)).toEqual([
            ['-', '-', '-', '-'],
            ['|', backgroundColor, backgroundColor, '|'],
            ['|', backgroundColor, backgroundColor, '|'],
            ['-', '-', '-', '-']]);
    });

    it('outputs the correct line location ', () => {

        const { backgroundColor } = DrawingModel;
        const canvasProps: CanvasProps = { width: 5, height: 5, backgroundColor };
        const lineProps: LineProps = { x1: 2, y1: 2, x2: 3, y2: 2 };

        DrawingModel.drawingMatrix = canvasMethod(canvasProps);

        expect(lineMethod(lineProps)).toEqual([
            ['-', '-', '-', '-', '-'],
            ['|', backgroundColor, backgroundColor, backgroundColor, '|'],
            ['|', backgroundColor, 'x', 'x', '|'],
            ['|', backgroundColor, backgroundColor, backgroundColor, '|'],
            ['-', '-', '-', '-', '-']]);
    });

    it('outputs the correct rect location ', () => {

        const { backgroundColor } = DrawingModel;
        const canvasProps: CanvasProps = { width: 5, height: 5, backgroundColor };
        const rectProps: RectProps = { x1: 1, y1: 1, x2: 3, y2: 3 };

        DrawingModel.drawingMatrix = canvasMethod(canvasProps);

        expect(rectMethod(rectProps)).toEqual([
            ['-', '-', '-', '-', '-'],
            ['|', 'x', 'x', 'x', '|'],
            ['|', 'x', backgroundColor, 'x', '|'],
            ['|', 'x', 'x', 'x', '|'],
            ['-', '-', '-', '-', '-']]);
    });

    it('sets drawing matrix on the drawing model', () => {

        const { backgroundColor } = DrawingModel;

        const canvasProps: CanvasProps = { width: 4, height: 4, backgroundColor };

        DrawingModel.drawingMatrix = canvasMethod(canvasProps);

        expect(DrawingModel.drawingMatrix).toContainEqual(['-', '-', '-', '-'])
    })


})


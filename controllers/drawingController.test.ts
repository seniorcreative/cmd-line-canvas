import { canvasMethod } from './drawingController';
import { CanvasProps } from "../types/drawingTypes";
import DrawingModel from "../model/drawingModel";

describe('matrix operations', () => {
    it('outputs the correct sized empty canvas matrix when w=4 and height=4', () => {

        const { borderColor, backgroundColor } = DrawingModel;
        const canvasProps: CanvasProps = { width: 4, height: 4, backgroundColor };

        expect(canvasMethod(canvasProps)).toEqual([
            [borderColor, borderColor, borderColor, borderColor],
            [borderColor, backgroundColor, backgroundColor, borderColor],
            [borderColor, backgroundColor, backgroundColor, borderColor],
            [borderColor, borderColor, borderColor, borderColor]]);
    });

    it('sets drawing matrix on the drawing model', () => {

        const { borderColor, backgroundColor } = DrawingModel;

        const canvasProps: CanvasProps = { width: 4, height: 4, backgroundColor };

        DrawingModel.drawingMatrix = canvasMethod(canvasProps);

        expect(DrawingModel.drawingMatrix).toContainEqual([borderColor, borderColor, borderColor, borderColor])
    })


})


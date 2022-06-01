import { cmdIsValid, dumpOutput, checkWholeNumber } from '../common/utils';
import { canvasMethod, lineMethod, rectMethod } from './drawingController';
import { CanvasProps, LineProps, RectProps } from "../types/drawingTypes";
import DrawingModel from "../model/drawingModel";

export function handleCommand(cmd: string) {

    const trimmedCommand = cmd.trim();

    if (cmdIsValid(trimmedCommand)) {

        const commandOperands: any[] = trimmedCommand.split(" ");
        const primaryCommand: string = commandOperands.shift();

        let drawingMethod: Function;

        DrawingModel.stashCommand(trimmedCommand);

        switch (primaryCommand) {

            case "C":
            case "c":

                drawingMethod = canvasMethod;

                const canvasProps: CanvasProps = {
                    width: checkWholeNumber(commandOperands[0]),
                    height: checkWholeNumber(commandOperands[1]),
                    backgroundColor: DrawingModel.backgroundColor
                };

                DrawingModel.canvasAvailable = true;
                DrawingModel.drawingMatrix = drawingMethod(canvasProps);

                break;

            case "L":
            case "l":

                drawingMethod = lineMethod;

                const lineProps: LineProps = {
                    x1: checkWholeNumber(commandOperands[0]),
                    y1: checkWholeNumber(commandOperands[1]),
                    x2: checkWholeNumber(commandOperands[2]),
                    y2: checkWholeNumber(commandOperands[3]),
                };

                DrawingModel.drawingMatrix = drawingMethod(lineProps);

                break;

            case "R":
            case "r":

                drawingMethod = rectMethod;

                const rectProps: RectProps = {
                    x1: checkWholeNumber(commandOperands[0]),
                    y1: checkWholeNumber(commandOperands[1]),
                    x2: checkWholeNumber(commandOperands[2]),
                    y2: checkWholeNumber(commandOperands[3]),
                };

                DrawingModel.drawingMatrix = drawingMethod(rectProps);

                break;

            case "B":
            case "b":

                console.log("Brush Command", DrawingModel.stashedCommands);


                break;

            default:
                break;
        }

        dumpOutput(DrawingModel.drawingMatrix);


    } else {
        console.log("Command is not valid. Check the instructions in the README.");
    }
}
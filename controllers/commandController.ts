import { cmdIsValid, dumpOutput, checkWholeNumber } from '../common/utils';
import { canvasMethod, lineMethod } from './drawingController';
import { CanvasProps, LineProps } from "../types/drawingTypes";
import DrawingModel from "../model/drawingModel";

export function handleCommand(cmd: string) {

    const trimmedCommand = cmd.trim().toUpperCase();

    if (cmdIsValid(trimmedCommand)) {

        const commandOperands: any[] = trimmedCommand.split(" ");
        const primaryCommand: string = commandOperands.shift();

        let drawingMethod: Function;

        switch (primaryCommand) {

            case "C":

                drawingMethod = canvasMethod;

                const canvasProps: CanvasProps = {
                    width: checkWholeNumber(commandOperands[0]),
                    height: checkWholeNumber(commandOperands[1]),
                    backgroundColor: DrawingModel.backgroundColor
                };

                DrawingModel.canvasAvailable = true;
                DrawingModel.drawingMatrix = drawingMethod(canvasProps);
                dumpOutput(DrawingModel.drawingMatrix);

                break;

            case "L":

                drawingMethod = lineMethod;

                const lineProps: LineProps = {
                    x1: checkWholeNumber(commandOperands[0]),
                    y1: checkWholeNumber(commandOperands[1]),
                    x2: checkWholeNumber(commandOperands[2]),
                    y2: checkWholeNumber(commandOperands[3]),
                };

                DrawingModel.drawingMatrix = drawingMethod(lineProps);

                dumpOutput(DrawingModel.drawingMatrix);


            default:
                break;
        }


    } else {
        console.log("Command is not valid. Check the instructions in the README.");
    }
}
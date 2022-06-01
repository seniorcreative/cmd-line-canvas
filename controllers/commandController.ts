import { cmdIsValid, dumpOutput, checkWholeNumber } from '../common/utils';
import { canvasMethod } from './drawingController';
import { CanvasProps } from "../types/drawingTypes";
import DrawingModel from "../model/drawingModel";

export function handleCommand(cmd: string) {

    const trimmedCommand = cmd.trim().toUpperCase();

    if (cmdIsValid(trimmedCommand)) {

        const commandOperands: any[] = trimmedCommand.split(" ");
        const primaryCommand: string = commandOperands.shift();

        let drawingMethod: Function;
        let drawingMatrix: Array<Array<string>>;

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



            default:
                break;
        }


    } else {
        console.log("Command is not valid. Check the instructions in the README.");
    }
}
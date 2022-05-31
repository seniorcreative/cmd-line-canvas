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

        switch (primaryCommand) {
            case "C":

                drawingMethod = canvasMethod;

                const canvasProps: CanvasProps = {
                    width: checkWholeNumber(commandOperands[0]),
                    height: checkWholeNumber(commandOperands[1]),
                    backgroundColor: DrawingModel.backgroundColor
                };

                let output = drawingMethod(canvasProps);
                dumpOutput(output);

                break;
            default:
                break;
        }


    } else {
        console.log("Command is not valid. Check the instructions in the README.");
    }
}
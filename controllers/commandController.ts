import { cmdIsValid } from '../common/utils';
import { canvasMethod } from './drawingController';

export function handleCommand(cmd: string) {

    const trimmedCommand = cmd.trim();

    if (cmdIsValid(trimmedCommand)) {

        const commandOperands: any[] = trimmedCommand.split(" ");
        const primaryCommand: string = commandOperands.shift();

        let drawingMethod: Function;

        switch (primaryCommand) {
            case "C":

                drawingMethod = canvasMethod;
                let output = drawingMethod(Number(commandOperands[0]), Number(commandOperands[1]));
                console.log(output);

                break;
            default:
                break;
        }

    } else {
        console.log("Command is not valid. Check the instructions in the README.");
    }
}
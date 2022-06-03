// import { NumberUtils } from '../common/NumberUtils';
// import { Canvas, Line, Rect, Point, FillArea } from "../types/drawingTypes";
import { CommandParser } from '../core/CommandParser';
// import { CommandDescriptor } from '../model';
import { CommandFactory } from '../core/CommandFactory';
// import { Command } from '../types/commandTypes';
import { CanvasProvider } from '../model/CanvasProvider';
import { Canvas } from '../core/Canvas';

export class App {

    constructor(
        private readonly commandParser: CommandParser,
        private readonly commandFactory: CommandFactory,
        private readonly canvasProvider: CanvasProvider
    ) { }

    public handleInput(input: string) {
        const commandDescriptor = this.commandParser.parse(input);
        const command = this.commandFactory.create(commandDescriptor);
        command.execute();

        const canvas: Canvas = this.canvasProvider.canvas; // Throws an error if Canvas has not been registered by the CreateCanvasCommand before.
        canvas.render(); // Prints the canvas in the terminal.
    }

    /*

    public handleInput(cmd: string) {

        const trimmedCommand = cmd.trim();

        // if (NumberUtils.cmdIsValid(trimmedCommand)) {

            const commandOperands: any[] = trimmedCommand.split(" ");
            const primaryCommand: string = commandOperands.shift();

            let drawingMethod: Function;

            DrawingModel.stashCommand(trimmedCommand);

            switch (primaryCommand) {

                case "C":
                case "c":

                    drawingMethod = canvasMethod;

                    const canvasProps: Canvas = {
                        // width: NumberUtils.checkWholeNumber(commandOperands[0]),
                        // height: NumberUtils.checkWholeNumber(commandOperands[1]),
                        backgroundColor: DrawingModel.backgroundColor
                    };

                    DrawingModel.canvasAvailable = true;
                    DrawingModel.drawingMatrix = drawingMethod(canvasProps);

                    break;

                case "L":
                case "l":

                    drawingMethod = lineMethod;

                    const lineProps: Line = {
                        // x1: NumberUtils.checkWholeNumber(commandOperands[0]),
                        // y1: NumberUtils.checkWholeNumber(commandOperands[1]),
                        // x2: NumberUtils.checkWholeNumber(commandOperands[2]),
                        // y2: NumberUtils.checkWholeNumber(commandOperands[3]),
                    };

                    DrawingModel.drawingMatrix = drawingMethod(lineProps);

                    break;

                case "R":
                case "r":

                    drawingMethod = rectMethod;

                    const rectProps: Rect = {
                        from: checkWholeNumber(commandOperands[0]), checkWholeNumber(commandOperands[1]),
                        x2: checkWholeNumber(commandOperands[2]),
                        y2: checkWholeNumber(commandOperands[3]),
                        backgroundColor: 'o'
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

            // NumberUtils.dumpOutput(DrawingModel.drawingMatrix);


        } else {
            console.log("Command is not valid. Check the instructions in the README.");
        }
    } */

}
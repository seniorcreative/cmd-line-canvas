import { CommandParser } from './core/parseCommand';
import { CommandFactory } from './core/commandFactory';
import { CanvasProvider } from './core/canvasProvider';
import { Canvas } from './core/canvas';

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

}
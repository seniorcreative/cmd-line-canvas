import { CommandParser } from "./core/commandParser";
import { CommandFactory } from "./core/commandFactory";
import { CommandStore } from "./model/commandStore";
import { CanvasProvider } from "./core/canvasProvider";
import { CommandLineCanvas } from "./core/commandLineCanvas";

export class App {

	constructor(
		private readonly commandParser: CommandParser,
		private readonly commandFactory: CommandFactory,
		private readonly commandStore: CommandStore,
		private readonly canvasProvider: CanvasProvider
	) { }

	public handleInput(input: string): void {
		const commandDescriptor = this.commandParser.parse(input);
		this.commandStore.store(commandDescriptor);
		const command = this.commandFactory.create(commandDescriptor, this.commandStore);
		command.execute();

		const canvas: CommandLineCanvas = this.canvasProvider.canvas; // Throws an error if Canvas has not been registered by the CreateCanvasCommand before.
		canvas.generate(this.commandStore); // Prints the canvas in the terminal.
		canvas.render(); // Prints the canvas in the terminal.
	}

}
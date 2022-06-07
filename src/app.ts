import { CommandParser } from "./core/commandParser";
import { CommandFactory } from "./core/commandFactory";
import { CommandStore } from "./model/commandStore";
import { CanvasProvider } from "./core/canvasProvider";
import { CommandLineCanvas } from "./core/commandLineCanvas";
import { OperationalError } from "./core/operationalError";

export class App {

	constructor(
		private readonly commandParser: CommandParser,
		private readonly commandFactory: CommandFactory,
		private readonly commandStore: CommandStore,
		private readonly canvasProvider: CanvasProvider
	) { }

	public handleInput(input: string): void {
		try {
			const commandDescriptor = this.commandParser.parse(input);
			const command = this.commandFactory.create(commandDescriptor, this.commandStore);
			command.execute();

			const canvas: CommandLineCanvas | null = this.canvasProvider.canvas;
			if (canvas) {
				canvas.generate(this.commandStore); 
				canvas.render(); 
			}
		} catch (e) {
			if (e instanceof OperationalError) {
				return console.warn(`Sorry, cannot process that command. ${e.description}.\nPlease try again.`);
			} else {
				console.error("Unexpected error happened. Exiting...");
				process.exit(1);
			}
		}
	}

}
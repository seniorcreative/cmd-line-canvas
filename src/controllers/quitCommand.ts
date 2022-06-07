import { Command } from "../model/commandTypes";

export class QuitCommand implements Command {

	execute(): void {
		process.exit();
	}
}
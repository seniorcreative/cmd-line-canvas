import { CommandDescriptor } from ".";

export class CommandStore {

	private _lineCommands: Set<string> = new Set();
	private _rectangleCommands: Set<string> = new Set();

	store(commandDescriptor: CommandDescriptor): void {
		switch (commandDescriptor.command) {
		case "DRAW_LINE":
			this._lineCommands.add(JSON.stringify(commandDescriptor));
			break;
		case "DRAW_RECTANGLE":
			this._rectangleCommands.add(JSON.stringify(commandDescriptor));
			break;
		default:
			break;
		}
	}

	public get lineCommands(): Set<string> {
		return this._lineCommands;
	}

	public get rectangleCommands(): Set<string> {
		return this._rectangleCommands;
	}
}
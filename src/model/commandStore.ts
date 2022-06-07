import { CommandDescriptor, DrawLineCommandDescriptor, DrawRectangleCommandDescriptor } from ".";

export class CommandStore {

	private _lineCommands: Set<DrawLineCommandDescriptor> = new Set();
	private _rectangleCommands: Set<DrawRectangleCommandDescriptor> = new Set();

	store(commandDescriptor: CommandDescriptor): void {
		switch (commandDescriptor.command) {
		case "DRAW_LINE":
			this._lineCommands.add(commandDescriptor);
			break;
		case "DRAW_RECTANGLE":
			this._rectangleCommands.add(commandDescriptor);
			break;
		default:
			break;
		}
	}

	public get lineCommands(): Set<DrawLineCommandDescriptor> {
		return this._lineCommands;
	}

	public get rectangleCommands(): Set<DrawRectangleCommandDescriptor> {
		return this._rectangleCommands;
	}
}
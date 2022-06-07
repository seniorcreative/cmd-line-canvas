import { CommandDescriptor, DrawLineCommandDescriptor, DrawRectangleCommandDescriptor } from ".";

export class CommandStore {

	private _lineCommands: DrawLineCommandDescriptor[] = [];
	private _rectangleCommands: DrawRectangleCommandDescriptor[] = [];

	store(commandDescriptor: CommandDescriptor): void {
		switch (commandDescriptor.command) {
		case "DRAW_LINE":
			this._lineCommands.push(commandDescriptor);
			break;
		case "DRAW_RECTANGLE":
			this._rectangleCommands.push(commandDescriptor);
			break;
		default:
			break;
		}
	}

	public get lineCommands(): DrawLineCommandDescriptor[] {
		return this._lineCommands;
	}

	public get rectangleCommands(): DrawRectangleCommandDescriptor[] {
		return this._rectangleCommands;
	}
}
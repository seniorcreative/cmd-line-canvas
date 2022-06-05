import { CommandDescriptor } from "../model";
import { Command } from "../model/commandTypes";
import { CreateCanvasCommand } from "../controllers/createCanvasCommand";
import { CanvasProvider } from "./canvasProvider";
import { LineCommand } from "../controllers/lineCommand";
import { RectangleCommand } from "../controllers/rectangleCommand";
import { FillAreaCommand } from "../controllers/fillAreaCommand";

export class CommandFactory {

	create(input: CommandDescriptor): Command {

		let command: Command;

		switch (input.command) {
		case "CREATE_CANVAS":
			command = new CreateCanvasCommand(input.width, input.height, CanvasProvider.getInstance());
			break;
		case "DRAW_LINE":
			command = new LineCommand(input.from, input.to, CanvasProvider.getInstance());
			break;
		case "DRAW_RECTANGLE":
			command = new RectangleCommand(input.from, input.to, CanvasProvider.getInstance());
			break;
		case "FILL_AREA":
			command = new FillAreaCommand(input.point, input.color, CanvasProvider.getInstance());
			break;
		default:
			throw new Error("no command found");

		}

		return command;
	}

}
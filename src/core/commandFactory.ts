import { CommandDescriptor } from "../model";
import { Command } from "../model/commandTypes";
import { CreateCanvasCommand } from "../controllers/createCanvasCommand";
import { CanvasProvider } from "./canvasProvider";
import { LineCommand } from "../controllers/lineCommand";
import { RectangleCommand } from "../controllers/rectangleCommand";
import { FillAreaCommand } from "../controllers/fillAreaCommand";
import { QuitCommand } from "../controllers/quitCommand";
import { CommandStore } from "../model/commandStore";
import { OperationalError } from "./operationalError";

export class CommandFactory {

	create(input: CommandDescriptor, commandStore: CommandStore): Command {

		let command: Command;

		switch (input.command) {
		case "CREATE_CANVAS":
			command = new CreateCanvasCommand(input.width, input.height, CanvasProvider.getInstance());
			break;
		case "DRAW_LINE":
			command = new LineCommand(input.from, input.to, CanvasProvider.getInstance(), commandStore.lineCommands);
			break;
		case "DRAW_RECTANGLE":
			command = new RectangleCommand(input.from, input.to, input.fillColor, CanvasProvider.getInstance(), commandStore.rectangleCommands);
			break;
		case "FILL_AREA":
			command = new FillAreaCommand(input.point, input.color, CanvasProvider.getInstance(), commandStore.rectangleCommands);
			break;
		case "QUIT":
			command = new QuitCommand();
			break;
		default:
			throw new OperationalError("No command found");
		}

		return command;
	}

}
import { CommandDescriptor } from "../model";
import { Command } from "../types/commandTypes";
import { CreateCanvasCommand } from "../controllers/CreateCanvasCommand";
import { CanvasProvider } from "../model/CanvasProvider";
import { LineCommand } from "../controllers/LineCommand";
import { RectangleCommand } from "../controllers/RectangleCommand";
import { FillAreaCommand } from "../controllers/FillAreaCommand";

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
                throw new Error('no command found');

        }

        return command;
    }

}
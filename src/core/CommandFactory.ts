import { CommandDescriptor } from "../model";
import { Command } from "../types/commandTypes";
import { CreateCanvasCommand } from "../controllers/CreateCanvasCommand";
import { CanvasProvider } from "../model/CanvasProvider";
import { LineCommand } from "../controllers/LineCommand";

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
            default:
                throw new Error('no command found');

            // case "DRAW_RECTANGLE":

            //     break;
            // case "FILL_AREA":

            //     break;
        }

        return command;
    }

}
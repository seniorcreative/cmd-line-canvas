import { CommandDescriptor } from "../model";
import { NumberUtils } from "../common/NumberUtils";
import DrawModel from "../model/DrawModel";

export class CommandParser {

    constructor() { }

    parse(input: string): CommandDescriptor {
        const [command, ...params] = input
            .split(' ')
            .map(x => x.trim())
            .filter(Boolean);

        let commandDescriptor: CommandDescriptor;

        switch (command) {
            case "C":
                commandDescriptor = this.parseCreateCanvasCommand(params);
                break;
            case "L":
                commandDescriptor = this.parseDrawLineCommand(params);
                break;
            case "R":
                commandDescriptor = this.parseDrawRectangleCommand(params);
                break;
            case "B":
                commandDescriptor = this.parseFillAreaCommand(params);
                break;
            default:
                // throw new CommandFormatError('Unexpected command.');
                throw new Error('Unexpected command.');
        }

        return commandDescriptor;
    }

    parseCreateCanvasCommand(params: string[]): CommandDescriptor {

        const width = NumberUtils.checkWholeNumber(params[0]);
        const height = NumberUtils.checkWholeNumber(params[1]);
        const backgroundColor = DrawModel.backgroundColor;

        return { command: 'CREATE_CANVAS', width, height, backgroundColor };

    }

    parseDrawLineCommand(params: string[]): CommandDescriptor {
        const from = {
            x: NumberUtils.parseIntOrThrow(params[0], 'x1 is not an integer.'),
            y: NumberUtils.parseIntOrThrow(params[1], 'y1 is not an integer.'),
        };
        const to = {
            x: NumberUtils.parseIntOrThrow(params[2], 'x2 is not an integer.'),
            y: NumberUtils.parseIntOrThrow(params[3], 'y2 is not an integer.'),
        };

        return { command: 'DRAW_LINE', to, from };
    }

    parseDrawRectangleCommand(params: string[]): CommandDescriptor {

        const from = {
            x: NumberUtils.parseIntOrThrow(params[0], 'x1 is not an integer.'),
            y: NumberUtils.parseIntOrThrow(params[1], 'y1 is not an integer.'),
        };
        const to = {
            x: NumberUtils.parseIntOrThrow(params[2], 'x2 is not an integer.'),
            y: NumberUtils.parseIntOrThrow(params[3], 'y2 is not an integer.'),
        };

        return { command: 'DRAW_RECTANGLE', from, to };
    }

    parseFillAreaCommand(params: string[]): CommandDescriptor {

        const point = {
            x: NumberUtils.parseIntOrThrow(params[0], 'x is not an integer.'),
            y: NumberUtils.parseIntOrThrow(params[1], 'y is not an integer.'),
        };
        const backgroundColor = params[2];

        return { command: 'FILL_AREA', point, backgroundColor };
    }

}
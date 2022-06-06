import { CommandDescriptor } from "../model";
import { NumberUtils } from "../common/numberUtils";
import { Point } from "../model/drawingTypes";

export class CommandParser {

    parse(input: string): CommandDescriptor {
        const [command, ...params] = input
            .split(" ")
            .map(x => x.trim())
            .filter(Boolean);


        switch (command) {
            case "C": return this.parseCreateCanvasCommand(params);
            case "L": return this.parseDrawLineCommand(params);
            case "R": return this.parseDrawRectangleCommand(params);
            case "B": return this.parseFillAreaCommand(params);
            default: throw new Error("Unexpected command.");
        }

    }

    parseCreateCanvasCommand(params: string[]): CommandDescriptor {

        const width = NumberUtils.parseIntOrThrow(params[0], "Canvas width must be an integer");
        const height = NumberUtils.parseIntOrThrow(params[1], "Canvas height must be an integer");
        NumberUtils.cmdCanvasSizeCheckOrThrow(width, height, "Canvas size is too small");

        return { command: "CREATE_CANVAS", width, height };

    }

    parseDrawLineCommand(params: string[]): CommandDescriptor {
        const from: Point = {
            x: NumberUtils.parseIntOrThrow(params[0], "x1 must be an integer"),
            y: NumberUtils.parseIntOrThrow(params[1], "y1 must be an integer")
        };
        const to: Point = {
            x: NumberUtils.parseIntOrThrow(params[2], "x2 must be an integer"),
            y: NumberUtils.parseIntOrThrow(params[3], "y2 must be an integer")
        };

        const hasEitherMatches = from.x === to.x || from.y === to.y;

        if (!hasEitherMatches) throw new Error("The 'from' point or 'to' point for Line is not valid");

        return { command: "DRAW_LINE", from, to };
    }

    parseDrawRectangleCommand(params: string[]): CommandDescriptor {
        const from: Point = {
            x: NumberUtils.parseIntOrThrow(params[0], "x1 must be an integer"),
            y: NumberUtils.parseIntOrThrow(params[1], "y1 must be an integer")
        };
        const to: Point = {
            x: NumberUtils.parseIntOrThrow(params[2], "x2 must be an integer"),
            y: NumberUtils.parseIntOrThrow(params[3], "y2 must be an integer")
        };

        return { command: "DRAW_RECTANGLE", from, to };
    }

    parseFillAreaCommand(params: string[]): CommandDescriptor {

        const point = {
            x: NumberUtils.parseIntOrThrow(params[0], "x must be an integer"),
            y: NumberUtils.parseIntOrThrow(params[1], "y must be an integer")
        };
        const color = params[2];

        return { command: "FILL_AREA", point, color };
    }

}
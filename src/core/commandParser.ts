import { CommandDescriptor, DrawLineCommandDescriptor, DrawRectangleCommandDescriptor } from "../model";
import { NumberUtils } from "../common/numberUtils";
import { Point } from "../model/drawingTypes";
import { OperationalError } from "./operationalError";

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
		case "Q": return this.parseQuitCommand();
		default: throw new OperationalError("Unexpected command.");
		}

	}

	parseCreateCanvasCommand(params: string[]): CommandDescriptor {

		const width = NumberUtils.parseIntOrThrow(params[0], "Canvas width must be an integer");
		const height = NumberUtils.parseIntOrThrow(params[1], "Canvas height must be an integer");

		return { command: "CREATE_CANVAS", width, height };

	}

	parseDrawLineCommand(params: string[]): CommandDescriptor {
		const from: Point = {
			x: NumberUtils.parseIntOrThrow(params[0], "Point from.x must be an integer"),
			y: NumberUtils.parseIntOrThrow(params[1], "Point from.y must be an integer")
		};
		const to: Point = {
			x: NumberUtils.parseIntOrThrow(params[2], "Point to.x must be an integer"),
			y: NumberUtils.parseIntOrThrow(params[3], "Point to.y must be an integer")
		};

		const command: DrawLineCommandDescriptor = { command: "DRAW_LINE", from, to };

		return command;
	}

	parseDrawRectangleCommand(params: string[]): CommandDescriptor {
		const from: Point = {
			x: NumberUtils.parseIntOrThrow(params[0], "Point from.x must be an integer"),
			y: NumberUtils.parseIntOrThrow(params[1], "Point from.y must be an integer")
		};
		const to: Point = {
			x: NumberUtils.parseIntOrThrow(params[2], "Point to.x must be an integer"),
			y: NumberUtils.parseIntOrThrow(params[3], "Point to.y must be an integer")
		};
		const fillColor = params[4];

		const command: DrawRectangleCommandDescriptor = { command: "DRAW_RECTANGLE", from, to, fillColor };

		return command;
	}

	parseFillAreaCommand(params: string[]): CommandDescriptor {

		const point = {
			x: NumberUtils.parseIntOrThrow(params[0], "Point.x must be an integer"),
			y: NumberUtils.parseIntOrThrow(params[1], "Point.y must be an integer")
		};
		const color = params[2];

		return { command: "FILL_AREA", point, color };
	}

	parseQuitCommand(): CommandDescriptor {
		return { command: "QUIT" };
	}

}
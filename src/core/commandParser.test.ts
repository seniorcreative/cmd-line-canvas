import { CommandParser } from "./commandParser";

describe("Check parsing of commands", () => {

	let commandParser: CommandParser;

	beforeEach(() => {
		commandParser = new CommandParser();
	});

	it("Should parse a valid canvas command", () => {
		const input = "C 5 5";
		expect(commandParser.parse(input)).toStrictEqual({ command: "CREATE_CANVAS", width: 5, height: 5 });
	});

	it("Should parse a valid line command", () => {
		const input = "L 1 1 4 1";
		expect(commandParser.parse(input)).toStrictEqual({ command: "DRAW_LINE", from: { x: 1, y: 1 }, to: { x: 4, y: 1 } });
	});

	it("Should throw an invalid line command", () => {
		const input = "L 10 20 30 40";
		expect(() => { commandParser.parse(input); }).toThrow("The 'from' point or 'to' point for Line is not valid");
	});

	it("Should parse a valid rectangle command", () => {
		const input = "R 3 3 7 7";
		expect(commandParser.parse(input)).toStrictEqual({ command: "DRAW_RECTANGLE", from: { x: 3, y: 3 }, to: { x: 7, y: 7 }, fillColor: undefined });
	});

	it("Should parse a valid fill area command", () => {
		const input = "B 5 5 o";
		expect(commandParser.parse(input)).toStrictEqual({ command: "FILL_AREA", point: { x: 5, y: 5 }, color: "o" });
	});



});
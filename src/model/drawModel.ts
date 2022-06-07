export class DrawModel {

	private static _instructions: Map<string, number> = new Map([["C", 2], ["L", 4], ["R", 4], ["B", 3], ["Q", 0]]);

	static set instructions(instructions: Map<string, number>) {
		DrawModel._instructions = instructions;
	}

	static get instructions(): Map<string, number> {
		return DrawModel._instructions;
	}

}
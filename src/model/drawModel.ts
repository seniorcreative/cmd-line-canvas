export default class DrawModel {

	private static _instructions: object = { C: 2, L: 4, R: 4, B: 3, Q: 0 };
	private static _stashedCommands: string[] = [];


	static set instructions(instructions: object) {
		DrawModel._instructions = instructions;
	}

	static get instructions(): object {
		return DrawModel._instructions;
	}

	static stashCommand(command: string) {
		DrawModel._stashedCommands.push(command);
	}

	static get stashedCommands(): string[] {
		return DrawModel._stashedCommands;
	}


}
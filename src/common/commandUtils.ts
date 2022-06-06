
import DrawingModel from "../model/drawModel";

export class CommandUtils {

	static cmdHasCorrectNumArgs(cmd: string): boolean {
		const cmdSplit = cmd.split(" ");
		const firstLetter: string = this.cmdFirstLetter(cmd);
		if (DrawingModel.instructions.get(firstLetter) === cmdSplit.length - 1)
			return DrawingModel.instructions.has(firstLetter);
		else {
			return false;
		}
	}

	static cmdFirstLetter(cmd: string): string {
		const cmdSplit = cmd.split(" ");
		const firstLetter: string = cmdSplit[0].toUpperCase();
		return firstLetter;
	}

	static dumpOutput(output: string[][]): void {
		for (const line in output) {
			console.log(output[line].join(""));
		}
	}

}

export class CommandUtils {

	static drawCanvas(output: string[][]): boolean {
		for (const line in output) {
			console.log(output[line].join(""));
		}
		return true;
	}

}
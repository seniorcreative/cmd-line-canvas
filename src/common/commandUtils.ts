
export class CommandUtils {

	static dumpOutput(output: string[][]): boolean {
		for (const line in output) {
			console.log(output[line].join(""));
		}
		return true;
	}

}
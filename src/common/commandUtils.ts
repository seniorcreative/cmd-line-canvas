
export class CommandUtils {

	static dumpOutput(output: string[][]): void {
		for (const line in output) {
			console.log(output[line].join(""));
		}
	}

}
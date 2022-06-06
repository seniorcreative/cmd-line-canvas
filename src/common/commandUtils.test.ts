import { CommandUtils } from "./commandUtils";

describe("Command utils", () => {
	it("Should return an array of strings for console output", () => {
		const output: string[][] = [["-", "-", "-"], ["|", " ", "|"], ["-", "-", "-"]];
		expect(CommandUtils.dumpOutput(output)).toBeTruthy();
	});
});
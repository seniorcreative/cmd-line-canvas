import { NumberUtils } from "./numberUtils"

describe('Check number utils', () => {
	let errorMessage: string = "Error with parsing argument. Please provide an integer.";
	it("Should throw error if trying to parse a non integer", () => {
		expect(() => { NumberUtils.parseIntOrThrow("a", errorMessage) }).toThrowError(errorMessage);
	})
})
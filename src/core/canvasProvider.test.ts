import { CanvasProvider } from "./canvasProvider";

describe("Test the CanvasProvider Singleton", () => {

	let canvasProviderInstance: CanvasProvider;

	beforeEach(() => {
		canvasProviderInstance = CanvasProvider.getInstance();
	});

	it("Throws an error before being registered", () => {
		expect(() => { canvasProviderInstance.canvas; }).toThrowError("There's no canvas yet. Create one with the 'C' command.");
	});

});
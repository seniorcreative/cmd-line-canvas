import { CanvasProvider } from "../core/canvasProvider";
import { CreateCanvasCommand } from "./createCanvasCommand";

describe("Check create canvas command", () => {

	let canvasProviderInstance: CanvasProvider;
	let canvasCommand: CreateCanvasCommand;

	beforeEach(() => {
		canvasProviderInstance = CanvasProvider.getInstance();
		canvasCommand = new CreateCanvasCommand(5, 5, canvasProviderInstance);
	});

	it("Should return a canvasProvider that has a canvas property", () => {
		expect(canvasCommand.execute().canvas).toBeDefined();
	});
});
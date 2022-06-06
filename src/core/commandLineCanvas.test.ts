import { CommandLineCanvas } from "./commandLineCanvas";
import { CanvasProvider } from "./canvasProvider";

describe("Check command line canvas methods", () => {

	let canvas: CommandLineCanvas;
	let canvasProviderInstance: CanvasProvider;

	beforeEach(() => {
		canvasProviderInstance = CanvasProvider.getInstance();
		canvas = new CommandLineCanvas(3, 3);
		canvasProviderInstance.register(canvas);
	})

	it("Should create an empty 3 x 3 matrix for the canvas", () => {
		expect(canvasProviderInstance.canvas._matrix).toEqual([['-', '-', '-'], ['|', ' ', '|'], ['-', '-', '-']]);
	});

});
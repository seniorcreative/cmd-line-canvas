import { Canvas } from "./canvas";
import { CanvasProvider } from "./canvasProvider";
import { CommandLineCanvas } from "./commandLineCanvas";

describe("Check canvas abstract methods", () => {

	let canvas: CommandLineCanvas;
	let canvasProviderInstance: CanvasProvider;

	beforeEach(() => {
		canvasProviderInstance = CanvasProvider.getInstance();
		canvas = new CommandLineCanvas(5, 5);
		canvasProviderInstance.register(canvas);
	})

	it("Should return false for a point not within the canvas", () => {
		expect(canvas.isWithin({ x: 10, y: 10 })).toBeFalsy();
	});

})
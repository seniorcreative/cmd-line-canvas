import { CommandLineCanvas } from "./commandLineCanvas";
import { CanvasProvider } from "./canvasProvider";
import { CommandStore } from "../model/commandStore";

describe("Check command line canvas methods", () => {

	let canvas: CommandLineCanvas;
	let canvasProviderInstance: CanvasProvider;

	beforeEach(() => {
		canvasProviderInstance = CanvasProvider.getInstance();
		canvas = new CommandLineCanvas(3, 3);
		canvasProviderInstance.register(canvas);
		canvas.generate(new CommandStore());
	});

	it("Should create an empty 3 x 3 matrix for the canvas with a border of 1 around it on all sides", () => {
		expect(canvas.matrix).toEqual([
			["-", "-", "-", "-", "-"],
			["|", " ", " ", " ", "|"],
			["|", " ", " ", " ", "|"],
			["|", " ", " ", " ", "|"],
			["-", "-", "-", "-", "-"]
		]);
	});

});
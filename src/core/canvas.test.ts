import { CommandStore } from "../model/commandStore";
import { CanvasProvider } from "./canvasProvider";
import { CommandLineCanvas } from "./commandLineCanvas";

describe("Check canvas abstract methods", () => {

	let canvas: CommandLineCanvas;
	let canvasProviderInstance: CanvasProvider;

	beforeEach(() => {
		canvasProviderInstance = CanvasProvider.getInstance();
		canvas = new CommandLineCanvas(5, 5);
		canvasProviderInstance.register(canvas);
		canvas.generate(new CommandStore());
	});

	it("Should return false for a point not within the canvas", () => {
		expect(canvas.isWithin({ x: 10, y: 10 })).toBeFalsy();
	});

	it("Should throw error when trying a non vertical or horizontal line", () => {
		expect(() => { canvas.drawLine({ x: 1, y: 1 }, { x: 3, y: 3 }); }).toThrowError("The \"from\" point or \"to\" point for \"L\" command is not valid");
	});

	it("Should create a horizontal line in the correct place", () => {
		expect(canvas.drawLine({ x: 1, y: 1 }, { x: 3, y: 1 })).toEqual([
			["-", "-", "-", "-", "-", "-", "-"],
			["|", "x", "x", "x", " ", " ", "|"],
			["|", " ", " ", " ", " ", " ", "|"],
			["|", " ", " ", " ", " ", " ", "|"],
			["|", " ", " ", " ", " ", " ", "|"],
			["|", " ", " ", " ", " ", " ", "|"],
			["-", "-", "-", "-", "-", "-", "-"]]);
	});

	it("Should create a vertical line in the correct place", () => {
		expect(canvas.drawLine({ x: 2, y: 2 }, { x: 2, y: 4 })).toEqual([
			["-", "-", "-", "-", "-", "-", "-"],
			["|", " ", " ", " ", " ", " ", "|"],
			["|", " ", "x", " ", " ", " ", "|"],
			["|", " ", "x", " ", " ", " ", "|"],
			["|", " ", "x", " ", " ", " ", "|"],
			["|", " ", " ", " ", " ", " ", "|"],
			["-", "-", "-", "-", "-", "-", "-"]]);
	});

	it("Should create a rectangle in the correct place", () => {
		expect(canvas.drawRectangle({ x: 1, y: 1 }, { x: 4, y: 4 })).toEqual([
			["-", "-", "-", "-", "-", "-", "-"],
			["|", "x", "x", "x", "x", " ", "|"],
			["|", "x", " ", " ", "x", " ", "|"],
			["|", "x", " ", " ", "x", " ", "|"],
			["|", "x", "x", "x", "x", " ", "|"],
			["|", " ", " ", " ", " ", " ", "|"],
			["-", "-", "-", "-", "-", "-", "-"]]);
	});

});
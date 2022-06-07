import { CommandStore } from "./commandStore";
import { CommandLineCanvas } from "../core/commandLineCanvas";
import { CanvasProvider } from "../core/canvasProvider";
import { CommandDescriptor } from ".";

describe("Command store method storing the commandDescriptor", () => {

	let canvas: CommandLineCanvas;
	let canvasProviderInstance: CanvasProvider;
	let commandStore: CommandStore;
	let commandDescriptor: CommandDescriptor;

	beforeEach(() => {
		canvasProviderInstance = CanvasProvider.getInstance();
		canvas = new CommandLineCanvas(5, 5);
		commandStore = new CommandStore();
		canvasProviderInstance.register(canvas);
		canvas.generate(commandStore);
		canvas.validateDrawLine({ x: 1, y: 1 }, { x: 3, y: 1 }, new Set());
		canvas.drawLine({ x: 1, y: 1 }, { x: 3, y: 1 });
		commandDescriptor = { command: "DRAW_LINE", from: {x: 1, y: 1}, to: {x: 3, y: 1}};
		commandStore.store(commandDescriptor);
	});

	it("should return an array with a line command", () => {
		expect(commandStore.lineCommands).toContain(commandDescriptor);
	});
	
});
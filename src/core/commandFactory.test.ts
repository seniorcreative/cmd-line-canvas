import { CommandFactory } from "./commandFactory";
import { CanvasProvider } from "./canvasProvider";
import { CommandDescriptor } from "../model/"
import { CreateCanvasCommand } from "../controllers/createCanvasCommand";

describe("Command factory tests", () => {

	let canvasProviderInstance: CanvasProvider;
	let commandFactory: CommandFactory;

	beforeEach(() => {
		canvasProviderInstance = CanvasProvider.getInstance();
		commandFactory = new CommandFactory();
	});

	it('Should return a create canvas command with an execute method', () => {
		let input: CommandDescriptor = { command: "CREATE_CANVAS", width: 5, height: 5 };
		expect(new CreateCanvasCommand(input.width, input.height, canvasProviderInstance).execute).toBeDefined();
	})
});
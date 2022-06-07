import { CanvasProvider } from "./canvasProvider";
import { CommandDescriptor } from "../model/";
import { CreateCanvasCommand } from "../controllers/createCanvasCommand";

describe("Command factory tests", () => {

	let canvasProviderInstance: CanvasProvider;

	beforeEach(() => {
		canvasProviderInstance = CanvasProvider.getInstance();
	});

	it("Should return a create canvas command with an execute method", () => {
		const input: CommandDescriptor = { command: "CREATE_CANVAS", width: 5, height: 5 };
		expect(new CreateCanvasCommand(input.width, input.height, canvasProviderInstance).execute).toBeDefined();
	});
});
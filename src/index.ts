import { createInterface } from "readline";
import { App } from "./app";
import { CommandParser } from "./core/commandParser";
import { CommandFactory } from "./core/commandFactory";
import { CommandStore } from "./model/commandStore";
import { CanvasProvider } from "./core/canvasProvider";

const readline = createInterface({
	input: process.stdin,
	output: process.stdout
});

const app = new App(new CommandParser(), new CommandFactory(), new CommandStore(), CanvasProvider.getInstance());

const prompt = function () {
	readline.question("enter command: ", (command: string) => {
		app.handleInput(command);
		prompt();
	});
};

prompt();

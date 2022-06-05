import { createInterface } from "readline";
import { App } from "./app";
import { CommandParser } from "./core/parseCommand";
import { CommandFactory } from "./core/commandFactory";
import { CanvasProvider } from "./core/canvasProvider";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});


const app = new App(new CommandParser(), new CommandFactory(), CanvasProvider.getInstance());

const q = function () {
    readline.question(`enter command: `, (command: string) => {
        app.handleInput(command);
        q();
    })
};

q();
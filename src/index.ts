import { createInterface } from "readline";
import { App } from "./controllers/App";
import { CommandParser } from "./core/CommandParser";
import { CommandFactory } from "./core/CommandFactory";
import { CanvasProvider } from "./model/CanvasProvider";

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
import { handleCommand } from "./controllers/commandController";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const q = function () {
    readline.question(`enter command: `, (command: string) => {
        handleCommand(command);
        q();
    })
};

q();
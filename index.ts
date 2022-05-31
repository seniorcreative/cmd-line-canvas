import { handleCommand } from "./controllers/commandInterface";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const q = function () {
    readline.question(`enter command: `, (command: string) => {
        handleCommand(command.trim());
        q();
    })
};

q();
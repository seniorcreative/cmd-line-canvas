import { cmdHasMinimumSpaces, cmdFirstLetterIsAlpha, cmdFirstLetterIsValid } from './common/utils';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const q = function () {
    readline.question(`enter command: `, (command: string) => {
        console.log(`Your command ${command}`);
        q();
    })
};

q();
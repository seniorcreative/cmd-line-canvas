import { cmdIsValid } from '../common/utils';

export function handleCommand(cmd: string) {
    console.log(`Your command (${cmd}) ${cmdIsValid(cmd) ? `IS` : `IS NOT`} valid.`);
}
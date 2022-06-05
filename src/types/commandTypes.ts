import { Point } from "../model/drawingTypes";

export interface Command {
    execute(): void;
}

export type CommandDescriptor = {
    command: string,
    point?: Point,
    from?: Point,
    to?: Point,
    backgroundColor?: string
}
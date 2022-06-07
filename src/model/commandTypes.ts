import { Point } from "./drawingTypes";

export interface Command {
    execute(): void;
}

export type CommandDescriptor = {
    command: string,
    point?: Point,
    from?: Point,
    to?: Point,
    fillColor?: string
}
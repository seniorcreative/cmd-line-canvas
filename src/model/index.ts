import { Point } from "../types/drawingTypes";

export interface CreateCanvasCommandDescriptor {
    readonly command: 'CREATE_CANVAS',
    readonly width: number,
    readonly height: number,
    readonly backgroundColor?: string
}

export interface DrawLineCommandDescriptor {
    readonly command: 'DRAW_LINE',
    readonly to: Point,
    readonly from: Point
}

export interface DrawRectangleCommandDescriptor {
    readonly command: 'DRAW_RECTANGLE',
    readonly to: Point,
    readonly from: Point
}

export interface BrushCommandDescriptor {
    readonly command: 'FILL_AREA',
    readonly point: Point,
    readonly backgroundColor?: string
}

export type CommandDescriptor = CreateCanvasCommandDescriptor | DrawLineCommandDescriptor | DrawRectangleCommandDescriptor | BrushCommandDescriptor;

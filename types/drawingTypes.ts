export interface CanvasProps {
    width: number,
    height: number,
    backgroundColor?: string
}

export interface LineProps {
    x1: number,
    y1: number,
    x2: number,
    y2: number
}

export interface RectProps {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    backgroundColor?: string
}

export interface BrushProps {
    x: number,
    y: number,
    brushColor: string
}
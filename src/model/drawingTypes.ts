export type Point = {
    x: number,
    y: number
}

export type Line = {
    from: Point,
    to: Point
}

export type Rectangle = {
    from: Point,
    to: Point
    fillColor?: string
}

export type FillArea = {
    point: Point,
    color: string
}
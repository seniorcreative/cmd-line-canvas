// export type Canvas = {
//     width: number,
//     height: number,
//     backgroundColor?: string
// }

export type Point = {
    x: number,
    y: number
}

export type Line = {
    from: Point,
    to: Point
}

export type Rect = {
    from: Point,
    to: Point
    backgroundColor?: string
}

export type FillArea = {
    point: Point,
    backgroundColor: string
}
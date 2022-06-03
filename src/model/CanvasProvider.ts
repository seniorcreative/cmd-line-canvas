import { Canvas } from "../core/Canvas"

export class CanvasProvider {

    private _canvas: Canvas | null = null;
    private static instance: CanvasProvider;

    private constructor() { }

    public static getInstance(): CanvasProvider {
        if (!CanvasProvider.instance) {
            CanvasProvider.instance = new CanvasProvider();
        }
        return CanvasProvider.instance;
    }

    public register(canvas: Canvas) {
        this._canvas = canvas;
    }

    public get canvas() {
        if (!this._canvas) throw new Error("There's no canvas yet. Create one with the C command.'");
        return this._canvas;
    }
}
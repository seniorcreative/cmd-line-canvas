import { Canvas } from "./canvas";

export class CanvasProvider {

	private _canvas: Canvas | null = null;
	private static instance: CanvasProvider;

	public static getInstance(): CanvasProvider {
		if (!CanvasProvider.instance) {
			CanvasProvider.instance = new CanvasProvider();
		}
		return CanvasProvider.instance;
	}

	public register(canvas: Canvas): void {
		this._canvas = canvas;
	}

	public get canvas(): Canvas {
		if (!this._canvas) throw new Error("There's no canvas yet. Create one with the 'C' command.");
		return this._canvas;
	}
}
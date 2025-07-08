import { CommandLineCanvas } from "./commandLineCanvas";

export class CanvasProvider {

	private _canvas: CommandLineCanvas | null = null;
	private static instance: CanvasProvider;

	public static getInstance(): CanvasProvider {
		if (!CanvasProvider.instance) {
			CanvasProvider.instance = new CanvasProvider();
		}
		return CanvasProvider.instance;
	}

	public register(canvas: CommandLineCanvas): void {
		this._canvas = canvas;
	}

	public get canvas(): CommandLineCanvas | null {
		return this._canvas;
	}
}
export class NumberUtils {

	// A canvas needs to be a minimum of 3 x 3
	static cmdCanvasSizeCheckOrThrow(width: number, height: number, errorMessage: string): void {
		if (!(width > 2 && height > 2)) throw new Error(errorMessage);
	}

	static parseIntOrThrow(value: any, errorMessage: string): number {
		const number = parseInt(value);

		if (isNaN(number)) throw new Error(errorMessage);

		return number;
	}

}
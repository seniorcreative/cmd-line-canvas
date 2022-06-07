import { OperationalError } from "../core/operationalError";

export class NumberUtils {

	static parseIntOrThrow(value: unknown, errorMessage: string): number {
		const number = parseInt(String(value));

		if (isNaN(number)) throw new OperationalError(errorMessage);

		return number;
	}

}
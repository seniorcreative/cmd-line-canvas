export class OperationalError extends Error {

	public readonly description: string = "";

	constructor(description: string) {
		super(description);

		Object.setPrototypeOf(this, new.target.prototype);

		Error.captureStackTrace(this);

	}


}
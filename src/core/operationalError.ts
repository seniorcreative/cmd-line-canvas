export class OperationalError extends Error {

	public readonly description: string = "";

	constructor(description: string) {
		super(description);

		this.description = description;

		Object.setPrototypeOf(this, new.target.prototype);
	}


}
import { Canvas } from "./Canvas";

export class CommandLineCanvas extends Canvas {

    constructor(width: number, height: number,) {
        super(width, height);
        this.draw();
    }

}
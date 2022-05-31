export default class DrawingModel {

    private static _backgroundColor: string = '-';

    static set backgroundColor(color: string) {
        DrawingModel._backgroundColor = color;
    }

    static get backgroundColor() {
        return DrawingModel._backgroundColor;
    }
}
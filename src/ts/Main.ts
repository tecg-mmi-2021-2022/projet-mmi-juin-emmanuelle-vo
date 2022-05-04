import {Canvas} from "./Canvas";

class Main {
    private canvas: Canvas

    constructor() {
        this.canvas = new Canvas();
        console.log('test')
    }
}

new Main();
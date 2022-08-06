
import { Rectangle } from "../models/rect";
import { Coord } from "../models/coord";
// import { SystemColors } from "../utility";

export class CanvasManager {

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private original_width!: number;
    private original_height!: number;

    private _state: boolean = true;

    constructor(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ) {
        this._ctx = ctx;
        this._canvas = ctx.canvas;
        this._canvas.width = width;
        this._canvas.height = height; 
    }

    get ctx(): CanvasRenderingContext2D { return this._ctx; }
    get width(): number { return this._canvas.width; }
    get height(): number { return this._canvas.height; }
    get state(): boolean { return this._state; }

    set width(newWidth: number) { this._canvas.width = newWidth; }
    set height(newHeight: number) { this._canvas.height = newHeight; }
    set state(newState: boolean) { this._state = newState; }

    // Clear the canvas
    clear(): void {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height); 
        }
    }

    // Draw the contents of the rectangle
    drawText(
        rect: Rectangle, 
        hex_color: string
    ): void {

    }

    // Draw the given rectangle
    drawRectangle(
        rect: Rectangle, 
        hex_color: string
    ): void {
        this.ctx.fillStyle = hex_color;
        this.ctx.fillRect(
            rect.row_shift, 
            rect.col_shift, 
            rect.width, 
            rect.height
        );
    }

    drawCellBackground(
        row: number,
        col: number,
        row_total: number,
        col_total: number,
        line_weight: number,
        hex_color: string
    ): void {
        
        // Work out the distance to shift based on the width and height of the
        // canvas relative to the row and column being draw.
        let start_x = ((this.original_width / row_total) * row) + line_weight;
        let start_y = ((this.original_height / col_total) * col) + line_weight;
        let draw_width = (this.original_width / row_total) - line_weight;
        let draw_height = (this.original_height / col_total) - line_weight;

        this.ctx.fillStyle = hex_color;
        this.ctx.fillRect(
            start_x, 
            start_y,
            draw_width, 
            draw_height
        );
    }

    // Fill rectangle
    fillRectangle(
        rect: Rectangle,
        hex_color: string
    ): void {
        this.ctx.fillStyle = hex_color;
        this.ctx.fillRect(
            rect.row_shift + 1, 
            rect.col_shift + 1, 
            rect.width - 1, 
            rect.height - 1
        );
    }

    // Get the mouse position relative to the canvas
    getMousePosition(
        evt: MouseEvent
    ): Coord {
        let rect: DOMRect = this._canvas.getBoundingClientRect();
        let coord: Coord = new Coord (
            evt.clientX - rect.left, 
            evt.clientY - rect.top
        );
        return coord;
    }

    drawString(
        text: string
    ) {
        this.ctx.font = '10pt Calibri';
        this.ctx.fillText(text, 0, 10);
    }

}


import { Coord } from './coord';

//
//  Representation of an area on the playing field
//  This will hold:
//      Where it is in the grid (x, y)
//      Its width
//      Its height
//      Any decorator (like active indicator)
//      Whether it is currently selected
//      The currently held value
//  
export class Rectangle {

    private _coord: Coord;
    private _width: number = 0;
    private _height: number = 0;
    private _decor!: number | string;
    private _selected: boolean = false;
    private _value: number = 0;

    // private _row_shift!: number;
    // private _col_shift!: number;

    constructor(coord: Coord) {
        this._coord = coord;
    }

    get coord():    Coord   { return this._coord; }
    get width():    number  { return this._width; }
    get height():   number  { return this._height; }
    get decor():    number | string  { return this._decor; }
    get selected(): boolean { return this._selected; }
    get value():    number { return this._value; }
    get row_shift(): number { return this.width * this._coord.y; }
    get col_shift(): number { return this._height * this._coord.x; }

    set width(newWidth: number) { this._width = newWidth; }
    set height(newHeight: number) { this._height = newHeight; }
    set decor(newDecor: number | string) { this._decor = newDecor; }
    set selected(newSelected: boolean) { this._selected = newSelected; }
    set value(newValue: number) { this._value = newValue; }
    
}

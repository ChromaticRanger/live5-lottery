
//
//  The x and y value in a 2D grid
//
export class Coord {

    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x; 
        this._y = y;
    }

    get x(): number  { return this._x; }
    get y(): number  { return this._y; }

}


import { CanvasManager } from '../managers/canvasmanager'

//
// Interface defining a game
//
// Game drawing will use a composite pattern where a ball
// will be made up of a background color, a foreground value and possibly 
// some decoration.
//
// Each of those classes will implement this draw method.
//
export interface IGame {
    draw(cm: CanvasManager): void
}



import { CanvasManager } from '../managers/canvasmanager'

//
// Interface defining a game
//
// Game drawing will use a composite pattern where a game
// will be made up of:
//   Game
//     Board
//       Background color 
//       Foreground value
//       Decoration.
//
// Each of those classes will implement this draw method.
//
export interface IGame {
    draw(cm: CanvasManager): void
}


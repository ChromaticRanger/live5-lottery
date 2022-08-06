
import { LotteryBoard } from './lotteryboard'
import { CanvasManager } from '../managers/canvasmanager'
import { IGame } from '../interfaces/IGame'
import { GameType } from './gametypes'

export class LotteryGame implements IGame {

    // What type of game is this?
    public game_type: GameType
    
    // A game will have a board
    public board: LotteryBoard
    public cm: CanvasManager

    // The current state of the game. Is it completed?
    private _state: boolean = false

    // Constructor will take the canvas and the board to play on
    constructor(
        cm: CanvasManager,
        board: LotteryBoard
    ) {
        this.game_type = GameType.Lottery
        this.cm = cm
        this.board = board
    }

    // Get Board
    public getBoard(): LotteryBoard {
        return this.board
    }

    // Draw the Board
    public draw(): void {
        this.board.draw(this.cm)
    }

    //
    // Check to see if the board has been completed correctly
    //
    public check(): boolean {
        return this._state
    }

    public setState(state: boolean): void {
      this._state = state
    }

    public getState(): boolean {
      return this._state
    }

}

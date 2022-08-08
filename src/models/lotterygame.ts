
import { LotteryBoard } from './lotteryboard'
import { CanvasManager } from '../managers/canvasmanager'
import { IGame } from '../interfaces/IGame'
import { GameType } from './gametypes'
import { LotteryBall } from './lotteryball'
import { PassiveBallState } from './ballpassivestate'

export class LotteryGame implements IGame {

    // What type of game is this?
    public game_type: GameType
    private readonly ALLOWED_SELECTIONS: number = 6

    public selected: Set<LotteryBall> = new Set<LotteryBall>()
    public drawn: Set<LotteryBall> = new Set<LotteryBall>()
    public prize: number = 0
    
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
    public draw(cm: CanvasManager): void {
      cm.clear()
      this.board.draw(cm)
    }

    public addSelectedBall(ball: LotteryBall) {
      if (this.selected.size < this.ALLOWED_SELECTIONS)
        this.selected.add(ball)
    }

    public removeSelectedBall(ball: LotteryBall) {
      if (this.selected.size > 0) {
        this.selected.delete(ball)
      }
    }

    public SelectedBallCount(): number {
      return this.selected.size
    }

    public clearSelectedBalls(): void {
      this.selected.forEach(ball => {
        ball.transitionTo(new PassiveBallState())
      })
      this.selected = new Set<LotteryBall>()
    }

    public setDrawnBalls(balls: Set<LotteryBall>) {
      this.drawn = balls
    }

    public clearDrawnBalls(): void {
      this.drawn.forEach(ball => {
        ball.transitionTo(new PassiveBallState())
      })
      this.drawn = new Set<LotteryBall>()
    }

    private clearPrize(): void {
      this.prize = 0
    }

    public reset(): void {
      this.clearSelectedBalls()
      this.clearDrawnBalls()
      this.clearPrize()
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


import { LotteryBoard } from './lotteryboard'
import { LotteryBallBackground } from './lotteryballbackground'
import { LotteryBallDecoration } from './lotteryballdecoration'
import { LotteryBallFixedValue } from './lotteryballfixedvalue'
import { BallState } from './ballstate'

import { CanvasManager } from '../managers/canvasmanager'
import { IGame } from '../interfaces/IGame'

export class LotteryBall implements IGame {

    public board: LotteryBoard
    public active: boolean = false
    public x_pos: number
    public y_pos: number

    public background: LotteryBallBackground | null = null
    public decoration: LotteryBallDecoration | null = null
    public fixed_value: LotteryBallFixedValue | null = null

    public state: BallState | null = null

    constructor(
        board: LotteryBoard,
        x_pos: number,
        y_pos: number,
        state: BallState
    ) {
        this.board = board
        this.x_pos = x_pos
        this.y_pos = y_pos
        this.transitionTo(state)
    }

    get IsFixed(): boolean {
      return true
    }

    public transitionTo(state: BallState): void {
        this.state = state
        this.state.setContext(this)
    }

    public addBackground(background: LotteryBallBackground) {
        this.background = background
    }

    public addDecoration(decoration: LotteryBallDecoration) {
        this.decoration = decoration
    }

    public addFixedValue(fixed_value: LotteryBallFixedValue) {
        this.fixed_value = fixed_value
    }

    //
    // The ball iself with be drawn by its constituent parts
    //
    public draw(cm: CanvasManager) {
        this.background?.draw(cm)
        this.decoration?.draw(cm)
        this.fixed_value?.draw(cm)
    }

}


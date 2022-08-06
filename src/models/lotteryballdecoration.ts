
import { LotteryBall } from './lotteryball'
import { CanvasManager } from '../managers/canvasmanager'
import { IGame } from '../interfaces/IGame'

export class LotteryBallDecoration implements IGame { 
    
    public color: string
    public value: string
    public highlight: string
    public ball: LotteryBall
    
    constructor(
        ball: LotteryBall,
        color: string, 
        highlight: string,
        value: string
    ) {
        this.color = color
        this.value = value
        this.highlight = highlight
        this.ball = ball
    }

    public getBall(): LotteryBall {
        return this.ball
    }

    public getValue(): string {
        return this.value
    }

    public draw(cm: CanvasManager) {
      // TODO: Draw decoration when ball is selected
      // This will depend on the passive or active state of the ball
    }

}

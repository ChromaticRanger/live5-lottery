
import { LotteryBall } from './lotteryball'
import { CanvasManager } from '../managers/canvasmanager'
import { IGame } from '../interfaces/IGame'

export class LotteryBallFixedValue implements IGame {

    public color: string
    public value: string
    public highlight: string
    public ball: LotteryBall
    
    private readonly ROW_TOTAL: number = 10;
    private readonly COL_TOTAL: number = 6;
    private readonly FONT_PROPORTION_THIRD = 3;

    constructor(
        ball: LotteryBall,
        color: string, 
        value: string,
        highlight: string,
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
        this.drawBallValue(
            cm,
            this.ball.x_pos,
            this.ball.y_pos,
            this.ROW_TOTAL,
            this.COL_TOTAL,
            this.value,
            this.FONT_PROPORTION_THIRD,
            this.color
        )
    }
    
    //
    // Draw the ball value in the centre of the ball
    //
    private drawBallValue(
        cm: CanvasManager,
        row: number,
        col: number,
        row_total: number,
        col_total: number,
        value: string,
        proportion: number,
        hex_color: string
    ): void {
        let start_x = ((cm.width / row_total) * row)
        let start_y = ((cm.height / col_total) * col)
        let draw_width = (cm.width / row_total)
        let draw_height = (cm.height / col_total)
        cm.ctx.fillStyle = hex_color
        cm.ctx.font = `${draw_height / proportion}pt Calibri`
        cm.ctx.textAlign = 'center'
        cm.ctx.textBaseline = 'middle'
        start_x = start_x + (draw_width / 2)
        start_y = start_y + (draw_height / 2) + 3
        cm.ctx.fillText(value, start_x, start_y)
    }
}

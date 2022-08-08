
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
    private readonly BALL_GAP: number = 4;
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
          this.BALL_GAP,
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
        ball_gap: number,
        hex_color: string
    ): void {

      // calculate top left of current col, row
      let start_x = ((cm.width / col_total) * col) + ball_gap
      let start_y = ((cm.height / row_total) * row) + ball_gap

      // calculate width of each ball
      let ball_width = (cm.width / col_total) - ball_gap
      let ball_radius = ball_width / 2

      // Draw ball value in center of ball
      cm.ctx.save()
      cm.ctx.translate(ball_radius, ball_radius)
      cm.ctx.fillStyle = hex_color
      cm.ctx.font = `${ball_width / proportion}pt Calibri`
      cm.ctx.textAlign = 'center'
      cm.ctx.textBaseline = 'middle'
      cm.ctx.fillText(value, start_x, start_y)
      cm.ctx.restore()

    }
}






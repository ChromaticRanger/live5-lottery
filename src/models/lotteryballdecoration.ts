
import { LotteryBall } from './lotteryball'
import { CanvasManager } from '../managers/canvasmanager'
import { IGame } from '../interfaces/IGame'
import { SystemColors } from '../utility'

export class LotteryBallDecoration implements IGame { 
    
    public color: string
    public value: string
    public highlight: string
    public ball: LotteryBall
    
    private readonly ROW_TOTAL: number = 10;
    private readonly COL_TOTAL: number = 6;
    private readonly BALL_GAP: number = 4;

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
      // This will depend on the passive or active state of the ball
      if(this.ball.state?.name === 'Active') {
        this.drawBallDecoration(
          cm,
          this.ball.x_pos,
          this.ball.y_pos,
          this.ROW_TOTAL,
          this.COL_TOTAL,
          this.BALL_GAP,
          this.highlight
        )
      }
      if(this.ball.state?.name === 'Correct') {
        this.drawBallDecoration(
          cm,
          this.ball.x_pos,
          this.ball.y_pos,
          this.ROW_TOTAL,
          this.COL_TOTAL,
          this.BALL_GAP,
          SystemColors.SUCCESS
        )
      }
    }

    private drawBallDecoration(
      cm: CanvasManager,
      row: number,
      col: number,
      row_total: number,
      col_total: number,
      ball_gap: number,
      hex_color: string
    ): void {

      // calculate top left of current col, row
      let start_x = ((cm.width / col_total) * col) + ball_gap
      let start_y = ((cm.height / row_total) * row) + ball_gap

      // calculate width of each ball
      let ball_width = (cm.width / col_total) - ball_gap
      let ball_radius = ball_width / 2

      
      if(this.ball.state?.name === 'Active') { 
        // Draw a highlight circle in the centre of ball
        cm.ctx.save()
        cm.ctx.translate(ball_radius, ball_radius)
        cm.ctx.fillStyle = hex_color
        cm.ctx.beginPath()
        cm.ctx.arc(start_x, start_y, ball_radius * 2/3, 0, Math.PI * 2)
        cm.ctx.lineWidth = 5
        cm.ctx.fill()
        cm.ctx.restore()
      }
      
      if(this.ball.state?.name === 'Correct') {
        // Draw a ring around the edge of the ball
        cm.ctx.save()
        cm.ctx.translate(ball_radius, ball_radius)
        cm.ctx.fillStyle = hex_color
        cm.ctx.beginPath()
        cm.ctx.arc(start_x, start_y, ball_radius, 0, Math.PI * 2)
        cm.ctx.lineWidth = 5
        cm.ctx.stroke()
        cm.ctx.restore()
      }
      
    }

}

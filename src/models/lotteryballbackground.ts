
import { LotteryBall } from './lotteryball'
import { CanvasManager } from '../managers/canvasmanager'
import { SystemColors } from '../utility'
import { IGame } from '../interfaces/IGame'

export class LotteryBallBackground implements IGame { 
    
    public color: string
    public highlight: string
    public ball: LotteryBall

    private readonly BALL_GAP: number = 4
    private readonly ROW_TOTAL: number = 10
    private readonly COL_TOTAL: number = 6

    constructor(
        ball: LotteryBall,
        color: string,
        highlight: string
    ) {
        this.color = color
        this.highlight = highlight
        this.ball = ball
    }
    
    public getBall(): LotteryBall {
        return this.ball 
    }
    
    public draw(cm: CanvasManager) {

      // To draw the background of a ball we need to know what ball we are on
      // The parent of background is the ball itself which holds its
      // coordinates.

      // draw background based on current active or passive state
      switch (this.ball.state?.name) {
          case 'Active': {
              // Draw the active background
              this.drawCellBackground(
                  cm,
                  this.ball.y_pos, 
                  this.ball.x_pos,
                  this.ROW_TOTAL,
                  this.COL_TOTAL,
                  this.BALL_GAP,
                  this.highlight
              )
              break
          }
          case 'Passive': {
              // Draw the passive background
              this.drawCellBackground(
                  cm,
                  this.ball.y_pos, 
                  this.ball.x_pos,
                  this.ROW_TOTAL,
                  this.COL_TOTAL,
                  this.BALL_GAP,
                  this.color 
              )        
              break
          }
          case 'Correct': {
              // Draw the background indicating the selection was correct
              this.drawCellBackground(
                  cm,
                  this.ball.y_pos, 
                  this.ball.x_pos,
                  this.ROW_TOTAL,
                  this.COL_TOTAL,
                  this.BALL_GAP,
                  SystemColors.SUCCESS
              )        
              break
          }
          case 'Wrong': {
              // Draw the background indicating the selection was incorrect
              this.drawCellBackground(
                  cm,
                  this.ball.y_pos, 
                  this.ball.x_pos,
                  this.ROW_TOTAL,
                  this.COL_TOTAL,
                  this.BALL_GAP,
                  SystemColors.FAILURE
              )        
              break
          }
          default: {
              // 
          }
              
      }
    }

    private drawCellBackground(
        cm: CanvasManager,
        col: number,
        row: number,
        row_total: number,
        col_total: number,
        ball_gap: number,
        hex_color: string
    ): void {

      // calculate top left of current col, row
      let start_x = ((cm.width / col_total) * col) + ball_gap
      let start_y = ((cm.height / row_total) * row) + ball_gap

      // calculate width of ball to fit canvas
      const ball_width = (cm.width / col_total) - ball_gap
      const ball_radius = ball_width / 2
      
      // Draw ball background in apropriate color
      cm.ctx.save()
      cm.ctx.translate(ball_radius, ball_radius)
      cm.ctx.fillStyle = hex_color
      cm.ctx.beginPath()
      cm.ctx.arc(start_x, start_y, ball_radius, 0, Math.PI * 2)
      cm.ctx.fill()
      cm.ctx.restore()

    }

}

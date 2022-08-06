
import { LotteryBall } from './lotteryball'
import { CanvasManager } from '../managers/canvasmanager'
import { SystemColors } from '../utility'
import { IGame } from '../interfaces/IGame'

export class LotteryBallBackground implements IGame { 
    
    public color: string
    public highlight: string
    public ball: LotteryBall

    private readonly LINE_WEIGHT: number = 1
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
                    this.LINE_WEIGHT,
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
                    this.LINE_WEIGHT,
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
                    this.LINE_WEIGHT,
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
                    this.LINE_WEIGHT,
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
        line_weight: number,
        hex_color: string
    ): void {

        let start_x = ((cm.width / row_total) * row) + line_weight
        let start_y = ((cm.height / col_total) * col) + line_weight
        let draw_width = (cm.width / row_total) - line_weight
        let draw_height = (cm.height / col_total) - line_weight

        cm.ctx.fillStyle = hex_color
        cm.ctx.fillRect(
            start_x, 
            start_y,
            draw_width, 
            draw_height
        )
    }

}

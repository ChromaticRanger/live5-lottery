
import { SystemColors, translateMouseCoordsToBoardCoords } from '../utility';
import { Coord } from './coord';
import { LotteryBall } from './lotteryball';
import { CanvasManager } from '../managers/canvasmanager'
import { IGame } from '../interfaces/IGame';

export class LotteryBoard implements IGame { 

    public color: string
    public highlight: string

    public balls: Array<LotteryBall>

    private readonly LINE_WEIGHT: number = 1;
    private readonly BOLD_WEIGHT: number = 3;
    private readonly ROW_TOTAL: number = 10;
    private readonly COL_TOTAL: number = 6;

    constructor() {
        this.color = SystemColors.BLACK
        this.highlight = SystemColors.BLACK
        this.balls = [];
    }

    public add(ball: LotteryBall) {
        this.balls.push(ball)
    }

    //
    // Return a ball at particular set of coordinates
    //
    public getBall(
        coord: Coord,
        canvas_width: number,
        canvas_height: number
    ): LotteryBall | null {
        
        let result: LotteryBall | null = null

        const ball_coords: Coord = translateMouseCoordsToBoardCoords(
            canvas_width,
            canvas_height,
            this.COL_TOTAL,
            this.ROW_TOTAL,
            coord.x,
            coord.y
        ) 

        for (const ball of this.balls) {
            if (ball.y_pos === ball_coords.x && ball.x_pos === ball_coords.y) {
                result = ball
                break
            }
        }

        return result
    }

    public getBallsAt(nums: Set<number>): Set<LotteryBall> {
      const luckyBalls: Set<LotteryBall> = new Set<LotteryBall>()
      for(let n of nums) {
        // get the ball at the index
        luckyBalls.add(this.balls[n])
      }
      return luckyBalls
    }

    public getBallAt(index: number): LotteryBall {
      return this.balls[index]
    }
    
    public draw(cm: CanvasManager) {
      for (const ball of this.balls) {
          ball.draw(cm)
      }
    }
    
}

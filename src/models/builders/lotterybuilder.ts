
import { BallDataStructure, BallData } from '../BallData'
import { LotteryGame } from '../lotterygame'
import { LotteryBoard } from '../lotteryboard'
import { LotteryBall } from '../lotteryball'
import { LotteryBallBackground } from '../lotteryballbackground'
import { LotteryBallDecoration } from '../lotteryballdecoration'
import { LotteryBallFixedValue } from '../lotteryballfixedvalue'
import { SystemColors } from '../../utility'
import { PassiveBallState } from '../ballpassivestate'
import { ActiveBallState } from '../ballactivestate'
import { CanvasManager } from '../../managers/canvasmanager'

//
// A builder that will be responsible for building a Lottery game board
//
export class LotteryBuilder { 

    constructor() {}

    public build(
        cm: CanvasManager,
        data: BallDataStructure,
    ): LotteryGame {

        // Add a board to the game
        let board = new LotteryBoard()

        // Add balls to the board
        for (let i:number = 0; i < data.length; i++) {

          const row = data[i]

          for (let j:number = 0; j < row.length; j++) {         

            const ball_data:BallData = data[i][j]
            let ball:LotteryBall = new LotteryBall(
                board,
                j, 
                i, 
                (ball_data.state) ? new ActiveBallState() : new PassiveBallState()
            )
            ball.addBackground(
                new LotteryBallBackground(
                    ball, 
                    SystemColors.WHITE,
                    ball_data.hexcolor
                )
            )
            ball.addDecoration(
                new LotteryBallDecoration(
                    ball, 
                    SystemColors.BLACK, 
                    "", 
                    SystemColors.YELLOW
                )
            )
            ball.addFixedValue(
                new LotteryBallFixedValue(
                    ball, 
                    SystemColors.BLACK, 
                    ball_data.value,
                    SystemColors.YELLOW
                )
            )
            board.add(ball)
          }
        }

        // Create a Game object
        let game:LotteryGame = new LotteryGame(cm, board)
        return game
    }
}



import { BallDataStructure } from '../models/BallData'
import { SystemColors } from '../utility'
import { LotteryBuilder } from '../models/builders/lotterybuilder'
import { CanvasManager } from '../managers/canvasmanager'
import { GameType } from '../models/gametypes'
import { LotteryGame } from '../models/lotterygame'

// 
// This class will put together everything needed
// to build a game and return that type of game.
// 
export class GameFactory {

    public static manager: CanvasManager

    public static getGame(
        game_type: GameType,
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ) : LotteryGame | null {

        let game: LotteryGame | null = null
        let gamedata: BallDataStructure = [
          [
            {value: '1', hexcolor: SystemColors.WHITE, state: 'passive'},
            {value: '2', hexcolor: SystemColors.WHITE, state: 'passive'},
            {value: '3', hexcolor: SystemColors.WHITE, state: 'passive'},
            {value: '4', hexcolor: SystemColors.WHITE, state: 'passive'},
            {value: '5', hexcolor: SystemColors.WHITE, state: 'passive'},
            {value: '6', hexcolor: SystemColors.WHITE, state: 'passive'},
          ],
          [
            {value: '7', hexcolor: SystemColors.WHITE, state: 'passive'},
            {value: '8', hexcolor: SystemColors.WHITE, state: 'passive'},
            {value: '9', hexcolor: SystemColors.WHITE, state: 'passive'},
            {value: '10', hexcolor: SystemColors.BLUE, state: 'passive'},
            {value: '11', hexcolor: SystemColors.BLUE, state: 'passive'},
            {value: '12', hexcolor: SystemColors.BLUE, state: 'passive'},
          ],
          [
            {value: '13', hexcolor: SystemColors.BLUE, state: 'passive'},
            {value: '14', hexcolor: SystemColors.BLUE, state: 'passive'},
            {value: '15', hexcolor: SystemColors.BLUE, state: 'passive'},
            {value: '16', hexcolor: SystemColors.BLUE, state: 'passive'},
            {value: '17', hexcolor: SystemColors.BLUE, state: 'passive'},
            {value: '18', hexcolor: SystemColors.BLUE, state: 'passive'},
          ],
          [
            {value: '19', hexcolor: SystemColors.BLUE, state: 'passive'},
            {value: '20', hexcolor: SystemColors.PINK, state: 'passive'},
            {value: '21', hexcolor: SystemColors.PINK, state: 'passive'},
            {value: '22', hexcolor: SystemColors.PINK, state: 'passive'},
            {value: '23', hexcolor: SystemColors.PINK, state: 'passive'},
            {value: '24', hexcolor: SystemColors.PINK, state: 'passive'},
          ],
          [
            {value: '25', hexcolor: SystemColors.PINK, state: 'passive'},
            {value: '26', hexcolor: SystemColors.PINK, state: 'passive'},
            {value: '27', hexcolor: SystemColors.PINK, state: 'passive'},
            {value: '28', hexcolor: SystemColors.PINK, state: 'passive'},
            {value: '29', hexcolor: SystemColors.PINK, state: 'passive'},
            {value: '30', hexcolor: SystemColors.GREEN, state: 'passive'},
          ],
          [
            {value: '31', hexcolor: SystemColors.GREEN, state: 'passive'},
            {value: '32', hexcolor: SystemColors.GREEN, state: 'passive'},
            {value: '33', hexcolor: SystemColors.GREEN, state: 'passive'},
            {value: '34', hexcolor: SystemColors.GREEN, state: 'passive'},
            {value: '35', hexcolor: SystemColors.GREEN, state: 'passive'},
            {value: '36', hexcolor: SystemColors.GREEN, state: 'passive'},
          ],
          [
            {value: '37', hexcolor: SystemColors.GREEN, state: 'passive'},
            {value: '38', hexcolor: SystemColors.GREEN, state: 'passive'},
            {value: '39', hexcolor: SystemColors.GREEN, state: 'passive'},
            {value: '40', hexcolor: SystemColors.YELLOW, state: 'passive'},
            {value: '41', hexcolor: SystemColors.YELLOW, state: 'passive'},
            {value: '42', hexcolor: SystemColors.YELLOW, state: 'passive'},
          ],
          [
            {value: '43', hexcolor: SystemColors.YELLOW, state: 'passive'},
            {value: '44', hexcolor: SystemColors.YELLOW, state: 'passive'},
            {value: '45', hexcolor: SystemColors.YELLOW, state: 'passive'},
            {value: '46', hexcolor: SystemColors.YELLOW, state: 'passive'},
            {value: '47', hexcolor: SystemColors.YELLOW, state: 'passive'},
            {value: '48', hexcolor: SystemColors.YELLOW, state: 'passive'},
          ],
          [
            {value: '49', hexcolor: SystemColors.YELLOW, state: 'passive'},
            {value: '50', hexcolor: SystemColors.PURPLE, state: 'passive'},
            {value: '51', hexcolor: SystemColors.PURPLE, state: 'passive'},
            {value: '52', hexcolor: SystemColors.PURPLE, state: 'passive'},
            {value: '53', hexcolor: SystemColors.PURPLE, state: 'passive'},
            {value: '54', hexcolor: SystemColors.PURPLE, state: 'passive'},
          ],
          [
            {value: '55', hexcolor: SystemColors.PURPLE, state: 'passive'},
            {value: '56', hexcolor: SystemColors.PURPLE, state: 'passive'},
            {value: '57', hexcolor: SystemColors.PURPLE, state: 'passive'},
            {value: '58', hexcolor: SystemColors.PURPLE, state: 'passive'},
            {value: '59', hexcolor: SystemColors.PURPLE, state: 'passive'},
          ]
        ]

        switch (game_type) {
            case GameType.Lottery: {
              let builder: LotteryBuilder
              GameFactory.manager = new CanvasManager(ctx, width, height)
              builder = new LotteryBuilder()
              game = builder.build(GameFactory.manager, gamedata)
              break
            }
            default: {
		          console.log('GAME FACTORY: Default')
              break
            }
        }

        return game

    }

}

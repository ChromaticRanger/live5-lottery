
import { GameFactory } from "./factories/gamefactory"
import { GameType } from "./models/gametypes"
import { Coord } from "./models/coord"
import { LotteryBall } from "./models/lotteryball"
import { ActiveBallState } from "./models/ballactivestate"
import { PassiveBallState } from "./models/ballpassivestate"
import { CorrectBallState } from "./models/ballcorrectstate"
import { drawSixBalls } from "./utility"

//
// Function will take input from main, add event listeners to
// DOM elements and trigger the main game build system
//
export function activate (
  start: HTMLButtonElement | null,
  reset: HTMLButtonElement | null,
  lucky: HTMLButtonElement | null,
  gameCanvas: HTMLCanvasElement | null,
  drawncanvas: HTMLCanvasElement | null
) 
{

  let context:CanvasRenderingContext2D | null = gameCanvas!.getContext("2d")
  let drawncontext:CanvasRenderingContext2D | null = drawncanvas!.getContext("2d")

  const game = GameFactory.getGame(
    GameType.Lottery, 
    context!, 
    context!.canvas.width,
    context!.canvas.height
  )

  game!.draw(GameFactory.manager)

  // If game state is ready, draw the 6 play balls
  start?.addEventListener('click', () => {
    
    game?.clearDrawnBalls()

    // Draw 6 prize balls
    let nums: Set<number> = drawSixBalls()
    let drawn: Set<LotteryBall> = game?.board.getBallsAt(nums)
    game?.setDrawnBalls(drawn)

    drawncontext!.clearRect(0, 0, drawncontext!.canvas.width, drawncontext!.canvas.height); 

    let index = 0
    drawn?.forEach((ball) => {
      ball.transitionTo(new CorrectBallState())
      drawncontext!.save()
      let start_x = ((drawncontext!.canvas.width / 6) * index++) + 4
      let ball_width = (drawncontext!.canvas.width / 6) - 4
      let ball_radius = ball_width / 2
      drawncontext!.translate(ball_radius, ball_radius)
      drawncontext!.fillStyle = '#000000'
      drawncontext!.font = `${ball_width / 3}pt Calibri`
      drawncontext!.textAlign = 'center'
      drawncontext!.textBaseline = 'middle'
      drawncontext!.fillText(ball.fixed_value?.value!, start_x, 0)
      drawncontext!.restore()
    })
    
    // TODO: highlight matched selections
    // TODO: match the prize balls and selected balls
    // TODO: calculate score
    // TODO: show score

    // redraw game
    game?.draw(GameFactory.manager)

  })

  // Reset all game state back to the beginning
  reset?.addEventListener('click', () => {
    game?.reset()
    game?.draw(GameFactory.manager)
    drawncontext!.clearRect(0, 0, drawncontext!.canvas.width, drawncontext!.canvas.height); 
  })
  
  // Choose 6 random balls for the player
  // This will remove and override any manual balls they may have already picked
  lucky?.addEventListener('click', () => {

    // clear any currently selected balls
    game?.clearSelectedBalls()
    
    let nums: Set<number> = drawSixBalls()
    let balls: Set<LotteryBall> | null | undefined = game?.board.getBallsAt(nums)

    // active all 6 balls
    balls?.forEach(ball => {
      ball.transitionTo(new ActiveBallState())
      game?.addSelectedBall(ball!)
    })
      
    game?.draw(GameFactory.manager)

  })

  gameCanvas?.addEventListener('mousedown', (evt) => {
    // highlight the ball that was selected
    let rect = gameCanvas.getBoundingClientRect()
    let x: number = (evt.clientX - rect.left) / (rect.right - rect.left) * gameCanvas.width
    let y: number = (evt.clientY - rect.top) / (rect.bottom - rect.top) * gameCanvas.height
    let coord: Coord = new Coord(x, y)
    let ball: LotteryBall | null | undefined = game?.board.getBall(coord, gameCanvas.width, gameCanvas.height)

    if (ball != null) {
      if (ball?.state?.name === 'Passive') {
        // Activate ball and store it in game selected array
        // but only if there is space in the games selected ball
        // array
        if (game?.SelectedBallCount() < 6) {
          ball?.transitionTo(new ActiveBallState())
          game?.addSelectedBall(ball!)
        }
      }
      else {
        // Deactivate ball and remove it from the game selected aray
        ball?.transitionTo(new PassiveBallState())
        game?.removeSelectedBall(ball!)
      }

      game?.draw(GameFactory.manager)
    }
    
    // console.log(ball)

  })

}



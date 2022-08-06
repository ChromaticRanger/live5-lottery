
//
// Function will take input from main, add event listeners to
// DOM elements and trigger the main game build system
//
export function activate (
  start: HTMLButtonElement | null,
  reset: HTMLButtonElement | null,
  lucky: HTMLButtonElement | null,
  gameCanvas: HTMLCanvasElement | null
) 
{

  let context = gameCanvas?.getContext("2d")

  // If game state is ready, draw the 6 play balls
  start?.addEventListener('click', () => {
    // TODO: draw balls
    console.log('Start Clicked')
  })

  // Reset all game state back to the beginning
  reset?.addEventListener('click', () => {
    // TODO: reset
    console.log('Reset Clicked')
  })
  
  // Choose 6 random balls for the player
  // This will remove and override any manual balls they may have already picked
  lucky?.addEventListener('click', () => {
    // TODO: give player 6 random balls
    console.log('Lucky Clicked')
  })

}

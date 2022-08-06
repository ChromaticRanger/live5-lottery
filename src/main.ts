
import './style.css'
import { activate } from './setup'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
`
  <div>
    <h1>Live 5 Lottery</h1>
    <div id="selection">
      <button id="lucky" type="button">Lucky Dip</button>
    </div>
    <div id="playingsurface">
      <canvas
        id="gamecanvas",
        tabindex='0'
      ></canvas>
    </div>
    <div id="controlpanel">
      <button id="start" type="button">Start</button>
      <button id="reset" type="button">Reset</button>
    </div>
  </div>
`

const start =  document.getElementById('start') as HTMLButtonElement | null
const reset =  document.getElementById('reset') as HTMLButtonElement | null
const lucky =  document.getElementById('lucky') as HTMLButtonElement | null
const canvas = document.getElementById('gamecanvas') as HTMLCanvasElement | null

// Active the game
activate(start, reset, lucky, canvas) 



import './style.css'
import { activate } from './setup'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
`
  <div>
    <h1>Live 5 Lottery</h1>
    <div id="playingsurface">
      <canvas
        id="gamecanvas",
        width="307",
        height="511",
        tabindex='0'
      ></canvas>
      <canvas
        id="drawncanvas",
        width="307",
        height="50",
        tabindex='0'
      ></canvas>
    </div>
    <h3 id="prizemessage"></h3>
    <div id="controlpanel">
      <button id="start" type="button">Start</button>
      <button id="lucky" type="button">Lucky Dip</button>
      <button id="reset" type="button">Reset</button>
    </div>
  </div>
`

const start =  document.getElementById('start') as HTMLButtonElement | null
const reset =  document.getElementById('reset') as HTMLButtonElement | null
const lucky =  document.getElementById('lucky') as HTMLButtonElement | null
const canvas = document.getElementById('gamecanvas') as HTMLCanvasElement | null
const drawncanvas = document.getElementById('drawncanvas') as HTMLCanvasElement | null
const prizemessage = document.getElementById('prizemessage') as HTMLHeadingElement | null

// Active the game
activate(start, reset, lucky, canvas, drawncanvas, prizemessage)


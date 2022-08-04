
import './style.css'
// import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
`
  <div>
    <h1>Live 5 Lottery</h1>
    <div>
      <button id="lucky" type="button">Lucky Dip</button>
      <button id="start" type="button">Start</button>
    </div>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

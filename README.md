# Live 5 Lottery

Here is my submission of the Live 5 Lottery game challenge.

Unfortunately not all requirements have been completed. Simply ran out of time.

## Installation
1. Clone repo and run ```npm install```
2. Issue command ```npm run dev``` to launch Vite dev server

## Implemented
1. Game board and 1 - 59 balls drawn to screen.
2. Manual selection and unselection of only 6 balls
3. Lucky dip button. 6 balls chosen at random and highlighted on the board. 
4. Multiple clicks of Lucky Dip will clear the current board and highlight a new set of 6.
5. Start button draws 6 random prize balls and highlights them on the game board along side players selections.
6. Reset button clears all data structures and screen

## Not yet working
1. Showing prize on the screen

## Design notes
1. Generally an Object Oriented solution using Typescipt and classes
2. Utilised some design patterns. A composite hierarchy of classes to draw game artifacts in stages, giving a bit more control over individual parts of the UI, rather than drawing the whole thing in one go.

## Things I would have added given more time
1. Completed full design brief
2. Added sound to certain events in the game.
3. Added some more style to the UI. Animation of ball selections etc.


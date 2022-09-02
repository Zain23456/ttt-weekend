/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.box')
const messageEl = document.querySelector('#message')
//console.log(messageEl);
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board = ['','', '', '', '', '', '', '', '']
  turn = 1 //represents player x player 0 is -1 * -1 to switch turns
  winner = null
  // value of 1 means x won, -1 means o won, 'T' is for tie
  //render()
  console.log('check')
}
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8]
]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.box')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
  square.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

init()

function render () {
  board.forEach((square, index) => {
    if (square === 1) {
      squareEls[index].textContent = 'X'
    }
    else if (square === -1) {
      squareEls[index].textContent = 'O'
    } else if (square === null) {
      squareEls[index].textContent = ''
    }
  })
  if (winner === null) {
    messageEl.textContent = turn === 1 ? 'Your turn  Player X' : 'Your turn Player O' 
} else if (winner === 'T') {
  messageEl.textContent = 'It is a tie'
} else {
  messageEl.textContent = winner === 1 ? 'Player X has won!!' : 'Player O has won!!'
}
}

function handleClick(evt) {
  let sqIdx = evt.target.id.substring(2)
  if (board[sqIdx] !== null || winner !== null) {
    return
  }
  board[sqIdx] = turn
  turn *= -1
  winner = getWinner()
  render()
}

//console.log(winningCombos.length)

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3) {
      
      return 1
    } else if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
      return -1
    }
  }
  if (!board.includes(null)) {
    return 'T'
  } else {
    return null
  }
}


function init() {
  board = [null, null, null,
          null, null, null,
          null, null, null]
  turn = 1 //represents player x player 0 is -1 * -1 to switch turns
  winner = null
  messageEl.textContent = 'Player X begins'
  // value of 1 means x won, -1 means o won, 'T' is for tie
  render()
}
// Shorthand
const x = (element) => document.querySelector(element)
let playerOne = ''
let playerTwo = ''

const playerOneSelection = (selection) => {
  playerOne = selection
  x('.player-1-selection').textContent = selection
  whoIsTheWinner()
}

const playerTwoSelection = (selection) => {
  playerTwo = selection
  x('.player-2-selection').textContent = selection
  whoIsTheWinner()
}

const whoIsTheWinner = () => {
  if (playerOne === 'Rock' && playerTwo === 'Scissors' || playerOne === 'Paper' && playerTwo === 'Rock' || playerOne === 'Scissors' && playerTwo === 'Paper') {
    alert('Player 1 has won the game!')
    resetGame()
  } else if (playerTwo === 'Rock' && playerOne === 'Scissors' || playerTwo === 'Paper' && playerOne === 'Rock' || playerTwo === 'Scissors' && playerOne === 'Paper') {
    alert('Player 2 has won the game!')
    resetGame()
  } else if (playerOne === 'Rock' && playerTwo === 'Rock' || playerOne === 'Paper' && playerTwo === 'Paper' || playerOne === 'Scissors' && playerTwo === 'Scissors') {
    alert('TIE!')
    resetGame()
  }
}

const resetGame = () => {
  playerOne = ''
  playerTwo = ''
  x('.player-1-selection').textContent = ''
  x('.player-2-selection').textContent = ''
}

// This function enables the user to input their name
const enterPlayerOneName = () => {
  const playerOneName = x('.player-1-input').value
  x('.player-1-name').textContent = playerOneName
  x('.player-1-input').value = ''
}
const enterPlayerTwoName = () => {
  const playerTwoName = x('.player-2-input').value
  x('.player-2-name').textContent = playerTwoName
  x('.player-2-input').value = ''
}

const main = () => {

  x('.player-1-rock').addEventListener('click', () => playerOneSelection('Rock'))
  x('.player-1-paper').addEventListener('click', () => playerOneSelection('Paper'))
  x('.player-1-scissors').addEventListener('click', () => playerOneSelection('Scissors'))

  x('.player-2-rock').addEventListener('click', () => playerTwoSelection('Rock'))
  x('.player-2-paper').addEventListener('click', () => playerTwoSelection('Paper'))
  x('.player-2-scissors').addEventListener('click', () => playerTwoSelection('Scissors'))

  x('.update-player-1-name').addEventListener('click', enterPlayerOneName)
  x('.update-player-2-name').addEventListener('click', enterPlayerTwoName)
}

document.addEventListener('DOMContentLoaded', main)

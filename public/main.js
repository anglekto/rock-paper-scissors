// Shorthand
const x = (element) => document.querySelector(element)

// if the Rock Button is clicked, 'Rock' will display
const playerOneClickedRock = () => {
  x('.player-1-selection').textContent = 'Rock'
  if (x('.player-1-selection').textContent === 'Rock' & x('.player-2-selection').textContent === 'Scissors') {
    alert('Player 1 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Rock' & x('.player-2-selection').textContent === 'Paper') {
    alert('Player 2 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Rock' &
  x('.player-2-selection').textContent === 'Rock') {
    alert('It is a tie!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  }
}
const playerTwoClickedRock = () => {
  x('.player-2-selection').textContent = 'Rock'
  if (x('.player-1-selection').textContent === 'Scissors' & x('.player-2-selection').textContent === 'Rock') {
    alert('Player 2 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Paper' & x('.player-2-selection').textContent === 'Rock') {
    alert('Player 1 won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Rock' & x('.player-2-selection').textContent === 'Rock') {
    alert('It is a tie!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  }
}

// if the Paper Button is clicked, 'Paper' will display
const playerOneClickedPaper = () => {
  x('.player-1-selection').textContent = 'Paper'
  if (x('.player-1-selection').textContent === 'Paper' & x('.player-2-selection').textContent === 'Rock') {
    alert('Player 1 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Paper' & x('.player-2-selection').textContent === 'Scissors') {
    alert('Player 2 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Paper' & x('.player-2-selection').textContent === 'Paper') {
    alert('It is a tie!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  }
}
const playerTwoClickedPaper = () => {
  x('.player-2-selection').textContent = 'Paper'
  if (x('.player-1-selection').textContent === 'Rock' & x('.player-2-selection').textContent === 'Paper') {
    alert('Player 2 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Scissors' & x('.player-2-selection').textContent === 'Paper') {
    alert('Player 1 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Paper' & x('.player-2-selection').textContent === 'Paper') {
    alert('It is a tie!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  }
}

// if the Scissors Button is clicked, 'Scissors' will display
const playerOneClickedScissors = () => {
  x('.player-1-selection').textContent = 'Scissors'
  if (x('.player-1-selection').textContent === 'Scissors' & x('.player-2-selection').textContent === 'Rock') {
    alert('Player 2 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Scissors' & x('.player-2-selection').textContent === 'Paper') {
    alert('Player 1 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Scissors' & x('.player-2-selection').textContent === 'Scissors') {
    alert('It is a tie!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  }
}
const playerTwoClickedScissors = () => {
  x('.player-2-selection').textContent = 'Scissors'
  if (x('.player-1-selection').textContent === 'Rock' & x('.player-2-selection').textContent === 'Scissors') {
    alert('Player 1 has won the game!') 
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Paper' & x('.player-2-selection').textContent === 'Scissors') {
    alert('Player 2 has won the game!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  } else if (x('.player-1-selection').textContent === 'Scissors' & x('.player-2-selection').textContent === 'Scissors') {
    alert('It is a tie!')
    x('.player-1-selection').textContent = ''
    x('.player-2-selection').textContent = ''
  }
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
  x('.player-1-rock').addEventListener('click', playerOneClickedRock)
  x('.player-1-paper').addEventListener('click', playerOneClickedPaper)
  x('.player-1-scissors').addEventListener('click', playerOneClickedScissors)

  x('.player-2-rock').addEventListener('click', playerTwoClickedRock)
  x('.player-2-paper').addEventListener('click', playerTwoClickedPaper)
  x('.player-2-scissors').addEventListener('click', playerTwoClickedScissors)

  x('.update-player-1-name').addEventListener('click', enterPlayerOneName)
  x('.update-player-2-name').addEventListener('click', enterPlayerTwoName)
}

document.addEventListener('DOMContentLoaded', main)

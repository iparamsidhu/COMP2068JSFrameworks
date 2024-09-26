const prompt = require('prompt');
prompt.start();

const schema = {
  properties: {
    userSelection: {
      description: 'Choose ROCK, PAPER, or SCISSORS',
      pattern: /^(ROCK|PAPER|SCISSORS)$/i,
      message: 'Input must be ROCK, PAPER, or SCISSORS',
      required: true
    }
  }
};

function startGame() {
  prompt.get(schema, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    const userSelection = result.userSelection.toUpperCase();
    const computerSelection = getComputerSelection();

    console.log(`User selected: ${userSelection}`);
    console.log(`Computer selected: ${computerSelection}`);

    const outcome = determineWinner(userSelection, computerSelection);
    console.log(outcome);
  });
}

function getComputerSelection() {
  const randomNum = Math.random();
  if (randomNum < 0.34) return 'PAPER';
  if (randomNum < 0.68) return 'SCISSORS';
  return 'ROCK';
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === 'ROCK' && computer === 'SCISSORS') ||
    (user === 'PAPER' && computer === 'ROCK') ||
    (user === 'SCISSORS' && computer === 'PAPER')
  ) {
    return "User Wins!";
  } else {
    return "Computer Wins!";
  }
}

startGame();
const computerPlays = () => {
	const arr = ['rock', 'paper', 'scissors'];
	let getRandomNumber = Math.floor(Math.random() * 3);
	return arr[getRandomNumber];
};

const playerSelection = prompt('enter rock papers or scissors').toLowerCase();
const computerSelection = computerPlays();

let playerScore = 0;
let computerScore = 0;

const game = () => {
	return playRound(playerSelection, computerSelection);
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) return `It's a Tie`;

	if (playerSelection === 'rock') {
		if (computerSelection === 'scissors') {
			playerScore++;
			return `You Win! ${playerSelection} beats ${computerSelection}`;
		} else {
			computerScore++;
			return `Computer Wins! ${computerSelection} beats ${playerSelection}`;
		}
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'rock') {
			playerScore++;
			return `You Win! ${playerSelection} beats ${computerSelection}`;
		} else {
			computerScore++;
			return `Computer Wins! ${computerSelection} beats ${playerSelection}`;
		}
	} else if (playerSelection === 'scissors') {
		if (computerSelection === 'paper') {
			playerScore++;
			return `You Win! ${playerSelection} beats ${computerSelection}`;
		} else {
			computerScore++;
			return `Computer Wins! ${computerSelection} beats ${playerSelection}`;
		}
	}
};

console.log(
	game(),
	`Your score: ${playerScore}`,
	`Computer score: ${computerScore}`
);

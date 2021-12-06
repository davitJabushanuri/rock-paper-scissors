const computerPlays = () => {
	const arr = ['rock', 'paper', 'scissors'];
	let getRandomNumber = Math.floor(Math.random() * 3);
	return arr[getRandomNumber];
};

const playerPlays = () => {
	const arr = ['rock', 'paper', 'scissors'];
	let playerSelection = prompt('enter rock papers or scissors').toLowerCase();

	return arr.includes(playerSelection) ? playerSelection : playerPlays();
};

let playerScore = 0;
let computerScore = 0;

const game = () => {
	for (let i = 0; i < 5; i++) {
		console.log(
			playRound(playerPlays(), computerPlays()),
			`Your score: ${playerScore}`,
			`Computer score: ${computerScore}`
		);
	}
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

game();

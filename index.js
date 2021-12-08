const computerPlays = () => {
	const arr = ['rock', 'paper', 'scissors'];
	let getRandomNumber = Math.floor(Math.random() * 3);
	return arr[getRandomNumber];
};
let playerSelection;
const showScore = document.getElementById('score');
const events = document.getElementById('event');
const winner = document.getElementById('winner');
const container = document.getElementById('info');
const buttonContainer = document.getElementById('container');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		playerSelection = e.target.id;

		const playRound = (playerSelection, computerSelection) => {
			if (playerSelection === computerSelection) {
				events.textContent = `It's a Tie`;
			} else if (playerSelection === 'rock') {
				if (computerSelection === 'scissors') {
					playerScore++;
					events.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
				} else {
					computerScore++;
					events.textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}`;
				}
			} else if (playerSelection === 'paper') {
				if (computerSelection === 'rock') {
					playerScore++;
					events.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
				} else {
					computerScore++;
					events.textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}`;
				}
			} else if (playerSelection === 'scissors') {
				if (computerSelection === 'paper') {
					playerScore++;
					events.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
				} else {
					computerScore++;
					events.textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}`;
				}
			}
		};
		playRound(playerSelection, computerPlays());
		gameOver();

		showScore.textContent = `Your score: ${playerScore},
			Computer score: ${computerScore}`;
	});
});

let playerScore = 0;
let computerScore = 0;
let play;

const gameOver = () => {
	if (playerScore === 5 || computerScore === 5) {
		playerScore > computerScore
			? (winner.textContent = `You WIn!`)
			: (winner.textContent = `You Lost!`);
		buttonContainer.style.display = `none`;
		play = document.createElement('button');
		play.classList.add('play-again');
		play.textContent = `PlayAgain?`;
		container.appendChild(play);
		play.addEventListener('click', () => {
			window.location.reload();
		});
	}
};

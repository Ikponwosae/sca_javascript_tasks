/*
~RESULT GRID FORMAT:
PLAYER
	         ROCK          PAPER         SCISSORS 
C   ROCK     tie           playerwins    computerwins
O   PAPER    computerwins  tie           playerwins
M   SCISSORS playerwins    computerwins  tie
P
*/

//LAST EDITED ON 05-07-2020

class SinglePlayer {
	constructor(choice) {
		this.choice = choice;
	}

gameChoice() {
	let computer = Math.floor(Math.random() * 3);
	let gameValue;
	switch(this.choice) {
		case 0: 
		 gameValue = 'rock';
			break;
		case 1: 
		 gameValue = 'paper';
			break;
		case 2: 
		 gameValue = 'scissors';
			break;
		default: return;
	}
	const games = ['rock', 'paper', 'scissors'];
	let computerChoice = games[computer];
	let playerChoice = games.indexOf(gameValue);
	
	const result = [ 
		['Tie!', 'playerWins!', 'computerWins!'],
	    ['computerWins!', 'Tie!', 'playerWins!'], 
	    ['playerWins!', 'computerWins!', 'Tie!'],
];
console.log('The Player chooses \"', gameValue ,'\" and the computer chooses \"', computerChoice , '\"');
console.log(result[playerChoice][computer]);
	return this;
}

}

let person = new SinglePlayer(1);
person.gameChoice();
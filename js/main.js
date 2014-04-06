//declare global variables
var choices = ["rock", "paper", "scissors"];
// set scoreboard to 0
var humanScore = 0;
var computerScore = 0;

//define functions
function comp_wins() {
	computerScore += 1;
	document.getElementById('computerScore').innerHTML = computerScore;	
	document.getElementById('status').innerHTML = "bot wins!";
}
function human_wins() {
	humanScore += 1;
	document.getElementById('humanScore').innerHTML = humanScore;
	document.getElementById('status').innerHTML = "you win!";
}

function showAlert(human, computer) {
	alert("Bot played " + computer);
	play(human, computer);
}

function play(human, computer) {
	if (human === computer) {
		document.getElementById('status').innerHTML = "it's a tie.";
	} else {
		if (human === "rock") {
			if (computer === "paper") {
				comp_wins();
			} else if (computer === "scissors") {
				human_wins();
			}
		} else if (human === "paper") {
			if (computer === "rock") {
				human_wins();
			} else if (computer === "scissors") {
				comp_wins();
			}
		} else if (human === "scissors") {
			if (computer === "rock") {
				comp_wins();
			} else if (computer === "paper") {
				human_wins();
			}
		}
	}
}

document.getElementById('rock').addEventListener("click", function(){
	var computer = choices[Math.floor(Math.random()*3)];
	showAlert("rock", computer);
});
document.getElementById('paper').addEventListener("click", function(){
	var computer = choices[Math.floor(Math.random()*3)];
	showAlert("paper", computer);
});
document.getElementById('scissors').addEventListener("click", function(){
	var computer = choices[Math.floor(Math.random()*3)];
	showAlert("scissors", computer);
});
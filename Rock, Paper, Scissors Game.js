<script type= "text/javascript">
var userChoice;
var computerChoice;

function getUserChoice () {
 var userInput= prompt('What is your choice?');
 userInput.toLowerCase();
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput;
 } else {
  console.log( 'Error!');
 }
}

function getComputerChoice () {
 var randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber) {
  case 0:
   return 'rock';
   break;
  case 1:
   return 'paper';
   break;
  case 2:
   return 'scissors';
   break;

           }

}

function determineWinner () {
 if (userChoice === computerChoice) {
  console.log ('The game is a draw!');
 }
 else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
   return 'The computer won!';
  } else {
   return 'You Won!';
  }
 }

else if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
   return 'The computer won!';
  } else {
   return 'You Won!';
  }
}
 else if (userChoice === 'paper') {
  if (computerChoice === 'scissors'){
   return 'The computer Won!';
  } else {
   return 'You Won!';
  }
 }
}
function playGame () {
 userChoice = getUserChoice();
 computerChoice = getComputerChoice();
 console.log('You threw: ' + userChoice);
 console.log('The computer threw: ' + computerChoice);

 console.log(determineWinner());
}

playGame();
<script>

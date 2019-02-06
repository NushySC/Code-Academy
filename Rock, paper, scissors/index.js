const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('There\'s an error with your choice');
    }
};


const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    };
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        console.log('It\'s a tie');
    } 
    
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
        console.log('Computer Wins');
      } else if (computerChoice === 'paper') {
        console.log('User Wins');
    }
}

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
        console.log('Computer Wins');
      } else if (computerChoice === 'rock') {
        console.log('User Wins');
    } 
}

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
        console.log('Computer Wins');
      } else if (computerChoice === 'scissors') {
        console.log('User Wins');
    } 
}
}

const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

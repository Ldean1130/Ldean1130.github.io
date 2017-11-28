var humanScore = 0;
var computerScore = 0;

function play(humanPlay, computerPlay) {

  console.log("You played " + humanPlay + ". The bot played " + computerPlay + ".");

  if (humanPlay === computerPlay) {
    console.log('You tied. :|');

  } else if (humanPlay === 'paper' && computerPlay === 'rock' ||
  humanPlay === 'rock' && computerPlay === 'scissors' ||
  humanPlay === 'scissors' && computerPlay === 'paper') {

    console.log('You win! :)');
    humanScore += 1;

  } else {
    console.log('You lose! :(');
    computerScore += 1;
  }

  console.log('You have ' + humanScore + ' points');
  console.log('The bot has ' + computerScore + ' points');

}

play('rock', 'paper');
play('paper', 'scissors');
play('paper', 'scissors');
play('paper', 'scissors');
play('scissors', 'paper');

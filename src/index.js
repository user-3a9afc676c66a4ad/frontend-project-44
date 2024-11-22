import readlineSync from 'readline-sync';

import makeWelcome from './cli.js';

const playGame = (questiongame, questionRound) => {
  // greeting
  const userName = makeWelcome();
  // outputting of the game question
  console.log(questiongame);
  // game cycle = 3
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const round = questionRound();
    console.log(round[0]);
    const answer = readlineSync.question('Your answer: ');
    // right answer
    const correctAnsw = round[1];
    //  checking and output of the answers
    if (answer === correctAnsw) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnsw}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  // the final message of victory
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;

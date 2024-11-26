import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';
// set game cycles
const roundsCount = 3;

const playGame = (questiongame, generateRound) => {
  // greeting
  const userName = makeWelcome();
  // outputting of the game question
  console.log(questiongame);
  // game cycle = 3
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(question);
    const userAnsw = readlineSync.question('Your answer: ');
    //  checking and output of the answers
    if (answer === userAnsw) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  // the final message of victory
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;

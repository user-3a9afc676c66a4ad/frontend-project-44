import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  let number1 = getRandomInRange();
  let number2 = getRandomInRange();
  const question = `Question: ${number1} ${number2}`;

  let answer = 0;
  while (number2 !== 0) {
    const temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  answer = number1.toString();

  return [question, answer];
};

const gcdGame = () => playGame(questionGame, generateRound);

export default gcdGame;

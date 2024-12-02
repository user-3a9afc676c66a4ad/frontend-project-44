import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'Find the greatest common divisor of given numbers.';

const gsd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const generateRound = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  const question = `Question: ${number1} ${number2}`;
  const answer = gsd(number1, number2).toString();

  return [question, answer];
};

const gcdGame = () => playGame(questionGame, generateRound);

export default gcdGame;

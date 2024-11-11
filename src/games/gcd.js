import playGame from '../index.js';

import randomNumber from '../utils.js';

const questionGame = 'Find the greatest common divisor of given numbers.';

const questionRound = () => {
  const number1 = randomNumber(1, 10);
  const number2 = randomNumber(1, 10);
  const question = `Question:${number1} ${number2}`;

  let result = 0;
  if (number1 === 0 || number2 === '+') {
    result = `${number1 + number2}`;
  } else if (number1 === 1 || number2 === '-') {
    result = `${number1 - number2}`;
  } else if (number1 === 2 || number2 === '*') {
    result = `${number1 * number2}`;
  }

  return [question, result];
};

const gcdGame = () => playGame(questionGame, questionRound);

export default gcdGame;

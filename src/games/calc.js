import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'What is the result of the expression?';

const questionRound = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  const arr = ['+', '-', '*'];
  const mathOperation = Math.floor(Math.random() * arr.length);
  const oper = arr[mathOperation];
  const question = `Question: ${number1} ${oper} ${number2}`;

  let result = 0;
  if (oper === '+') {
    result = `${number1 + number2}`;
  } else if (oper === '-') {
    result = `${number1 - number2}`;
  } else if (oper === '*') {
    result = `${number1 * number2}`;
  }

  return [question, result];
};

const calcGame = () => playGame(questionGame, questionRound);

export default calcGame;

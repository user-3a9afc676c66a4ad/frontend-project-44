import playGame from '../index.js';

import randomNumber from '../utils.js';

const questionGame = 'What is the result of the expression?';

const questionRound = () => {
  const number1 = randomNumber(1, 10);
  const number2 = randomNumber(1, 10);
  const arr = ['+', '-', '*'];
  const mathOperation = Math.floor(Math.random() * arr.length);
  const oper = arr[mathOperation];
  const question = `Question:${number1} ${oper} ${number2}`;

  let result = 0;
  if (mathOperation === 0 || oper === '+') {
    result = `${number1 + number2}`;
  } else if (mathOperation === 1 || oper === '-') {
    result = `${number1 - number2}`;
  } else if (mathOperation === 2 || oper === '*') {
    result = `${number1 * number2}`;
  }

  return [question, result];
};

const calcGame = () => playGame(questionGame, questionRound);

export default calcGame;

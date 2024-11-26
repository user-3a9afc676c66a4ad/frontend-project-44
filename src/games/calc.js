import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'What is the result of the expression?';

const generateRound = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  const operators = ['+', '-', '*'];
  const mathOperation = getRandomInRange(0, operators.length - 1);
  const oper = operators[mathOperation];
  const question = `Question: ${number1} ${oper} ${number2}`;

  let answer = 0;
  if (oper === '+') {
    answer = `${number1 + number2}`;
  } else if (oper === '-') {
    answer = `${number1 - number2}`;
  } else if (oper === '*') {
    answer = `${number1 * number2}`;
  }

  return [question, answer];
};

const calcGame = () => playGame(questionGame, generateRound);

export default calcGame;

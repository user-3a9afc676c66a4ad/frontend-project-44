import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'What is the result of the expression?';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  const operators = ['+', '-', '*'];
  const mathOperation = getRandomInRange(0, operators.length - 1);
  const operator = operators[mathOperation];
  const question = `Question: ${number1} ${operator} ${number2}`;

  const answer = calculation(number1, number2, operator).toString();

  return [question, answer];
};

const calcGame = () => playGame(questionGame, generateRound);

export default calcGame;

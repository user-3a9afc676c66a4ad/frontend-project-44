import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomInRange();
  const question = `Question: ${number}`;

  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const evenGame = () => playGame(questionGame, generateRound);

export default evenGame;

import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionRound = () => {
  const number = getRandomInRange();
  const question = `Question: ${number}`;

  let result = 0;
  if (number % 2 === 0) {
    result = 'yes';
  } else if (number % 2 !== 0) {
    result = 'no';
  }

  return [question, result];
};

const evenGame = () => playGame(questionGame, questionRound);

export default evenGame;

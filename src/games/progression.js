import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'What number is missing in the progression?';

const progression = (startNumb, pogrlength, progrStep) => {
  const arr = [];
  for (let i = 0; i <= pogrlength; i += 1) {
    arr.push(startNumb + i * progrStep);
  }
  return arr;
};

const generateRound = () => {
  const number = getRandomInRange();
  const length = getRandomInRange(5, 10);
  const step = getRandomInRange(1, 10);
  const itemSkip = getRandomInRange(2, length);

  const answer = progression(number, length, step)[itemSkip].toString();

  const arrProgression = progression(number, length, step);
  /* eslint-disable no-unused-vars */
  const skipItem = arrProgression.splice([itemSkip], 1, '..');
  /* eslint-enable no-unused-vars */
  const question = `Question: ${arrProgression.join(' ')}`;

  return [question, answer];
};

const progressionGame = () => playGame(questionGame, generateRound);

export default progressionGame;

import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'What number is missing in the progression?';

const questionRound = () => {
  const number = getRandomInRange();
  const length = getRandomInRange(5, 10);
  const step = getRandomInRange(1, 10);
  const itemSkip = getRandomInRange(2, length);
  const progression = () => {
    const arr = [];
    for (let i = 0; i <= length; i += 1) {
      arr.push(number + i * step);
    }
    return arr;
  };

  const result = progression()[itemSkip].toString();

  const arrProgression = progression();
  /* eslint-disable no-unused-vars */
  const skipItem = arrProgression.splice([itemSkip], 1, '..');
  /* eslint-enable no-unused-vars */
  const question = `Question: ${arrProgression.join(' ')}`;

  return [question, result];
};

const progressionGame = () => playGame(questionGame, questionRound);

export default progressionGame;

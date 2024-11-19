import playGame from '../index.js';

import randomNumber from '../utils.js';

const questionGame = 'What number is missing in the progression?';

const questionRound = () => {
  const number = randomNumber(1, 50);
  const length = randomNumber(5, 10);
  const step = randomNumber(1, 10);
  const itemSkip = randomNumber(2, length);
  const progression = () => {
    const arr = [];
    for (let i = 0; i <= length; i += 1) {
      arr.push(number + i * step);
    }
    return arr;
  };

  const result = progression()[itemSkip].toString();

  const arrProgression = progression();

  const skipItem = arrProgression.splice([itemSkip], 1, '..');

  const question = `Question: ${arrProgression.join(' ')}`;

  return [question, result];
};

const progressionGame = () => playGame(questionGame, questionRound);

export default progressionGame;

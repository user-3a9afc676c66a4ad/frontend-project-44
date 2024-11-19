import playGame from '../index.js';

import randomNumber from '../utils.js';

const questionGame =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionRound = () => {
  const number = randomNumber(1, 10);
  const question = `Question: ${number}`;

  let result = '';
  const isPrime = () => {
    if (number <= 1) return 'no';
    for (let i = 2; i < Math.sqrt(number); i += 1) {
      if (number % i === 0) return 'no';
    }
    return 'yes';
  };
  result = isPrime();

  return [question, result];
};

const primeGame = () => playGame(questionGame, questionRound);

export default primeGame;

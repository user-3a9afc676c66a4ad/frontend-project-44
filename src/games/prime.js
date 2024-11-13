import playGame from '../index.js';

import randomNumber from '../utils.js';

const questionGame =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionRound = () => {
  const number = randomNumber(1, 10);
  const question = `Question:${number}`;

  let result = 0;
  function isPrime() {
    for (let i = 2; i < number; i = +1) {
      if (number % i === 0) return 'yes';
    }
    return 'no';
  }
  result = isPrime();

  return [question, result];
};

const primeGame = () => playGame(questionGame, questionRound);

export default primeGame;

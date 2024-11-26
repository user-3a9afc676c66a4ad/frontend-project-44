import playGame from '../index.js';

import getRandomInRange from '../utils.js';

const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInRange();
  const question = `Question: ${number}`;

  // let answer = '';
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

const primeGame = () => playGame(questionGame, generateRound);

export default primeGame;

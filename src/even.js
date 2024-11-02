import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello,${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let i = 1;
  while (i <= 3) {
    let number = randomNumber(1, 100);
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    console.log('Question:' + number);
    const answer = readlineSync.question('Your answer: ');

    let correctAnsw = '';

    const wrong = () => {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was ${correctAnsw}.\nLet's try again, ${name}!`
      );
    };

    if (
      (answer === 'yes' && number % 2 === 0) ||
      (answer === 'no' && number % 2 !== 0)
    ) {
      console.log('Correct!'); // правильные ответы. Работают, если закончить цикл
    } else if (answer === 'no' && number % 2 === 0) {
      correctAnsw = "'yes'";
      return wrong();
    } else if (answer === 'yes' && number % 2 !== 0) {
      correctAnsw = "'no'";
      return wrong();
    } else if (answer === '.') {
      correctAnsw = "'yes' or 'no'";
      return wrong();
    }

    i = i + 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default even;

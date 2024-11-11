import readlineSync from 'readline-sync';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello,${name}!`);
  console.log('What is the result of the expression?');

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let i = 1;
  while (i <= 3) {
    const number1 = randomNumber(1, 10);
    const number2 = randomNumber(1, 10);
    const arr = ['+', '-', '*'];
    const mathOperation = Math.floor(Math.random() * arr.length);
    const oper = arr[mathOperation];
    console.log(`Question:${number1} ${oper} ${number2}`);
    const answer = readlineSync.question('Your answer: ');

    let correctAnsw = 0;
    if (mathOperation === 0 || oper === '+') {
      correctAnsw = `${number1 + number2}`;
    } else if (mathOperation === 1 || oper === '-') {
      correctAnsw = `${number1 - number2}`;
    } else if (mathOperation === 2 || oper === '*') {
      correctAnsw = `${number1 * number2}`;
    }

    const wrong = () => {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnsw}'.\nLet's try again, ${name}!`
      );
    };

    if (answer === correctAnsw) {
      console.log('Correct!');
    } else if (answer !== correctAnsw) {
      return wrong();
    }
    i += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default calc;

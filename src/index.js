import readlineSync from 'readline-sync';

// запрос имени
import username from './cli.js';

// приветствие
const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = username();
  console.log(`Hello, ${userName}!`);
};

const playGame = (questiongame, questionRound) => {
  const userName = username();
  console.log(questiongame); // вывод вопроса игры
  // цикл игры = 3
  let i = 1;
  while (i <= 3) {
    const round = questionRound();
    console.log(round[0]);
    const answer = readlineSync.question('Your answer: ');
    // правильный ответ
    const correctAnsw = round[1];
    // вывод неправильного ответа
    const wrong = () => {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnsw}'.\nLet's try again, ${userName}!`
      );
    };
    // проверка
    if (answer === correctAnsw) {
      console.log('Correct!');
    } else if (answer !== correctAnsw) {
      return wrong();
    }
    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;

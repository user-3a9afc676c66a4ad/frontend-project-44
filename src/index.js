import readlineSync from 'readline-sync';

// приветствие
import greetUser from './cli.js';

const playGame = (questiongame, questionRound) => {
  // приветствие
  const userName = greetUser();
  // вывод вопроса игры
  console.log(questiongame);
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

  // финальное сообщение о победе
  const winMessage = () => {
    console.log(`Congratulations, ${userName}!`);
  };
  winMessage();
};

export default playGame;

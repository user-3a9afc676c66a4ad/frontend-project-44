import readlineSync from 'readline-sync';

function username() {
  const name = readlineSync.question('May I have your name? ');

  return name;
}

export default username;

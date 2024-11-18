#!/usr/bin/env node
import username from '../src/cli.js';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = username();
  console.log(`Hello, ${userName}!`);
};

export default greetUser;

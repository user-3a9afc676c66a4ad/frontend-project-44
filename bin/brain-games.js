#!/usr/bin/env node
import username from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = username();
console.log(`Hello, ${userName}!`);

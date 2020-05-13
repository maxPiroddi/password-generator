import { getRandomLow, getRandomUp, getRandomNum, getRandomSym } from './generators';

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLow,
  upper: getRandomUp,
  number: getRandomNum,
  symbol: getRandomSym
}

// clipboard event listener

// generate btn listener

const generatePassword = (lower, upper, number, symbol, length) => {
  console.log('RUNNING');
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
    return '';
  }
  
  // loop & print new symbol to string
  for(let i=0; i<length; i+=typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  
  return generatedPassword.slice(0, length);
};

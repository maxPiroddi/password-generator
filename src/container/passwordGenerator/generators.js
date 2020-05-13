const getRandomLow = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUp = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNum = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSym = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

module.exports = {
  getRandomLow,
  getRandomUp,
  getRandomNum,
  getRandomSym,
};
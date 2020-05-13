export const getRandomLow = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

export const getRandomUp = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

export const getRandomNum = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

export const getRandomSym = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};
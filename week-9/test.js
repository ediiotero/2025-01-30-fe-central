let expect = require("chai").expect;

function doSomething(x,y) {
  if (typeof x !== "string") throw new Error("x must be a string");
  return x + y;
}



//////////

function isTheSame(input1, input2) {
  return input1 === input2
}



//////////

const names = ['tom', 'jerry']



/////////

const player1 = {card: 'king', value: 10}
const player2 = {card: 'heart', value: 5}
const player3 = {card: 'spade', value: 5}
const player4 = {card: 'spade', value: 3}


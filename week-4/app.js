const firstName = "Eddie";
const lastName = "Otero";
const isHappy = true;
const list = ["Tobi", 4, false];
const obj = {
  key: "value",
  name: "Eddie",
  address: {
    street: "Main St",
    city: "City Name",
    state: "FL",
  },
};
const nothing = null;
let test;
const symbol1 = Symbol('test');

// console.log(firstName)
// console.log(lastName)
// console.log(isHappy)
// console.log(list)
// console.log(obj)
// console.log(nothing)
// console.log(test)
console.log(symbol1)

const number = 5;
const number1 = "5";
const number2 = 2;

// console.log('test 1', number == number1)
// console.log('test 2', number === number1)

console.log(number + number2 - 3);
console.log(number - number2);
console.log(number / number2);
console.log(number * number2);
console.log(number % number2);
console.log(number > number2);
console.log(number < number2);

console.log("string concat:", firstName + " " + lastName);

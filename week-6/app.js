const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
    console.log('acc:', accumulator)
    console.log('curr:', currentValue)
    return accumulator + currentValue
  },
  initialValue,
);

console.log(sumWithInitial);



// Recap: Write a loop that will prompt the user 3 times 
// and store the response in an array and console.log or alert
//  the answers when the loop is done

const questions = [
    "What is your name?", 
    "What is your favorite color?", 
    "What city are you in?"
];

const answers = []

//loop


// ========================

// Write a function that takes in the num Array.
// Remove all the odd numbers and multiply each item by 3.
// Creating a new array. Return the new array

const num = [2,5,9,10,23]



// ==========================

// Write a function to find the longest word in the array

const words = ["cat", "pizza", "javascript"]



// ==============================

// Write a function that will take a word and/or sentence and remove all of the vowels
// and returns a new string no spaces (please account for upper and lower case letters, and spaces)
// ex: 'The Batman' should return 'thbtmn'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split




// ===================

// Create a function that will convert Celsius to Fahrenheit and another 
// that will convert Fahrenheit to Celsius

// The function should take in a number and run the formula and return the converted temp

// To convert C to F: Divide by 5, then multiply by 9, then add 32
// To convert F to C: Deduct 32, then multiply by 5, then divide by 9


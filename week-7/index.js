// Write a function that asks the user for 3 numbers, adds them all up then multiply 
// them by 3. You must check that the users input is a number if it isn't
// prompt the user again


const getNumber = () => {
    let currentCount = 0
    for (let i = 0; i < 3; i++) {
        let question = parseInt(prompt('Pick a number'))
        while(isNaN(question)) {
            question = prompt('Pick a number')
        }

        currentCount = currentCount + question
    }
    return currentCount * 3
}

// console.log(getNumber())

// ============================================

// Write a function called 'finishSentence' that takes two inputs,  an array and a function
// use the list array below
// your callback function called 'combine' should combine two strings together and return them
// finishSentence should loop through the given array prompt the user with the questions in the array
// and combine the elements in the array with the word given in the prompt and alert the answer
//*** Bonus: accomplish the same result without the finishSentence function and use an array method

const list = ["My name is ", "I live in ", "My favorite food is "];

const combine = (sentence, word) => `${sentence} ${word}`

const finishSentence = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        const word = prompt(array[i])
        alert(callback(array[i], word))
    }
}

// finishSentence(list, combine)


// ============================================

// Write a Promise
// The promise should prompt the user to guess a number between 1 and 20,
// wait 3 seconds 
// and check to see if the number is greater than or equal to 10
// if its larger resolve the promise
// if its lower reject the promise
// Use the promise to alert "you win" if resolved
// and "you lose" if rejected


const myPromise = new Promise((resolve, reject) => {
    const guess = prompt('Guess a number between 1 and 20')
    setTimeout(() => {
        if(guess >= 10){
            resolve('You win')
        }else{
            reject('You lose')
        }
    }, 3000)
})


myPromise.then(value => alert(value)).catch(value => alert(value))

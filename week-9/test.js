let expect = require("chai").expect;

function doSomething(x,y) {
  if (typeof x !== "string") throw new Error("x must be a string");
  return x + y;
}

describe("myFunctions", () => {
  describe("doSomething", () => {
    it ("should concatenate", () => {
      let x = doSomething("Hello", 5);
      expect(x).to.equal("Hello5");
    });
    it ("should throw error if not string", () => {
      expect(() => doSomething(5, 5)).to.throw(Error);
    });
  });
});



//////////

function isTheSame(input1, input2) {
  return input1 === input2
}

describe('isTheSame', () => {
  it('should return true if both inputs are the same', () => {
    const result = isTheSame(1, 1)
    expect(result).to.be.true
  })

  it('should return false if both inputs are not the same', () => {
    const result = isTheSame(1,2)
    expect(result).to.be.false
  })
})


//////////

const names = ['tom', 'jerry']

describe('name array', () => {
  it('should have a length of 2', () => {
    expect(names).to.have.length(2)
  })
})

/////////

const player1 = {card: 'king', value: 10}
const player2 = {card: 'heart', value: 5}
const player3 = {card: 'spade', value: 5}
const player4 = {card: 'spade', value: 3}

function war(card1, card2) {
  if(card1.value > card2.value) {
    return `${card1.card} card wins`
  } else if(card1.value < card2.value) {
    return `${card2.card} card wins`
  }

  return 'it\'s a tie'
}

describe('Playing war', () => {
  it('should return king card wins', () => {
    const winner = war(player1, player2)
    expect(winner).to.eq('king card wins')
  })

  it('should return heart card wins', () => {
    const winner = war(player4, player2)
    expect(winner).to.eq('heart card wins')
  })

  it('should return it\'s a tie', () => {
    const winner = war(player3, player2)
    expect(winner).to.eq('it\'s a tie')
  })
})
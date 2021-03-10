// create a function luckyNumber that will receive a number as a parameter and return if it is a lucky number or not. A lucky number must match these conditions:
// it is positive
// it is a multiple of 2 or 3
// it is not 15

const luckyNumber = number => number > 0 &&  number % 2 == 0 || number % 3 == 0 && number !== 15 ? `The number ${number} is a lucky number` : `The number ${number} is not a lucky number`

console.log(luckyNumber(12))
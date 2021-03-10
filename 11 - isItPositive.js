// create the function isItPositive that will receive a number as argument and return:
// 1 if the number is positive, 0 if the number received is zero and -1 if the number received is negative

function isItPositive(number){
    if (number > 0){
        return `1`
    }else if (number === 0){
        return `0`
    }else{
        return `-1`
    }
}
console.log(isItPositive(-3))
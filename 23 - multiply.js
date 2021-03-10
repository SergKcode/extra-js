// create a function multiply, that will receive an array of numbers as argument and return the multiplication of all numbers.
// i.e: multiply([1, 4, 7]) should return 28, which is 1 * 4 * 7

function multiply(array){
    let resultado= array.reduce((total,elemento) => total*elemento)
    return resultado
}

multiply([1, 4, 7])
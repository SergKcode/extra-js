// create a function called triple, that receives a number as argument and returns it multiplied by 3.
function triple (n){
    return n*3
}
console.log(triple(2));




// create a function called tripleTheSum that receives 2 numbers as arguments, add both numbers and return the triple of the result, by calling the triple function.

function tripleTheSum (n1,n2){
    let sum = n1+n2;
    return sum*3
}


console.log(tripleTheSum(5, 4));
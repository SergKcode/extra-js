// create a function sum, that will receive a number as a parameter and return the sum of the numbers previous to it.
// i.e: sum(4)
// 6
// which is 0 + 1 + 2 + 3

function sum(number){
    let finalResult=0;
    let counter=0;
    while(counter<number){
        finalResult=counter+ finalResult
        counter+=1;
    }
    return finalResult
}
console.log(sum(4))
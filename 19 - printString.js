// create a function printString that will receive 2 parameters: a number and a string.
// return the string the number of times that you received as parameter.
// i.e: printString(3, 'blue')
// 'blueblueblue'

function printString (number, string){
    let counter =0
    while (counter<number){
        console.log (string);
        counter +=1
    }
}

printString(2, "helloWorld")
// create a function printStringFourTimes that will receive a word as a parameter and print it 4 times.

function printStringFourTimes(word){
    let counter=0
    while (counter< 4){
        console.log(word);
        counter +=1
    }
}

printStringFourTimes("HolaMundo")


//SECOND WAY

function printStringFourTimes(word){
    for (let i = 0; i < 4; i++) {
        console.log(word);
    }


}

printStringFourTimes("HolaMundo")

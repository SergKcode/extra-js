// create a function stepByStep that will receive a number as argument and print the numbers starting from 0.
// i.e: stepByStep(5)
// "012345"
function stepByStep(number){
    let array=[];
    let counter =0;
    while (counter<=number){
        array.push(counter)
        counter +=1
    }
  console.log (array.join(''))
}

stepByStep(10)

// SECOND WAY
function stepByStep(number){
  let array=[]
  for (let i =0; i <= number;i++){
    array.push(i)
  }
   console.log (array.join(''))
}

stepByStep(5)

// create a function percentage that will receive an array of numbers and return another with 3 numbers: index 0 will be the percentage of positive numbers, index 1 will be the percentage of numbers that are zero and index 2 the percentage of negative numbers.
// i.e: percentage([1, 2, 0, -1]) should return [0.5, 0.25, 0.25], as there are 50% of positive numbers, 25% zeros, and 25% negative numbers.


function percentage(array){
    let positive=0
    let negative=0
    let zero=0
    let percentages=[]

    for(let i=0; i< array.length;i++){
        if(array[i]>0){
            positive+=1
        }else if(array[i]<0){
            negative+=1
        }else{
            zero +=1
        }
    }

    percentages.push(positive / array.length)
    percentages.push(zero / array.length) 
    percentages.push(negative / array.length)  
    return percentages

}

percentage([1, 2, 0, -1])
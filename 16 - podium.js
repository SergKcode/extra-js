// create the function podium that will receive a parameter with the podium position and return a different string according to the position:
// first place: 'gold'
// second place: 'silver'
// third place: 'bronze'
// other places: 'keep trying!

function podium(position){
    if(position===1){
        return `gold`

    }else if (position===2){
        return `silver`

    }else if (position===3){
        return `bronze`
    }else{
        return `keep trying!`
    }
}

podium(1)
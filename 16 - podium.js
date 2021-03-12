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

/* SECOND WAY */
function podium(position) {
  switch (position) {
    case 1:
      return `gold`;
      break;
    case 2:
      return `silver`;
      break;
    case 3:
      return `bronze`;
      break;
    default:
      return `keep trying!`;
      break;
  }
}

podium(5);

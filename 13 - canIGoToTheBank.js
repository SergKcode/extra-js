// create a canIGoToTheBank function that will receive 2 parameters: the day of the week and the time. The function must return true only if the bank is still open.
// keep in mind that the bank is open from Monday through Friday and from 10:00 until 18:00

let day = prompt("What day do you want to come");
let time = prompt("What time do you want to come (HH.MM)");
day= day.toLowerCase();
time = parseFloat(time);

openDays=["monday", "tuesday", "wednesday","thursday","friday"];
console.log(canIGoToTheBank(day, time));

function canIGoToTheBank (d,t){
    if (t <18 && t >= 10 && openDays.includes(d)){
        return `You can come on ${d} at ${t}`
    }else{
        return `You cannot come on ${d} at ${t}. Try in another moment`
    }   
}

/* SECOND WAY */
openDays=["monday", "tuesday", "wednesday","thursday","friday"];

function canIGoToTheBank (d,t){
    if (t <18 && t >= 10 && openDays.includes(d)){
        return true
    }else{
        return false
    }   
}
console.log(canIGoToTheBank("friday",15));

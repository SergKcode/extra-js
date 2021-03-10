// create a canIRetire function that will receive 3 parameters: age, gender and years of contribution and will return true or false.
// keep in mind that the minimum age for women to retire is 60 years and men 65 years. in both cases you have to have at least 30 years of contribution.

function canIRetire (age,gender,years){
    if( (gender ==="W" && age>=60) || (gender ==="M" && age>=65) && years>=30){
        return true
    }else{
        return false
    }
}
console.log(canIRetire(61,"W", 40));
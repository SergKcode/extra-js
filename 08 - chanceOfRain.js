// create a function chanceOfRain, that will return the probability of rain in percentage, based on a random number received from Math.random() method.
const chanceOfRain = () => Math.round(Math.random() * 100) + "%";


console.log(chanceOfRain());
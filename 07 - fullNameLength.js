// create a function fullNameLength that receives the name and surname as parameters and returns the length of the full name, counting with the extra space that separates both names
function fullNameLength(name, surname){
    let fullName = name + " " + surname;
    console.log(fullName)
    return fullName.length;
}

console.log (fullNameLength("Sergio","Caballero"))
let names = ["rahul", "kaushal", "dheeraj","bishal","Ritesh", "kehsav", "raj"];
// let [winner,runnerup] = names;

// console.log(winner);
// console.log(runnerup);




// rest concept

let [winner,runnerup,...others] = names;
console.log(others);
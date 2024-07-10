let myName = "Rahul Kumar Yadav and i am form Nepal";
const myArray = myName.split(" ");
const myArray2 = myName.split(" ",2);
console.log(myArray);
console.log(myArray2);


function splitString(string,seperator){
    console.log("Original string: ",string);
    console.log("After split: ",string.split(seperator));
}
splitString("Hello World!"," ");
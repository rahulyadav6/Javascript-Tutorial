/*
function()	Required.
A function to run for each array element.

currentValue	Required.
The value of the current element.

index	Optional.
The index of the current element.

arr	Optional.
The array of the current element.
thisValue	Optional. Default undefined.
A value passed to the function as its this value.
*/


const myArray = [1,2,3,4,5];

// myArray.forEach( (currentElement)=>{
//     console.log(currentElement);
// });



myArray.forEach( (currentElement,index)=>{
    console.log(`Value at index number ${index} is ${currentElement}`);
});

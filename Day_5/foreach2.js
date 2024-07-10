const myArray = [1,2,3,4,5];

myArray.forEach( (currentElement,index,array)=>{
    console.log(`${array} In this array value at index ${index} is ${currentElement}.`);
});
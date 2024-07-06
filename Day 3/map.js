let nums = [1,2,3,4,5];


let calcSquare = (item) =>{
    return item * item;
}
let square = nums.map(calcSquare);
// console.log(square);


const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((element, index, array) => {
  console.log(element); // The current element
  console.log(index);   // The index of the current element
  console.log(array);   // The original array
  return element * 2;
});

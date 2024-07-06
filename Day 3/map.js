let nums = [1,2,3,4,5];


let calcSquare = (item) =>{
    return item * item;
}
let square = nums.map(calcSquare);
console.log(square);
const arr = [1,2,3,4,5,6,7];
const even = arr.filter( (ele)=>{
    return ele % 2 == 0;
} );

console.log(even);
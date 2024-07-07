const arr = [1,2,3,4];

let finalVal = arr.reduce( (res,ele)=>{
    return res + ele;
});
console.log(finalVal);
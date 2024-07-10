function calculateArithmetic(a,b,type){
    let ans = type(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

console.log(calculateArithmetic(5,2,sub));
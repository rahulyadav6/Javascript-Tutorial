const sum = (a,b) =>{
    console.log(a+b);
}
sum(5,5);

const cube = n =>{
    return n*n*n;
}
console.log(cube(5));



//implicit return in arror function

const mul = (a,b) => a*b;
console.log(mul(4,4));


const addTwo = () => ({username:"Rahul"});
console.log(addTwo(4,5));
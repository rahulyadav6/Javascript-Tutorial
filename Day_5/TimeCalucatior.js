function calculateSum(){
    let a = 0;
    for(let i=0;i<1000000;i++){
        a += i;
    }
    return a;
}

const beforeDate = new Date();
// console.log(beforeDate.getTime());
let beforeTime = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
// console.log(afterDate.getTime());
let afterTime = afterDate.getTime();




console.log(`calculate sum function took ${(afterTime - beforeTime)* 0.001} Seconds to execute.`);
function findSum(n){
    let ans = 0;
    for(let i=0; i<n;i++){
        ans+=i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100,1000);
console.log("Hello world");

//synchronous function exaple.
function findSum(n){
    let ans = 0;
    for(let i=0; i<n;i++){
        ans+=i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}
function syncSleep(){
    let a=0;
    for(let i=0; i<10000000000; i++){
        a++;
    }
}
syncSleep();
findSumTill100();
// setTimeout(findSumTill100,1000);
console.log("Hello world");
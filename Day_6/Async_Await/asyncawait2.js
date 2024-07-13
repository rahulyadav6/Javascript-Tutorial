function rahulsAsyncFunction(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("hi there")
        },5000)
        // res("hi there");
    })
}

async function main(){
    const value = await rahulsAsyncFunction();
    console.log(value);
    console.log("hello ji");
}
main();
console.log("hello ji");

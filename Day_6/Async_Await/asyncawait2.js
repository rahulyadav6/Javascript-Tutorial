function raulsAsyncFunction(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("hi there")
        },5000)
        // res("hi there");
    })
}

async function main(){
    const value = await raulsAsyncFunction();
    console.log(value);
}
main();
console.log("hello ji");

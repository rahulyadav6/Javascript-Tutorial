async function greet(){
    throw "404 page not found"
    return "hello!";
}

greet()
.then( (res)=>{
    console.log("Promise successful.");
    console.log("result is ", res);
})
.catch((err)=>{
    console.log("Promise was rejected with error ",err);
})
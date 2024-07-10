function saveToDb(data){
    return new Promise((res,rej) =>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            res("Success: data was saved");
        }else{
            rej("failure: weak connection");
        }
    })
}
// saveToDb("Rahul yadav").then( ()=>{
//     console.log("Promise was resolved");
// }).catch( ()=>{
//     console.log("Promise was rejected");
// })

//promise chaining 

saveToDb("Rahul yadav")
.then((result)=>{
    console.log("data1 saved");
    console.log("result of promise: ",result);
    return saveToDb("hello world")
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result of promise: ",result);
    return saveToDb("Rahul")
})
.then((result)=>{
    console.log("data3 saved");
    console.log("result of promise: ",result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("error of promise: ",error);
})
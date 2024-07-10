function saveToDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        success();
    }else{
        failure();
    }
}
saveToDb("Rahul", ()=>{
    console.log("Success: Your data was saved");
    saveToDb("Hello world", ()=>{
        console.log("Success2: data2 saved");
        saveToDb("Rahul", ()=>{
            console.log("Success3: data3 saved");
        }, ()=>{
            console.log("Failure3: Weak connection");
        })
    }, ()=>{
        console.log("Failure2: Weak connection");
    })
}, ()=>{
    console.log("Failure: Weak connection data not saved");
});
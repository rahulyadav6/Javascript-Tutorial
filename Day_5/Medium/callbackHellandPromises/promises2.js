const promise1 = new Promise( (res,rej)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            res({username:"Rahul",password:"123"});
        }else{
            rej("Error: Something went wrong")
        }
    },1000)
})


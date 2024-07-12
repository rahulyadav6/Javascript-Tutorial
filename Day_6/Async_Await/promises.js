const fs = require("fs");

function rahulReadFile(){
    return new Promise((res,rej)=>{
        fs.readFile("a.txt","utf-8", (err,data)=>{
            res(data);
        });
    })
}

function onDone(data){
    console.log(data);
}

rahulReadFile().then(onDone);
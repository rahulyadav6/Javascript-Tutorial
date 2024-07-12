const { log } = require("console");
const fs = require("fs");

//asynchronous function 
fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(data);
});

console.log("hi there from app.js"); //first this will get printed.


let a = 0;
//takes very long,longer than the file read. but eventho reading file is fast but once has gone to browser it will have to wait js will take wait i am busy.
for(let i=0; i<1000000000; i++){
    a++;
}
console.log("hi there2 from app.js");
console.log("hi there3 from app.js");
console.log("hi there4 from app.js");
//js will finish all the tasks then only it will return to file wala thing
let b=0;
for(let i=0; i<1000000000; i++){
    b++;
}
console.log("hi there5 from app.js");
//js will finish all the tasks then only it will return to file wala thing
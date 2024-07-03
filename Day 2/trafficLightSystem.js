const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let trafficLightColor
rl.question('Enter light color: ', (trafficLightColor) => {
    if (trafficLightColor === "red"){
        console.log("Stop");
    }else if(trafficLightColor === "yellow"){
        console.log("Be ready");
    }else if (trafficLightColor == "green") {
        console.log("Go");
    }
    rl.close();
});



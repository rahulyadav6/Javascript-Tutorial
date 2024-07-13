h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num < 3){
                rej("Promise rejected");
            }
            h1.style.color = color;
            console.log(`Color changed to ${color}`);
            res("color changed");
        },delay)
    });
}

async function demo(){
    try{
        await changeColor('red', 1000)
        await changeColor('blue', 1000)
        await changeColor('green', 1000)
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
    console.log('fggds')

    let a = 5;
    console.log(a);
    console.log("new number =", a+3);

}





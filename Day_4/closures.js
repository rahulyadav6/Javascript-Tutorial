function makeFunc(){
    const name = "Rahul Yadav";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();


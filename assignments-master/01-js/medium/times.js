/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    n = prompt("Enter the value of n: ");
    n=parseInt(n);
    if(isNaN(n)){
        console.log("Invalid input. Please enter a valid number");
        return;
    }
    let startTime = new Date();
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    let endtime = new Date();
    let difference = endtime - startTime;
    console.log(difference/1000);
    return difference/1000;
    // return 0.01;
}
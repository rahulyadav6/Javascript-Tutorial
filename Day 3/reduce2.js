// finding maximum value in array using reduce method 

const arr = [1,4,7,8,5,3,2,13,,5,6,332,2];

let ans = arr.reduce((max,ele)=>{
    if(max < ele){
        return ele;
    }else{
        return max;
    }
});

console.log(ans);
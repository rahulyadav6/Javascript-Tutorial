const str = "Hello Rahul";
console.log(str.replace("Rahul","Kaushal"));


function replaString(str,target,replacement){
    console.log("Original string: ",str);
    console.log("After replacement: ",str.replace(target,replacement));
}
replaString("Hello World!","World","Javascript");
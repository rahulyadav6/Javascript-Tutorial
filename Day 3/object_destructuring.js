const student = {
    name:"Rahul",
    age:22,
    class: 14,
    subjects:["OS","Maths","C++"],
    username:"yadavrahul@gamil.com",
    password:"123",
};

// let {username,password} = student;
// console.log(username);


let {username:user, password} = student;
console.log(password);
console.log(user);
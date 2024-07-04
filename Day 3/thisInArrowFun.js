const student = {
    name: "Rahul",
    marks: 56,
    getName: function (){
        console.log(this);  
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);   //parents scope
        return this.marks;
    },

    getInfo1: function (){
        setTimeout( ()=>{
            console.log(this);
        },2000 );
    },
    getInfo2 : function (){
        setTimeout( function(){
            console.log(this);
        },2000 )
    }
}
// console.log(student.getName());
// console.log(student.getMarks());

student.getInfo1();
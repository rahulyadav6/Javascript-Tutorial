class Animal {
    constructor(name,legCount,speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    //this is a static function. it is called with class itself but normal function is called with objects not with classes.
    static myType(){
        return ("i am of type animal.");
    }
    //this is a normal function. To call this function we have to make object of the class Animal.
    speak(){
        console.log("hi there " + this.speaks);
    }
}

console.log(Animal.myType());
let dog = new Animal("dog",4,"bhow bhow");
let cat = new Animal("cat",4,"bhow bhow");
console.log(dog);
Animal.speak();
const student1 = {
    name: "Rahul",
    phy: 89,
    che: 45,
    maths: 78,
    getAvg(){
        let avg = (this.phy + this.che + this.maths);
        return avg;
    }
}
console.log(student1.getAvg());
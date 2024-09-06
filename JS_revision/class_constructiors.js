class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log(this.name);
        console.log(this.age);
    }
    // display(){
    //     console.log(this.name);
    //     console.log(this.age);
    // }
    set display(x){
        this.name=x;
    }
    get display(){
        console.log(this.name)
    }
    static abc(){
        console.log("static method");
    }
}
var obj=new Student("A",20);
obj.display="B";
obj.display;
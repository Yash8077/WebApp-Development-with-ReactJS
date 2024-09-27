class Person{
    constructor(name){
        this.name=name;
        console.log(this.name+"Parent class");
    }
    disp(){
        console.log(this.name+"parent display");
    }
}
class student extends Person{
    constructor(name,age){
        super(name);
        this.name=name;
        this.age=age;
        console.log(this.name+this.age+" Child class");
    }
    disp(){
        super.disp();
    }
}
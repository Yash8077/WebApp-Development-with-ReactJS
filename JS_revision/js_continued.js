function greet(){
    class greets{
        #name
        constructor(name){
            this.#name=name;
        }
        display(){
            console.log(this.#name);
        }
    };
    class greetts extends greets{
        constructor(name,place){
            super(name);
            this.place=place;
        }
        display(){
            super.display();
            console.log(this.place);
        }
    };
    return greetts;
}
var ob=greet();
var ob1=new ob("Yash","Dehradun");
ob1.display();
////
firstname="A";
lastname="B"
obj2={
    firstname,lastname//here no need to do firstname:firstname when both sides are having same name
}
console.log(obj2.firstname);

function obj3(firstname,lastname,age){
    return{
        firstname,
        lastname,
        isSenior(){
            return age>60
        }
    }
}
var ab = function print(a){
    return a;
}
console.log(ab("HI"));
var ab2 = (a) => a;
console.log(ab2("hey")); 

//factorial of a number

var fact = (a) => 
{ 
    if(a==1||a==0)
        return 1;
    return a*fact(a-1);
}
console.log(fact(5));

//this function

var obj={
    name:'A',
    greets:function greet(){
        console.log(this.name)
    }
}
obj.greets();

var obj2={
    name:'Yash',
    greets:function greet(){
        setTimeout(() => {console.log(this.name)},1000);
    }
}
obj2.greets();




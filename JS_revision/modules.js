function sum(a,b){
    return a+b;
}
export default sum;

let num_set=[1,2,3,4,5];
function hello(){
    console.log("Hello world");
}
class Greeting{
    constructor(name){
        this.greeting="Hello, "+name;
    }
}
export {num_set as n,hello as h};
export {Greeting as G};
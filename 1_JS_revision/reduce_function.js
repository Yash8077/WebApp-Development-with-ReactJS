// reduce method is used to reduce the array to a single value
// 2 arguments: accumulator and current value
// accumulator is the value that is returned by the function and is passed to the next iteration
//arr.reduce(function(acc,cur){},initial_value)
let num= [5,9,12,24,67];
let sum = num.reduce(function(accumulator, curValue){
    return accumulator + curValue;
},0);
// 0 is the initial value of accumulator, bydefault 0, can be given something else as well
console.log(sum);
//reduce can also be used to flatten the array
var mul=[[1,2,3],[4,5,6]];
var flat=mul.reduce(function(acc,val){
    return acc.concat(val);
})
console.log(flat);


let obj=[{n:2},{n:20},{n:30}];
let sum1=obj.reduce(function(accumulator,curValue){
    return accumulator+curValue.n;
},0)
console.log(sum1);

//We can also use reduce function to remove duplicate values
let arr=[10,30,10,32,30,50]
let unique=arr.reduce(function(acc,x){
    //console.log(acc);
    //console.log(x);
    if(!acc.includes(x)){
        acc.push(x)
    }
    return acc
},[])

console.log(unique);

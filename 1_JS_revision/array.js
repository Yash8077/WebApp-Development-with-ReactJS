function createArray() {
    // Create an empty array
    var array = [1,2,3,4,5];

    // Add elements to the array
    array.push(1);
    array.push(2);
    array.push(3);

    return array;
}

// Call the function and store the result in a variable
var myArray = createArray();

// Print the array to the console
console.log(myArray);

var arr=new Array(5)
for(var i=0;i<arr.length;i++){
    arr[i]=i*10;
    console.log(arr[i]);
}
var arr1=new Array(10,20,30);
console.log(arr1);
for(i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
function elements(arr1)//we can directly pass arrray as argument in a function
{
    for(i=0;i<arr1.length;i++){
        console.log(arr1[i]);
    }
}

// Use Array.from to create a new array from an iterable object
var newArray = Array.from(myArray);
console.log(newArray);

// Use Array.of to create a new array with the given elements
var anotherArray = Array.of(10, 20, 30);
console.log(anotherArray);

// Use the Array.isArray method to check if a variable is an array
var isArray = Array.isArray(myArray);
console.log(isArray);

// Use the Array.reverse method to reverse the elements in an array
var reversedArray = myArray.reverse();
console.log(reversedArray);

// Use the Array.sort method to sort the elements in an array
var sortedArray = myArray.sort();
console.log(sortedArray);

// Use the Array.join method to join the elements of an array into a string
var joinedArray = myArray.join(", ");
console.log(joinedArray);

// Use the Array.slice method to create a new array with a subset of elements
var slicedArray = myArray.slice(1, 4);
console.log(slicedArray);

// Use the Array.splice method to add or remove elements from an array
myArray.splice(2, 1, 6);
console.log(myArray);

// Use the Array.concat method to concatenate two arrays
var concatenatedArray = myArray.concat(anotherArray);
console.log(concatenatedArray);

// Use the Array.includes method to check if an array contains a specific element
var includesElement = myArray.includes(3);
console.log(includesElement);

// Use the Array.indexOf method to find the index of a specific element in an array
var indexOfElement = myArray.indexOf(4);
console.log(indexOfElement);
// Use the Array.findIndex method to find the index of the first element that satisfies a condition
var index = myArray.findIndex(function(element) {
    return element > 3;
});
console.log(index);

// Use the Array.entries method to convert array to object
var entries = myArray.entries();
console.log(entries);
for(i of entries){
    console.log(i);
}

var d=myArray.keys();
for(i of d){
    console.log(i);
}

var e=myArray.values();
for(i of e){
    console.log(i);
}

// Use the Array.fill method to fill the array with specific values at specified indexes
myArray.fill(0, 2, 4);
console.log("fill"+myArray);

var marr=[4,2,5,1,7,9]
console.log(marr.map(Math.round));

var marr=[4,5,7]
console.log("Printing square")
//creates a new array from original array function
console.log(marr.map((x)=>x**2))
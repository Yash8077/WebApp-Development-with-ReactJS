var arr1=[{title:"Btech",instructor:"Dr.Smith",duration:10,students:100}];
var arr2=[{title:"Btech",instructor:"Dr.Mishra",duration:3,students:100},{title:"Btech",instructor:"Dr.Smith",duration:4,students:400}];
arr1=[...arr1,...arr2];
console.log("Merged Array");
console.log(arr1);
arrfiltered=arr1.filter(courses=>{
    return courses.duration<4;
})
console.log("Courses having less duration: "+JSON.stringify(arrfiltered));
arrfiltered2=arr1.filter(courses=>{
    return courses.duration>=4;
})

arrfiltered2.map((data,index)=>{
    data.students+=data.students*0.05;
})
console.log("Increased Students Count by 5%: ");
console.log(arrfiltered2);
var ind=arrfiltered2.find(courses =>{
    return courses.instructor==="Dr.Smith";
})
var sum=arrfiltered2.reduce((acc,curr)=>{
    return acc+curr.students;
},0);
console.log(sum);
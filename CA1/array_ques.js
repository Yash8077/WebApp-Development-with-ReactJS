var displaycolors=function(message,...colors){
    document.write(message)
    for(i in colors){
        document.write(colors[i]+ "<BR>")
    }
}

let message="List of colors: ";
displaycolors(message,"Red");
displaycolors(message,"Red","Green");
displaycolors(message,"Red","Green","Blue");


function duplicateArray(array){
    return [array,...array];
}
document.write(duplicateArray([1,2,3,4,5]));
function sum(...args){
    let summ=0;
    for(let t in args){
        summ+=Number(args[t]);
    }
    return summ;
}

document.write("<BR>"+sum(1,2,3));

function processData(...students){
    avg=[]
    for(let i in students){
        var sum=0;
        for(let j in students[i].grades){
            sum+=students[i].grades[j];
        }
        if (sum / students[i].grades.length > 70) {
            avg.push({ name: students[i].name, grades: students[i].grades });
        }
    }
    return avg;
}
const students = [
    { name: "John", grades: [80, 90, 85] },
    { name: "Jane", grades: [10, 15, 10] },
    { name: "Alex", grades: [90, 95, 92] },
];

const result = processData(...students);

document.write("<BR>"+JSON.stringify(result));
//Class code
var processData2 = (students) => {
    // Step1: filter out students with an avg below 70
    const filterData = students.filter(student => {
        const avg = student.grades.reduce((acc, val) => acc + val, 0);
        return avg <= 70;
    });
    // Map the sorted arr to a new arr of objects that only includes the stu
    const mappedStudents = students.map(student => {
        const avgGrade = student.grades.reduce((acc, val) => acc + val, 0);
        return {
            name: student.name,
            avgGrade: avgGrade
        }
    });
}
const students1 = [
    { name: "Alice", age: 20, grades: [85,90,78], attendance: [true, true, false] },
    { name: "Bob", age: 21, grades: [70,80,75], attendance: [true, false, false] },
    { name: "Charlie", age: 22, grades: [60,65,70], attendance: [true, true, true] }
];
document.write(processData2(students1));
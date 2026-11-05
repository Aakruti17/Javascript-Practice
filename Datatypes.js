// 1. String Manipulation
// //     Create a variable:
//     Perform the following operations:
//     1. Remove extra spaces from both sides.
//     2. Convert the name into uppercase.
//     3. Convert the name into lowercase.
//     4. Find the length of the trimmed string.
//     5. Extract the first name.
//     6. Replace the first name with another name.
let name = "  Aakruti Gulhane  ";
trimmed=name.trim();
console.log(trimmed);
console.log(name.toUpperCase());;
console.log(name.toLowerCase());
console.log(trimmed.length)
console.log(trimmed[0])
console.log(trimmed.replace("Aakruti","Priya"))


// 2. Number Operations
//     Create a variable:

// //     Perform the following:
//     1. Round the number.
//     2. Find the ceiling value.
//     3. Find the floor value.
//     4. Display only two decimal places.
//     5. Convert it into an integer.
//     6. Check whether the value is an integer.

let price = 1299.5678;
console.log(Math.round(price))
console.log(Math.ceil(price))
console.log(Math.floor(price))
console.log(price.toFixed(2))
num=parseInt(price)
console.log(num)
console.log(typeof(num))




// 3. Character Counter
//     Accept a string from the user and count:
let i = prompt("Enter a string:")
// //     - Total characters.
console.log(i.length)

//     - Total vowels.
let count=0;
for(let ch of i){
    if('aeiou'.includes(ch)){
        count++;
    }
}
console.log(count)

//     - Total consonants.
let count1=0;
for(let ch of i){
    if(!'aeiou'.includes(ch)){
        count1++;
    }
}
console.log(count1)

//     - Total spaces.
let count2=0;
for(let ch of i){
    if(' '.includes(ch)){
        count2++;
    }
}
console.log(count2)

//     - Total digits.
let count3=0;
for(let ch of i){
    if('0123456789'.includes(ch)){
        count3++;
    }
}
console.log(count3)


// 4. Student Marks Management
//     Create an array:
let marks = [75, 45, 89, 32, 90, 56, 67];
//     Perform the following:
//     1. Find the highest marks.
//     2. Find the lowest marks.
//     3. Calculate the total marks.
//     4. Calculate the average.
//     5. Filter students who scored more than 60.
//     6. Sort marks in ascending order.

console.log(Math.max(...marks))
console.log(Math.min(...marks))

let sum1 = marks.reduce(function(sum,num){return sum+num},0)
console.log(sum1)

let avg = marks.reduce(function(sum,num){return sum+num},0)
let res_avg=avg/marks.length;
console.log(res_avg)

let result = marks.filter((marks)=>{
    return marks>60;
});
console.log(result)

console.log(marks.sort().reverse())

// 5. Remove Duplicate Elements
//     Create an array:
//     Remove duplicate elements and return a new array.
// let numbers = [10, 20, 10, 30, 40, 20, 50, 30];
// let arr=[]
// for(let i of numbers){
//     if (!arr.includes(i)){
//         arr.push(i)
//     }
// }
// console.log(arr)

// 6. Employee Salary Management
//     Create an array of employee objects:
    let employees = [
        { id: 1, name: "Amit", salary: 25000 },
        { id: 2, name: "Priya", salary: 35000 },
        { id: 3, name: "Rahul", salary: 20000 },
        { id: 4, name: "Sneha", salary: 45000 }
    ];

//     Perform the following:
//     1. Find the employee with the highest salary.
//     2. Get employees earning more than ₹25,000.
//     3. Calculate the total salary of all employees.
//     4. Increase every employee's salary by 10%.
//     5. Sort employees by salary in descending order.
let max_sal = Math.max(...employees.map(emp => emp.salary));
console.log(max_sal);

let more = employees.filter(emp => emp.salary>25000);
console.log(more);

let inc = employees.map(function(emp){return emp.salary+emp.salary*0.10});
console.log(inc)

let des = employees.sort(employees.salary).reverse();
console.log(des)

let total = employees.reduce(function(sum,emp){return sum+emp.salary },0)
console.log(total)

// 7. Array Transformation :
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     Perform these operations using array methods:
//     1. Create a new array containing only even numbers.
//     2. Create a new array containing squares of all numbers.
//     3. Calculate the sum of all numbers.
//     4. Find the first number greater than 5.
//     5. Check whether all numbers are positive.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map(function(num){return num*num})
console.log(squares)

let even = numbers.filter(num => num%2==0)
console.log(even)

let first = numbers.filter(num => num>5)
console.log(first)

let sum = numbers.reduce(function(sum,num){return sum+num},0)
console.log(sum)

let res = numbers.every(num => num>0)
console.log(res)



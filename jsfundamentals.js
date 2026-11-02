// Variables, data types and operators
// 1. Swap Two Numbers: Declare two variables and swap their values without using a third variable.
let a=Number(prompt("Enter 1st no"));
let b=Number(prompt("Enter 2nd no"));
a=a+b;
b=a-b;
a=a-b;
alert(`1st no: ${a}`);
alert(`2nd no: ${b}`);

// 2. Simple Calculator: Take two numbers and an operator (+, -, *, /) and perform the appropriate calculation.
let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);


// 3. Temperature Converter: Convert temperature from Celsius to Fahrenheit.
let temp = Number(prompt("Enter Temperature in Celsius:"));
let res = temp * 1.8 + 32;
alert(`Fahrenheit Temp: ${res}`);

// 4. Age Calculator: Take a person's birth year and calculate their approximate age.
let year = Number(prompt("Enter birth year:"));
let currentYear = new Date().getFullYear();
let age = currentYear - year;
alert(`Your age is ${age}`);

// 5. Type Checker: Declare variables of different data types and print their values and types using typeof.
let a=10;
let b=10.3;
let c=true;
let d=10n;
let e="Hello";
let f=Symbol("id");
let g=undefined;
let h=Math;
let i=null;
let j=alert;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
console.log(typeof(h));
console.log(typeof(i));
console.log(typeof(j));

// Conditional statements
// 1. Even or Odd: Check whether a given number is even or odd.
let num = Number(prompt("Enter number:"));
if (num%2==0){
    alert("Even no.");
}
else{
    alert("Odd no.");
}

// 2. Largest of Three: Find the largest among three numbers without using Math.max().
let num1 = Number(prompt("Enter 1st number:"));
let num2 = Number(prompt("Enter 2nd number:"));
let num3 = Number(prompt("Enter 3rd number:"));
if (num1>num2 && num1>num3){
    alert(`greater number is ${num1}`);
}
else if (num2>num1 && num2>num3){
    alert(`greater number is ${num2}`);
}
else{
    alert(`greater number is ${num3}`);
}

// 3. Grade Calculator: Accept marks and display grades:
//    - 90–100: A
//    - 75–89: B
//    - 60–74: C
//    - 35–59: D
//    - Below 35: Fail
let marks = Number(prompt("Enter marks:"));
if (marks>=90 && marks<=100){
    alert("A");
}
else if (marks>=75 && marks<=89){
    alert("B");
}
else if (marks>=60 && marks<=74){
    alert("C");
}
else if (marks>=35 && marks<=59){
    alert("D");
}
else{
    alert("Fail");
}

// 4. Leap Year: Check whether a given year is a leap year.
let year=Number(prompt("Enter year:"));
if ((year%100 !=0 && year%4==0) || (year%400==0)){
    alert("leap year");
}
else{
    alert("not leap year");
}

// 5. Electricity Bill: Calculate an electricity bill based on units consumed:
//     - First 100 units: ₹5/unit
//     - Next 100 units: ₹7/unit
//     - Above 200 units: ₹10/unit
let units = Number(prompt("Enter units:"));
let bill = null;
if (units<=100){
    bill = units*5;
}
else if(units<=200){
    above100 = units-100;
    bill = 100*5 + above100*7;
}
else{
    ab200 = units-200;
    bill = 100*5+100*7+ab200*10;
}
alert(bill)

// Loops
// 1. Multiplication Table: Print the multiplication table of a given number up to 10.
let num = Number(prompt("Enter number:"));
for(let i=1;i<=10;i++){
    console.log(`${num} x ${i} = ${num*i}`)
}

// 2. Factorial: Calculate the factorial of a given number using a loop.
let n = Number(prompt("Enter number:"));
let fact=1;
for(let i=1;i<=n;i++){
    fact *= i;
}
alert(fact)

// 3. Prime Number: Check whether a given number is prime.
let n = Number(prompt("Enter number:"));
let isPrime = true;
if (n<2){
    isPrime=false;
}
if (n>=2){
    for(let i=2;i<n;i++){
       if(n%i==0){
        isPrime=false
       }     
    }
}
if (isPrime == true){
    alert("prime no");
}
else{
    alert("not prime no");
}

// 4. Reverse a Number: Reverse a given number without converting it into a string.
let n=Number(prompt("Enter no:"));
let rev=0;
while(n>0){
    let last=n%10;
    rev = rev*10+last;
    n=(n-last)/10;
}
alert(`reverse number:${rev}`)
                                                                                                                                                                                                                                                                                                                                                                                               
// 5. Fibonacci Series: Print the first N numbers of the Fibonacci series.
let n=Number(prompt("Enter number:"));
let a=0;
let b=1;
if(n>=a) console.log(a);
if(n>=b) console.log(b);
for(let i=2;i<n;i++){
    let c=a+b;
    console.log(c);
    a=b;
    b=c;
}


// Functions and problem-solving
// 1. Palindrome: Write a function to check whether a given string is a palindrome.
let isPali=false;
function palindrome(str){
    str = str.toLowerCase();
    let i=0;
    let j=str.length-1;
    while (i<j){
        if (str[i]==str[j]){
            isPali=true;
            i++;
            j--;
        }
        else{
            isPali=false;
            break;
        }
    }
    if (isPali==true){
        alert("Palindrome string")
    }
    else{
        alert("Not palindrome string")
    }
}
palindrome("madam")

// 2. Count Vowels: Write a function that accepts a string and returns the total number of vowels.
let count=0;
function countVowel(str){
    for(let i=0;i<str.length;i++){
        if ("aeiouAEIOU".includes(str[i])){
            count++;
        }
    }
    console.log(count);
}
countVowel("apple");

// 3. Find the Second Largest: Find the second-largest number in an array without using sorting methods.
lar=0;
secLar=0;
function secLargest(arr){
    for(let i=0;i<arr.length;i++){
        if (arr[i] > lar){
            lar=arr[i];
        }
    }
    for(let j=0;j<arr.length;j++){
        if (arr[j]>secLar && arr[j]!=lar){
            secLar=arr[j];
        }
    }
    alert(`Sec lar: ${secLar}`);
}
arr=[4,3,65,7,4,7,89];
secLargest(arr);

// 4. Remove Duplicates: Write a function that removes duplicate elements from an array.
function remDup(arr){
    let arr1=[]
    for(let i=0;i<arr.length;i++){
        if (!(arr1.includes(arr[i]))){
            arr1.push(arr[i]);
        }
    }
    alert(arr1)
}
arr=[3,2,4,4,3,2,6]
remDup(arr);

// 5. Character Frequency: Write a function that counts how many times each character appears in a given string.
function freqCount(str){
    let d={}
    for (let i=0;i<str.length;i++){
        let char=str[i];
        if (char in d){
            d[char]+=1;
        }
        else{
            d[char]=1;
        }
    }
    for(let key in d){
        console.log(`${key} : ${d[key]}`)
    }
}
freqCount("hello");
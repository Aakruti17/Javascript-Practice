// 1. Create and Access an Object
//     Create a student object with the following properties:
//     - name
//     - age
//     - course
//     - marks
//     Tasks:
//     - Print all properties.
//     - Access the name using dot notation and bracket notation.
//     - Add a new property called city.
//     - Update the student's marks.
//     - Delete the course property.
let student={
    name:"Aakruti",
    age:21,
    course:"Nodejs",
    marks:87
};
for(let key in student){
    console.log(key,student[key])
}
alert(student.name);
alert(student["name"]);
student.city="Pune";
student["marks"]=91;
delete student.course;

// 2. Object Methods
//     Create an object called employee with:
//     - name
//     - basicSalary
//     - bonus
//     Create a method called calculateSalary() that returns the total salary (basic salary + bonus).
//     Also create another method called displayDetails() to print employee information.
let employee={
    name:"Rahul",
    basicSalary:50000,
    bonus:7000
}
function calculateSalary(){
    let sal= employee.basicSalary + employee.bonus;
    employee.salary=sal;
}
function displayDetails(){
    for(let key in employee){
        console.log(key, employee[key])
    }
}
calculateSalary();
displayDetails();



// 3. Nested Objects
//     Create an object called company with the following structure:
//     - companyName
//     - location
//     - employee (nested object)
//       - name
//       - department
//       - salary
//     Tasks:
//     - Print the employee's name.
//     - Update the employee's salary.
//     - Add a new property called experience inside employee.
//     - Print all employee details.
let company={
    companyName:"Thinkitive",
    location:"Pune",
    employee:{
        name:"Aakruti",
        department:"Development",
        salary:8000
    }
}
console.log(company.employee["name"]);
company.employee["salary"]=20000;
company.employee["experience"]=1;
for(let key in company){
    console.log(key,company[key])
}

// 4. Object Destructuring and Copying
//     Create an object:
//     let product = {
//         name: "Laptop",
//         price: 50000,
//         brand: "Dell",
//         category: "Electronics"
//     };
    
//     Tasks:
//     - Extract name and price using destructuring.
//     - Create a copy using the spread operator.
//     - Change the price in the copied object.
//     - Check whether the original object's price changes.
let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics"
};
let {name,price} = product;
console.log(name)
console.log(price)

let copy_obj = {...product}

copy_obj.price=90000;
console.log("original: ",product);
console.log("copies: ",copy_obj);

// 5. Object Methods and this
//     Create a bankAccount object with:
//     - accountHolder
//     - balance
//     Create three methods:
//     - deposit(amount) – Add money to the balance.
//     - withdraw(amount) – Deduct money from the balance if sufficient funds are available.
//     - checkBalance() – Display the current balance.
//     Use the this keyword to access and update the object's properties.
let bankAccount={
    accountHolder:"Aakruti",
    balance:50000,

    deposit(amount){
    let deposit = this.balance + amount;
    this.balance=deposit;
    },

    withdraw(amount){
    let withdraw = this.balance - amount;
    this.balance=withdraw;
    },

    checkBalance(){
    console.log(this.accountHolder);
    console.log(this.balance);
    }
};
bankAccount.deposit(5000);
bankAccount.withdraw(3000);
bankAccount.checkBalance();

// 6. Constructor Function and new Operator
//     Create a constructor function called Car that accepts:
//     - brand
//     - model
//     - price
//     Tasks:
//     - Create three car objects using the new operator.
//     - Display the details of all three cars.
//     - Add a method called displayDetails() to display car information.
function Car(brand,model,price){
    this.brand=brand,
    this.model=model,
    this.price=price,

    this.displayDetails = function(){
        console.log(this.brand)
        console.log(this.model)
        console.log(this.price)
    }
};
let obj1 = new Car("Tata","Punch",800000);
let obj2 = new Car("Renault","Kwid",600000);
let obj3 = new Car("Renault","Duster",1000000);
obj1.displayDetails()
obj2.displayDetails()
obj3.displayDetails()


// 7. Optional Chaining (?.)
//     Consider the following object:
//     let user = {
//         name: "Rahul",
//         address: {
//         city: "Pune",
//         country: "India"
//         }
//     };
//     Tasks:
//     - Access the user's city.
//     - Try accessing user.contact.phone and observe the error.
//     - Use optional chaining to safely access the phone number.
//     - Use a default value if the phone number is unavailable.
let user = {
    name: "Rahul",
    address: {
    city: "Pune",
    country: "India"
    }
};
alert(user?.address?.city)
//alert(user.contact.phone) //TypeError
alert(user?.contact?.phone)
alert(user.contact ? user.contact.phone : 1234567890)

// 8. Object to Primitive Conversion
//     Create an object:
//     let employee = {
//         salary: 30000,


//         valueOf() {
//         return this.salary;
//         }
//     };
//     - Try employee + 5000.
//     - Try employee - 5000.
//     - Try String(employee).
//     - Observe the output.
//     - Explain the difference between valueOf() and toString().
//     Create an object:
let employee = {
    salary: 30000,
    valueOf() {
        return this.salary;
        }
};
console.log(employee + 5000);
console.log(employee - 5000);

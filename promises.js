// Q1. Create a Promise
// 	Create a Promise that checks whether a student has passed an examination.
// 	- If marks are greater than or equal to 35, resolve with "Student Passed".
// 	- Otherwise, reject with "Student Failed".
// 	Handle both success and failure using .then() and .catch().
let marks=50;
let result = new Promise((resolve,reject)=>{
    if(marks>35){
        resolve("Student passed");
    }
    else{
        reject("Student Failed");
    }
});
result
.then((message)=>{
    console.log(message)
})
.catch((error) =>{
    console.log(error);
});

// Q2. Login Simulation
// 	Create a function loginUser(username, password) that returns a Promise.


// 	Conditions:
// 	- If username is "admin" and password is "12345", resolve with "Login Successful".
// 	- Otherwise, reject with "Invalid Credentials".
// 	Handle the response using .then() and .catch().

let username="admin";
let password="12345";
let loginUser = new Promise((resolve,reject)=>{
    if(username=="admin" && password=="12345"){
        resolve("login successful")
    }
    else{
        reject("login failed")
    }
});
loginUser
.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})

// Q3. Delayed Message
// 	Create a Promise that resolves after 3 seconds with the message "Data fetched successfully".
// 	Use setTimeout() inside the Promise.
// 	Print a message before the Promise resolves and observe the execution order.
let result = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 3000);

});

result.then((message) => {
    console.log(message);
});



// Q4. Create a function checkProduct(productId) that returns a Promise.
// 	Conditions:
// 	- If product ID exists, resolve with product details.
// 	- If product ID does not exist, reject with "Product Not Found".
// 	Test with both valid and invalid product IDs.

let checkProduct = new Promise((resolve,reject)=>{

})


// Q5. User Data Fetching
// 	Create an asynchronous function getUser().
// 	- Return a Promise that resolves after 2 seconds.
// 	- Return the following user details:
// 	{
// 	    id: 101,
// 	    name: "Amit",
// 	    email: "amit@gmail.com"
// 	}


// 	Use async/await to call the function and print the user details.
function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let user = {
                id:101,
                name:"Amit",
                email:"amit@gmail.com"
            };
            resolve(user);
        },2000);
    });
}
async function displayUser() {
    let userData = await getUser();
    console.log("user details:");
    console.log("ID:",userData.id)
    console.log("Name:",userData.name)
    console.log("Email:",userData.email)
}
displayUser();

// Q6. Order Processing
// 	Create three asynchronous functions:
// 	1. createOrder() – resolves with "Order Created".
// 	2. processPayment() – resolves with "Payment Successful".
// 	3. sendConfirmation() – resolves with "Confirmation Sent".
// 	Each function should take 2 seconds to complete.


// 	Call them sequentially using async/await.


// 	Expected execution order:
// 	Order Created
// 	Payment Successful
// 	Confirmation Sent

function createOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Created");
        }, 2000);
    });
}
function processPayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Payment Successful");
        }, 2000);
    });
}

function sendConfirmation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Confirmation Sent");
        }, 2000);
    });
}
async function placeOrder() {
    let order = await createOrder();
    console.log(order);
    let payment = await processPayment();
    console.log(payment);
    let confirmation = await sendConfirmation();
    console.log(confirmation);

}
placeOrder();

// Q7. User Authentication
// 	Create an asynchronous function authenticateUser(username, password).


// 	Conditions:
// 	- If credentials are valid, resolve with user details.
// 	- If credentials are invalid, throw an error.
// 	- Handle errors using try-catch.
// 	- Print an appropriate success or error message.

async function authenticateUser(username, password) {
    let validUsername = "Amit";
    let validPassword = "12345";
    if (username === validUsername && password === validPassword) {
        return {
            id: 101,
            name: "Amit",
            email: "amit@gmail.com"
        };

    }
    else {
        throw new Error("Invalid username or password");
    }

}

async function login() {
    try {
        let user = await authenticateUser("Amit", "12345");
        console.log("Login Successful!");
        console.log("User Details:", user);
    }
    catch (error) {
        console.log("Login Failed!");
        console.log("Error:", error.message);
    }
}
login();

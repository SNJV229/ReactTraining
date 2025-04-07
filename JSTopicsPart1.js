// Function - A function is a reusable block of code that performs a specific task.
// Types of function we can use:

//______________________Function Decleration
// function greet(name) {
//     return `Hello, ${name}!`;
//   }
  
  //_______________________Function Expression
//   const greet = function(name) {
//      return `Hello, ${name}`;
//   }
  
  //________________________Arrow function
//   const greet = (name) => `Hello, ${name}`;
//   console.log(greet("Sanjeev"));
  
  
  
  
  
  
  // Scope - Scope determines the accessibility of variables.
  /* 1. Global Scope - Available Every Where
      2. Funtion Scope - Available Inside Function
      3. Block Scope - let and const create block-scoped variables, Means only available where decleared.
  */
  
  
// let globalVar = "I am global!";

// function showGlobal() {
//   var localVar= "I am local!"
//   console.log(globalVar); // Accessible
//   console.log(localVar); // Accessible
// }

// showGlobal();
// console.log(globalVar); // Also Accessible
// console.log(localVar); // not Accessible
  
// {
//   let blockVar = "Inside block";
//   const anotherBlockVar = 42;
//   console.log(blockVar); // Accessible here
// }

// console.log(blockVar); //Error: blockVar is not defined











// ⁠ES6+ features

// //1. let, Const,
// let changable = "We can change!"
// changable = "Changed"
// const notChangable = "We cannot change!";
// notChangable = "Changed";
// // console.log(`${changable}!`);
// console.log(`${notChangable}!`);

// //2. Arrow Function
// const add = (a, b) => a + b;
// console.log(add(2,3));

// //3. Destructuring - way to destructre 
// const person = { name: "John", age: 22 };
// const person1 = { namep1: "Adina U", agep1: 20 };
// const { name, age } = person;
// const { namep1, agep1 } = person1;
// console.log(namep1) // print name.

// //4. Object Property Shorthand.
// let name = "Amit", age = 20;
// let student = { name, age };
// console.log(student) // print name.

// //5. Default parameter
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }
// greet();








//// Promis and Async/await

// Promis - A Promise represents a value that may be available now, or in the future, or never.

    // let promise = new Promise((resolve, reject) => {
    //   setTimeout(() => resolve("Data loaded"), 5000);
    // });
    // promise.then(data => console.log(data));
    
    
    
    
    // let promise = new Promise((resolve, reject) => {
    //   let success = false;
    //   if (success) {
    //     resolve("Data loaded successfully");
    //   } else {
    //     reject("Failed to load data");
    //   }
    // });
    // promise
    //   .then(data => console.log("Resolved:", data))
    //   .catch(error => console.error("Rejected:", error));
    
    
    

// // Async/Await - support promise to work in a synchronised way.
    // async function getData() {
    //   let data = await promise;
    //   console.log(data);
    // }
    // getData();




//// Fetch API and JSON - Fetch API is used to get data from a server.
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error("Error:", error));
      
    // async function fetchData() {
    //   try {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // }
    // fetchData();
  

  










/* Activity to do:
1. Write a function to calculate the square of a number.

2. Convert a function to use arrow syntax.

3. Destructure an object and print its properties.

4. Fetch user data from a public API and display the name/title.
*/

  
//NUMBER
let num1 = 15;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);

//STRING
let name = "Mike";
let color = "Blue";

let sentence = "My name is " + name + " and my favorite color is " + color;
console.log(sentence);

//BOOLEAN
let age = 20;
let isAdult = age >= 18;

console.log(isAdult);

//Undefined
let myValue;
console.log(myValue); 

//NULL
let selectedUser = null;
console.log(selectedUser);

selectedUser = "John";
console.log(selectedUser);

//BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

//SYMBOL
let id1 = Symbol("user");
let id2 = Symbol("user");

console.log(id1 === id2);

//OBJECT
let student = {
  name: "Mike",
  age: 25,
  isStudent: true
};

console.log(student.name);
console.log(student.age);

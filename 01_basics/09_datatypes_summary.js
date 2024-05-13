// primitive datatypes

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const Id = Symbol("123");
const anotherId = Symbol("123");

console.log(Id === anotherId);

//if we want to make bigInt we have to put n in the last of the number
const bigNumber = 14555854767596425634755486541n;

// Reference (non Primitive)

// Arrays, Objects, Functions

// Arrays:

const heros = ["shaktiman", "nagraj", "doga"];

console.log(heros);

// Objects:

let myObj = {
  name: "zaid",
  age: "20",
};
console.log(myObj);

//Functions:

const myFunction = function () {
  console.log("Hello World");
};

// to Check data type:

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof isLoggedIn);
console.log(typeof Id);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
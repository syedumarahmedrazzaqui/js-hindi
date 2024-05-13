let score = "33abc";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" = 33
// "33abc" => NaN (Not a Number)
// true => 1
// false => 2

let IsLoggedIn = 1;
let booleanIsLoggedIn = Boolean(IsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 = true; 0 = false
// "" = false; "zaid" = true

let someNumber = 46;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
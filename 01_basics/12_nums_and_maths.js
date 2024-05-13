const score = 400;
console.log(score);

const balance = new Number(200.1452);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 123.8321;
console.log(otherNumber.toPrecision(3));

const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN"));

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math.sqrt(47382));

// abs will convert negative to positive
console.log(Math.abs(-242));

console.log(Math.round(20.5));

console.log(Math.ceil(20.01));

console.log(Math.floor(20.9));

console.log(Math.min(3, 1, 6, 4));
console.log(Math.max(7, 3, 9, 2));

// .random value will come between 0 to 1
console.log(Math.random());

//console.log(maths.random() * max value + min value)
console.log(Math.random() * 10 + 1);

// math.floor means these will not give any decimal values
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// from this we will get value between 10 to 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
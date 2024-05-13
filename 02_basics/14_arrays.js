// Arrays

const myArr = [0, 1, 2, 3, 4];
const myHeros = ["shaktiman", "nagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr[1]);

// Array methods

myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(9);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(6));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

//splice will cut the portion of the selected array
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);
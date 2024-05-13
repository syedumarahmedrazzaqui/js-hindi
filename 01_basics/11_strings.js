const name = "zaid";
const repoCount = "50";

// this is an old way and not preffered way
// console.log(name + repoCount + " value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare string

const gameName = new String("zaidhc");

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 4);
console.log(newString);

//in slice we can give negative value also
const anotherString = gameName.slice(-4, 4);
console.log(anotherString);

const newStringOne = "   zaid   ";
console.log(newStringOne);
// this will remove extra space
console.log(newStringOne.trim());

const url = "https/:zaidrazzaqui.com/zaid%20razzaqui";
console.log(url.replace("zaidrazzaqui", "zaid"));

//this is used to check that keyword exist or not
console.log(url.includes("razzaqui"));

const url1 = "zaid-hc-com";
console.log(url1.split("-"));

console.log(`${url1} ${url1.length}`);

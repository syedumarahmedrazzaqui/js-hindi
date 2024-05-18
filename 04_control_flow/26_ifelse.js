// if 

let isuserLoggedIn = true;
let temperature = 41;

// if (temperature < 50) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("execute");

// < , > , <= , >= , == , != , === three equal means ye check typeof also , !==

// const score = 200

// if (score >100) {
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }

// const balance = 1000;

// id we dont want to write code in scope {} than we have to use this method and this is not preffered way to write code
// if (balance>500) console.log("test"),
// console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const userIsLoggedIn = true
const debitCard = true
const loggedInfromEmail = true
const loggedInfromgoogle = false

// this is and operator means all the value should be true then tha code will execute
if (userIsLoggedIn && debitCard && 2==2) {
    console.log("allow To buy courses");
}


// this is or operator means any one of the value should be true then the code will execute
if (loggedInfromEmail || loggedInfromgoogle) {
    console.log("user logged in");
}
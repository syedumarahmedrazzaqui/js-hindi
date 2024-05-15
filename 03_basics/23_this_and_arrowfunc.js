const user = {
    username : "zaid",
    price : 999,

    welcomMessage : function(){
        console.log(`${this.username} , welcome to this website`);
        console.log(this);
    }
}
user.welcomMessage()
user.username = "sam"
user.welcomMessage()

// console.log(this);

// function chai(){
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "zaid"
    console.log(this);
}
chai()

// basic arrow function or explicit return
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(5,7));

// implicit return 

// note : curly braces me wrap kara to return likhna padega aur nahi kara ya sade bracket me wrap kara to return likhne ki zarurat nahi hai
// aur ek hi line me likhna padega magar
const addtwo = (num1, num2) => num1 + num2
console.log(addtwo(6,21));

// this is the best way and preffered way to write function
const addthree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addthree(6,71,42));

//from this way we can write also an obj in a function
const obj = (num1, num2) => ({username : "zaid"})
console.log(obj());

// and from this way we can write consol log on a function
const con = () => ("hello world")
console.log(con());
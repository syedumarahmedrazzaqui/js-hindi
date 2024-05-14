// function def
function sayMyName(){
    console.log("z");
    console.log("a");
    console.log("i");
    console.log("d");
}
// sayMyName()

// //(number1,number2 ) are parameters
// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(2,"4")
// // (5,4) are arguements
// addTwoNumbers(5,4)

function addTwoNumbers (number1, number2){
    // let result = number1 + number2
    // //log agar return se pehle kare to hi print hoga aur baad me kare to nahi hoga
    // console.log("zaid");
    // return result

    //this is also an easy and preferred way
    return number1 + number2
}
const result = addTwoNumbers(4,9)
console.log(`Result : ${result}`);

function loginUserMessage (username = "sam"){
    if(username === undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} Just logged in`
}
console.log(loginUserMessage("zaid"));
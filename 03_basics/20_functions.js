// this ... is very important
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,300,3999,299));

const user ={
    username :"zaid",
    price : 199
}
function handleObject (anyobject){
    console.log(`user name is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200, 300, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,1000, 349,1399]));

// my code 
function asehi(myName) {
    return myName
}

const myName = "zaid Razzaqui"
console.log(`Youe name is : ${myName}`);

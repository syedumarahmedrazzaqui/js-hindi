// stack memory(Primitive) , Heap Memory (non-primitive)

//in this stack memory only one value will change

// in stack we will get copy

let myYoutubename = "zrdxgamer";

let anothername = myYoutubename;

anothername = "zaidgaming";

console.log(myYoutubename);
console.log(anothername);

//heap memory ex

// in this heap memory value will change on both

// in heap we will get reference

let userOne = {
  email: "user@gmail.com",
  upi: "user@paytm",
};

let userTwo = userOne;

userTwo.email = "zaid@gmail.com";

console.log(userOne);
console.log(userTwo);

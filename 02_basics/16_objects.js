// singleton
// object creates

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "zaid",
  [mySym]: "myKey1",
  age: 18,
  city: "aurangabad",
  email: "zaid@gmail.com",
  isLoggedIn: false,
  lastLoggedIn: ["Monday", "tuesday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "zaid@outlook.com";
console.log(JsUser.email);
// Object.freeze(JsUser);

JsUser.greeting = function () {
  console.log("hello JS user");
};
console.log(JsUser.greeting());

JsUser.greetingtwo = function () {
  console.log(`hello Js User, ${this.name}`);
};
console.log(JsUser.greetingtwo());
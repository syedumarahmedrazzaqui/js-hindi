// Immediately Invoked Function Expressiona (IIFE)

(function chai(){
    // chai means named iife
    console.log(`DB connected`);
})();

( (name) => {
    // this is simple iife
    console.log(`DB connected two ${name}`);
})("zaid");

(hello = ()=> (`DB connected three`))();
console.log(hello());
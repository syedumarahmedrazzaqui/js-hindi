let a = 300;

if (true) {
    let a = 10;
    const b =20;
    // we should avoid var 
    // var c =30;
    console.log(`inner : ${a}`);
}

console.log(a);
// console.log(b);
// console.log(c);


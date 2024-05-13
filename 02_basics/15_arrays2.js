const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["batman", "superman", "flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);

//both concat and spread do the same but preffered way is this spread one
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 4]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("zaid"));
console.log(Array.from("zaid"));
console.log(Array.from({ name: "zaid" })); //interesting

let score1 = 100;
let score2 = 300;
let score3 = 500;

console.log(Array.of(score1, score2, score3));
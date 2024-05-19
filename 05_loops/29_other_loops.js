// for of 

// ["", "", ""]
// [{}, {}, {}]

let arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting = "hello world"
for (const greet of greeting) {
    console.log(`each char is : ${greet}`);
}

// maps

const map = new Map()
map.set('IN' , 'india')
map.set('usa', 'united states of america')
map.set('fr', 'france')
// console.log(map);

for (const [key , value] of map) {
    console.log(`${key} :- ${value}`);
}

const myObject = {
    game1 : "NFS",
    game2 : "valorant",
    game3 : "GTA V"
}

// for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`);
// }


// for in loop

const MyObject = {
    js : "javascrip",
    cpp : "c++",
    py : "python"
}

for (const key in MyObject) {
    console.log(`${key} is short cut for ${MyObject[key]}`);
}

const programming = ['js', 'ruby', 'python']

for (const key in programming) {
    console.log(programming[key]);   
}

const map2 = new Map()
map.set('IN' , 'india')
map.set('usa', 'united states of america')
map.set('fr', 'france')

for (const key in map2) {
    console.log(key);
}

// for each loop

const coding = ['js', 'ruby', 'python']

// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach((val2) => {
//     console.log(val2);
// })

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


// this is very important operation
const myCoding = [
    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})
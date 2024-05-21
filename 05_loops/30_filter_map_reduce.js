const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNum.filter((num)=> num>4)
console.log(newNums);


// if we open scope {} then we have to write return 
const newNum = myNum.filter((num)=> {
    return num > 4 
})
console.log(newNum);

// other way to do this foreach method

// const NewNums = []
// myNum.forEach((Num) => {
//     if (Num > 4) {
//         NewNums.push(Num)
//     }
// })

// console.log(NewNums);

const books = [
    { title : 'book one', genre : 'fiction', publish : '1981',
        edition :'2004'
    },
    { title : 'book two', genre : 'history', publish : '1986',
        edition :'2018'
    },
    { title : 'book three', genre : 'fiction', publish : '1975',
        edition :'2005'
    },
    { title : 'book four', genre : 'history', publish : '2001',
        edition :'1990'
    },
    { title : 'book five', genre : 'non-fiction', publish : '1947',
        edition :'2008'
    },
    { title : 'book six', genre : 'science', publish : '2006',
        edition :'2013'
    }
]

// const userbooks = books.filter((bk) => bk.genre === 'history')
// const userbooks = books.filter((bk) => {return bk.publish >= 2000})

// filter is used instead of while loop
const userbooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'history'

})
console.log(userbooks);


// Maps // we can use map method instead of foreach loop 


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNumbers.map( (nums) => nums +10 )

const newnums = myNumbers
.map( (nums) => nums * 10 )
.map ((nums) => nums + 1)
.filter((nums) => nums >= 40)

console.log(newnums);


// reduce 


const array1 = [1,2,3]

//},0 means accumulator ki value 
const myTotal = array1.reduce( (acc, currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0 )
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "py course",
        price : 1999
    },
    {
        itemName : "mobile dev course",
        price : 7999
    },
    {
        itemName : "data science course",
        price : 12999
    },
]

const pricetopay = shoppingCart.reduce( (acc, prc) => acc + prc.price,0 )
console.log(pricetopay);
function one() {
    const username = "zaid"

    function two() {
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    username = "zaid"
    if (username === "zaid") {
        const website = "youtube"
        console.log(`${username} ${website}`);
    }
    // agar apun koi bhi scope matlab {} bahar aake call karenge uske andar ki chiz ko to wo error aaiga uske andar hi karna padta hai call
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
    return num + 1;
}

// addtwo(5);
const addtwo = function (num) {
    return num + 2;
}

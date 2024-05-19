// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(` inner loop value ${j} and outer loop value : ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

// break 5 number aate hi break kardega loop ko
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 is detected`);
        break
    }
    console.log(`value of i is ${i}`);
    
}

// continue ek baar chodh dega aur aage badne dega loop ko
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 is detected`);
        continue
    }
    console.log(`value of i is ${i}`);
    
}


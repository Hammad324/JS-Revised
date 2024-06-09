// for

let number = 2
//console.log(`Table of ${number}`);

for (let i = 1; i <= 10; i++) {
    let result = number * i;
    //console.log(`${number} * ${i} = ${result}`)
};

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        //console.log("5 is the best number.") // pehle ye execute hoga.
    }
    //console.log(element)
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Table of: ${i}`)
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value: ${j}`)
        result = i * j
        //console.log(`${i} * ${j} = ${result}`)
    }
}

const myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element)
}

 
const str = "Hammad";

for (let i = 0; i < str.length; i++) { // agar ye i++ nhi hoga to infinite loop ban jaeyga.
    const element = str[i];
    //console.log(element)
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i === 5) {
//         console.log(`Number 5 detected.`)
//         break; // control flow toot jata hai yahin.
//     }
//     console.log(`Value of i is ${i}`)
// }

for (let i = 1; i <= 20; i++) {
    if(i === 5) {
        console.log(`Number 5 detected.`)
        continue; // ik cheez skip karke baki sab kardo print. loop se bahir nhi ayenge.
    }
    console.log(`Value of i is ${i}`)
}
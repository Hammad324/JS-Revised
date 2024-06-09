// let i = 1;

// while (i <= 3) {
//     console.log(i)
//     i++
// }

// do {
//     console.log(i);
//     i++
// } while (i <= 3);

// Tables with while till 10.

// let i = 1;
// while (i <= 10) {

//     console.log(`\nTable of ${i}`)
//     let j = 1;
//     while (j <= 10) {
//         result = i * j
//         console.log(`${i} * ${j} = ${result}`)
//         j++
//     }
    
//     i++

// }

// iterating through an array using while loop.

// const myArray = [1, 2, 3, 4, 5, 6]
// let i = 0;
// while (i < myArray.length) {
//     console.log(`Value of ${i} index is ${myArray[i]}`)
//     i++
// }

// iterating through a string using do-while loop.

// let myStr = "Hammad";
// let i = 0
// do {
//     console.log(myStr[i])
//     i++
// } while (i < myStr.length);

// let i = 2;

// while (i <= 10) {
//     console.log(i)
//     i += 2 
// }

// let score = 1

// do {
//     console.log(`The value of score is ${score}.`)
//     score++
// } while (score <= 10);

/* agar score ki value directly hi 11 hoti to '11' hi print hota sirf 
because bad mien jab condition check hoti to wahan pe 'false' hojata */

// let score = 11

// do {
//     console.log(`The value of score is ${score}.`)
//     score++
// } while (score <= 10);

// since do while mien pehle execution hoti hai bad mein condition check hoti hai.
// while mein kuch print nhi hogha kiunke us mien pehle condition check hoti hai.

let score = 11
while (score <= 10) {
    console.log(score)
    score++
} // kuch print nhi hoga.
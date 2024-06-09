// let Arr1 = [1, 2, 3, 4, 5, 6, 7]
// console.log(Arr1);

// let arr2 = Arr1.join(); // converts array in a string
// console.log(arr2);

// for(let i = 0; i < Arr1.length; i++) {
//     console.log(Arr1[i]);
// };

// console.log('-----------------------------------------');

// for (i of Arr1) {
//     console.log(i)
// };


let marvel_heros = ["ironman", "captain america", "falcon"];
let dc_heros = ["batman", "superman", "flash"];

// let all_heros = marvel_heros.concat(dc_heros); // returns a new array.
// console.log(all_heros);
// console.log(all_heros[5]);

// '...' is known as the spread operator

let all_heros = [...marvel_heros, ...dc_heros]; // jitni bhi arrays hon unko sath kardega ye.

// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(4); 
//const real_another_array = another_array.flat(Infinity); // likhne se woh khud hi check karlega ke kitne depth tak solve karna hai
// not a good practice to use infinity 

//console.log(real_another_array);

// console.log(Array.isArray("Hammad"));
// console.log(Array.from("Hammad")); // converts any data type in an array.
// console.log(Array.from({name: "Hammad",})); // cannot convert it to empty array dega.

let score1 = 100;
let score2 = 200;
let score3 = 300;

// to create an array out of given elements we use Array.of()

let arr = Array.of(score1, score2, score3);

console.log(arr);
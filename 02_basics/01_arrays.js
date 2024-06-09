// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["ironman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) // does not change the original array

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3) // changes the original array
// console.log("C ", myArr);
// console.log(myn2);

let Arr1 = [2, 4, 6, 8, 10];
console.log('A', Arr1);
console.log(Arr1.slice(1, 3));
console.log('Retains the original array', Arr1);

let Arr2 = [1, 3, 5, 7, 9];
console.log('B', Arr2);
console.log(Arr2.splice(1, 3));
console.log('Changes the original array', Arr2);

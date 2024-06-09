// mostly used for adding items in arrays.

const myNums = [1, 2, 3];

// const result = myNums.reduce( (accumulator, currentValue) => {
//     console.log(`Value of acc: ${accumulator} and Value of currval: ${currentValue}`);
//     return accumulator + currentValue
// }, 0 ) 
// comma ke bad jo value hai woh accmulator ki starting value hai.

//console.log(`The sum is: ${result}`); // 6

// isko one line mein bhi likha ja sakta hai.

const result2 = myNums.reduce( (acc, currVal) => acc + currVal, 0 );
//console.log(`Sum = ${result2}`) // 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const sumOfPrice = shoppingCart
//                             .map(item => item.price)
//                             .reduce( (acc, currVal) => {
//                                 return acc + currVal
//                             }, 0)

// console.log(`Your total bill is Rs ${sumOfPrice}.`)

const sumOfPrice = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(`Your total bill is Rs ${sumOfPrice}.`)
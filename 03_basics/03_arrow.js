const user = {
    userName: "Hammad",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to the website`)
        console.log(this)
    }
} // .this refers to the current context.

// user.welcomeMessage()
// user.userName = "Sam";
// user.welcomeMessage()

// console.log(this);

// browser mien jo global object hota hai woh window object hota hai.
// browser mein .this log karne pe window ata ha.
// node environment mein .this ik empty object ko represent karta hai {}.

function one() {
    let username = "hammad"
    console.log(this.username) // ziada tar objects mien use hota hai.
    // username nhi print hoga.
}

//one()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//chai()

const chai = () => {
    let username = "hammad"
    console.log(this); // {}
    console.log(this.username); // undefined
} // explicit return

// chai()

// arrow functions with implicit return.

const addTwoNumbers = (num1, num2) => (num1 + num2);

//console.log(addTwoNumbers(2, 5));

// () in brackets mien wrap karne pe return nhi likhna parta.
// but {} curly brackets mein wrap karne ki soorat mien return likhna pare ga.

const forObj = () => ({
    name: "Hammad",
    education: "BS Physics"
})

// console.log(forObj())

const myArray = [1, 2, 3, 4, 5];

let result = myArray.forEach((item) => {
    console.log(item * 2)
})

// console.log(result);
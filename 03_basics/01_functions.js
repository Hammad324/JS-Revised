/* function add(num1, num2) { // input == parameters
    console.log(num1 + num2);
};
 */
//const result = add(2, 4) // input == arguments

// jab function ki defination bnate hue jo input dete hain to usko parameters kehte hain.
// jab function ko call karte waqt jo input dete hain woh arguments kehlate hain.

function add(num1, num2) {
    // let sum = num1 + num2;
    // return sum; // retrun ke bad kuch bhi print nhi hota hai
    return num1 + num2;
};

const result = add(2, 5);
//console.log(result)


// Function with objects and arrays

function loginUserMessage(username = "User") {
    if(!username) {
        console.log("Please enter a valid value.");
        return
    }
    return `${username} just logged in!`
}

// console.log(loginUserMessage()); // jab koi value pass nhji ki hogi to undefined ayega.
// console.log(loginUserMessage("Hammad")); // jab value dein ge to woh default value to overwrite kardega.

// '...' isko hi rest and spread operator kehte hain.

// function calculateCartPrice(...price) {
//     return price;
// }

// let totalPrice = calculateCartPrice(100, 200, 300, 400, 500)
// console.log(totalPrice)

function calculateCartPrice(val1, val2, ...price) {
    return price;
}
// agar is tarah se karein ge to val1 and val2 mein pehli 2 value jayengi or baki sari '...price' mien
//eg:

//console.log(calculateCartPrice(100, 200, 500, 1000, 1200));

// [ 500, 1000, 1200 ] ye ans ayega means ye values '...price' mien gyi hain.
// baki shuru ki 2 val1 and val2

const user = {
    userName: "Hammad",
    price: 199,
}

function handleObject(anyObject) {
    return `Username is ${anyObject.userName} and price is ${anyObject.price}.`
};

//console.log(handleObject(user));

// console.log(handleObject({
//     userName: "sam",
//     price: 399,
// }));

const myNewArray = [100, 200, 300, 400];

function secondValue(anyArray) {
    return anyArray[1];
};

//console.log(secondValue(myNewArray)); // 200
console.log(secondValue([2, 4, 5, 6]));
// directly bhi pass karsakte hain array ya jo bhi arguments hain.


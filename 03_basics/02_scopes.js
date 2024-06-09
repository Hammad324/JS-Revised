//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

// upar function mien jab two one se value le ga to woh log hojayegi.
// because uske liye one hi global hia lekin one two ki values nhi access karsakta.

// same with if-else

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

addOne(5) // can be accessed over the function

function addOne(num) {
    return num + 1
}



addTwo(5) // cannot be accessed over the function

const addTwo = function(num) {
    return num + 2
} // this is also called as an expression.


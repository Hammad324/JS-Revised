// for-in loop

const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    php: "PHP"
};

for (const key in myObj) {
    //console.log(`${key} : ${myObj[key]}`)
}

const myArray = ["java", "cpp", "js", "php", "ruby"];

for (const item in myArray) {
    //console.log(`For index ${item}, value is ${myArray[item]}.`)
} 

// ye hamesha keys deta hai

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// is loop mien maps iteratable nhi hote hain.
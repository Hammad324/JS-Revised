const plang = ["golang", "cpp", "javascript", "python", "java"];

//plang.forEach( item => console.log(item) )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }


// function alag likh ke forEach ke pas bhi dal sakte hain or usi waqt hi likh bhi sakte hain.

// const printMe = (item) => {
//     console.log(item)
// }

// plang.forEach(printMe);

plang.forEach((item, index, arr) => {
    //console.log(item, index, arr)
}) // can do it like this aswell.


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: ".js"
    },
    {
        languageName: "java",
        languageFileName: ".java"
    },
    {
        languageName: "python",
        languageFileName: ".py"
    },
];

//console.log(myCoding);

myCoding.forEach( (item) => {
    console.log(`${item.languageName} has an extension of ${item.languageFileName}`)
});


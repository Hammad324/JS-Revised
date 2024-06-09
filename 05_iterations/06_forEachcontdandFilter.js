//const plang = ["golang", "cpp", "javascript", "python", "java"];

//forEach() value nhi return karta 

// const results = plang.forEach(item => {
//     //console.log(item);
//     return item
// }); // undefined ayega.

// console.log(results);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = myNums.filter( item => item > 4 )
// console.log(result); // [ 5, 6, 7, 8, 9, 10 ]

/* jab curly brackets lagadeinge to hum ik scope start kardete hain 
is liye explicitely return ka keyword likhna parta hai. */

// const result = myNums.filter( (item) => {
//     return item > 4
// } )

// console.log(result); // [ 5, 6, 7, 8, 9, 10 ]

// {} ye likhne ki soorat mien return likhna zaroori hai.

// agar ye hi kam forEach se kareinge to aise kareinge:

// const newNums = [];

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } );

// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const filteredBooks = books.filter( (book) => {
    //return book.genre === "Fiction";
    return book.publish >= 1999 && book.genre === "History"
} );

//console.log(filteredBooks);

// ye pehli bar execute is liye nhi hua kiunke {} lagane ki wajah se scope bangya tha isliye hamien explicitely return ka keyword use karna para.
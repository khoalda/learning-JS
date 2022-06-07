// JSON = JavaScript Object Notation
// Language independent and user-readable.
// Depends only on2data structures that are found in all modern programming languages
// 1. Collection of name-value pairs
// Comparable to objects.Think JavaScript object properties"stringified"
// 2. Ordered list of values
// Comparable to arrays.Think ability to pack collections of objects into single file for transfer

// Object format
const book = {
    title: "1984",
    author: "Geogre Orwell",
    isAvailable: false
};

// convert to JSON
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const copies = [book, book, book]
const copiesJSON = JSON.stringify(copies)
console.log(copiesJSON);


// convert back to object/array
const jsonText = '{"title":"Becoming","author":"Obama","isAvaiable":true}'

const jsonObj = JSON.parse(jsonText)
console.log(jsonObj)


const jsonArrayText = '[{"title":"Becoming"},{"title":"1984"}]'
const jsonArray = JSON.parse(jsonArrayText)
console.log(jsonArray[1].title)
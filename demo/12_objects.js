// object: an unordered collection of name - value pair (~hashmap)
const book = {
    title: "1984",
    author: "Geogre Orwell",
    isAvailable: false,

    checkIn: function() {
        this.isAvailable = true;
    },

    checkOut: function() {
        this.isAvailable = false;
    },

    getThis: function() {
        return this
    }
}

// another way to declare objects
const book1 = new Object()  // using constructor
book1.title = "1984"
book1.author = "Geogre Orwell"
book1.isAvailable = true
book1.checkIn = function() {
    this.isAvailable = true;
}
book1.checkOut = function() {
    this.isAvailable = false;
}

console.log(book);
// console.log(book1);
console.log(book.author);    // ~namespace
console.log(book["author"]); // ~hashmap
book.checkIn // returns [Function: checkIn]
book.checkIn() // invoke function 
book["checkOut"]()


// "this" keyword
// - object method: "this" maps to enclosing object 
// - standalone function: "this" maps to global object

// global object 
// - in browser runtime: "window" object 
// - in Node.js runtime: "global" object
// - in strict mode: undefined, may be changed using "apply"

// "globalThis" -> reference to the global object consistently

console.log(book.getThis());

function temp() {
    return this
}

console.log(temp());
console.log(globalThis);






const place = 'World'
console.log('Hello %s', place);
console.log(`Hello ${place}`)  // template literals


var one = 1 // function scoped, can be changed in scope, available before declaration
let two = 2 // block scoped {}, can only be changed in scope, only available after declaration
const three = 3 // block scoped, cannot be changed (immutable), only available after declaration

// RECOMMENDATION: const by default, let in loops, rarely use var

console.log(two);


if (true) {
    let foo = "abcde"
    var temp = "abc"
}

console.log(foo); // this causes error
console.log(temp);



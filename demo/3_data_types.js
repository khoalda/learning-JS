// JS is weakly typed
// Simple type system
// Number (float), String, Boolean, Date, Function, Array, Object
// Special types:
NaN; // not a number -> Sth that tries but fails to convert to number
null;
undefined;

// type checking
let x = 0;

console.log(typeof x);
console.log(x instanceof Number); // comparing to a constructor

let y = new Number(1);

console.log(typeof y);
console.log(y instanceof Number); // comparing

console.log(x == ""); // true, type coerced
console.log(x === ""); // false, type checked


console.log('42' == 42);
console.log('42' === 42);


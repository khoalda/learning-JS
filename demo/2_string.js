// String Concatenation
let str1 = "Hello ";
let str2 = "World!";

console.log(str1 + str2);
console.log(str1 + "Big " + str2);

// be careful when doing operations on different data types
let num1 = 1;
let num2 = "1";

console.log(num1 + num2);
console.log(num1 + 1);

console.log(`I am writing ${str1 + str2}`);

let bool = true;
console.log(`The opposite of ${bool} is ${!bool}`);

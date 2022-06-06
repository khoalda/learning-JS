// convert numbers to strings
let a = 3.14
let b = 4.5

console.log(a + b);
console.log(a.toString() + b.toString());


// conver
let str1 = "18"
let str2 = "1.45"

let c = parseInt(str1)
let d = parseFloat(str2)

console.log(c + d);
console.log(parseInt('0xF')); // hexadecimal
console.log(parseInt('ABC')); // NaN

// numbers after special characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'))

// using template literals
console.log(parseInt(`${1+1}00`));





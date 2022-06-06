// let length = 5
let arr1 = []
let arr2 = Array(5) // fixed length

console.log(arr1.length);
console.log(arr2.length);
console.log(arr1[10]); // undefined
console.log(arr2[1]); // undefined

arr1[7] = "abc"
console.log(arr1[7]);
console.log(arr1.length);


let arr3 = ["A", true, 2];
console.log(arr3[0]);
console.log(arr3[1]);


console.log(arr3.push(3)); // returns the length
console.log(arr3.pop()); // returns the value removed
console.log(arr3.unshift('new value'));
console.log(arr3.shift()) // removes the first value and returns it

let arr4 = [2, 5]
let newArr = arr3.concat(arr4)
console.log(newArr);
console.log(arr3);





function computePrice(cost, discount) {
    // console.log(cost, "", discount);
    let reduction = cost * discount;
    // console.log(cost, discount, reduction);
    return cost - reduction;
}


console.log(computePrice(100)); // does not check -> undefined
console.log(computePrice(100, 0.2))


// arrow function
// Sometimes called 'fat arrow functions'
// Changes to the "this" context
// Support implicit return values
// Must be assigned to a variable, or immediately used
// Reduction in characters typed

const add = (a, b) => a + b;
console.log(add(1, 2)); //3

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(2, 1)); //1

// "this" context of arrow function is different from normal function

// normal function: "this" context is defined where that function is called
// arrow function: "this" context is inherited from its parent

// we should not use "this" in arrow function as it is problematic
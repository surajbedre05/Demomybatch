//In JavaScript, the slice() method is used to extract a portion of an array (or a string) without changing the original.

let fruits = ["apple", "banana", "mango", "orange", "grape"];

// Extract from index 1 to 3 (3 is excluded)
let citrus = fruits.slice(1, 3);

console.log(citrus); // ["banana", "mango"]
console.log(fruits); // ["apple", "banana", "mango", "orange", "grape"] (unchanged)
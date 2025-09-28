//The splice() method in JavaScript is used to add, remove, or replace elements in an array.

let fruits = ["apple", "banana", "cherry", "mango"];

// Remove 2 elements starting from index 1
let removed = fruits.splice(1, 2);

console.log("remaining elements ==>  " + fruits); // ["apple", "mango"]  (modified)
console.log("Deleted elements ==>  " + removed); // ["banana", "cherry"] (removed items)
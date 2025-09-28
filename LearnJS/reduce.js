//The reduce() method in JavaScript is used to reduce an array 
// to a single value by running a function on each element and accumulating the result.
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10


let numbers1 = [10, 2, 3];

let result = numbers1.reduce((acc, curr) => acc - curr);

console.log(result); // 5
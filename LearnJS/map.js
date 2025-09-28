//In JavaScript, the map() method is used to create a new array by applying a given function to each element of an existing array.

//It does not change the original array — it returns a new one.

const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.get("apples"));

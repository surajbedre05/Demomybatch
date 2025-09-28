function moveZerosToEnd(arr) {
  let result = [];
  let zeroCount = 0;

  // Traverse array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++; // Count zeros
    } else {
      result.push(arr[i]); // Store non-zero elements
    }
  }

  // Add zeros at the end
  while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
  }

  return result;
}

// Example usage:
let arr = [0, 5, 0, 3, 0, 8, 1, 0, 9];
console.log("Original Array:", arr);
console.log("After Moving Zeros:", moveZerosToEnd(arr));

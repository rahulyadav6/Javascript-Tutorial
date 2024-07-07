const numbers = [1, 2, 3, 4];

const mappedResult = numbers.map((num) => {
  if (num % 2 === 0) {
    return num * 2; // Returns a value for even numbers
  }
  // Returns undefined for odd numbers (implicitly)
});

console.log(mappedResult); // Output: [undefined, 4, undefined, 8]

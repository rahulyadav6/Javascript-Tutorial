const arr = [1, , 3]; // Note the empty slot at index 1

const mappedArr = arr.map((element) => {
  return element * 2;
});

console.log(mappedArr); // Output: [2, , 6]

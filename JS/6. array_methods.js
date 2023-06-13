const arr = [1, 2, 3, 4, 5, 6];

// imperatywnie
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// funkcyjnie
arr.forEach(val => console.log(val));

const squares = arr.map((value, index, originalArray) => value ** 2);
const evenSquares = squares.filter(value => value % 2 === 0);
const sum = evenSquares.reduce((acc, curr) => acc + curr);

const onlySum = arr
  .map((value) => value ** 2)
  .filter(value => value % 2 === 0)
  .reduce((acc, curr) => acc + curr);

console.log(squares, evenSquares, sum);
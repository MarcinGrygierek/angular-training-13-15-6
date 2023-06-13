const foo = (a, b) => {
  return a + b;
}

const hof = (a, b, callback) => {
  const result = a + b;
  return callback(result);
}

setTimeout(() => {
  console.log('Hello');
}, 1000);

const result1 = hof(1, 2, (value) => {
  return value ** 2;
})

const result2 = hof(1, 2, (value) => {
  return value ** 3;
})

console.log(result1, result2);
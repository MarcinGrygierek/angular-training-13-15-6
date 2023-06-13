const arr = [1, 2, 3, 4];
const obj = {
  name: 'Marcin',
  address: {
    city: 'Gliwice'
  }
}

const [first,,, fourth] = arr;
const [_, ...rest] = arr;

console.log(first, fourth, rest);

const { name, address: { city } } = obj;

const { a, b } = { a: 10, b: 10, c: 10 };

console.log(name, city);
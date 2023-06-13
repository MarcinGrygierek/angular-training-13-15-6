const a = [1, 2, 3];
const b = a;
const c = [1, 2, 3];

console.log(a, b, c);
console.log(a === b);
console.log(a === c);
// console.log("1" === 1, "1" == 1);

const aCopy = [...a]; // [ 1, 2, 3 ] - płytka kopia
console.log(aCopy, aCopy === a);

const users = [{ a: 10 }, { a: 20 }, { a: 30 }];
const usersShallowCopy = [...users]; // kopia zawiera dalej te same obiekty (te same referencje)
const usersDeepCopy = users.map(element => {
  return { ...element }
})

usersShallowCopy.push({ a: 1000 })
usersShallowCopy[0].a = 9999999;

console.log(usersShallowCopy, usersDeepCopy, users);

const user = {
  name: 'Marcin',
  address: {
    city: 'Gliwice',
    details: {
      street: 'Ulicowa'
    }
  }
}

const userDeepCopy = {
  ...user,
  address: {
    ...user.address,
    details: {
      ...user.address.details
    }
  }
}

console.log(user, userDeepCopy);

const d = [...a, 120]; // dodanie nowego elementu do tablicy tworząc nową tablicę

// operator reszty - rest operator
function foo(a, b, ...args) {
  console.log(a, b, args, ...args);
}

foo(1, 2);
foo(1, 2, 3, 4, 5, 6);
foo(1, 2, 3);
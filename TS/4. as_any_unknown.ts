let a: any;

a = 123123;
a = { a: 1234 };

// console.log(a.toFixed(2)); // błąd

let b: unknown;
b = 123123;
b = { a: 1234 };
b = 10.12432234;

console.log((b as number).toFixed(2));
console.log((<number>b).toFixed(2));

const response = "123";
const result: number = response as any;
console.log(result);

const foo = () => {
    throw new Error();
}
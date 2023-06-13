const arr = [1, 2, 3, 4, 5, "6"];
arr.push(100);
arr.push("100");

const arr2: number[] = [];
arr2.push(111);

const tupple: [string, number] = ["Lorem ipsum", 100];
tupple.push(12312);

const user = { name: 'Marcin', city: 'Gliwice' };
const user2: { name: string, city: string, age?: number } = { name: 'Marcin', city: 'Gliwice' };
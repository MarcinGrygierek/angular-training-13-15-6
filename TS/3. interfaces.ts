const user = { name: 'Marcin', city: 'Gliwice' };

interface User { 
    name: string, 
    city: string, 
    age?: number,
}

const user2: User = { name: 'Marcin', city: 'Gliwice' };
const user3: User = { name: 'A', city: 'B', age: 123 };
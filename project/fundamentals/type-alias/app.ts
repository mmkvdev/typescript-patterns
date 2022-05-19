// type aliases are really useful when we want to reuse types and abstract complex and lenghty type annotations

type PersonDetails = {
    name: string;
    age: number;
    city: string;
    role: number | string
}

const person: PersonDetails = {
    name: 'calmdev',
    age: 30,
    city: 'Hyderabad',
    role: 1
}

const person1: PersonDetails = {
    name: 'calmdev_sandbox',
    age: 31,
    city: 'Bengaluru',
    role: 'ADMIN'
}

console.log(person);
console.log(person1);
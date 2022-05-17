// this is an explicit way of telling typescript the actual strcuture of an object
const person: {
    name: string;
    age: number;
} = {
    name: 'calmdev',
    age: 21
};


// usually typescript takes care of the object types through inference
/* 
    const person = {
        name: 'calmdev',
        age: 21
    };
*/

console.log(person.age);
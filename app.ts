// CORE TYPES

/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    activities: any[];
    role: [number, string];  //tuple types
} = {
    name: 'Andrea',
    age: 30,
    hobbies: [
        'Sports',
        'Cooking'
    ],
    activities: [
        'Run',
        8,
        64
    ],
    role: [2, 'author'],
}
*/

/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */

// ENUMS
enum Role { ADMIN, READ_ONLY, AUTHOR };
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
// enum Role { ADMIN = 'Admin', READ_ONLY = 10, AUTHOR = 'author' };



const person = {
    name: 'Andrea',
    age: 30,
    hobbies: [
        'Sports',
        'Cooking'
    ],
    activities: [
        'Run',
        8,
        64
    ],
    role: Role.ADMIN,
}

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.ADMIN) {
    console.log('is admin');
} else if ( person.role === Role.AUTHOR) {
    console.log('is author');
}
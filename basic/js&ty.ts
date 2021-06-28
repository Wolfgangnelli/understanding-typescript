

/* const add =  (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output); 

printOutput(add(5,2)); */

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
    firstName: 'Andrew',
    age: 30
}
// spread operator
const copiedPerson = {...person};

// rest parameters
const add = (...numbers: number[]) => {  
 return numbers.reduce((p, c) => p + c, 0);
   
}

const addedNumbers = add(5, 10, 2);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName, age } = person;
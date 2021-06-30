// An interface describe a structure of an object that i can use for describe as un object should be appear.
// For example for describe a structure of a Model that is stored in my backend 
// Posso implement un o piu interface in una class
// Consentono di condividere funzionalità tra diverse classi, riguardo la struttura e caratteristiche che dovrebbero avere, impongo alle classi di avere una certa struttura
// Un interface puo extends un altra interface, vale diciamo il concetto di ereditarietà

// Simile a un type personalizzato
/* type Persona = {
    name: string;
    age: number;

    greet(phrase: string): void;
} */

/* interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
} 

let user1: Greetable;

user1 = {
    name: 'Andrea',

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name + '!');
    }
}

user1.greet('Hi there - I am');

*/


// Interface as Function type
//type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
    return a+b;
}

// end interface as function

interface Named {
    readonly name?: string;
    // Optional property   propName?: type;  and method   myMethod?(): void;
    outputName?: string;
}

interface Greetable extends Named {

    greet(phrase: string): void;
}

class Person implements Greetable {
    public name?: string
    age: number = 30;
    
    // Option parameters 
    constructor(name?: string) {
        if(name) {
            this.name = name;
        }
    }

    greet(phrase: string) {
        if(this.name) {
            console.log(`${phrase} ${this.name}!`);
        } else {
            console.log('Hi!');
        }
    }
}

let user1: Greetable;

user1 = new Person();
let user2 = new Person('Max');
// user1.name = 'Pippo';
user1.greet('Hi there - I am');
user2.greet('Hi there - I am');


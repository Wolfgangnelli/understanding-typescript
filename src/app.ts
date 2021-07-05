// META PROGRAMMING
// Decorators are a functions, i decorators sono eseguiti quando la classe a cui si riferisce viene instanziata e non eseguita/chiamata
function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    // Decorator factories/function, now i can pass parameter to decorator function @Logger(params)
   /*  return function(_: Function) {
        console.log(logString);
    } */
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
        console.log('Rendering template');
        const hookEm = document.getElementById(hookId);
        const p = new constructor();
        if (hookEm) {
            hookEm.innerHTML = template;
            hookEm.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person obj...');
    }
}

const person = new Person();
console.log(person);

// ---

//Decorator
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position); // index del parametro
}

class Product {
    @Log
    title: string;
    private _price: number;

    // Add Decorator a un accessor
    @Log2
    set price(val: number) {   // Accessor
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price, should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    // Add Decorator a un method
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1+tax);
    }
}
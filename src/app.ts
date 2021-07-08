// META PROGRAMMING
// Decorators are a functions, i decorators sono eseguiti quando la classe a cui si riferisce viene instanziata e non eseguita/chiamata
// Quindi, i decorators, sono usati per la meta programmazione 
//per aggiungere ulteriore logica di configurazione aggiuntiva che viene
// presa in considerazione e usata 
function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    // Decorator factories/function, now i can pass parameter to decorator function @Logger(params)
    /*  return function(_: Function) {
         console.log(logString);
     } */
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function <T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
       
        return class extends originalConstructor {

            constructor(..._: any[]) {
                super();
                console.log('Rendering template');
                const hookEm = document.getElementById(hookId);
                if (hookEm) {
                    hookEm.innerHTML = template;
                    hookEm.querySelector('h1')!.textContent = this.name;
                }
            }
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
        if (val > 0) {
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
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book', 29);


// ---- click button and execute a method on an obj
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
          const boundFun = originalMethod.bind(this);
          return boundFun;
      }
  };
  return adjDescriptor;
}

class Printer {
    massage = 'This work';

    @Autobind
    showMessage() {
        console.log(this.massage);
    }
}
const p = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

// ---- Validation with decorators

interface ValidatorConfig {
    [property: string]: { // class name as a prop key
        [validatableProp: string]: string[] // ['require', 'positive']

    }
}

const registeredValidators: ValidatorConfig = {};

function RequiredProps(target: any, propName: string) {
        registeredValidators[target.constructor.name] = {
            ...registeredValidators[target.constructor.name],
            [propName]: [...registeredValidators[target.constructor.name][propName], 'required']
        }
}
function PositiveNumber(target: any, propName: string) {
        registeredValidators[target.constructor.name] = {
            ...registeredValidators[target.constructor.name],
            [propName]: [...registeredValidators[target.constructor.name][propName], 'positive']
        }
}
function Validate(obj: any) {
    console.log(obj);
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    console.log(objValidatorConfig);
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        console.log(prop);
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop]; // con !! (bouble bang operator) mi converte in un vero valore true o false
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @RequiredProps
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.price = p;
        this.title = t;
    }  
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;


    const createdCourse = new Course(title, price);
    if(!Validate(createdCourse)) {
        alert('Invalid input, please ty again!');
        return;
    }
    console.log(createdCourse);
});
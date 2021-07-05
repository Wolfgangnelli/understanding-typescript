// META PROGRAMMING
// Decorators are a functions, i decorators sono eseguiti quando la classe a cui si riferisce viene instanziata e non eseguita/chiamata
function Logger(logString: string) {

    // Decorator factories, now i can pass parameter to decorator function @Logger(params)
    return function(_: Function) {
        console.log(logString);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookEm = document.getElementById(hookId);
        const p = new constructor();
        if (hookEm) {
            hookEm.innerHTML = template;
            hookEm.querySelector('h1')!.textContent = p.name;
        }
    }
}

/* @Logger('LOGGING - PERSON') */
@WithTemplate('<h1>My person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person obj...');
    }
}

const person = new Person();
console.log(person);
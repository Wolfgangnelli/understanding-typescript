// Intersection types
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// combine two types, Intersection types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    // type guard using typeof
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log(`Name: ${emp.name}`);
    // type guard, check if privilege props is in emp obj type
    if('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`)
    }
    if('startDate' in emp) {
        console.log(`Start date: ${emp.startDate}`)
    }
}
printEmployeeInfo(e1);

// With class
class Car {
    drive() {
        console.log('Drivingj...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }
    loadCargo(amount: number) {
        console.log(`Loading cargo... ${amount}`)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // guard, check if vehicle is an istance of Truck
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions using prop typw in an Interface
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}
interface Horse {
    type: 'horse';
    runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    let name = animal.type.charAt(0).toUpperCase() + animal.type.slice(1);
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log(`${name} moving at speed: ${speed}`)
}

moveAnimal({type: 'bird', flyingSpeed: 50});
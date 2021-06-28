class Department {
  /*  private readonly id: number;
   private name: string; */
   private employees: string[] = [];

    constructor(private readonly id: number, public name: string) {
       /*  this.id = id;
        this.name = n; */
    }

    describe(this: Department) {
        console.log(`Department ${this.id}: ${this.name.toUpperCase()}`);
    }

    addEmployee(employee: string) {
        this.employees = [...this.employees, employee];
    }

    showEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


const accounting = new Department(1, 'Accounting');
accounting.describe();
accounting.addEmployee('Pippo');
accounting.addEmployee('Pluto');
accounting.showEmployees();


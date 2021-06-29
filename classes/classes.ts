abstract class Department {
    static fiscalYear = 2020;
  /*  private readonly id: number;
   private name: string; */
   protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
       /*  this.id = id;
        this.name = n; */
    }

    // static method
    public static createEmployee(name: string) {
        return {
            name
        }
    }

    abstract describe(this: Department): void; 

    addEmployee(employee: string) {
        this.employees = [...this.employees, employee];
    }

    showEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');

        this.admins = admins;
    }

    describe(){
       console.log('ITDepartment - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    // Getter as a prop
    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    
    // Setter
    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error("Please pass in a valid value!");         
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }
    
    // (Pattern) Singleton class, One instance of this class, rendendo il contructor private
    static getIstance() {
       if(AccountingDepartment.instance) {
           return this.instance;
       }
       this.instance = new AccountingDepartment('d2', []);
       return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

   private addReport(text: string) {
        this.reports = [...this.reports, text];
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Massi');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);
it.describe();
it.addEmployee('Max');
it.addEmployee('Pluto');
it.showEmployees();
console.log(it);

//const accounting = new AccountingDepartment('d2', []);
// Singleton
const accounting = AccountingDepartment.getIstance();

accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Mario');
//accounting.printReports();
//accounting.showEmployees();
accounting.describe();


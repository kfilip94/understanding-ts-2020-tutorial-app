abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(
    private readonly id: string,
    protected name: string
  ) {};

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}


class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('ITDepartment: ',this.name)
  }
}


class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('95', []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please set the last report value');
    }
    this.addReport(value);
  }

  describe() {
    console.log('AccountingDepartment: ',this.name, ' | last report: ',this.lastReport);
  }

  addEmployee(name: string) {
    if (name !== 'Kamil') {
      this.employees.push(`${name}`);
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log('Reports: ',this.reports);
  }
}

const accounting = AccountingDepartment.getInstance();
const it = new ITDepartment('945', ['Beata']);

accounting.addReport('Kamil is awesome!');
accounting.addReport('Marta is awesome too!');
accounting.addEmployee('Kamil');
accounting.addEmployee('Daniel');
accounting.printEmployeeInfo();
console.log('Most recent report: ', accounting.mostRecentReport);
accounting.mostRecentReport = 'Homer is the best best!';
console.log('Most recent report: ', accounting.mostRecentReport);
accounting.printReports();
accounting.describe();

const employee = Department.createEmployee('Migsar');
console.log('employee: ',employee)
console.log('current fiscal year: ',Department.fiscalYear)

it.addEmployee('Kamil');
it.printEmployeeInfo();
it.describe();
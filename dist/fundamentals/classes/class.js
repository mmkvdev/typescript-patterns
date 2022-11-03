"use strict";
class Department {
    // shortcut for property declaration and initialisation
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    static createEmployee(name) {
        return {
            name
        };
    }
    printEmployeeInformation() {
        console.log(this.employees.length, this.employees, this.age, this.name);
    }
}
// public name: string;
// private age: number;
Department.fiscalYear = 2022;
// const department_1 = new Department("Accounting", 23, "utna_16");
// department_1.describe();
// department_1.employees[0] = "FlipKart";
// department_1.addEmployee("Martin");
// department_1.addEmployee("Meesho");
// department_1.printEmployeeInformation();
class ITDepartment extends Department {
    constructor(id, holiday) {
        super("pip", 23, id);
        this.admins = [];
        this.holiday = holiday;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    addAdmins(admin) {
        this.admins.push(admin);
    }
    describe() {
        console.log('IT Department ID: ', this.id);
    }
    printAdmins() {
        console.log('admins: ', this.admins, this.employees);
    }
}
const it = new ITDepartment("pop", "oct 5");
it.describe();
it.addEmployee("Bruce Lee");
it.addEmployee("Cisco");
it.printAdmins();
class AccountingDepartment extends Department {
    constructor(id, name, age, reports) {
        super(name, age, id);
        this.reports = reports;
        this.accoutingAdmins = [];
        this.lastReport = reports[0];
    }
    addReport(report) {
        this.accoutingAdmins.push(report);
        this.lastReport = report;
    }
    describe() {
        console.log('accounting department: ', this.id);
    }
    printReportAdmins() {
        console.log(this.accoutingAdmins, this.reports);
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error('No Result Found');
        }
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    printReport() {
        console.log('employees: ', this.employees);
    }
}
const employee1 = Department.createEmployee('evans');
const fiscalYear = Department.fiscalYear;
console.log('static property: ', fiscalYear);
console.log('static method: ', employee1);
const accounting = new AccountingDepartment('2', 'Accounting', 23, ['Indian']);
console.log('accounting: ', accounting);
accounting.mostRecentReport = 'Years to be reported';
console.log(accounting.mostRecentReport);
accounting.addReport('Financing');
accounting.printReport();
accounting.describe();

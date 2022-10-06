"use strict";
class Department {
    // shortcut for property declaration and initialisation
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        // public name: string;
        // private age: number;
        this.employees = [];
    }
    describe() {
        console.log("name: ", this.name, "age: ", this.age, "id: ", this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length, this.employees);
    }
}
const department_1 = new Department("Accounting", 23, "utna_16");
department_1.describe();
// department_1.employees[0] = "FlipKart";
department_1.addEmployee("Martin");
department_1.addEmployee("Meesho");
department_1.printEmployeeInformation();

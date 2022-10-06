class Department {
  // public name: string;
  // private age: number;
  private employees: string[] = [];

  // shortcut for property declaration and initialisation
  constructor(
    private name: string,
    private age: number,
    private readonly id: string
  ) {}

  describe() {
    console.log("name: ", this.name, "age: ", this.age, "id: ", this.id);
  }

  addEmployee(employee: string) {
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

class ITDepartment extends Department {
  admins: string[] = [];
  holiday: string;
  constructor(id: string, holiday: string) {
    super("pip", 23, id);
    this.holiday = holiday;
  }

  addAdmins(admin: string) {
    this.admins.push(admin);
  }

  printAdmins() {
    console.log(this.admins);
  }
}

const it = new ITDepartment("pop", "oct 5");
it.describe();

it.addEmployee("Martin");
it.addEmployee("Cisco");
it.printEmployeeInformation();

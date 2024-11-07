import Employee from "./Employee.js";

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calAnnualSalary() {
    const baseSalary = super.calAnnualSalary();
    const bonus = 0.1;
    return bonus * baseSalary + baseSalary;
    //cannot acess salary here unless change it to this.salary or use weakmap here too or send salary as a argument to calAnnualSalary
  }
}

export default Manager;

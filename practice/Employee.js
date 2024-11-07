const _salary = new WeakMap();

class Employee {
  constructor(name, salary) {
    this.name = name;
    _salary.set(this, salary);
  }

  calAnnualSalary() {
    return _salary.get(this) * 12;
  }

  get salary() {
    return _salary.get(this);
  }
}

export default Employee;

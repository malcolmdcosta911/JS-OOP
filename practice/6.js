// 6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.
//  Include a method to calculate annual salary.
//  Create a subclass called 'Manager' that inherits from the 'Employee' class
//  and adds an additional property for department.
//   Override the annual salary calculation method to include bonuses for managers.
// Create two instances of the 'Manager' class and calculate their annual salary.
//
//
//
//
// 11. Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance.
// Include methods to deposit, withdraw, and transfer money between accounts.
// Create multiple instances of the BankAccount class and perform operations such
// as depositing, withdrawing, and transferring money

import Manager from "./Manager.js";

const m1 = new Manager("bad manager", 50000, "IT");
const m2 = new Manager("good manager", 5000, "IT");

for (let m of [m1, m2]) {
  console.log(m.name, m.salary, m.calAnnualSalary());
}


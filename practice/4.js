//4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and
//balance. Include methods to deposit and withdraw money from the account. Create some instances of the //"BankAccount"
//class, deposit some money, and withdraw a portion of it.

import BankAccount from "./BankAccount.js";

const person1 = new BankAccount(1213, 0);
const person2 = new BankAccount(1214, 10000);
person1.deposit(1213, 10000);
person1.withdraw(1213, 1000);

console.log("person1 displayBalance", person1.displayBalance(1213));
console.log("person2 displayBalance", person2.displayBalance(1214));

person2.transfer(1214, 1000, person1, 1213);

console.log("person1 displayBalance", person1.displayBalance(1213));
console.log("person2 displayBalance", person2.displayBalance(1214));

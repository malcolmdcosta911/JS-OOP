const _accNo = new WeakMap();
const _balance = new WeakMap();

class BankAccount {
  constructor(accountNo, balance) {
    // this.accountNo = accountNo;
    // this.balance = balance;
    _accNo.set(this, accountNo);
    _balance.set(this, balance);
  }

  deposit(accountNo, amount) {
    if (_accNo.get(this) != accountNo) throw new Error("Invalid acc no ");
    if (amount <= 0) throw new Error("Invalid amount");
    // this.balance += amount;
    let balance = _balance.get(this);
    balance += amount;
    _balance.set(this, balance);
  }

  withdraw(accountNo, amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    if (this.balance < amount) throw new Error("Insufficent balance");
    if (_accNo.get(this) != accountNo) throw new Error("Invalid acc no ");
    // this.balance -= amount;
    let balance = _balance.get(this);
    balance -= amount;
    _balance.set(this, balance);
  }

  //should add enter acc no to check balance too
  //   get balance() {
  //     return _balance.get(this);
  //   }

  //in real productiondont do this use db
  transfer(ownAccountNo, amount, otherPersonInstance, otherPersonAccNo) {
    this.withdraw(ownAccountNo, amount);
    otherPersonInstance.deposit(otherPersonAccNo, amount);
  }

  displayBalance(accountNo) {
    if (_accNo.get(this) != accountNo) throw new Error("Invalid acc no ");
    return _balance.get(this);
  }
}

export default BankAccount;

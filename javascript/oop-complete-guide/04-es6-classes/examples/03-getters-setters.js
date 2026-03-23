/**
 * Example 3: Getters and Setters
 * - get/set for validation and computed values
 */

class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    console.log('Balance accessed');
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error('Balance cannot be negative');
    }
    this._balance = amount;
  }
}

const account = new BankAccount(1000);
console.log(account.balance); // logs then returns 1000
account.balance = 1500;
console.log(account.balance); // 1500
// account.balance = -100; // throws

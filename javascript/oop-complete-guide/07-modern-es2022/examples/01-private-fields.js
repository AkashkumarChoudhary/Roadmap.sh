/**
 * Private fields (#) and private methods
 * - #balance, #pin, #validatePin
 * - Static private: static #bankCode
 * - Subclass cannot access parent #fields directly
 */

class BankAccount {
  bankName = 'MyBank';

  #accountNumber;
  #balance;
  #pin;

  static #bankCode = 'MB123';

  constructor(accountNumber, initialBalance, pin) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
    this.#pin = pin;
    this.transactions = [];
  }

  #validatePin(enteredPin) {
    return this.#pin === enteredPin;
  }

  deposit(amount, pin) {
    if (!this.#validatePin(pin)) throw new Error('Invalid PIN');
    if (amount <= 0) throw new Error('Amount must be positive');
    this.#balance += amount;
    this.transactions.push({ type: 'deposit', amount, date: new Date() });
    return this.#balance;
  }

  withdraw(amount, pin) {
    if (!this.#validatePin(pin)) throw new Error('Invalid PIN');
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
    this.transactions.push({ type: 'withdraw', amount, date: new Date() });
    return this.#balance;
  }

  getBalance(pin) {
    if (!this.#validatePin(pin)) throw new Error('Invalid PIN');
    return this.#balance;
  }

  static getBankInfo() {
    return `Bank Code: ${this.#bankCode}`;
  }
}

const account = new BankAccount('123456', 1000, '1234');
console.log(account.bankName);
console.log(account.getBalance('1234'));
account.deposit(500, '1234');
console.log(BankAccount.getBankInfo());
// console.log(account.#balance); // SyntaxError

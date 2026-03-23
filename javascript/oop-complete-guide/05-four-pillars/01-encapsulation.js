/**
 * Pillar 1: Encapsulation
 * - Convention-based "private" (_balance, _logTransaction)
 * - ES2022 true privacy (#balance, #pin, #validatePin)
 */

class BankAccount {
  constructor(initialBalance) {
    this._balance = initialBalance;
    this._transactionHistory = [];
  }

  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit amount must be positive');
    this._balance += amount;
    this._logTransaction('deposit', amount);
    return this._balance;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error('Withdrawal amount must be positive');
    if (amount > this._balance) throw new Error('Insufficient funds');
    this._balance -= amount;
    this._logTransaction('withdraw', amount);
    return this._balance;
  }

  get balance() {
    return this._balance;
  }

  get recentTransactions() {
    return [...this._transactionHistory.slice(-5)];
  }

  _logTransaction(type, amount) {
    this._transactionHistory.push({
      type,
      amount,
      timestamp: new Date(),
      balance: this._balance,
    });
  }
}

// Modern encapsulation with true privacy (ES2022+)
class SecureBankAccount {
  #balance;
  #pin;
  #transactionHistory = [];

  constructor(initialBalance, pin) {
    this.#balance = initialBalance;
    this.#pin = pin;
  }

  deposit(amount, enteredPin) {
    this.#validatePin(enteredPin);
    if (amount <= 0) throw new Error('Invalid amount');
    this.#balance += amount;
    this.#logTransaction('deposit', amount);
    return this.#balance;
  }

  #validatePin(enteredPin) {
    if (enteredPin !== this.#pin) throw new Error('Invalid PIN');
  }

  #logTransaction(type, amount) {
    this.#transactionHistory.push({
      type,
      amount,
      timestamp: new Date(),
      balance: this.#balance,
    });
  }

  getBalance(enteredPin) {
    this.#validatePin(enteredPin);
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log('Balance:', account.balance);

const secure = new SecureBankAccount(500, '1234');
secure.deposit(100, '1234');
console.log('Secure balance:', secure.getBalance('1234'));

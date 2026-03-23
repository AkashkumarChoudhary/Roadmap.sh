/**
 * Practice Exercise 1: Bank Account Object
 *
 * Create a bankAccount object with:
 * - Properties: accountNumber, accountHolder, balance, transactionHistory (array)
 * - Methods:
 *   - deposit(amount): Add to balance, record transaction
 *   - withdraw(amount): Subtract if sufficient funds, record transaction
 *   - getBalance(): Return current balance
 *   - getStatement(): Return last 5 transactions
 * - Validation: no negative deposits, sufficient funds for withdrawal
 */

const bankAccount = {
  accountNumber: 'ACC001',
  accountHolder: 'Jane Doe',
  balance: 0,
  transactionHistory: [],

  deposit(amount) {
    if (amount <= 0) {
      console.log('Deposit amount must be positive');
      return this.balance;
    }
    this.balance += amount;
    this.transactionHistory.push({
      type: 'deposit',
      amount,
      date: new Date(),
      balanceAfter: this.balance,
    });
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    return this.balance;
  },

  withdraw(amount) {
    if (amount <= 0) {
      console.log('Withdrawal amount must be positive');
      return this.balance;
    }
    if (amount > this.balance) {
      console.log('Insufficient funds');
      return this.balance;
    }
    this.balance -= amount;
    this.transactionHistory.push({
      type: 'withdraw',
      amount,
      date: new Date(),
      balanceAfter: this.balance,
    });
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    return this.balance;
  },

  getBalance() {
    return this.balance;
  },

  getStatement() {
    const len = this.transactionHistory.length;
    return this.transactionHistory.slice(-5);
  },
};

// Test
bankAccount.deposit(100);
bankAccount.deposit(50);
bankAccount.withdraw(30);
bankAccount.withdraw(200); // insufficient
console.log('Balance:', bankAccount.getBalance());
console.log('Last 5 transactions:', bankAccount.getStatement());

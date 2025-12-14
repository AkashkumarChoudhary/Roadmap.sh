export { };

/**
 * MODULE 7: CLASSES (OOP)
 * Topic: Access Modifiers
 * 
 * THEORY:
 * Control who can access properties and methods.
 * 
 * 1. `public` (Default): Accessible everywhere.
 * 2. `private`: Accessible ONLY within the class.
 * 3. `protected`: Accessible within the class AND subclasses.
 * 
 * Note: These are compile-time checks. In JS, everything is public (unless using #private fields).
 */

// --- CODE: Modifiers ---

class BankAccount {
    public accountHolder: string;
    private _balance: number; // Convention: private fields start with _
    protected type: string;

    constructor(holder: string, initialBalance: number) {
        this.accountHolder = holder;
        this._balance = initialBalance;
        this.type = "Savings";
    }

    public deposit(amount: number) {
        this._balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this._balance}`);
    }

    // Getter (allows reading private property)
    get balance(): number {
        return this._balance;
    }
}

const account = new BankAccount("Alice", 1000);

// Public access
console.log(account.accountHolder); // OK
account.deposit(500); // OK

// Private access
// console.log(account._balance); 
// Error: Property '_balance' is private and only accessible within class 'BankAccount'.

// Protected access
// console.log(account.type);
// Error: Property 'type' is protected and only accessible within class 'BankAccount' and its subclasses.

// Using Getter
console.log("Current Balance:", account.balance); // OK

// --- TASK ---
// TODO: Create a subclass `PremiumAccount` extending `BankAccount`.
// Try to access `this.type` (protected) inside it. It should work.
// Try to access `this._balance` (private) inside it. It should fail.

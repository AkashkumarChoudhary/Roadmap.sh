/**
 * Public class fields
 * - Instance fields: role = 'user', createdAt = new Date()
 * - Arrow function field for auto-binding this (e.g. event handlers)
 */

class User {
  role = 'user';
  isActive = true;
  createdAt = new Date();

  logStatus = () => {
    console.log(`${this.name} is ${this.isActive ? 'active' : 'inactive'}`);
  };

  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log(`User created at ${this.createdAt}`);
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  static defaultRole = 'user';
}

const user = new User('John', 'john@example.com');
console.log(user.role, user.isActive);
user.logStatus();

// Arrow function keeps 'this' when passed as callback
const statusLogger = user.logStatus;
statusLogger(); // Still works

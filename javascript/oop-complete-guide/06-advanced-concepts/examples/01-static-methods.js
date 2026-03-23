/**
 * Static Methods and Properties
 * - Belong to class, not instances
 * - Factory method, validation, counters
 */

class User {
  static userCount = 0;
  static MIN_PASSWORD_LENGTH = 8;

  static validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static createAdmin(name, email) {
    const admin = new User(name, email);
    admin.role = 'admin';
    admin.isAdmin = true;
    return admin;
  }

  static get activeUsers() {
    return User.userCount;
  }

  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.id = ++User.userCount;
  }

  getProfile() {
    return { id: this.id, name: this.name, email: this.email };
  }
}

console.log(User.userCount); // 0
console.log(User.MIN_PASSWORD_LENGTH); // 8
console.log(User.validateEmail('test@example.com')); // true

const user1 = new User('John', 'john@example.com');
const user2 = new User('Jane', 'jane@example.com');
console.log(User.userCount); // 2

const admin = User.createAdmin('Admin', 'admin@example.com');
console.log(admin.role); // 'admin'

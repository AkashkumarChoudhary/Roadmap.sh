/**
 * Complete modern example: User with private fields, static, static block
 */

class ModernUser {
  name;
  email;

  #id;
  #passwordHash;
  #failedLoginAttempts = 0;

  static #userCount = 0;
  static MIN_PASSWORD_LENGTH = 8;

  static {
    console.log(`User system initialized. Min password: ${ModernUser.MIN_PASSWORD_LENGTH}`);
  }

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#id = this.#generateId();
    this.#passwordHash = this.#hashPassword(password);
    ModernUser.#userCount++;
    console.log(`User ${this.#id} created`);
  }

  #generateId() {
    return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  #hashPassword(password) {
    return `hash_${password}_${Date.now()}`;
  }

  #validatePassword(password) {
    return this.#hashPassword(password) === this.#passwordHash;
  }

  login(password) {
    if (this.#validatePassword(password)) {
      this.#failedLoginAttempts = 0;
      return true;
    }
    this.#failedLoginAttempts++;
    if (this.#failedLoginAttempts >= 5) {
      console.warn(`Account ${this.email} locked`);
      return false;
    }
    return false;
  }

  changePassword(oldPassword, newPassword) {
    if (!this.login(oldPassword)) throw new Error('Current password incorrect');
    if (newPassword.length < ModernUser.MIN_PASSWORD_LENGTH) {
      throw new Error(`Password must be at least ${ModernUser.MIN_PASSWORD_LENGTH} characters`);
    }
    this.#passwordHash = this.#hashPassword(newPassword);
    console.log('Password changed');
  }

  get id() {
    return this.#id;
  }

  static validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  static get totalUsers() {
    return this.#userCount;
  }
}

const u1 = new ModernUser('Alice', 'alice@example.com', 'securePass123');
const u2 = new ModernUser('Bob', 'bob@example.com', 'anotherPass456');
console.log(u1.id);
console.log(ModernUser.totalUsers);
u1.login('securePass123');
u1.changePassword('securePass123', 'newSecurePass789');

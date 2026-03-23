/**
 * Example 2: Real-World User Management
 * - Convention-based "private" (_prefix)
 * - Getter/setter methods with validation
 * - Simulated password hashing
 */

const userProfile = {
  _username: 'john_doe',
  _email: 'john@example.com',
  _password: 'hashed_password_123',
  _lastLogin: null,
  _loginCount: 0,

  displayName: 'John Doe',
  role: 'user',

  getUsername() {
    return this._username;
  },

  getEmail() {
    return this._email;
  },

  getLastLogin() {
    return this._lastLogin;
  },

  setEmail(newEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(newEmail)) {
      this._email = newEmail;
      console.log('Email updated successfully');
    } else {
      console.log('Invalid email format');
    }
  },

  setPassword(newPassword) {
    if (newPassword.length >= 8) {
      this._password = this._hashPassword(newPassword);
      console.log('Password updated');
    } else {
      console.log('Password must be at least 8 characters');
    }
  },

  _hashPassword(password) {
    return `hashed_${password}_${Date.now()}`;
  },

  login() {
    this._lastLogin = new Date();
    this._loginCount++;
    console.log(`${this.displayName} logged in at ${this._lastLogin}`);
  },

  getStats() {
    return {
      username: this._username,
      loginCount: this._loginCount,
      lastLogin: this._lastLogin,
      role: this.role,
    };
  },
};

userProfile.login();
userProfile.setEmail('john.new@email.com');
console.log(userProfile.getStats());

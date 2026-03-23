/**
 * Static initialization blocks
 * - Run once when class is first loaded
 * - Can access static private fields, set up config, register handlers
 */

class Configuration {
  static settings = {};
  static defaultValues = {};

  static {
    console.log('First static block');
    this.defaultValues = { timeout: 5000, retries: 3 };
  }

  static {
    console.log('Second static block');
    this.settings = {
      ...this.defaultValues,
      apiUrl: process.env.API_URL || 'http://localhost:3000',
    };
  }

  static get(key) {
    return this.settings[key];
  }
}

console.log(Configuration.get('timeout'));
console.log(Configuration.get('apiUrl'));

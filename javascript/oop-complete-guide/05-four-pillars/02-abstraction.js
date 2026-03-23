/**
 * Pillar 2: Abstraction
 * - DatabaseConnection: connect(), query(), disconnect() hide low-level details
 * - PaymentProcessor: processPayment() hides validation, encryption, gateway calls
 */

class DatabaseConnection {
  constructor(connectionString) {
    this.connectionString = connectionString;
    this.isConnected = false;
  }

  connect() {
    console.log('Establishing secure connection...');
    console.log('Authenticating...');
    this.isConnected = true;
    console.log('Connected to database');
  }

  query(sql, params = []) {
    if (!this.isConnected) throw new Error('Not connected to database');
    console.log(`Executing: ${sql}`);
    return {
      rows: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }],
      rowCount: 2,
    };
  }

  disconnect() {
    console.log('Closing connections...');
    this.isConnected = false;
    console.log('Disconnected');
  }
}

const db = new DatabaseConnection('mysql://user:pass@localhost/db');
db.connect();
const results = db.query('SELECT * FROM users WHERE age > ?', [18]);
console.log(results.rows);
db.disconnect();

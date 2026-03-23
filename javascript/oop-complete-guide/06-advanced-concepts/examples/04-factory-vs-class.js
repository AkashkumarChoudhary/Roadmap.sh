/**
 * Factory Functions vs Classes
 * - Factory: returns object, closure for real privacy, no new
 * - Class: instanceof, extends, familiar OOP
 */

function createUser(name, email) {
  let password = '';
  let failedLoginAttempts = 0;

  return {
    name,
    email,

    setPassword(newPassword) {
      if (newPassword.length >= 8) {
        password = newPassword;
        return true;
      }
      return false;
    },

    login(enteredPassword) {
      if (password === enteredPassword) {
        failedLoginAttempts = 0;
        return true;
      }
      failedLoginAttempts++;
      return false;
    },

    getFailedAttempts() {
      return failedLoginAttempts;
    },

    toString() {
      return `User: ${this.name} (${this.email})`;
    },
  };
}

const user1 = createUser('John', 'john@example.com');
user1.setPassword('secure123');
console.log(user1.login('secure123')); // true
console.log(user1.getFailedAttempts()); // 0
console.log(user1.toString());

// Factory for different character types
function characterFactory(type, name) {
  const base = { name, health: 100 };

  switch (type) {
    case 'warrior':
      return {
        ...base,
        attackPower: 20,
        attack() {
          console.log(`${name} swings a sword!`);
        },
      };
    case 'mage':
      return {
        ...base,
        magicPower: 25,
        mana: 100,
        attack() {
          console.log(`${name} casts a spell!`);
        },
      };
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}

const warrior = characterFactory('warrior', 'Conan');
const wizard = characterFactory('mage', 'Gandalf');
warrior.attack();
wizard.attack();

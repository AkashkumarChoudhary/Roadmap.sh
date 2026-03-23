/**
 * Example 3: Safe Constructor Pattern
 * - Prevent calling without new (new.target or instanceof)
 */

function SafePerson(name) {
  if (!(this instanceof SafePerson)) {
    throw new Error('Constructor must be called with new');
  }
  this.name = name;
}

function ModernPerson(name) {
  if (!new.target) {
    throw new Error('Use new keyword');
  }
  this.name = name;
}

const p1 = new SafePerson('Alice');
console.log(p1.name); // 'Alice'

try {
  const p2 = SafePerson('Bob'); // throws
} catch (e) {
  console.log('Caught:', e.message); // Constructor must be called with new
}

const p3 = new ModernPerson('Carol');
console.log(p3.name); // 'Carol'

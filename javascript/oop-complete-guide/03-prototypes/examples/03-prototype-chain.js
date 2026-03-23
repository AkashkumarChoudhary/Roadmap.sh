/**
 * Example 3: Prototype Chain and hasOwnProperty
 * - Property lookup order
 * - hasOwnProperty vs inherited
 */

const obj = { name: 'John' };

console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('toString')); // false — from Object.prototype

// When we access obj.toString():
// 1. obj has toString? NO
// 2. obj.__proto__ (Object.prototype) has toString? YES

function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true

// Chain: john → Person.prototype → Object.prototype → null

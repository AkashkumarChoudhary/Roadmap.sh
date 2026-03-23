/**
 * Example 1: Basic Prototype Usage
 * - Instance properties in constructor
 * - Shared methods on Constructor.prototype
 * - Same function reference across instances
 */

function Animal(name) {
  this.name = name;
  this.energy = 100;
}

Animal.prototype.eat = function (amount) {
  this.energy += amount;
  console.log(`${this.name} ate and gained ${amount} energy`);
};

Animal.prototype.sleep = function (hours) {
  this.energy += hours * 10;
  console.log(`${this.name} slept for ${hours} hours`);
};

Animal.prototype.play = function (hours) {
  this.energy -= hours * 5;
  console.log(`${this.name} played for ${hours} hours`);
};

const dog = new Animal('Rex');
const cat = new Animal('Whiskers');

dog.eat(20);
cat.play(2);

console.log(dog.eat === cat.eat); // true — same function

console.log(dog.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

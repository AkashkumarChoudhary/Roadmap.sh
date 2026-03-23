/**
 * Example 1: Basic Constructor Function
 * - PascalCase convention
 * - this = new object when called with new
 * - instanceof and constructor.name
 */

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = `${firstName} ${lastName}`;

  this.sayHello = function () {
    console.log(`Hello, I'm ${this.firstName}`);
  };
}

const john = new Person('John', 'Doe', 30);
const jane = new Person('Jane', 'Smith', 25);

console.log(john.fullName); // 'John Doe'
console.log(jane.age); // 25
john.sayHello(); // "Hello, I'm John"

console.log(john instanceof Person); // true
console.log(john.constructor.name); // 'Person'

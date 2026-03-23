/**
 * Base class: Person
 * - name, age
 * - greet(), describe() (to be overridden)
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }

  describe() {
    return `Person: ${this.name}, ${this.age} years old`;
  }
}

module.exports = { Person };

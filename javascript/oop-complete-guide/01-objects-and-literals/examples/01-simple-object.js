/**
 * Example 1: Simple Object Literal
 * - Properties and methods
 * - Dot vs bracket notation
 * - ES6 shorthand methods
 * - Dynamic property add/delete
 */

const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
  isRunning: false,

  start: function () {
    this.isRunning = true;
    console.log(`The ${this.brand} ${this.model} has started.`);
  },

  stop() {
    this.isRunning = false;
    console.log(`The ${this.brand} ${this.model} has stopped.`);
  },

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  },
};

// Accessing properties
console.log(car.brand); // Dot notation
console.log(car['model']); // Bracket notation

// Calling methods
car.start();
console.log(car.isRunning); // true

// Modifying properties
car.year = 2021;
car.color = 'blue'; // Adding new property
delete car.color; // Removing property

console.log('Age:', car.getAge());
car.stop();

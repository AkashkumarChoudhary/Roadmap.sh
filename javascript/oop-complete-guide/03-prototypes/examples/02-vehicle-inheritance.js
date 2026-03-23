/**
 * Example 2: Real-World Prototype Inheritance
 * - Vehicle base constructor
 * - Car extends Vehicle via Object.create and constructor fix
 * - super-like call: Vehicle.call(this, ...)
 */

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.start = function () {
  this.isRunning = true;
  console.log(`${this.make} ${this.model} started`);
};

Vehicle.prototype.stop = function () {
  this.isRunning = false;
  console.log(`${this.make} ${this.model} stopped`);
};

Vehicle.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

function Car(make, model, year, fuelType) {
  Vehicle.call(this, make, model, year);
  this.fuelType = fuelType;
  this.fuelLevel = 100;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.refuel = function (amount) {
  this.fuelLevel = Math.min(100, this.fuelLevel + amount);
  console.log(`Refueled to ${this.fuelLevel}%`);
};

Car.prototype.drive = function (distance) {
  if (!this.isRunning) {
    console.log('Start the car first!');
    return;
  }
  const fuelUsed = distance * 0.05;
  if (fuelUsed > this.fuelLevel) {
    console.log('Not enough fuel!');
    return;
  }
  this.fuelLevel -= fuelUsed;
  console.log(`Drove ${distance}km. Fuel remaining: ${this.fuelLevel}%`);
};

const myCar = new Car('Toyota', 'Camry', 2020, 'Gasoline');
myCar.start();
myCar.drive(50);
myCar.refuel(20);
console.log('Age:', myCar.getAge());

console.log(myCar instanceof Car); // true
console.log(myCar instanceof Vehicle); // true
console.log(myCar instanceof Object); // true

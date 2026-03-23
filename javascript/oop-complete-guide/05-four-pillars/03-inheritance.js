/**
 * Pillar 3: Inheritance
 * - Vehicle → Car → ElectricCar
 * - super() for constructor and method override
 */

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.make} ${this.model} accelerated to ${this.speed} km/h`);
  }

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`${this.make} ${this.model} slowed to ${this.speed} km/h`);
  }

  getInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
    this.isTrunkOpen = false;
  }

  toggleTrunk() {
    this.isTrunkOpen = !this.isTrunkOpen;
    console.log(`Trunk ${this.isTrunkOpen ? 'opened' : 'closed'}`);
  }

  getInfo() {
    return `${super.getInfo()} with ${this.doors} doors`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, doors, batteryCapacity) {
    super(make, model, year, doors);
    this.batteryCapacity = batteryCapacity;
    this.batteryLevel = 100;
  }

  accelerate(amount) {
    if (this.batteryLevel <= 0) {
      console.log('Battery depleted!');
      return;
    }
    const batteryUsed = amount * 0.5;
    this.batteryLevel -= batteryUsed;
    super.accelerate(amount);
    console.log(`Battery: ${this.batteryLevel.toFixed(1)}%`);
  }

  charge(minutes) {
    const chargeAmount = minutes * 0.5;
    this.batteryLevel = Math.min(100, this.batteryLevel + chargeAmount);
    console.log(`Charged to ${this.batteryLevel}%`);
  }

  getInfo() {
    return `${super.getInfo()} | Electric | Battery: ${this.batteryCapacity}kWh`;
  }
}

const tesla = new ElectricCar('Tesla', 'Model S', 2023, 4, 100);
tesla.accelerate(50);
tesla.toggleTrunk();
tesla.brake(20);
console.log(tesla.getInfo());
console.log(tesla instanceof ElectricCar, tesla instanceof Car, tesla instanceof Vehicle);

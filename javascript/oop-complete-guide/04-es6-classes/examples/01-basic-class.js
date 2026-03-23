/**
 * Example 1: Basic Class Syntax
 * - constructor, instance methods, static method
 * - instanceof
 */

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isHuman = true;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  celebrateBirthday() {
    this.age++;
    console.log(`Happy ${this.age}th birthday, ${this.firstName}!`);
  }

  static compareAges(person1, person2) {
    return person1.age - person2.age;
  }
}

const john = new Person('John', 'Doe', 30);
const jane = new Person('Jane', 'Smith', 25);

console.log(john.getFullName());
jane.celebrateBirthday();
console.log(Person.compareAges(john, jane)); // 5
console.log(john instanceof Person); // true

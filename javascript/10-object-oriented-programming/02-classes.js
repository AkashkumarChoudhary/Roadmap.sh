/**
 * ============================================
 * CLASSES IN JAVASCRIPT
 * ============================================
 * 
 * WHY CLASSES?
 * -----------
 * Classes (ES6) provide syntactic sugar over prototypal inheritance:
 * - Cleaner, more familiar syntax
 * - Easier to understand for OOP developers
 * - Better organization
 * - Built-in support for inheritance
 * 
 * WHAT ARE CLASSES?
 * -----------------
 * Classes are templates for creating objects:
 * - constructor() - Initialize instance
 * - Methods - Instance methods
 * - extends - Inheritance
 * - super - Call parent constructor/methods
 * 
 * NOTE: Classes are still based on prototypes under the hood!
 */

'use strict';

// ============================================
// BASIC CLASS SYNTAX
// ============================================

// Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    getAge() {
        return this.age;
    }
}

// Create instance
let person1 = new Person("Alice", 30);
console.log(person1.greet()); // "Hello, I'm Alice"
console.log(person1.getAge()); // 30

// ============================================
// CLASS EXPRESSIONS
// ============================================

// Class can be expression
const Animal = class {
    constructor(name) {
        this.name = name;
    }
    
    makeSound() {
        return "Some sound";
    }
};

let animal = new Animal("Dog");
console.log(animal.makeSound()); // "Some sound"

// ============================================
// INHERITANCE WITH EXTENDS
// ============================================

// Base class
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
    
    sleep() {
        return `${this.name} is sleeping`;
    }
}

// Derived class
class Dog extends Animal2 {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    bark() {
        return `${this.name} is barking`;
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.bark()); // "Buddy is barking" (own method)
console.log(dog.eat()); // "Buddy is eating" (inherited)
console.log(dog.sleep()); // "Buddy is sleeping" (inherited)

// ============================================
// SUPER KEYWORD
// ============================================

// super in constructor
class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // Must call super() before using this
        this.age = age;
    }
}

// super in methods
class Parent2 {
    greet() {
        return "Hello from parent";
    }
}

class Child2 extends Parent2 {
    greet() {
        return super.greet() + " and child";
    }
}

let child = new Child2();
console.log(child.greet()); // "Hello from parent and child"

// ============================================
// METHOD OVERRIDING
// ============================================

class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
}

let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);
console.log(circle.area()); // ~78.54
console.log(rectangle.area()); // 24

// ============================================
// CLASS FIELDS (ES2022)
// ============================================

// Public fields
class User {
    name = "Guest"; // Public field
    age = 0;
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Private fields (ES2022)
class BankAccount {
    #balance = 0; // Private field (starts with #)
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        }
    }
    
    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError: Private field

// ============================================
// STATIC METHODS (covered in detail later)
// ============================================

class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtils.add(5, 3)); // 8
// let utils = new MathUtils();
// utils.add(5, 3); // TypeError: utils.add is not a function

// ============================================
// GETTERS AND SETTERS (covered in detail later)
// ============================================

class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }
    
    get celsius() {
        return this._celsius;
    }
    
    set celsius(value) {
        this._celsius = value;
    }
    
    get fahrenheit() {
        return this._celsius * 9/5 + 32;
    }
    
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    }
}

let temp = new Temperature(25);
console.log(temp.celsius); // 25
console.log(temp.fahrenheit); // 77
temp.fahrenheit = 86;
console.log(temp.celsius); // 30

// ============================================
// CLASS VS CONSTRUCTOR FUNCTION
// ============================================

// Class (ES6)
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello, ${this.name}`;
    }
}

// Constructor function (equivalent)
function PersonFunction(name) {
    this.name = name;
}

PersonFunction.prototype.greet = function() {
    return `Hello, ${this.name}`;
};

// Both work the same way
let classInstance = new PersonClass("Alice");
let funcInstance = new PersonFunction("Bob");

console.log(classInstance.greet()); // "Hello, Alice"
console.log(funcInstance.greet()); // "Hello, Bob"

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Shape hierarchy
class Shape2 {
    constructor(color) {
        this.color = color;
    }
    
    getColor() {
        return this.color;
    }
    
    area() {
        throw new Error("area() must be implemented");
    }
}

class Circle2 extends Shape2 {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
}

// Example 2: User management
class User2 {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.createdAt = new Date();
    }
    
    getInfo() {
        return `${this.username} (${this.email})`;
    }
}

class Admin extends User2 {
    constructor(username, email, permissions) {
        super(username, email);
        this.permissions = permissions;
    }
    
    hasPermission(permission) {
        return this.permissions.includes(permission);
    }
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Classes are not hoisted
// let instance = new MyClass(); // ReferenceError
// class MyClass {}

// 2. Classes must be called with new
class MyClass {}
// MyClass(); // TypeError: Class constructor cannot be invoked without 'new'

// 3. Class methods are not enumerable
class Test {
    method() {}
}

let test = new Test();
console.log(Object.keys(test)); // [] (methods not enumerable)

// 4. super() must be called before this
class Parent3 {
    constructor(name) {
        this.name = name;
    }
}

class Child3 extends Parent3 {
    constructor(name, age) {
        // this.age = age; // ReferenceError: Must call super() first
        super(name);
        this.age = age; // OK
    }
}

// 5. Cannot extend null
// class MyClass extends null {} // Works but has limitations

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use classes for object-oriented design
// ✅ Good: class User { ... }

// 2. Use extends for inheritance
// ✅ Good: class Admin extends User { ... }

// 3. Always call super() in derived constructors
// ✅ Good: constructor() { super(); ... }

// 4. Use meaningful class names (PascalCase)
// ✅ Good: class BankAccount { ... }

// 5. Keep classes focused (single responsibility)
// ✅ Good: One class, one purpose

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a basic class with constructor and methods
// 2. Create a class that extends another class
// 3. Use super() to call parent constructor
// 4. Override a method from parent class
// 5. Create a class with private fields (if supported)
// 6. Create a class with getters and setters
// 7. Compare class syntax with constructor function
// 8. Create a class hierarchy (3 levels)
// 9. Use super in a method to call parent method
// 10. Explain how classes work under the hood (prototypes)


/**
 * ============================================
 * THE `new` KEYWORD IN JAVASCRIPT
 * ============================================
 * 
 * WHY UNDERSTAND `new`?
 * ---------------------
 * The `new` keyword is fundamental to object creation:
 * - Creates new object instances
 * - Sets up prototype chain
 * - Binds `this` to new instance
 * - Returns the new object
 * - Essential for constructor functions and classes
 * 
 * WHAT DOES `new` DO?
 * -------------------
 * When you use `new` with a function:
 * 1. Creates a new empty object
 * 2. Sets prototype to function's prototype
 * 3. Binds `this` to the new object
 * 4. Executes the function
 * 5. Returns the new object (unless function returns object)
 * 
 * KEY CONCEPTS:
 * ------------
 * - Constructor functions
 * - Instance creation
 * - Prototype binding
 * - Return value behavior
 */

'use strict';

// ============================================
// BASIC `new` USAGE
// ============================================

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Create instance with `new`
let person1 = new Person("Alice", 30);
console.log(person1.name); // "Alice"
console.log(person1.age); // 30

// Without `new` (problematic)
let person2 = Person("Bob", 25);
// console.log(person2.name); // TypeError: Cannot read property 'name' of undefined
// `this` refers to global/undefined, and function returns undefined

// ============================================
// WHAT `new` DOES STEP BY STEP
// ============================================

// Step 1: Creates new empty object
// Step 2: Sets prototype to Person.prototype
// Step 3: Binds `this` to new object
// Step 4: Executes Person function
// Step 5: Returns new object

// Manual implementation of `new`
function myNew(constructor, ...args) {
    // Step 1: Create new object
    let obj = {};
    
    // Step 2: Set prototype
    Object.setPrototypeOf(obj, constructor.prototype);
    
    // Step 3 & 4: Bind `this` and execute constructor
    let result = constructor.apply(obj, args);
    
    // Step 5: Return object (or result if it's an object)
    return result instanceof Object ? result : obj;
}

// Usage
let person3 = myNew(Person, "Charlie", 35);
console.log(person3.name); // "Charlie"

// ============================================
// `new` WITH CLASSES
// ============================================

// Classes must be called with `new`
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

let user1 = new User("Alice", "alice@example.com");
console.log(user1.name); // "Alice"

// User("Bob", "bob@example.com"); // TypeError: Class constructor cannot be invoked without 'new'

// ============================================
// RETURN VALUE BEHAVIOR
// ============================================

// If constructor returns primitive, `new` returns the new object
function Test1() {
    this.value = "test";
    return "primitive"; // Ignored
}

let test1 = new Test1();
console.log(test1.value); // "test" (new object returned, not "primitive")

// If constructor returns object, `new` returns that object
function Test2() {
    this.value = "test";
    return { custom: "object" }; // Returned instead
}

let test2 = new Test2();
console.log(test2.value); // undefined (custom object returned)
console.log(test2.custom); // "object"

// ============================================
// PROTOTYPE BINDING
// ============================================

// `new` sets up prototype chain
function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function() {
    return "Some sound";
};

let animal = new Animal("Dog");
console.log(animal.makeSound()); // "Some sound" (from prototype)

// Check prototype
console.log(Object.getPrototypeOf(animal) === Animal.prototype); // true
console.log(animal instanceof Animal); // true

// ============================================
// MULTIPLE INSTANCES
// ============================================

// Each `new` call creates a new instance
let person4 = new Person("Alice", 30);
let person5 = new Person("Bob", 25);

console.log(person4.name); // "Alice"
console.log(person5.name); // "Bob"
console.log(person4 === person5); // false (different objects)

// Methods are shared (from prototype)
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

console.log(person4.greet()); // "Hello, I'm Alice"
console.log(person5.greet()); // "Hello, I'm Bob"
console.log(person4.greet === person5.greet); // true (same function)

// ============================================
// `new` VS REGULAR FUNCTION CALL
// ============================================

function MyFunction(value) {
    this.value = value;
    return this;
}

// With `new`
let withNew = new MyFunction("test");
console.log(withNew.value); // "test"
console.log(withNew instanceof MyFunction); // true

// Without `new`
let withoutNew = MyFunction("test");
// In non-strict mode: this is global, value set on global
// In strict mode: this is undefined, error
console.log(withoutNew); // undefined or global object

// ============================================
// SAFE CONSTRUCTOR PATTERN
// ============================================

// Ensure constructor is called with `new`
function SafeConstructor(name) {
    // Check if called with `new`
    if (!(this instanceof SafeConstructor)) {
        return new SafeConstructor(name); // Call with `new`
    }
    this.name = name;
}

// Works with or without `new`
let safe1 = new SafeConstructor("Alice");
let safe2 = SafeConstructor("Bob"); // Automatically uses `new`
console.log(safe1.name); // "Alice"
console.log(safe2.name); // "Bob"

// ES6: Classes automatically enforce `new`
class SafeClass {
    constructor(name) {
        this.name = name;
    }
}

// let safe3 = SafeClass("Test"); // TypeError: Class constructor cannot be invoked without 'new'

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Creating multiple instances
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getInfo = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

let car1 = new Car("Toyota", "Camry", 2020);
let car2 = new Car("Honda", "Accord", 2021);

console.log(car1.getInfo()); // "2020 Toyota Camry"
console.log(car2.getInfo()); // "2021 Honda Accord"

// Example 2: Factory function vs constructor
// Constructor (uses `new`)
function Product(name, price) {
    this.name = name;
    this.price = price;
}

let product1 = new Product("Widget", 10);

// Factory function (doesn't use `new`)
function createProduct(name, price) {
    return {
        name,
        price
    };
}

let product2 = createProduct("Gadget", 20);

// Example 3: Constructor with validation
function BankAccount(initialBalance) {
    if (initialBalance < 0) {
        throw new Error("Initial balance cannot be negative");
    }
    this.balance = initialBalance;
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
};

let account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Forgetting `new` with constructor
function MyClass(value) {
    this.value = value;
}

// let instance = MyClass("test"); // `this` is global/undefined
// console.log(instance.value); // TypeError

// 2. Constructor returning object
function ReturnsObject() {
    this.value = "ignored";
    return { custom: "returned" };
}

let obj = new ReturnsObject();
console.log(obj.value); // undefined
console.log(obj.custom); // "returned"

// 3. Constructor returning primitive (ignored)
function ReturnsPrimitive() {
    this.value = "kept";
    return "ignored";
}

let obj2 = new ReturnsPrimitive();
console.log(obj2.value); // "kept"
console.log(obj2); // { value: "kept" } (not "ignored")

// 4. Arrow functions cannot be constructors
const ArrowConstructor = () => {
    this.value = "test";
};

// let instance = new ArrowConstructor(); // TypeError: ArrowConstructor is not a constructor

// 5. Classes must use `new`
class MyClass2 {
    constructor() {}
}

// MyClass2(); // TypeError: Class constructor cannot be invoked without 'new'

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always use `new` with constructor functions
// ✅ Good: let obj = new Constructor();

// 2. Use PascalCase for constructor functions
// ✅ Good: function Person() {}
// ❌ Bad: function person() {}

// 3. Use classes for modern code (enforces `new`)
// ✅ Good: class Person { }

// 4. Check for `new` in constructors (if needed)
// ✅ Good: if (!(this instanceof Constructor)) return new Constructor();

// 5. Don't return values from constructors (unless object)
// ⚠️ Warning: Returning primitives is ignored

// ============================================
// SUMMARY
// ============================================

/**
 * `new` KEYWORD:
 * 1. Creates new object
 * 2. Sets prototype to constructor's prototype
 * 3. Binds `this` to new object
 * 4. Executes constructor function
 * 5. Returns new object (or returned object if constructor returns one)
 * 
 * USE CASES:
 * - Constructor functions
 * - Classes
 * - Creating multiple instances
 * - Setting up prototype chain
 */

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a constructor function and use `new` to create an instance
// 2. Create multiple instances using `new`
// 3. Demonstrate what happens when you forget `new`
// 4. Show how `new` sets up the prototype chain
// 5. Create a constructor that returns an object (observe behavior)
// 6. Create a constructor that returns a primitive (observe it's ignored)
// 7. Implement a manual version of `new` functionality
// 8. Create a safe constructor that works with or without `new`
// 9. Compare using `new` with a class vs constructor function
// 10. Explain the 5 steps that `new` performs


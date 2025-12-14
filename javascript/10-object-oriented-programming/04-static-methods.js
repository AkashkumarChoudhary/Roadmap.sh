/**
 * ============================================
 * STATIC METHODS IN JAVASCRIPT
 * ============================================
 * 
 * WHY STATIC METHODS?
 * -------------------
 * Static methods belong to the class, not instances:
 * - Utility functions related to class
 * - Factory methods
 * - No need to create instance
 * - Called on class itself
 * - Cannot access instance properties
 * 
 * WHAT ARE STATIC METHODS?
 * ------------------------
 * Methods defined on the class itself:
 * - Defined with static keyword
 * - Called on class: ClassName.method()
 * - Not available on instances
 * - Cannot use this (refers to class, not instance)
 */

'use strict';

// ============================================
// BASIC STATIC METHODS
// ============================================

// Static method in class
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static subtract(a, b) {
        return a - b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
}

// Call on class, not instance
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.multiply(2, 5)); // 10

// Cannot call on instance
let utils = new MathUtils();
// utils.add(5, 3); // TypeError: utils.add is not a function

// ============================================
// STATIC METHODS IN CONSTRUCTOR FUNCTIONS
// ============================================

// Static methods in constructor functions
function Calculator() {
    // Instance methods
}

Calculator.add = function(a, b) {
    return a + b;
};

Calculator.subtract = function(a, b) {
    return a - b;
};

console.log(Calculator.add(5, 3)); // 8

// ============================================
// STATIC METHODS WITH THIS
// ============================================

// In static methods, `this` refers to the class
class MyClass {
    static method() {
        return this; // Refers to MyClass
    }
    
    static getName() {
        return this.name; // Class name
    }
}

console.log(MyClass.method() === MyClass); // true
console.log(MyClass.getName()); // "MyClass"

// ============================================
// STATIC METHODS IN INHERITANCE
// ============================================

// Static methods are inherited
class Parent {
    static parentMethod() {
        return "Parent method";
    }
}

class Child extends Parent {
    static childMethod() {
        return "Child method";
    }
}

console.log(Child.parentMethod()); // "Parent method" (inherited)
console.log(Child.childMethod()); // "Child method" (own)

// Static methods can be overridden
class Parent2 {
    static method() {
        return "Parent";
    }
}

class Child2 extends Parent2 {
    static method() {
        return "Child " + super.method(); // Call parent static method
    }
}

console.log(Child2.method()); // "Child Parent"

// ============================================
// STATIC GETTERS AND SETTERS
// ============================================

// Static getters and setters
class Config {
    static _value = "default";
    
    static get value() {
        return this._value;
    }
    
    static set value(newValue) {
        this._value = newValue;
    }
}

console.log(Config.value); // "default"
Config.value = "updated";
console.log(Config.value); // "updated"

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Factory method
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    // Static factory method
    static createAdmin(name, email) {
        let user = new User(name, email);
        user.role = "admin";
        return user;
    }
    
    static createGuest() {
        return new User("Guest", "guest@example.com");
    }
}

let admin = User.createAdmin("Alice", "alice@example.com");
console.log(admin.role); // "admin"

let guest = User.createGuest();
console.log(guest.name); // "Guest"

// Example 2: Utility methods
class StringUtils {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    static reverse(str) {
        return str.split("").reverse().join("");
    }
    
    static isPalindrome(str) {
        const cleaned = str.toLowerCase().replace(/\s/g, "");
        return cleaned === cleaned.split("").reverse().join("");
    }
}

console.log(StringUtils.capitalize("hello")); // "Hello"
console.log(StringUtils.reverse("hello")); // "olleh"
console.log(StringUtils.isPalindrome("racecar")); // true

// Example 3: Validation
class Validator {
    static isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    static isPhone(phone) {
        return /^\d{10}$/.test(phone);
    }
    
    static isRequired(value) {
        return value !== null && value !== undefined && value !== "";
    }
}

console.log(Validator.isEmail("test@example.com")); // true
console.log(Validator.isPhone("1234567890")); // true
console.log(Validator.isRequired("")); // false

// Example 4: Object creation helpers
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    static fromArray([x, y]) {
        return new Point(x, y);
    }
    
    static fromObject({ x, y }) {
        return new Point(x, y);
    }
    
    static origin() {
        return new Point(0, 0);
    }
    
    static distance(p1, p2) {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

let point1 = Point.fromArray([3, 4]);
let point2 = Point.fromObject({ x: 0, y: 0 });
let origin = Point.origin();
let dist = Point.distance(point1, point2);
console.log(dist); // 5

// Example 5: Singleton pattern
class Database {
    static instance = null;
    
    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }
    
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        // Initialize database connection
        this.connected = true;
    }
}

let db1 = Database.getInstance();
let db2 = Database.getInstance();
console.log(db1 === db2); // true (same instance)

// ============================================
// STATIC VS INSTANCE METHODS
// ============================================

class Example {
    // Instance method
    instanceMethod() {
        return "Instance method";
    }
    
    // Static method
    static staticMethod() {
        return "Static method";
    }
}

let example = new Example();

// Instance method: called on instance
console.log(example.instanceMethod()); // "Instance method"
// Example.instanceMethod(); // TypeError

// Static method: called on class
console.log(Example.staticMethod()); // "Static method"
// example.staticMethod(); // TypeError

// ============================================
// STATIC PROPERTIES (ES2022)
// ============================================

// Static class fields
class Counter {
    static count = 0; // Static property
    
    static increment() {
        this.count++;
    }
    
    static getCount() {
        return this.count;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Static methods cannot access instance properties
class Test {
    instanceProp = "instance";
    
    static staticMethod() {
        // return this.instanceProp; // undefined (no instance)
        return "static";
    }
}

// 2. Static methods can be called on subclasses
class Parent3 {
    static method() {
        return "Parent";
    }
}

class Child3 extends Parent3 {}

console.log(Child3.method()); // "Parent" (inherited)

// 3. Static methods can use super
class Parent4 {
    static method() {
        return "Parent";
    }
}

class Child4 extends Parent4 {
    static method() {
        return "Child " + super.method();
    }
}

console.log(Child4.method()); // "Child Parent"

// 4. Static methods are not enumerable
class Test2 {
    static method() {}
}

console.log(Object.keys(Test2)); // [] (not enumerable)
console.log("method" in Test2); // true

// 5. Static methods can be overridden
class Base {
    static method() {
        return "Base";
    }
}

class Derived extends Base {
    static method() {
        return "Derived";
    }
}

console.log(Derived.method()); // "Derived" (overridden)

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use static methods for utility functions
// ✅ Good: MathUtils.add(), StringUtils.capitalize()

// 2. Use static methods for factory methods
// ✅ Good: User.createAdmin(), Point.fromArray()

// 3. Use static methods for validation
// ✅ Good: Validator.isEmail(), Validator.isRequired()

// 4. Don't use static when you need instance state
// ❌ Bad: Static method that needs instance data

// 5. Use static for methods that don't need instance
// ✅ Good: Methods that operate on parameters, not instance

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Utility class
class Utils {
    static helper1() {}
    static helper2() {}
}

// Pattern 2: Factory methods
class MyClass {
    static create() {
        return new MyClass();
    }
}

// Pattern 3: Validation
class Validator2 {
    static validate(data) {
        // Validation logic
    }
}

// Pattern 4: Constants
class Constants {
    static PI = 3.14159;
    static MAX_SIZE = 100;
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a class with static methods
// 2. Call a static method on the class (not instance)
// 3. Create static utility methods (like Math operations)
// 4. Create a static factory method
// 5. Create static getters and setters
// 6. Demonstrate static method inheritance
// 7. Override a static method in a subclass
// 8. Use super in a static method to call parent static method
// 9. Create a class with both static and instance methods
// 10. Explain when to use static methods vs instance methods


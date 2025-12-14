/**
 * ============================================
 * GETTERS AND SETTERS IN JAVASCRIPT
 * ============================================
 * 
 * WHY GETTERS AND SETTERS?
 * ------------------------
 * Getters and setters provide controlled access to properties:
 * - Validate data before setting
 * - Compute values on access
 * - Encapsulate internal state
 * - Create read-only or write-only properties
 * - Maintain backward compatibility
 * 
 * WHAT ARE GETTERS AND SETTERS?
 * ------------------------------
 * Special methods that look like properties:
 * - get - Access property (no parentheses)
 * - set - Set property (assignment syntax)
 * - Defined with get/set keywords
 * - Can be in objects or classes
 */

'use strict';

// ============================================
// GETTERS - ACCESS PROPERTIES
// ============================================

// Getter in object literal
let person = {
    firstName: "Alice",
    lastName: "Smith",
    
    // Getter - accessed like property
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName); // "Alice Smith" (no parentheses!)
// person.fullName is a getter, not a method

// ============================================
// SETTERS - SET PROPERTIES
// ============================================

// Setter in object literal
let person2 = {
    _age: 0, // Private convention (not truly private)
    
    get age() {
        return this._age;
    },
    
    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
};

person2.age = 30; // Uses setter (assignment syntax)
console.log(person2.age); // 30 (uses getter)

// person2.age = -5; // Error: Age cannot be negative

// ============================================
// GETTERS AND SETTERS IN CLASSES
// ============================================

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    // Setter
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0] || "";
        this.lastName = parts[1] || "";
    }
}

let person3 = new Person("Alice", "Smith");
console.log(person3.fullName); // "Alice Smith"

person3.fullName = "Bob Jones";
console.log(person3.firstName); // "Bob"
console.log(person3.lastName); // "Jones"

// ============================================
// COMPUTED PROPERTIES
// ============================================

// Getters can compute values
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    get diameter() {
        return this.radius * 2;
    }
    
    get area() {
        return Math.PI * this.radius ** 2;
    }
    
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
}

let circle = new Circle(5);
console.log(circle.diameter); // 10 (computed)
console.log(circle.area); // ~78.54 (computed)
console.log(circle.circumference); // ~31.42 (computed)

// ============================================
// VALIDATION WITH SETTERS
// ============================================

class BankAccount {
    constructor() {
        this._balance = 0;
    }
    
    get balance() {
        return this._balance;
    }
    
    set balance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        if (typeof amount !== "number") {
            throw new Error("Balance must be a number");
        }
        this._balance = amount;
    }
}

let account = new BankAccount();
account.balance = 100;
console.log(account.balance); // 100

// account.balance = -50; // Error: Balance cannot be negative
// account.balance = "100"; // Error: Balance must be a number

// ============================================
// READ-ONLY PROPERTIES
// ============================================

// Only getter, no setter = read-only
class ReadOnly {
    constructor(value) {
        this._value = value;
    }
    
    get value() {
        return this._value;
    }
    
    // No setter - property is read-only
}

let readOnly = new ReadOnly(42);
console.log(readOnly.value); // 42
// readOnly.value = 100; // No effect (no setter)
console.log(readOnly.value); // 42 (unchanged)

// ============================================
// WRITE-ONLY PROPERTIES
// ============================================

// Only setter, no getter = write-only
class WriteOnly {
    constructor() {
        this._value = null;
    }
    
    set secret(value) {
        this._value = value;
        // Do something with value, but don't expose it
    }
    
    // No getter - property is write-only
    // get secret() { return this._value; } // Not defined
}

let writeOnly = new WriteOnly();
writeOnly.secret = "hidden";
// console.log(writeOnly.secret); // undefined (no getter)

// ============================================
// LAZY EVALUATION
// ============================================

// Getters can compute expensive values lazily
class ExpensiveComputation {
    constructor(data) {
        this.data = data;
        this._cached = null;
    }
    
    get expensive() {
        if (this._cached === null) {
            // Simulate expensive computation
            this._cached = this.data.reduce((sum, n) => sum + n, 0);
        }
        return this._cached;
    }
}

let comp = new ExpensiveComputation([1, 2, 3, 4, 5]);
console.log(comp.expensive); // 15 (computed first time)
console.log(comp.expensive); // 15 (from cache)

// ============================================
// PROPERTY DESCRIPTORS
// ============================================

// Define getter/setter using Object.defineProperty
let obj = {};
let _value = 0;

Object.defineProperty(obj, "value", {
    get: function() {
        return _value;
    },
    set: function(newValue) {
        _value = newValue * 2; // Always double the value
    },
    enumerable: true,
    configurable: true
});

obj.value = 5;
console.log(obj.value); // 10 (doubled)

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Temperature converter
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
    
    get kelvin() {
        return this._celsius + 273.15;
    }
    
    set kelvin(value) {
        this._celsius = value - 273.15;
    }
}

let temp = new Temperature(25);
console.log(temp.celsius); // 25
console.log(temp.fahrenheit); // 77
console.log(temp.kelvin); // 298.15

temp.fahrenheit = 86;
console.log(temp.celsius); // 30

// Example 2: Rectangle with computed properties
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get area() {
        return this.width * this.height;
    }
    
    get perimeter() {
        return 2 * (this.width + this.height);
    }
    
    get isSquare() {
        return this.width === this.height;
    }
}

let rect = new Rectangle(5, 5);
console.log(rect.area); // 25
console.log(rect.perimeter); // 20
console.log(rect.isSquare); // true

// Example 3: User with full name
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }
    
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0] || "";
        this.lastName = parts.slice(1).join(" ") || "";
    }
    
    get initials() {
        return `${this.firstName[0]}${this.lastName[0]}`.toUpperCase();
    }
}

let user = new User("John", "Doe");
console.log(user.fullName); // "John Doe"
console.log(user.initials); // "JD"

user.fullName = "Jane Smith";
console.log(user.firstName); // "Jane"
console.log(user.lastName); // "Smith"

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Getter without setter = read-only
class ReadOnly2 {
    get value() {
        return 42;
    }
}

let ro = new ReadOnly2();
console.log(ro.value); // 42
ro.value = 100; // No error, but doesn't do anything
console.log(ro.value); // 42

// 2. Setter without getter = write-only
class WriteOnly2 {
    set value(val) {
        this._val = val;
    }
}

let wo = new WriteOnly2();
wo.value = 42;
console.log(wo.value); // undefined (no getter)

// 3. Getters/setters are not enumerable by default
class Test {
    get prop() {
        return "value";
    }
}

let test = new Test();
console.log(Object.keys(test)); // [] (getter not enumerable)

// 4. Cannot have getter and data property with same name
class Conflict {
    // get name() { return "getter"; }
    // name = "property"; // Error if both exist
}

// 5. Getters can't have parameters
// get value(param) { } // SyntaxError

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use getters for computed properties
// ✅ Good: get area() { return width * height; }

// 2. Use setters for validation
// ✅ Good: set age(value) { if (value < 0) throw Error; }

// 3. Use private convention (_property) for internal state
// ✅ Good: this._age = value;

// 4. Don't overuse getters/setters
// ⚠️ Warning: Simple properties don't need them

// 5. Use getters for lazy evaluation
// ✅ Good: Cache expensive computations

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a getter that computes a value from other properties
// 2. Create a setter that validates input before setting
// 3. Create a read-only property (getter only)
// 4. Create a class with multiple getters and setters
// 5. Use getters to create computed properties (like area, perimeter)
// 6. Use setters to transform input (like converting units)
// 7. Create a getter that caches expensive computations
// 8. Use Object.defineProperty to create getter/setter
// 9. Create a class with fullName getter and setter
// 10. Explain the difference between getters/setters and regular methods


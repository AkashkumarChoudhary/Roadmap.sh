/**
 * ============================================
 * OBJECT LITERALS & PROPERTIES IN JAVASCRIPT
 * ============================================
 * 
 * WHY OBJECTS?
 * ------------
 * Objects are fundamental data structures in JavaScript:
 * - Store key-value pairs
 * - Represent real-world entities
 * - Organize related data
 * - Enable object-oriented programming
 * 
 * WHAT ARE OBJECT LITERALS?
 * -------------------------
 * Object literals are a way to create objects using curly braces:
 * - Simple syntax: { key: value }
 * - Can contain properties and methods
 * - Dynamic and flexible
 * - Most common way to create objects
 * 
 * KEY CONCEPTS:
 * ------------
 * - Properties: Key-value pairs
 * - Methods: Functions as properties
 * - Computed properties: Dynamic keys
 * - Shorthand syntax: ES6 enhancements
 */

'use strict';

// ============================================
// BASIC OBJECT LITERAL
// ============================================

// Simple object with properties
let person = {
    name: "Alice",
    age: 30,
    city: "Boston"
};

console.log(person); // { name: "Alice", age: 30, city: "Boston" }

// ============================================
// PROPERTIES
// ============================================

// Properties are key-value pairs
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};

// Keys are strings (quotes optional if valid identifier)
let obj1 = {
    "name": "John", // Quoted key
    age: 25,        // Unquoted key (valid identifier)
    "first-name": "Jane" // Quoted key (required for hyphen)
};

// ============================================
// METHODS (FUNCTIONS AS PROPERTIES)
// ============================================

// Methods are functions stored as properties
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6

// ES6 method shorthand
let calculator2 = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator2.add(5, 3)); // 8

// ============================================
// COMPUTED PROPERTIES (ES6)
// ============================================

// Use expressions as property keys
let key = "name";
let value = "Alice";

let obj2 = {
    [key]: value, // Computed property
    ["age" + "Value"]: 30
};

console.log(obj2); // { name: "Alice", ageValue: 30 }

// Dynamic property names
function createObject(key, value) {
    return {
        [key]: value
    };
}

let obj3 = createObject("dynamicKey", "dynamicValue");
console.log(obj3); // { dynamicKey: "dynamicValue" }

// ============================================
// PROPERTY VALUE SHORTHAND (ES6)
// ============================================

// When property name matches variable name
let name = "Bob";
let age = 25;

// Traditional way
let person2 = {
    name: name,
    age: age
};

// Shorthand (ES6)
let person3 = {
    name, // Equivalent to name: name
    age   // Equivalent to age: age
};

console.log(person3); // { name: "Bob", age: 25 }

// ============================================
// NESTED OBJECTS
// ============================================

// Objects can contain other objects
let user = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Boston",
        zip: "02101"
    },
    contact: {
        email: "alice@example.com",
        phone: "555-1234"
    }
};

console.log(user.address.city); // "Boston"
console.log(user.contact.email); // "alice@example.com"

// ============================================
// PROPERTY TYPES
// ============================================

let mixed = {
    // String property
    name: "Test",
    
    // Number property
    age: 25,
    
    // Boolean property
    isActive: true,
    
    // Array property
    hobbies: ["reading", "coding"],
    
    // Object property
    address: {
        city: "Boston"
    },
    
    // Function property (method)
    greet: function() {
        return "Hello";
    },
    
    // Null property
    data: null,
    
    // Undefined property
    optional: undefined
};

// ============================================
// ADDING PROPERTIES DYNAMICALLY
// ============================================

let obj4 = {};

// Add properties after creation
obj4.name = "Dynamic";
obj4.age = 30;
obj4["city"] = "NYC";

console.log(obj4); // { name: "Dynamic", age: 30, city: "NYC" }

// ============================================
// MODIFYING PROPERTIES
// ============================================

let obj5 = {
    name: "Original",
    age: 20
};

// Modify existing property
obj5.name = "Modified";
obj5.age = 25;

console.log(obj5); // { name: "Modified", age: 25 }

// ============================================
// DELETING PROPERTIES
// ============================================

let obj6 = {
    name: "Test",
    age: 30,
    city: "Boston"
};

delete obj6.city;
console.log(obj6); // { name: "Test", age: 30 }

// Delete returns true if successful
let deleted = delete obj6.age;
console.log(deleted); // true
console.log(obj6); // { name: "Test" }

// ============================================
// PROPERTY EXISTENCE
// ============================================

let obj7 = {
    name: "Test",
    age: undefined
};

// Check if property exists
console.log("name" in obj7); // true
console.log("age" in obj7); // true (even if undefined)
console.log("city" in obj7); // false

// Check if property has value
console.log(obj7.name !== undefined); // true
console.log(obj7.age !== undefined); // false (age is undefined)
console.log(obj7.city !== undefined); // false

// hasOwnProperty (only own properties, not inherited)
console.log(obj7.hasOwnProperty("name")); // true
console.log(obj7.hasOwnProperty("toString")); // false (inherited)

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Configuration object
let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
    headers: {
        "Content-Type": "application/json"
    }
};

// Example 2: User profile
let profile = {
    username: "alice123",
    email: "alice@example.com",
    preferences: {
        theme: "dark",
        notifications: true
    },
    updateEmail(newEmail) {
        this.email = newEmail;
    }
};

// Example 3: Shopping cart
let cart = {
    items: [],
    total: 0,
    addItem(item) {
        this.items.push(item);
        this.calculateTotal();
    },
    calculateTotal() {
        this.total = this.items.reduce((sum, item) => sum + item.price, 0);
    }
};

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Property names with special characters
let obj8 = {
    "normal": "value",
    "with-dash": "value", // Requires quotes
    "with space": "value", // Requires quotes
    "123": "value" // Requires quotes (can't start with number)
};

// 2. Reserved words as keys
let obj9 = {
    "class": "value", // Requires quotes
    "function": "value", // Requires quotes
    "return": "value" // Requires quotes
};

// 3. Undefined vs missing property
let obj10 = {
    defined: "value",
    undefined: undefined
};

console.log(obj10.defined); // "value"
console.log(obj10.undefined); // undefined
console.log(obj10.missing); // undefined

// But:
console.log("defined" in obj10); // true
console.log("undefined" in obj10); // true
console.log("missing" in obj10); // false

// 4. Object property order
// String keys: insertion order (ES2015+)
// Number-like keys: sorted numerically
let obj11 = {
    "2": "two",
    "1": "one",
    "b": "b",
    "a": "a"
};
console.log(Object.keys(obj11)); // ["1", "2", "b", "a"]

// 5. Property with value null
let obj12 = {
    value: null
};
console.log(obj12.value); // null
console.log("value" in obj12); // true

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use meaningful property names
// ✅ Good: { userName: "alice", userAge: 25 }
// ❌ Bad: { u: "alice", a: 25 }

// 2. Use method shorthand (ES6)
// ✅ Good: { greet() { return "Hello"; } }
// ⚠️ Acceptable: { greet: function() { return "Hello"; } }

// 3. Use property shorthand when appropriate
// ✅ Good: { name, age } (when variables exist)
// ⚠️ Acceptable: { name: name, age: age }

// 4. Quote keys with special characters
// ✅ Good: { "first-name": "John" }
// ❌ Bad: { first-name: "John" } (syntax error)

// 5. Use computed properties for dynamic keys
// ✅ Good: { [key]: value }

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Configuration object
const config = {
    host: "localhost",
    port: 3000
};

// Pattern 2: Data transfer object
const userDTO = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

// Pattern 3: Namespace
const MyApp = {
    utils: {
        format: function() {}
    },
    api: {
        get: function() {}
    }
};

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create an object literal with multiple properties
// 2. Add a method to an object using function syntax
// 3. Add a method using ES6 method shorthand
// 4. Use computed properties to create dynamic property names
// 5. Use property value shorthand when property name matches variable name
// 6. Create a nested object with multiple levels
// 7. Add a property to an object after it's created
// 8. Delete a property from an object
// 9. Check if a property exists in an object
// 10. Create an object with properties of different types (string, number, boolean, array, object, function)


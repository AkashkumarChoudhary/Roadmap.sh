/**
 * ============================================
 * ACCESSING OBJECT PROPERTIES IN JAVASCRIPT
 * ============================================
 * 
 * WHY UNDERSTAND PROPERTY ACCESS?
 * --------------------------------
 * There are multiple ways to access object properties. Understanding them helps:
 * - Choose the right method for each situation
 * - Handle dynamic property names
 * - Work with special characters in keys
 * - Understand when each method is appropriate
 * 
 * WHAT ARE THE METHODS?
 * ---------------------
 * Two main ways to access properties:
 * - Dot notation: obj.property
 * - Bracket notation: obj["property"]
 * 
 * KEY DIFFERENCES:
 * ---------------
 * - Dot notation: Static, cleaner, requires valid identifier
 * - Bracket notation: Dynamic, works with any string, can use expressions
 */

'use strict';

// ============================================
// 1. DOT NOTATION
// ============================================

// Access properties using dot (.)
let person = {
    name: "Alice",
    age: 30,
    city: "Boston"
};

console.log(person.name); // "Alice"
console.log(person.age); // 30
console.log(person.city); // "Boston"

// ============================================
// 2. BRACKET NOTATION
// ============================================

// Access properties using brackets []
console.log(person["name"]); // "Alice"
console.log(person["age"]); // 30
console.log(person["city"]); // "Boston"

// ============================================
// WHEN TO USE EACH
// ============================================

// Dot notation: When property name is known and valid identifier
let obj = {
    name: "Test",
    age: 25
};

console.log(obj.name); // ✅ Good: Simple, clean
console.log(obj["name"]); // ⚠️ Works but unnecessary

// Bracket notation: When property name is dynamic
let key = "name";
console.log(obj[key]); // ✅ Good: Dynamic access
// console.log(obj.key); // ❌ Wrong: Looks for property "key"

// Bracket notation: When property has special characters
let obj2 = {
    "first-name": "John",
    "last name": "Doe",
    "123": "number key"
};

// console.log(obj2.first-name); // ❌ Syntax error
console.log(obj2["first-name"]); // ✅ "John"
console.log(obj2["last name"]); // ✅ "Doe"
console.log(obj2["123"]); // ✅ "number key"

// ============================================
// DYNAMIC PROPERTY ACCESS
// ============================================

// Access properties using variables
let propertyName = "age";
console.log(person[propertyName]); // 30

// Access nested properties dynamically
let user = {
    profile: {
        name: "Alice",
        settings: {
            theme: "dark"
        }
    }
};

let path = "profile";
let subPath = "name";
console.log(user[path][subPath]); // "Alice"

// ============================================
// COMPUTED PROPERTY ACCESS
// ============================================

// Use expressions in bracket notation
let obj3 = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
};

let index = 2;
console.log(obj3["prop" + index]); // "value2"

// Function to get property
function getProperty(obj, propName) {
    return obj[propName];
}

console.log(getProperty(obj3, "prop1")); // "value1"

// ============================================
// NESTED PROPERTY ACCESS
// ============================================

// Access nested properties
let company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "Boston",
        zip: "02101"
    },
    employees: [
        { name: "Alice", role: "Developer" },
        { name: "Bob", role: "Designer" }
    ]
};

// Dot notation for nested
console.log(company.address.city); // "Boston"
console.log(company.employees[0].name); // "Alice"

// Bracket notation for nested
console.log(company["address"]["city"]); // "Boston"
console.log(company["address"].city); // "Boston" (mixed)

// Dynamic nested access
let addressKey = "address";
let cityKey = "city";
console.log(company[addressKey][cityKey]); // "Boston"

// ============================================
// SETTING PROPERTIES
// ============================================

let obj4 = {};

// Set using dot notation
obj4.name = "Alice";
obj4.age = 30;

// Set using bracket notation
obj4["city"] = "Boston";
obj4["email-address"] = "alice@example.com";

console.log(obj4); // { name: "Alice", age: 30, city: "Boston", "email-address": "alice@example.com" }

// Set dynamically
let prop = "dynamicProp";
obj4[prop] = "dynamic value";
console.log(obj4.dynamicProp); // "dynamic value"

// ============================================
// PROPERTY ACCESS WITH UNDEFINED
// ============================================

// Accessing non-existent property
let obj5 = { name: "Test" };
console.log(obj5.age); // undefined
console.log(obj5["age"]); // undefined

// Accessing property of undefined
let obj6 = {
    nested: {
        value: "test"
    }
};

// console.log(obj6.missing.value); // TypeError: Cannot read property 'value' of undefined
console.log(obj6.missing?.value); // undefined (with optional chaining)

// Safe access
if (obj6.missing) {
    console.log(obj6.missing.value);
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Dynamic property access
function getValue(obj, key) {
    return obj[key];
}

let data = { x: 10, y: 20 };
console.log(getValue(data, "x")); // 10

// Example 2: Setting multiple properties
function setProperties(obj, props) {
    for (let key in props) {
        obj[key] = props[key];
    }
    return obj;
}

let obj7 = {};
setProperties(obj7, { name: "Alice", age: 30 });
console.log(obj7); // { name: "Alice", age: 30 }

// Example 3: Property access with fallback
function getPropertySafe(obj, key, defaultValue) {
    return obj[key] !== undefined ? obj[key] : defaultValue;
}

let obj8 = { name: "Alice" };
console.log(getPropertySafe(obj8, "name", "Unknown")); // "Alice"
console.log(getPropertySafe(obj8, "age", 0)); // 0

// Example 4: Deep property access
function getNestedProperty(obj, path) {
    const keys = path.split(".");
    let result = obj;
    for (let key of keys) {
        if (result && typeof result === "object") {
            result = result[key];
        } else {
            return undefined;
        }
    }
    return result;
}

let nested = {
    user: {
        profile: {
            name: "Alice"
        }
    }
};

console.log(getNestedProperty(nested, "user.profile.name")); // "Alice"

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Property names that are numbers
let obj9 = {
    1: "one",
    2: "two"
};

console.log(obj9[1]); // "one" (bracket notation)
// console.log(obj9.1); // SyntaxError (dot notation doesn't work)

// 2. Property names that are reserved words
let obj10 = {
    "class": "value",
    "function": "value"
};

console.log(obj10["class"]); // "value"
// console.log(obj10.class); // Works but "class" is reserved word

// 3. Property access on null/undefined
let obj11 = null;
// console.log(obj11.property); // TypeError

// Safe check
if (obj11) {
    console.log(obj11.property);
}

// 4. Accessing inherited properties
function Parent() {
    this.parentProp = "parent";
}

function Child() {
    this.childProp = "child";
}

Child.prototype = new Parent();
let child = new Child();

console.log(child.childProp); // "child" (own property)
console.log(child.parentProp); // "parent" (inherited)

// 5. Property access with getters
let obj12 = {
    _value: 10,
    get value() {
        return this._value * 2;
    }
};

console.log(obj12.value); // 20 (getter executed)
console.log(obj12._value); // 10 (actual stored value)

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use dot notation for static property names
// ✅ Good: obj.name
// ⚠️ Acceptable: obj["name"] (but unnecessary)

// 2. Use bracket notation for dynamic property names
// ✅ Good: obj[key]
// ❌ Bad: obj.key (looks for property "key")

// 3. Use bracket notation for special characters
// ✅ Good: obj["first-name"]
// ❌ Bad: obj.first-name (syntax error)

// 4. Check for undefined before accessing nested properties
// ✅ Good: if (obj.nested) { obj.nested.value }
// ✅ Also good: obj.nested?.value (optional chaining)

// 5. Use bracket notation with variables
// ✅ Good: obj[propertyName]
// ❌ Bad: obj.propertyName (when propertyName is a variable)

// ============================================
// COMPARISON SUMMARY
// ============================================

/**
 * DOT NOTATION:
 * - Syntax: obj.property
 * - Static: Property name must be literal
 * - Valid identifier: Must be valid JavaScript identifier
 * - Cleaner: More readable for simple cases
 * - Faster: Slightly faster (minimal difference)
 * 
 * BRACKET NOTATION:
 * - Syntax: obj["property"]
 * - Dynamic: Can use variables/expressions
 * - Any string: Works with any string value
 * - Flexible: Handles special characters
 * - Slower: Slightly slower (negligible)
 */

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Access an object property using dot notation
// 2. Access an object property using bracket notation
// 3. Access a property dynamically using a variable
// 4. Access a nested property using both notations
// 5. Set a property using dot notation
// 6. Set a property using bracket notation
// 7. Access a property with special characters (requires bracket notation)
// 8. Create a function that accesses a property dynamically
// 9. Access a nested property safely (check for undefined)
// 10. Explain when to use dot notation vs bracket notation


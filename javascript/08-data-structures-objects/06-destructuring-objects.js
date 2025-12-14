/**
 * ============================================
 * OBJECT DESTRUCTURING IN JAVASCRIPT
 * ============================================
 * 
 * WHY OBJECT DESTRUCTURING?
 * -------------------------
 * Object destructuring (ES6) provides a concise way to extract values:
 * - Cleaner, more readable code
 * - Easy variable assignment from objects
 * - Extract specific properties
 * - Default values for missing properties
 * - Rename variables during extraction
 * 
 * WHAT IS OBJECT DESTRUCTURING?
 * -----------------------------
 * A syntax that allows you to unpack properties from objects:
 * - Uses curly braces on left side
 * - Matches property names
 * - Can use default values
 * - Can rename variables
 * - Can use rest operator
 * 
 * SYNTAX:
 * ------
 * const { property1, property2 } = object;
 */

'use strict';

// ============================================
// BASIC DESTRUCTURING
// ============================================

// Extract properties by name
let person = {
    name: "Alice",
    age: 30,
    city: "Boston"
};

let { name, age, city } = person;

console.log(name); // "Alice"
console.log(age); // 30
console.log(city); // "Boston"

// ============================================
// PARTIAL DESTRUCTURING
// ============================================

// Extract only some properties
let { name: personName, age: personAge } = person;
console.log(personName); // "Alice"
console.log(personAge); // 30

// Or without renaming
let { name: name2 } = person;
console.log(name2); // "Alice"

// ============================================
// RENAMING VARIABLES
// ============================================

// Rename during destructuring
let { name: fullName, age: years } = person;
console.log(fullName); // "Alice"
console.log(years); // 30

// Original property names still exist in object
console.log(person.name); // "Alice"

// ============================================
// DEFAULT VALUES
// ============================================

// Provide default values for missing properties
let { name: name3, age: age2, email = "no-email" } = person;
console.log(name3); // "Alice"
console.log(age2); // 30
console.log(email); // "no-email" (default, since person.email doesn't exist)

// Multiple defaults
let user = { name: "Bob" };
let { name: name4, age: age3 = 0, city: city2 = "Unknown" } = user;
console.log(name4); // "Bob"
console.log(age3); // 0 (default)
console.log(city2); // "Unknown" (default)

// ============================================
// NESTED DESTRUCTURING
// ============================================

// Destructure nested objects
let user2 = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Boston",
        zip: "02101"
    }
};

let { name: name5, address: { city: city3, zip } } = user2;
console.log(name5); // "Alice"
console.log(city3); // "Boston"
console.log(zip); // "02101"

// Nested with defaults
let user3 = { name: "Bob" };
let { name: name6, address: { city: city4 } = { city: "Unknown" } } = user3;
console.log(name4); // "Bob"
console.log(city4); // "Unknown" (default)

// ============================================
// REST OPERATOR IN DESTRUCTURING
// ============================================

// Collect remaining properties into object
let { name: name7, ...rest } = person;
console.log(name7); // "Alice"
console.log(rest); // { age: 30, city: "Boston" }

// Extract some, keep rest
let { age: age4, ...otherProps } = person;
console.log(age4); // 30
console.log(otherProps); // { name: "Alice", city: "Boston" }

// ============================================
// DESTRUCTURING FUNCTION PARAMETERS
// ============================================

// Destructure in function parameters
function greet({ name, age }) {
    return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet(person)); // "Hello, Alice. You are 30 years old."

// With defaults
function greetWithDefaults({ name = "Guest", age = 0 }) {
    return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greetWithDefaults({})); // "Hello, Guest. You are 0 years old."

// Nested destructuring in parameters
function processUser({ name, address: { city } }) {
    return `${name} lives in ${city}`;
}

console.log(processUser(user2)); // "Alice lives in Boston"

// ============================================
// DESTRUCTURING ASSIGNMENT
// ============================================

// Destructure into existing variables
let name8, age5;
({ name: name8, age: age5 } = person);
console.log(name8, age5); // "Alice" 30

// Note: Need parentheses when not using const/let/var

// ============================================
// COMPUTED PROPERTY NAMES
// ============================================

// Destructure with computed property names
let key = "name";
let { [key]: extractedName } = person;
console.log(extractedName); // "Alice"

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Function with object parameter
function createUser({ name, email, age = 0 }) {
    return {
        name,
        email,
        age,
        createdAt: new Date()
    };
}

let newUser = createUser({ name: "Alice", email: "alice@example.com" });
console.log(newUser);

// Example 2: Extract specific properties
function getSummary({ title, author, year }) {
    return `${title} by ${author} (${year})`;
}

let book = {
    title: "JavaScript Guide",
    author: "John Doe",
    year: 2024,
    pages: 500
};

console.log(getSummary(book)); // "JavaScript Guide by John Doe (2024)"

// Example 3: Swap object properties
function swapProperties(obj, prop1, prop2) {
    let { [prop1]: val1, [prop2]: val2 } = obj;
    return { ...obj, [prop1]: val2, [prop2]: val1 };
}

let obj = { a: 1, b: 2 };
let swapped = swapProperties(obj, "a", "b");
console.log(swapped); // { a: 2, b: 1 }

// Example 4: Extract and transform
function extractAndTransform({ name, age }) {
    return {
        fullName: name.toUpperCase(),
        isAdult: age >= 18
    };
}

let result = extractAndTransform(person);
console.log(result); // { fullName: "ALICE", isAdult: true }

// Example 5: Configuration with defaults
function initializeApp(config = {}) {
    const {
        host = "localhost",
        port = 3000,
        ssl = false,
        ...otherConfig
    } = config;
    
    return {
        host,
        port,
        ssl,
        ...otherConfig
    };
}

let appConfig = initializeApp({ port: 8080, apiKey: "secret" });
console.log(appConfig); // { host: "localhost", port: 8080, ssl: false, apiKey: "secret" }

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Destructuring null/undefined
// let { prop } = null; // TypeError
// let { prop } = undefined; // TypeError

// Safe destructuring
let { prop = "default" } = null || {};
console.log(prop); // "default"

// 2. Default values only apply to undefined
let obj2 = { name: "Test", value: null };
let { name: name9, value: value2 = "default", missing = "default" } = obj2;
console.log(name9); // "Test"
console.log(value2); // null (not "default", null is not undefined)
console.log(missing); // "default" (undefined triggers default)

// 3. Rest operator must be last
let { name: name10, ...rest2, age: age6 } = person; // SyntaxError

// 4. Destructuring doesn't create new object
let { name: name11 } = person;
name11 = "Bob";
console.log(person.name); // "Alice" (unchanged, name11 is new variable)

// 5. Nested destructuring with missing properties
let user4 = { name: "Test" };
// let { address: { city } } = user4; // TypeError: Cannot destructure property 'city' of undefined

// Safe nested destructuring
let { address: { city: city5 } = { city: "Unknown" } } = user4;
console.log(city5); // "Unknown"

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use destructuring for function parameters
// ✅ Good: function process({ name, age }) { ... }

// 2. Use default values for optional properties
// ✅ Good: const { name, age = 0 } = user;

// 3. Use renaming for clarity
// ✅ Good: const { name: userName, age: userAge } = user;

// 4. Use rest operator to separate specific properties
// ✅ Good: const { name, ...rest } = user;

// 5. Be careful with null/undefined objects
// ✅ Good: const { prop } = obj || {};

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Extract properties
const { prop1, prop2 } = object;

// Pattern 2: Extract with defaults
const { prop1, prop2 = defaultValue } = object;

// Pattern 3: Extract and rename
const { prop1: newName1, prop2: newName2 } = object;

// Pattern 4: Extract nested
const { nested: { prop } } = object;

// Pattern 5: Extract with rest
const { prop1, ...rest3 } = object;

// Pattern 6: Function parameters
function func({ prop1, prop2 }) { }

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Destructure an object to extract specific properties
// 2. Use destructuring to rename variables during extraction
// 3. Use default values when destructuring properties that don't exist
// 4. Destructure a nested object
// 5. Use the rest operator to collect remaining properties
// 6. Use destructuring in function parameters
// 7. Destructure an object with computed property names
// 8. Create a function that uses destructuring with defaults
// 9. Safely destructure an object that might be null/undefined
// 10. Compare destructuring vs traditional property access


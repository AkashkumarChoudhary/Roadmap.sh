/**
 * ============================================
 * OPTIONAL CHAINING IN JAVASCRIPT
 * ============================================
 * 
 * WHY OPTIONAL CHAINING?
 * ----------------------
 * Optional chaining (ES2020) provides safe access to nested properties:
 * - Prevents errors when accessing undefined/null properties
 * - Cleaner code than multiple checks
 * - Reduces boilerplate
 * - Safer property access
 * 
 * WHAT IS OPTIONAL CHAINING?
 * --------------------------
 * The `?.` operator allows you to safely access nested properties:
 * - Returns undefined if any part of chain is null/undefined
 * - Short-circuits evaluation
 * - Works with properties, methods, and arrays
 * 
 * SYNTAX:
 * ------
 * obj?.property
 * obj?.method()
 * obj?.[expression]
 * arr?.[index]
 */

'use strict';

// ============================================
// BASIC OPTIONAL CHAINING
// ============================================

// Safe property access
let user = {
    name: "Alice",
    address: {
        city: "Boston"
    }
};

// Traditional way (verbose)
let city = user && user.address && user.address.city;

// Optional chaining (clean)
let city2 = user?.address?.city;
console.log(city2); // "Boston"

// Safe access when property doesn't exist
let user2 = { name: "Bob" };
let city3 = user2?.address?.city;
console.log(city3); // undefined (no error!)

// ============================================
// PROPERTY ACCESS
// ============================================

// Safe property access
let obj = {
    nested: {
        value: "test"
    }
};

console.log(obj?.nested?.value); // "test"

// Missing property
let obj2 = {};
console.log(obj2?.nested?.value); // undefined

// Null object
let obj3 = null;
console.log(obj3?.property); // undefined (no TypeError!)

// ============================================
// METHOD CALLS
// ============================================

// Safe method calls
let calculator = {
    add: function(a, b) {
        return a + b;
    }
};

console.log(calculator?.add?.(5, 3)); // 8

// Method doesn't exist
let calculator2 = {};
console.log(calculator2?.add?.(5, 3)); // undefined

// Object is null
let calculator3 = null;
console.log(calculator3?.add?.(5, 3)); // undefined

// ============================================
// ARRAY ACCESS
// ============================================

// Safe array access
let arr = [1, 2, 3];
console.log(arr?.[0]); // 1

// Array is null/undefined
let arr2 = null;
console.log(arr2?.[0]); // undefined

// Nested array access
let data = {
    items: [1, 2, 3]
};
console.log(data?.items?.[0]); // 1

// Missing array
let data2 = {};
console.log(data2?.items?.[0]); // undefined

// ============================================
// BRACKET NOTATION
// ============================================

// Use with bracket notation
let obj4 = {
    "property-name": "value"
};

console.log(obj4?.["property-name"]); // "value"

// Dynamic property access
let key = "name";
let user3 = { name: "Alice" };
console.log(user3?.[key]); // "Alice"

// ============================================
// COMBINING WITH NULLISH COALESCING
// ============================================

// Provide default values
let user4 = null;
let name = user4?.name ?? "Guest";
console.log(name); // "Guest"

// Nested with default
let user5 = {};
let city4 = user5?.address?.city ?? "Unknown";
console.log(city4); // "Unknown"

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: API response handling
function getUserCity(user) {
    return user?.address?.city ?? "Unknown";
}

let user6 = { address: { city: "Boston" } };
console.log(getUserCity(user6)); // "Boston"

let user7 = {};
console.log(getUserCity(user7)); // "Unknown"

// Example 2: Safe method calls
function safeCall(obj, methodName, ...args) {
    return obj?.[methodName]?.(...args);
}

let obj5 = {
    greet: function(name) {
        return `Hello, ${name}`;
    }
};

console.log(safeCall(obj5, "greet", "Alice")); // "Hello, Alice"
console.log(safeCall(null, "greet", "Alice")); // undefined

// Example 3: Array element access
function getFirstItem(data) {
    return data?.items?.[0] ?? null;
}

let data3 = { items: [1, 2, 3] };
console.log(getFirstItem(data3)); // 1

let data4 = {};
console.log(getFirstItem(data4)); // null

// Example 4: Configuration access
function getConfigValue(config, path) {
    const keys = path.split(".");
    let current = config;
    
    for (let key of keys) {
        current = current?.[key];
        if (current === undefined) break;
    }
    
    return current;
}

let config = {
    api: {
        baseUrl: "https://api.example.com"
    }
};

console.log(getConfigValue(config, "api.baseUrl")); // "https://api.example.com"
console.log(getConfigValue(config, "api.timeout")); // undefined

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Optional chaining with falsy values
let obj6 = {
    value: 0,
    empty: "",
    false: false
};

console.log(obj6?.value); // 0 (not undefined, value exists)
console.log(obj6?.empty); // "" (not undefined)
console.log(obj6?.false); // false (not undefined)

// Only null/undefined trigger optional chaining
console.log(obj6?.missing); // undefined

// 2. Optional chaining doesn't work for assignment
let obj7 = {};
// obj7?.property = "value"; // SyntaxError: Invalid left-hand side

// 3. Optional chaining with delete
let obj8 = { prop: "value" };
// delete obj8?.prop; // SyntaxError

// 4. Optional chaining short-circuits
let obj9 = null;
let result = obj9?.method?.(); // Doesn't call method, returns undefined
console.log(result); // undefined

// 5. Optional chaining with computed properties
let key2 = "name";
let obj10 = { name: "Alice" };
console.log(obj10?.[key2]); // "Alice"

// 6. Multiple optional chains
let obj11 = {
    level1: {
        level2: {
            level3: "value"
        }
    }
};

console.log(obj11?.level1?.level2?.level3); // "value"
console.log(obj11?.level1?.level2?.missing); // undefined

// ============================================
// COMPARISON: TRADITIONAL VS OPTIONAL CHAINING
// ============================================

// Traditional way (verbose)
function getCityTraditional(user) {
    if (user && user.address && user.address.city) {
        return user.address.city;
    }
    return "Unknown";
}

// Optional chaining (clean)
function getCityModern(user) {
    return user?.address?.city ?? "Unknown";
}

// Traditional method call
function callMethodTraditional(obj, methodName) {
    if (obj && typeof obj[methodName] === "function") {
        return obj[methodName]();
    }
    return undefined;
}

// Optional chaining method call
function callMethodModern(obj, methodName) {
    return obj?.[methodName]?.();
}

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use optional chaining for safe property access
// ✅ Good: user?.address?.city
// ❌ Bad: user.address.city (may throw error)

// 2. Combine with nullish coalescing for defaults
// ✅ Good: user?.name ?? "Guest"

// 3. Use for optional method calls
// ✅ Good: obj?.method?.()

// 4. Use for array access
// ✅ Good: arr?.[0]

// 5. Don't overuse (when you know property exists)
// ✅ Good: obj.property (when you're sure it exists)
// ⚠️ Acceptable: obj?.property (when unsure)

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Safe property access
let value = obj?.property;

// Pattern 2: Safe nested access
let nested = obj?.level1?.level2?.value;

// Pattern 3: Safe method call
let result2 = obj?.method?.();

// Pattern 4: Safe array access
let item = arr?.[index];

// Pattern 5: With default value
let value2 = obj?.property ?? defaultValue;

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use optional chaining to safely access a nested property
// 2. Use optional chaining to safely call a method
// 3. Use optional chaining to safely access an array element
// 4. Combine optional chaining with nullish coalescing for a default value
// 5. Use optional chaining with bracket notation for dynamic property access
// 6. Create a function that safely accesses nested object properties
// 7. Use optional chaining to prevent errors when object is null
// 8. Compare traditional null checks with optional chaining
// 9. Use optional chaining in a chain of method calls
// 10. Explain when to use optional chaining vs regular property access


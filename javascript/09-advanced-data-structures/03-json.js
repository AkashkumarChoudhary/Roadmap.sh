/**
 * ============================================
 * JSON IN JAVASCRIPT
 * ============================================
 * 
 * WHY JSON?
 * ---------
 * JSON (JavaScript Object Notation) is essential for:
 * - Data exchange between client and server
 * - Storing configuration data
 * - API communication
 * - Data persistence
 * - Interoperability between languages
 * 
 * WHAT IS JSON?
 * -------------
 * JSON is a lightweight data interchange format:
 * - Text-based format
 * - Human-readable
 * - Language-independent
 * - Based on JavaScript object syntax
 * 
 * KEY METHODS:
 * -----------
 * - JSON.stringify() - Convert JavaScript to JSON string
 * - JSON.parse() - Convert JSON string to JavaScript
 */

'use strict';

// ============================================
// 1. JSON.STRINGIFY() - TO JSON STRING
// ============================================

// Convert JavaScript object to JSON string
let person = {
    name: "Alice",
    age: 30,
    city: "Boston"
};

let jsonString = JSON.stringify(person);
console.log(jsonString); // '{"name":"Alice","age":30,"city":"Boston"}'

// Convert array to JSON
let numbers = [1, 2, 3, 4, 5];
let jsonArray = JSON.stringify(numbers);
console.log(jsonArray); // '[1,2,3,4,5]'

// Nested objects
let user = {
    name: "Bob",
    address: {
        street: "123 Main St",
        city: "Boston"
    },
    hobbies: ["reading", "coding"]
};

let jsonNested = JSON.stringify(user);
console.log(jsonNested);
// '{"name":"Bob","address":{"street":"123 Main St","city":"Boston"},"hobbies":["reading","coding"]}'

// ============================================
// JSON.STRINGIFY() WITH REPLACER
// ============================================

// Replacer function - filter/modify properties
let obj = {
    name: "Alice",
    age: 30,
    password: "secret123",
    email: "alice@example.com"
};

// Filter out password
let jsonFiltered = JSON.stringify(obj, (key, value) => {
    if (key === "password") {
        return undefined; // Exclude password
    }
    return value;
});
console.log(jsonFiltered); // '{"name":"Alice","age":30,"email":"alice@example.com"}'

// Replacer array - include only specified keys
let jsonSelected = JSON.stringify(obj, ["name", "age"]);
console.log(jsonSelected); // '{"name":"Alice","age":30}'

// ============================================
// JSON.STRINGIFY() WITH SPACING
// ============================================

// Pretty print with indentation
let prettyJson = JSON.stringify(person, null, 2);
console.log(prettyJson);
/*
{
  "name": "Alice",
  "age": 30,
  "city": "Boston"
}
*/

// Custom spacing (number of spaces)
let spaced = JSON.stringify(person, null, 4);
console.log(spaced); // 4 spaces indentation

// Custom spacing (string)
let customSpaced = JSON.stringify(person, null, "---");
console.log(customSpaced); // Uses "---" as indent

// ============================================
// WHAT GETS STRINGIFIED
// ============================================

// Properties that are stringified:
// - Objects, arrays, strings, numbers, booleans, null

// Properties that are NOT stringified:
// - Functions
// - undefined
// - Symbols
// - Dates (converted to strings)
// - RegExp (converted to empty object)

let obj2 = {
    string: "text",
    number: 42,
    boolean: true,
    null: null,
    array: [1, 2, 3],
    object: { nested: "value" },
    function: function() {}, // Excluded
    undefined: undefined, // Excluded
    date: new Date(), // Converted to string
    regex: /test/ // Converted to {}
};

let json = JSON.stringify(obj2);
console.log(json);
// '{"string":"text","number":42,"boolean":true,"null":null,"array":[1,2,3],"object":{"nested":"value"},"date":"2024-01-15T10:30:00.000Z","regex":{}}'

// ============================================
// 2. JSON.PARSE() - FROM JSON STRING
// ============================================

// Convert JSON string to JavaScript object
let jsonStr = '{"name":"Alice","age":30,"city":"Boston"}';
let parsed = JSON.parse(jsonStr);
console.log(parsed); // { name: "Alice", age: 30, city: "Boston" }

// Parse array
let jsonArr = '[1,2,3,4,5]';
let parsedArr = JSON.parse(jsonArr);
console.log(parsedArr); // [1, 2, 3, 4, 5]

// Parse nested structure
let jsonNested2 = '{"name":"Bob","address":{"street":"123 Main St","city":"Boston"}}';
let parsedNested = JSON.parse(jsonNested2);
console.log(parsedNested.address.city); // "Boston"

// ============================================
// JSON.PARSE() WITH REVIVER
// ============================================

// Reviver function - transform values during parsing
let jsonDate = '{"name":"Alice","created":"2024-01-15T10:30:00.000Z"}';

let parsedWithReviver = JSON.parse(jsonDate, (key, value) => {
    // Convert date strings back to Date objects
    if (key === "created" && typeof value === "string") {
        return new Date(value);
    }
    return value;
});

console.log(parsedWithReviver.created instanceof Date); // true

// ============================================
// ERROR HANDLING
// ============================================

// JSON.parse() throws error for invalid JSON
try {
    let invalid = JSON.parse('{"name": "Alice"'); // Missing closing brace
} catch (error) {
    console.log("Parse error:", error.message);
}

// JSON.stringify() can throw for circular references
let circular = { name: "Alice" };
circular.self = circular; // Circular reference

try {
    JSON.stringify(circular);
} catch (error) {
    console.log("Stringify error:", error.message); // "Converting circular structure to JSON"
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: API response parsing
function handleAPIResponse(jsonString) {
    try {
        let data = JSON.parse(jsonString);
        return {
            success: true,
            data: data
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

let apiResponse = '{"users": [{"name": "Alice", "age": 30}]}';
let result = handleAPIResponse(apiResponse);
console.log(result);

// Example 2: Local storage
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error("Save error:", error);
        return false;
    }
}

function loadFromLocalStorage(key) {
    try {
        let json = localStorage.getItem(key);
        return json ? JSON.parse(json) : null;
    } catch (error) {
        console.error("Load error:", error);
        return null;
    }
}

// Example 3: Deep clone using JSON
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let original = {
    name: "Alice",
    nested: { value: 1 }
};

let cloned = deepClone(original);
cloned.nested.value = 2;
console.log(original.nested.value); // 1 (unchanged)

// Note: Only works for JSON-serializable objects (no functions, dates, etc.)

// Example 4: Configuration file
let config = {
    api: {
        baseUrl: "https://api.example.com",
        timeout: 5000
    },
    features: {
        darkMode: true,
        notifications: false
    }
};

let configJson = JSON.stringify(config, null, 2);
// Save to file or send to server

// Example 5: Data transformation
function transformData(data) {
    // Convert to JSON and back to transform structure
    let json = JSON.stringify(data);
    let transformed = JSON.parse(json, (key, value) => {
        // Transform during parsing
        if (typeof value === "string" && key.endsWith("Date")) {
            return new Date(value);
        }
        return value;
    });
    return transformed;
}

// ============================================
// JSON VALIDATION
// ============================================

// Check if string is valid JSON
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

console.log(isValidJSON('{"name": "Alice"}')); // true
console.log(isValidJSON('{"name": "Alice"')); // false (invalid)

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Functions are not stringified
let obj3 = {
    name: "Alice",
    greet: function() {
        return "Hello";
    }
};
console.log(JSON.stringify(obj3)); // '{"name":"Alice"}' (function excluded)

// 2. undefined is not stringified
let obj4 = {
    name: "Alice",
    age: undefined
};
console.log(JSON.stringify(obj4)); // '{"name":"Alice"}' (undefined excluded)

// 3. Dates are converted to strings
let obj5 = {
    created: new Date()
};
console.log(JSON.stringify(obj5)); // '{"created":"2024-01-15T10:30:00.000Z"}'

// 4. Circular references cause errors
let obj6 = { name: "Alice" };
obj6.self = obj6;
// JSON.stringify(obj6); // TypeError: Converting circular structure to JSON

// 5. NaN and Infinity become null
let obj7 = {
    value: NaN,
    infinity: Infinity
};
console.log(JSON.stringify(obj7)); // '{"value":null,"infinity":null}'

// 6. JSON keys must be strings (quoted)
let valid = '{"name": "Alice"}'; // Valid
// let invalid = '{name: "Alice"}'; // Invalid (keys must be quoted)

// 7. JSON values can be: string, number, boolean, null, object, array
let validJson = '{"string": "text", "number": 42, "boolean": true, "null": null, "object": {}, "array": []}';

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always use try-catch with JSON.parse()
// ✅ Good: try { JSON.parse(str); } catch (e) { ... }

// 2. Use replacer to exclude sensitive data
// ✅ Good: JSON.stringify(obj, (k, v) => k === "password" ? undefined : v)

// 3. Use spacing for readable output (development)
// ✅ Good: JSON.stringify(obj, null, 2)

// 4. Validate JSON before parsing
// ✅ Good: Check if string is valid JSON first

// 5. Handle circular references
// ✅ Good: Use custom serialization or libraries

// 6. Be aware of what gets stringified
// ⚠️ Warning: Functions, undefined, Symbols are excluded

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Safe parsing
function safeParse(jsonString, defaultValue = null) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return defaultValue;
    }
}

// Pattern 2: Filter sensitive data
function safeStringify(obj, sensitiveKeys = ["password", "token"]) {
    return JSON.stringify(obj, (key, value) => {
        return sensitiveKeys.includes(key) ? undefined : value;
    });
}

// Pattern 3: Pretty print
function prettyPrint(obj) {
    return JSON.stringify(obj, null, 2);
}

// Pattern 4: Deep clone (limited)
function jsonClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use JSON.stringify() to convert an object to JSON string
// 2. Use JSON.parse() to convert a JSON string to JavaScript object
// 3. Use replacer function to filter out specific properties
// 4. Use spacing parameter to pretty-print JSON
// 5. Handle JSON.parse() errors with try-catch
// 6. Create a function that safely parses JSON with a default value
// 7. Stringify an object with nested objects and arrays
// 8. Use reviver function to transform values during parsing
// 9. Explain what properties are excluded from JSON.stringify()
// 10. Create a deep clone function using JSON (and explain its limitations)


/**
 * ============================================
 * MAP AND SET IN JAVASCRIPT
 * ============================================
 * 
 * WHY MAP AND SET?
 * ----------------
 * Map and Set (ES6) provide specialized data structures:
 * - Map: Key-value pairs with any key type (not just strings)
 * - Set: Collection of unique values
 * - Better performance for specific use cases
 * - More semantic than using objects/arrays
 * 
 * WHAT ARE MAP AND SET?
 * ---------------------
 * - Map: Ordered collection of key-value pairs
 *   - Keys can be any type (objects, functions, primitives)
 *   - Maintains insertion order
 *   - Has size property
 * 
 * - Set: Collection of unique values
 *   - No duplicate values
 *   - Maintains insertion order
 *   - Has size property
 */

'use strict';

// ============================================
// 1. MAP - KEY-VALUE COLLECTION
// ============================================

// Create Map
let map = new Map();

// Add key-value pairs
map.set("name", "Alice");
map.set("age", 30);
map.set(1, "one");
map.set(true, "boolean");

console.log(map); // Map(4) { "name" => "Alice", "age" => 30, 1 => "one", true => "boolean" }

// Get value by key
console.log(map.get("name")); // "Alice"
console.log(map.get(1)); // "one"

// Check if key exists
console.log(map.has("name")); // true
console.log(map.has("city")); // false

// Get size
console.log(map.size); // 4

// Delete key
map.delete("age");
console.log(map.has("age")); // false

// Clear all
map.clear();
console.log(map.size); // 0

// ============================================
// MAP WITH DIFFERENT KEY TYPES
// ============================================

let map2 = new Map();

// String keys
map2.set("string", "value");

// Number keys
map2.set(42, "number");

// Boolean keys
map2.set(true, "boolean");

// Object keys (unique by reference)
let objKey1 = { id: 1 };
let objKey2 = { id: 2 };
map2.set(objKey1, "object 1");
map2.set(objKey2, "object 2");
console.log(map2.get(objKey1)); // "object 1"

// Function keys
let funcKey = function() {};
map2.set(funcKey, "function");

// Array keys
let arrKey = [1, 2, 3];
map2.set(arrKey, "array");

console.log(map2.size); // 7

// ============================================
// MAP INITIALIZATION
// ============================================

// From array of [key, value] pairs
let map3 = new Map([
    ["name", "Alice"],
    ["age", 30],
    ["city", "Boston"]
]);

console.log(map3.get("name")); // "Alice"

// From object (convert first)
let obj = { name: "Bob", age: 25 };
let map4 = new Map(Object.entries(obj));
console.log(map4.get("name")); // "Bob"

// ============================================
// MAP ITERATION
// ============================================

let map5 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

// for...of with entries (default)
for (let [key, value] of map5) {
    console.log(`${key}: ${value}`);
}

// for...of with entries() explicitly
for (let [key, value] of map5.entries()) {
    console.log(`${key}: ${value}`);
}

// for...of with keys()
for (let key of map5.keys()) {
    console.log(key);
}

// for...of with values()
for (let value of map5.values()) {
    console.log(value);
}

// forEach
map5.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// ============================================
// 2. SET - UNIQUE VALUES COLLECTION
// ============================================

// Create Set
let set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate, ignored
set.add(3); // Duplicate, ignored

console.log(set); // Set(3) { 1, 2, 3 }
console.log(set.size); // 3

// Check if value exists
console.log(set.has(2)); // true
console.log(set.has(5)); // false

// Delete value
set.delete(2);
console.log(set.has(2)); // false

// Clear all
set.clear();
console.log(set.size); // 0

// ============================================
// SET WITH DIFFERENT VALUE TYPES
// ============================================

let set2 = new Set();

// Primitives
set2.add("string");
set2.add(42);
set2.add(true);
set2.add(null);
set2.add(undefined);

// Objects (unique by reference)
let obj1 = { id: 1 };
let obj2 = { id: 1 }; // Different object, same content
set2.add(obj1);
set2.add(obj2);
console.log(set2.size); // 7 (obj1 and obj2 are different)

// Arrays (unique by reference)
set2.add([1, 2]);
set2.add([1, 2]); // Different array, same content
console.log(set2.size); // 9

// ============================================
// SET INITIALIZATION
// ============================================

// From array
let set3 = new Set([1, 2, 3, 2, 1]);
console.log(set3); // Set(3) { 1, 2, 3 } (duplicates removed)

// From string
let set4 = new Set("hello");
console.log(set4); // Set(4) { "h", "e", "l", "o" } (duplicates removed)

// ============================================
// SET ITERATION
// ============================================

let set5 = new Set([1, 2, 3, 4, 5]);

// for...of
for (let value of set5) {
    console.log(value);
}

// forEach
set5.forEach(value => {
    console.log(value);
});

// Convert to array
let array = Array.from(set5);
console.log(array); // [1, 2, 3, 4, 5]

// Spread operator
let array2 = [...set5];
console.log(array2); // [1, 2, 3, 4, 5]

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]

// Example 2: Count unique values
function countUnique(arr) {
    return new Set(arr).size;
}

console.log(countUnique([1, 2, 2, 3, 3, 3])); // 3

// Example 3: Map for caching
let cache = new Map();

function expensiveOperation(key) {
    if (cache.has(key)) {
        return cache.get(key);
    }
    
    // Simulate expensive operation
    let result = key * 2;
    cache.set(key, result);
    return result;
}

console.log(expensiveOperation(5)); // 10 (computed)
console.log(expensiveOperation(5)); // 10 (from cache)

// Example 4: Set for tracking visited items
let visited = new Set();

function visit(item) {
    if (visited.has(item)) {
        return "Already visited";
    }
    visited.add(item);
    return "First visit";
}

console.log(visit("page1")); // "First visit"
console.log(visit("page1")); // "Already visited"

// Example 5: Map for object metadata
let metadata = new Map();

function addMetadata(obj, key, value) {
    if (!metadata.has(obj)) {
        metadata.set(obj, new Map());
    }
    metadata.get(obj).set(key, value);
}

function getMetadata(obj, key) {
    return metadata.get(obj)?.get(key);
}

let user = { name: "Alice" };
addMetadata(user, "created", new Date());
addMetadata(user, "version", 1);
console.log(getMetadata(user, "created"));

// ============================================
// MAP VS OBJECT
// ============================================

/**
 * MAP ADVANTAGES:
 * - Keys can be any type
 * - Has size property
 * - Maintains insertion order
 * - Better performance for frequent additions/deletions
 * - No prototype (no default keys)
 * 
 * OBJECT ADVANTAGES:
 * - Literal syntax
 * - JSON support
 * - More familiar
 * - Better for fixed structure
 */

// Map: Any key type
let map6 = new Map();
map6.set({}, "object key");
map6.set(function() {}, "function key");

// Object: Only string/symbol keys
let obj3 = {};
obj3[{}] = "value"; // Converts to "[object Object]"
obj3[function() {}] = "value"; // Converts to string

// ============================================
// SET VS ARRAY
// ============================================

/**
 * SET ADVANTAGES:
 * - Automatic uniqueness
 * - Faster lookups (has())
 * - No duplicates
 * - Has size property
 * 
 * ARRAY ADVANTAGES:
 * - Indexed access
 * - More methods
 * - Ordered with duplicates
 * - JSON support
 */

// Set: Automatic uniqueness
let set6 = new Set([1, 2, 2, 3]);
console.log(set6.size); // 3

// Array: Manual uniqueness check
let arr = [1, 2, 2, 3];
let unique = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique); // [1, 2, 3]

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. NaN in Set
let set7 = new Set();
set7.add(NaN);
set7.add(NaN); // NaN === NaN is false, but Set treats them as same
console.log(set7.size); // 1

// 2. Object keys in Map (by reference)
let map7 = new Map();
let key1 = { id: 1 };
let key2 = { id: 1 };
map7.set(key1, "value1");
map7.set(key2, "value2");
console.log(map7.size); // 2 (different objects)

// 3. Map/Set size is property, not method
let map8 = new Map();
console.log(map8.size); // 0 (property)
// console.log(map8.size()); // TypeError (not a method)

// 4. Map/Set maintain insertion order
let map9 = new Map();
map9.set("z", 1);
map9.set("a", 2);
map9.set("m", 3);
console.log([...map9.keys()]); // ["z", "a", "m"] (insertion order)

// 5. WeakMap/WeakSet (covered in next file)
// Regular Map/Set hold strong references

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use Map when keys are dynamic or non-string
// ✅ Good: new Map() for dynamic keys

// 2. Use Set for unique value collections
// ✅ Good: new Set() to remove duplicates

// 3. Use Map for frequent additions/deletions
// ✅ Good: Map for cache, metadata

// 4. Use Object for fixed structure
// ✅ Good: Object for configuration, data models

// 5. Use Array for indexed, ordered data with duplicates
// ✅ Good: Array for lists, sequences

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a Map and add key-value pairs with different key types
// 2. Use Map methods: get, set, has, delete, clear
// 3. Iterate over a Map using for...of
// 4. Create a Set and add values (including duplicates)
// 5. Use Set to remove duplicates from an array
// 6. Create a Map from an object using Object.entries()
// 7. Convert a Set to an array using spread operator
// 8. Use Map for caching function results
// 9. Use Set to track visited items
// 10. Explain when to use Map vs Object, Set vs Array


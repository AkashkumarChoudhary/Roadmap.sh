/**
 * ============================================
 * WEAKMAP AND WEAKSET IN JAVASCRIPT
 * ============================================
 * 
 * WHY WEAKMAP AND WEAKSET?
 * ------------------------
 * WeakMap and WeakSet (ES6) provide weak references:
 * - Allow garbage collection of keys/values
 * - Prevent memory leaks
 * - Useful for private data and metadata
 * - Keys must be objects (not primitives)
 * 
 * WHAT ARE WEAKMAP AND WEAKSET?
 * -----------------------------
 * - WeakMap: Map with weak references to keys
 *   - Keys must be objects
 *   - Keys can be garbage collected
 *   - No iteration methods
 *   - No size property
 * 
 * - WeakSet: Set with weak references to values
 *   - Values must be objects
 *   - Values can be garbage collected
 *   - No iteration methods
 *   - No size property
 * 
 * KEY DIFFERENCE:
 * --------------
 * Weak references allow garbage collection when object is no longer referenced elsewhere.
 */

'use strict';

// ============================================
// 1. WEAKMAP - WEAK KEY REFERENCES
// ============================================

// Create WeakMap
let weakMap = new WeakMap();

// Keys must be objects (not primitives)
let objKey1 = { id: 1 };
let objKey2 = { id: 2 };

weakMap.set(objKey1, "value1");
weakMap.set(objKey2, "value2");

// Get value
console.log(weakMap.get(objKey1)); // "value1"

// Check if key exists
console.log(weakMap.has(objKey1)); // true

// Delete key
weakMap.delete(objKey1);
console.log(weakMap.has(objKey1)); // false

// Cannot use primitives as keys
// weakMap.set("string", "value"); // TypeError: Invalid value used as weak map key
// weakMap.set(1, "value"); // TypeError

// ============================================
// WEAKMAP LIMITATIONS
// ============================================

// No size property
// console.log(weakMap.size); // undefined

// No iteration methods
// for (let [key, value] of weakMap) { } // TypeError: weakMap is not iterable
// weakMap.forEach(...); // TypeError
// weakMap.keys(); // TypeError
// weakMap.values(); // TypeError
// weakMap.entries(); // TypeError

// No clear() method
// weakMap.clear(); // TypeError

// ============================================
// WEAKMAP USE CASES
// ============================================

// Use case 1: Private data storage
let privateData = new WeakMap();

class User {
    constructor(name, email) {
        this.name = name;
        // Store private data in WeakMap
        privateData.set(this, { email });
    }
    
    getEmail() {
        return privateData.get(this)?.email;
    }
    
    setEmail(email) {
        let data = privateData.get(this);
        if (data) {
            data.email = email;
        }
    }
}

let user1 = new User("Alice", "alice@example.com");
console.log(user1.getEmail()); // "alice@example.com"
// user1.email is not accessible directly
console.log(user1.email); // undefined

// Use case 2: Metadata storage
let metadata = new WeakMap();

function addMetadata(obj, data) {
    metadata.set(obj, data);
}

function getMetadata(obj) {
    return metadata.get(obj);
}

let obj1 = { id: 1 };
addMetadata(obj1, { created: new Date(), version: 1 });
console.log(getMetadata(obj1)); // { created: Date, version: 1 }

// When obj1 is garbage collected, metadata entry is also removed

// Use case 3: Caching computed values
let cache = new WeakMap();

function expensiveComputation(obj) {
    if (cache.has(obj)) {
        return cache.get(obj);
    }
    
    // Simulate expensive computation
    let result = obj.value * 2;
    cache.set(obj, result);
    return result;
}

let data1 = { value: 10 };
console.log(expensiveComputation(data1)); // 20 (computed)
console.log(expensiveComputation(data1)); // 20 (from cache)

// ============================================
// 2. WEAKSET - WEAK VALUE REFERENCES
// ============================================

// Create WeakSet
let weakSet = new WeakSet();

// Values must be objects (not primitives)
let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

// Check if value exists
console.log(weakSet.has(obj1)); // true

// Delete value
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false

// Cannot use primitives as values
// weakSet.add("string"); // TypeError: Invalid value used as weak set key
// weakSet.add(1); // TypeError

// ============================================
// WEAKSET LIMITATIONS
// ============================================

// No size property
// console.log(weakSet.size); // undefined

// No iteration methods
// for (let value of weakSet) { } // TypeError: weakSet is not iterable
// weakSet.forEach(...); // TypeError
// weakSet.values(); // TypeError

// No clear() method
// weakSet.clear(); // TypeError

// ============================================
// WEAKSET USE CASES
// ============================================

// Use case 1: Track object presence
let trackedObjects = new WeakSet();

function track(obj) {
    trackedObjects.add(obj);
}

function isTracked(obj) {
    return trackedObjects.has(obj);
}

let obj3 = { id: 1 };
track(obj3);
console.log(isTracked(obj3)); // true

// Use case 2: Prevent circular references
let visited = new WeakSet();

function traverse(obj) {
    if (visited.has(obj)) {
        return; // Already visited, prevent infinite loop
    }
    
    visited.add(obj);
    // Process object...
    console.log("Processing:", obj);
}

let circular = { id: 1 };
circular.self = circular; // Circular reference
traverse(circular); // Safe traversal

// Use case 3: Mark objects
let marked = new WeakSet();

function mark(obj) {
    marked.add(obj);
}

function isMarked(obj) {
    return marked.has(obj);
}

let obj4 = { data: "test" };
mark(obj4);
console.log(isMarked(obj4)); // true

// ============================================
// GARBAGE COLLECTION
// ============================================

// WeakMap/WeakSet allow garbage collection
// When object is no longer referenced, it can be garbage collected

function demonstrateGC() {
    let obj = { data: "temporary" };
    let weakMap = new WeakMap();
    weakMap.set(obj, "metadata");
    
    // obj is still referenced, so entry exists
    console.log(weakMap.has(obj)); // true
    
    // When function ends, obj goes out of scope
    // If obj is not referenced elsewhere, it can be garbage collected
    // WeakMap entry is automatically removed
}

demonstrateGC();

// Compare with regular Map (prevents garbage collection)
function demonstrateRegularMap() {
    let obj = { data: "temporary" };
    let map = new Map();
    map.set(obj, "metadata");
    
    // Even when obj goes out of scope, Map holds reference
    // obj cannot be garbage collected while in Map
    return map; // Map still holds reference to obj
}

// ============================================
// WEAKMAP VS MAP
// ============================================

/**
 * WEAKMAP:
 * - Keys must be objects
 * - Keys can be garbage collected
 * - No size property
 * - No iteration
 * - Use for: Private data, metadata, caching
 * 
 * MAP:
 * - Keys can be any type
 * - Keys prevent garbage collection
 * - Has size property
 * - Iterable
 * - Use for: General key-value storage
 */

// WeakMap: Garbage collectable
let weakMap2 = new WeakMap();
{
    let tempObj = {};
    weakMap2.set(tempObj, "data");
    // tempObj can be garbage collected after block
}

// Map: Prevents garbage collection
let map = new Map();
{
    let tempObj = {};
    map.set(tempObj, "data");
    // tempObj cannot be garbage collected (Map holds reference)
}

// ============================================
// WEAKSET VS SET
// ============================================

/**
 * WEAKSET:
 * - Values must be objects
 * - Values can be garbage collected
 * - No size property
 * - No iteration
 * - Use for: Tracking, marking objects
 * 
 * SET:
 * - Values can be any type
 * - Values prevent garbage collection
 * - Has size property
 * - Iterable
 * - Use for: Unique value collections
 */

// WeakSet: Garbage collectable
let weakSet2 = new WeakSet();
{
    let tempObj = {};
    weakSet2.add(tempObj);
    // tempObj can be garbage collected after block
}

// Set: Prevents garbage collection
let set = new Set();
{
    let tempObj = {};
    set.add(tempObj);
    // tempObj cannot be garbage collected (Set holds reference)
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Private class fields (before ES2022)
let privateFields = new WeakMap();

class Counter {
    constructor() {
        privateFields.set(this, { count: 0 });
    }
    
    increment() {
        let fields = privateFields.get(this);
        fields.count++;
    }
    
    getCount() {
        return privateFields.get(this).count;
    }
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // 1
// counter.count is not accessible

// Example 2: DOM element metadata
let elementData = new WeakMap();

function attachData(element, data) {
    elementData.set(element, data);
}

function getData(element) {
    return elementData.get(element);
}

// When DOM element is removed, metadata is automatically cleaned up

// Example 3: Object registry
let registry = new WeakSet();

function register(obj) {
    registry.add(obj);
}

function isRegistered(obj) {
    return registry.has(obj);
}

let obj5 = { id: 1 };
register(obj5);
console.log(isRegistered(obj5)); // true

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Cannot use primitives
// let weakMap = new WeakMap();
// weakMap.set("key", "value"); // TypeError

// 2. No iteration
// for (let [key, value] of weakMap) { } // TypeError

// 3. No size
// console.log(weakMap.size); // undefined

// 4. Keys are garbage collected when no other references
let weakMap3 = new WeakMap();
{
    let obj = {};
    weakMap3.set(obj, "data");
    // After block, obj can be garbage collected
}

// 5. Cannot check if entry was garbage collected
// There's no way to know if entry still exists after GC

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use WeakMap for private data
// ✅ Good: Private fields, metadata

// 2. Use WeakSet for tracking objects
// ✅ Good: Visited objects, marked objects

// 3. Don't use if you need iteration
// ❌ Bad: If you need to iterate, use Map/Set

// 4. Don't use if you need size
// ❌ Bad: If you need size, use Map/Set

// 5. Use when you want automatic cleanup
// ✅ Good: When objects should be garbage collected

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a WeakMap and add object keys with values
// 2. Use WeakMap methods: get, set, has, delete
// 3. Create a WeakSet and add objects
// 4. Use WeakSet methods: add, has, delete
// 5. Explain why WeakMap/WeakSet don't have size or iteration
// 6. Create a class that uses WeakMap for private data
// 7. Use WeakSet to track visited objects
// 8. Demonstrate garbage collection behavior (conceptually)
// 9. Explain when to use WeakMap vs Map
// 10. Explain when to use WeakSet vs Set


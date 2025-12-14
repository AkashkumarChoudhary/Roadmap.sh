/**
 * ============================================
 * OBJECT METHODS IN JAVASCRIPT
 * ============================================
 * 
 * WHY OBJECT METHODS?
 * --------------------
 * Object methods provide utilities for working with objects:
 * - Get keys, values, entries
 * - Create/merge objects
 * - Check properties
 * - Control property behavior
 * - Essential for object manipulation
 * 
 * WHAT ARE OBJECT METHODS?
 * -------------------------
 * Static methods on the Object constructor:
 * - Object.keys() - Get array of property keys
 * - Object.values() - Get array of property values
 * - Object.entries() - Get array of [key, value] pairs
 * - Object.assign() - Copy properties from one object to another
 * - Object.create() - Create object with specified prototype
 * - Object.freeze() - Prevent modifications
 * - Object.seal() - Prevent adding/removing properties
 * - hasOwnProperty() - Check if property is own (not inherited)
 */

'use strict';

// ============================================
// 1. OBJECT.KEYS()
// ============================================

// Returns array of object's own enumerable property names

let person = {
    name: "Alice",
    age: 30,
    city: "Boston"
};

let keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

// Iterate over keys
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});

// Count properties
let propertyCount = Object.keys(person).length;
console.log(propertyCount); // 3

// ============================================
// 2. OBJECT.VALUES()
// ============================================

// Returns array of object's own enumerable property values

let values = Object.values(person);
console.log(values); // ["Alice", 30, "Boston"]

// Sum numeric values
let scores = { math: 90, science: 85, english: 92 };
let total = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(total); // 267

// ============================================
// 3. OBJECT.ENTRIES()
// ============================================

// Returns array of [key, value] pairs

let entries = Object.entries(person);
console.log(entries);
// [["name", "Alice"], ["age", 30], ["city", "Boston"]]

// Iterate over entries
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Convert object to Map
let map = new Map(Object.entries(person));
console.log(map.get("name")); // "Alice"

// ============================================
// 4. OBJECT.ASSIGN()
// ============================================

// Copies properties from source objects to target object
// Returns target object (mutates target)

let target = { a: 1 };
let source = { b: 2, c: 3 };

Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

// Merge multiple objects
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };

Object.assign(obj1, obj2, obj3);
console.log(obj1); // { a: 1, b: 2, c: 3 }

// Clone object (shallow copy)
let original = { name: "Alice", age: 30 };
let clone = Object.assign({}, original);
clone.age = 31;
console.log(original.age); // 30 (unchanged)
console.log(clone.age); // 31

// Later properties override earlier ones
let merged = Object.assign({}, { a: 1, b: 2 }, { b: 3, c: 4 });
console.log(merged); // { a: 1, b: 3, c: 4 }

// ============================================
// 5. OBJECT.CREATE()
// ============================================

// Creates new object with specified prototype

let parent = {
    greet: function() {
        return "Hello";
    }
};

let child = Object.create(parent);
child.name = "Alice";
console.log(child.name); // "Alice"
console.log(child.greet()); // "Hello" (inherited)

// Create object with null prototype
let noProto = Object.create(null);
console.log(noProto.toString); // undefined (no Object.prototype)

// ============================================
// 6. OBJECT.FREEZE()
// ============================================

// Prevents adding, removing, or modifying properties

let frozen = { name: "Alice" };
Object.freeze(frozen);

// frozen.age = 30; // Silently fails (or throws in strict mode)
// delete frozen.name; // Silently fails
// frozen.name = "Bob"; // Silently fails

console.log(frozen); // { name: "Alice" } (unchanged)

// Check if frozen
console.log(Object.isFrozen(frozen)); // true

// ============================================
// 7. OBJECT.SEAL()
// ============================================

// Prevents adding or removing properties, but allows modification

let sealed = { name: "Alice" };
Object.seal(sealed);

sealed.name = "Bob"; // Allowed
// sealed.age = 30; // Silently fails (can't add)
// delete sealed.name; // Silently fails (can't delete)

console.log(sealed); // { name: "Bob" }

// Check if sealed
console.log(Object.isSealed(sealed)); // true

// ============================================
// 8. HASOWNPROPERTY()
// ============================================

// Checks if property is own property (not inherited)

let obj = {
    ownProp: "value"
};

console.log(obj.hasOwnProperty("ownProp")); // true
console.log(obj.hasOwnProperty("toString")); // false (inherited)

// Safer way (in case hasOwnProperty is overridden)
console.log(Object.prototype.hasOwnProperty.call(obj, "ownProp")); // true

// Or use Object.hasOwn() (ES2022)
// console.log(Object.hasOwn(obj, "ownProp")); // true

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Iterate over object
function iterateObject(obj) {
    Object.keys(obj).forEach(key => {
        console.log(`${key}: ${obj[key]}`);
    });
}

iterateObject(person);

// Example 2: Filter object properties
function filterObject(obj, predicate) {
    return Object.entries(obj)
        .filter(([key, value]) => predicate(key, value))
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
}

let filtered = filterObject(person, (key, value) => typeof value === "string");
console.log(filtered); // { name: "Alice", city: "Boston" }

// Example 3: Map object values
function mapObject(obj, mapper) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[key] = mapper(value);
        return acc;
    }, {});
}

let doubled = mapObject({ a: 1, b: 2, c: 3 }, x => x * 2);
console.log(doubled); // { a: 2, b: 4, c: 6

// Example 4: Merge with defaults
function mergeWithDefaults(obj, defaults) {
    return Object.assign({}, defaults, obj);
}

let config = mergeWithDefaults({ port: 3000 }, { host: "localhost", port: 8080 });
console.log(config); // { host: "localhost", port: 3000 }

// Example 5: Clone object (shallow)
function cloneObject(obj) {
    return Object.assign({}, obj);
}

let cloned = cloneObject(person);
cloned.age = 31;
console.log(person.age); // 30 (unchanged)

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Object.keys() only returns own enumerable properties
function Parent() {
    this.parentProp = "parent";
}

function Child() {
    this.childProp = "child";
}

Child.prototype = new Parent();
let child = new Child();

console.log(Object.keys(child)); // ["childProp"] (not "parentProp")

// 2. Object.assign() does shallow copy
let original2 = {
    nested: { value: 1 }
};
let copy = Object.assign({}, original2);
copy.nested.value = 2;
console.log(original2.nested.value); // 2 (shared reference!)

// 3. Object.freeze() is shallow
let obj2 = {
    nested: { value: 1 }
};
Object.freeze(obj2);
obj2.nested.value = 2; // Allowed (nested object not frozen)
console.log(obj2.nested.value); // 2

// 4. Object.assign() with null/undefined sources
let target2 = {};
Object.assign(target2, null, undefined, { a: 1 });
console.log(target2); // { a: 1 } (null/undefined ignored)

// 5. Object.keys() on non-objects
console.log(Object.keys("hello")); // ["0", "1", "2", "3", "4"]
console.log(Object.keys(123)); // []
console.log(Object.keys(null)); // TypeError

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use Object.keys() to iterate over own properties
// ✅ Good: Object.keys(obj).forEach(key => ...)

// 2. Use Object.entries() for key-value iteration
// ✅ Good: Object.entries(obj).forEach(([key, value]) => ...)

// 3. Use Object.assign() for merging (or spread operator)
// ✅ Good: Object.assign({}, obj1, obj2)
// ✅ Also good: { ...obj1, ...obj2 }

// 4. Use Object.freeze() for immutable objects
// ✅ Good: const config = Object.freeze({ ... });

// 5. Check hasOwnProperty() when iterating
// ✅ Good: if (obj.hasOwnProperty(key)) { ... }

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Iterate object
Object.keys(obj).forEach(key => {
    // Process key
});

// Pattern 2: Clone object
let clone = Object.assign({}, original);

// Pattern 3: Merge objects
let merged = Object.assign({}, defaultObj, userObj);

// Pattern 4: Filter object
let filtered2 = Object.entries(obj)
    .filter(([key, value]) => condition)
    .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

// Pattern 5: Map object values
let mapped = Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = transform(value);
    return acc;
}, {});

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use Object.keys() to get all property names of an object
// 2. Use Object.values() to get all property values
// 3. Use Object.entries() to get key-value pairs
// 4. Use Object.assign() to merge two objects
// 5. Use Object.assign() to create a shallow copy of an object
// 6. Use Object.freeze() to make an object immutable
// 7. Use hasOwnProperty() to check if a property exists
// 8. Iterate over an object using Object.entries()
// 9. Create a function that filters object properties
// 10. Explain the difference between Object.freeze() and Object.seal()


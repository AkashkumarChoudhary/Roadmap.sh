/**
 * ============================================
 * MODERN ITERATION IN JAVASCRIPT
 * ============================================
 * 
 * WHY MODERN ITERATION?
 * ---------------------
 * Modern iteration methods (for...of, for...in) provide cleaner, more
 * readable ways to iterate over collections. They're simpler than traditional
 * for loops and less error-prone.
 * 
 * WHAT ARE MODERN ITERATION METHODS?
 * -----------------------------------
 * ES6+ iteration constructs:
 * - for...of - Iterates over iterable values (arrays, strings, etc.)
 * - for...in - Iterates over object property keys
 * 
 * KEY DIFFERENCES:
 * ---------------
 * - for...of: Gets VALUES from iterables (arrays, strings, Maps, Sets)
 * - for...in: Gets KEYS from objects (property names)
 * - for...of: Works with iterables (implements Symbol.iterator)
 * - for...in: Works with any object (enumerable properties)
 */

'use strict';

// ============================================
// 1. FOR...OF LOOP
// ============================================

// Iterates over iterable values (arrays, strings, etc.)

// With arrays - gets values directly
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit); // "apple", "banana", "orange"
}

// No need for index or length!
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num * 2); // 2, 4, 6, 8, 10
}

// With strings - iterates over characters
let text = "hello";
for (let char of text) {
    console.log(char); // "h", "e", "l", "l", "o"
}

// ============================================
// FOR...OF WITH ARRAYS
// ============================================

let colors = ["red", "green", "blue"];

// Get values
for (let color of colors) {
    console.log(color); // "red", "green", "blue"
}

// Get index and value using entries()
for (let [index, color] of colors.entries()) {
    console.log(`Index ${index}: ${color}`);
}

// Modify array (be careful - modifies original)
let nums = [1, 2, 3, 4, 5];
for (let num of nums) {
    // Can't directly modify, but can access
    console.log(num);
}

// To modify, use traditional for loop or map()
let doubled = [];
for (let num of nums) {
    doubled.push(num * 2);
}
console.log(doubled); // [2, 4, 6, 8, 10]

// ============================================
// FOR...OF WITH STRINGS
// ============================================

let message = "JavaScript";
for (let char of message) {
    console.log(char); // J, a, v, a, S, c, r, i, p, t
}

// Count characters
let count = 0;
for (let char of message) {
    if (char === "a") {
        count++;
    }
}
console.log(`Found 'a' ${count} times`); // 2

// ============================================
// FOR...OF WITH OTHER ITERABLES
// ============================================

// With Set
let uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5]);
for (let num of uniqueNumbers) {
    console.log(num); // 1, 2, 3, 4, 5 (no duplicates)
}

// With Map
let userMap = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
]);

for (let [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}

// With NodeList (DOM)
// let elements = document.querySelectorAll('.item');
// for (let element of elements) {
//     console.log(element);
// }

// ============================================
// 2. FOR...IN LOOP
// ============================================

// Iterates over enumerable property keys of an object

// Basic object iteration
let person = {
    name: "Alice",
    age: 30,
    city: "Boston"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30
// city: Boston

// ============================================
// FOR...IN WITH OBJECTS
// ============================================

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// Get keys
for (let key in car) {
    console.log(key); // "make", "model", "year"
}

// Get values
for (let key in car) {
    console.log(car[key]); // "Toyota", "Camry", 2020
}

// Get both
for (let key in car) {
    console.log(`${key} = ${car[key]}`);
}

// ============================================
// FOR...IN WITH ARRAYS (NOT RECOMMENDED)
// ============================================

let arr = ["a", "b", "c"];

// for...in works with arrays, but NOT recommended!
for (let index in arr) {
    console.log(index); // "0", "1", "2" (strings, not numbers!)
    console.log(arr[index]); // "a", "b", "c"
}

// Problems with for...in on arrays:
// 1. Iterates over all enumerable properties (including non-index properties)
let arr2 = ["a", "b", "c"];
arr2.customProperty = "custom";
for (let key in arr2) {
    console.log(key); // "0", "1", "2", "customProperty" (unexpected!)
}

// 2. Order not guaranteed in all cases
// 3. Keys are strings, not numbers

// ✅ Use for...of for arrays instead
for (let value of arr) {
    console.log(value); // "a", "b", "c" (correct)
}

// ============================================
// FOR...IN EDGE CASES
// ============================================

// Inherited properties
function Parent() {
    this.parentProp = "parent";
}

function Child() {
    this.childProp = "child";
}

Child.prototype = new Parent();
let child = new Child();

// for...in includes inherited enumerable properties
for (let key in child) {
    console.log(key); // "childProp", "parentProp"
}

// To only get own properties, use hasOwnProperty()
for (let key in child) {
    if (child.hasOwnProperty(key)) {
        console.log(key); // Only "childProp"
    }
}

// Or use Object.keys()
for (let key of Object.keys(child)) {
    console.log(key); // Only "childProp"
}

// ============================================
// COMPARISON: FOR...OF VS FOR...IN
// ============================================

let array = ["a", "b", "c"];

// for...of - gets VALUES
for (let value of array) {
    console.log(value); // "a", "b", "c"
}

// for...in - gets KEYS (indices for arrays)
for (let key in array) {
    console.log(key); // "0", "1", "2" (strings!)
    console.log(array[key]); // "a", "b", "c"
}

// With objects
let obj = { a: 1, b: 2, c: 3 };

// for...in - gets KEYS
for (let key in obj) {
    console.log(key); // "a", "b", "c"
    console.log(obj[key]); // 1, 2, 3
}

// for...of doesn't work directly with objects
// for (let value of obj) { // TypeError: obj is not iterable
//     console.log(value);
// }

// Use Object.values() to iterate object values
for (let value of Object.values(obj)) {
    console.log(value); // 1, 2, 3
}

// Use Object.keys() to iterate object keys
for (let key of Object.keys(obj)) {
    console.log(key); // "a", "b", "c"
}

// Use Object.entries() to iterate key-value pairs
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`); // "a: 1", "b: 2", "c: 3"
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Sum array values
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Example 2: Find maximum
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findMax([3, 7, 2, 9, 1])); // 9

// Example 3: Count character occurrences
function countChars(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}
console.log(countChars("hello", "l")); // 2

// Example 4: Object property manipulation
function capitalizeObjectValues(obj) {
    let result = {};
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            result[key] = obj[key].toUpperCase();
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}

let data = { name: "john", age: 30, city: "nyc" };
console.log(capitalizeObjectValues(data)); // { name: "JOHN", age: 30, city: "NYC" }

// Example 5: Filter object properties
function filterObject(obj, predicate) {
    let result = {};
    for (let key in obj) {
        if (predicate(key, obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}

let user = { name: "Alice", age: 25, email: "alice@example.com" };
let filtered = filterObject(user, (key, value) => typeof value === "string");
console.log(filtered); // { name: "Alice", email: "alice@example.com" }

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use for...of for arrays (not for...in)
// ✅ Good: for (let item of array) { ... }
// ❌ Bad: for (let index in array) { ... }

// 2. Use for...in for objects (when you need keys)
// ✅ Good: for (let key in object) { ... }

// 3. Use Object.keys/values/entries() for objects with for...of
// ✅ Good: for (let value of Object.values(obj)) { ... }

// 4. Check hasOwnProperty() if you only want own properties
// ✅ Good: if (obj.hasOwnProperty(key)) { ... }

// 5. Use for...of for strings, Sets, Maps
// ✅ Good: for (let char of string) { ... }

// 6. Don't modify objects during iteration
// ❌ Bad: Adding/deleting properties while iterating

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Iterate array values
for (let item of array) {
    // Process item
}

// Pattern 2: Iterate array with index
for (let [index, item] of array.entries()) {
    // Process index and item
}

// Pattern 3: Iterate object keys
for (let key in object) {
    // Process key and object[key]
}

// Pattern 4: Iterate object values
for (let value of Object.values(object)) {
    // Process value
}

// Pattern 5: Iterate object entries
for (let [key, value] of Object.entries(object)) {
    // Process key and value
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. for...in includes inherited properties
let obj1 = { a: 1 };
let obj2 = Object.create(obj1);
obj2.b = 2;

for (let key in obj2) {
    console.log(key); // "b", "a" (includes inherited)
}

// 2. for...in order not guaranteed for all cases
// Generally works in insertion order, but not guaranteed

// 3. for...of doesn't work with plain objects
// let obj = { a: 1, b: 2 };
// for (let value of obj) { // TypeError!
//     console.log(value);
// }

// 4. Sparse arrays with for...in
let sparse = [];
sparse[0] = "a";
sparse[5] = "b";
sparse[10] = "c";

for (let index in sparse) {
    console.log(index); // "0", "5", "10" (only defined indices)
}

// 5. String iteration with for...of handles Unicode correctly
let emoji = "👋🌍";
for (let char of emoji) {
    console.log(char); // "👋", "🌍" (correct Unicode handling)
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use for...of to iterate through an array and print each value
// 2. Use for...of to iterate through a string and count vowels
// 3. Use for...in to iterate through an object and print all key-value pairs
// 4. Use for...of with Object.entries() to iterate object properties
// 5. Create a function that sums all values in an array using for...of
// 6. Use for...of to find the longest string in an array
// 7. Use for...in to filter object properties based on a condition
// 8. Compare for...of vs for...in with the same array
// 9. Use for...of with a Set to find unique values
// 10. Create a function that capitalizes all string values in an object using for...in


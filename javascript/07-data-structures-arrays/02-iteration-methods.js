/**
 * ============================================
 * ARRAY ITERATION METHODS IN JAVASCRIPT
 * ============================================
 * 
 * WHY ITERATION METHODS?
 * ----------------------
 * Iteration methods provide functional programming patterns for arrays:
 * - More readable and declarative code
 * - Avoid manual loops and index management
 * - Chainable operations
 * - Non-mutating (most methods)
 * 
 * WHAT ARE ITERATION METHODS?
 * ---------------------------
 * Methods that iterate over array elements:
 * - forEach() - Execute function for each element
 * - map() - Transform each element, return new array
 * - filter() - Select elements that pass test
 * - reduce() - Reduce array to single value
 * - find() - Find first element that passes test
 * - findIndex() - Find index of first element that passes test
 * - some() - Check if any element passes test
 * - every() - Check if all elements pass test
 * 
 * KEY CONCEPTS:
 * ------------
 * - Callback functions
 * - Return values
 * - Chaining methods
 * - Non-mutating (except forEach)
 */

'use strict';

// ============================================
// 1. FOREACH - EXECUTE FOR EACH ELEMENT
// ============================================

// Executes function for each element
// Returns undefined
// Doesn't mutate array (but callback can)

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2); // 2, 4, 6, 8, 10
});

// With arrow function
numbers.forEach(num => console.log(num));

// With index
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// ============================================
// 2. MAP - TRANSFORM EACH ELEMENT
// ============================================

// Creates new array with results of calling function on each element
// Returns new array (same length)
// Doesn't mutate original array

let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)

// With arrow function
let squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

// Transform objects
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

let names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob"]

// ============================================
// 3. FILTER - SELECT ELEMENTS
// ============================================

// Creates new array with elements that pass test
// Returns new array (may be shorter)
// Doesn't mutate original array

let evens = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evens); // [2, 4]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)

// With arrow function
let odds = numbers.filter(n => n % 2 !== 0);
console.log(odds); // [1, 3, 5]

// Filter objects
let adults = users.filter(user => user.age >= 18);
console.log(adults); // All users (both are adults)

// ============================================
// 4. REDUCE - REDUCE TO SINGLE VALUE
// ============================================

// Reduces array to single value
// Syntax: reduce(callback, initialValue)
// Returns single value
// Doesn't mutate original array

// Sum of numbers
let sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);
console.log(sum); // 15

// With arrow function
let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120

// Find maximum
let max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);
console.log(max); // 5

// Flatten array
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]

// Group by property
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

let grouped = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person);
    return acc;
}, {});
console.log(grouped);
// { 25: [{name: "Alice", age: 25}, {name: "Charlie", age: 25}], 30: [{name: "Bob", age: 30}] }

// ============================================
// 5. FIND - FIND FIRST MATCHING ELEMENT
// ============================================

// Returns first element that passes test
// Returns element or undefined
// Doesn't mutate original array

let found = numbers.find(function(num) {
    return num > 3;
});
console.log(found); // 4

// With arrow function
let user = users.find(u => u.age > 25);
console.log(user); // { name: "Bob", age: 30 }

// Not found
let notFound = numbers.find(n => n > 10);
console.log(notFound); // undefined

// ============================================
// 6. FINDINDEX - FIND INDEX OF FIRST MATCH
// ============================================

// Returns index of first element that passes test
// Returns index or -1
// Doesn't mutate original array

let index = numbers.findIndex(function(num) {
    return num > 3;
});
console.log(index); // 3

// With arrow function
let userIndex = users.findIndex(u => u.name === "Bob");
console.log(userIndex); // 1

// Not found
let notFoundIndex = numbers.findIndex(n => n > 10);
console.log(notFoundIndex); // -1

// ============================================
// 7. SOME - CHECK IF ANY ELEMENT PASSES
// ============================================

// Returns true if at least one element passes test
// Returns boolean
// Doesn't mutate original array

let hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});
console.log(hasEven); // true

// With arrow function
let hasAdult = users.some(u => u.age >= 18);
console.log(hasAdult); // true

// All fail
let allFail = numbers.some(n => n > 10);
console.log(allFail); // false

// ============================================
// 8. EVERY - CHECK IF ALL ELEMENTS PASS
// ============================================

// Returns true if all elements pass test
// Returns boolean
// Doesn't mutate original array

let allEven = numbers.every(function(num) {
    return num % 2 === 0;
});
console.log(allEven); // false

// With arrow function
let allAdults = users.every(u => u.age >= 18);
console.log(allAdults); // true

// Empty array
let empty = [];
console.log(empty.every(() => false)); // true (vacuous truth)

// ============================================
// CHAINING METHODS
// ============================================

// Methods can be chained together
let result = numbers
    .filter(n => n % 2 === 0) // [2, 4]
    .map(n => n * 2) // [4, 8]
    .reduce((acc, curr) => acc + curr, 0); // 12

console.log(result); // 12

// Complex chain
let complex = users
    .filter(u => u.age >= 25) // Filter adults
    .map(u => u.name.toUpperCase()) // Get names in uppercase
    .sort(); // Sort alphabetically

console.log(complex); // ["ALICE", "BOB"]

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Calculate average
function average(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
console.log(average([1, 2, 3, 4, 5])); // 3

// Example 2: Remove duplicates
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]

// Example 3: Count occurrences
function countOccurrences(arr, value) {
    return arr.reduce((count, item) => {
        return item === value ? count + 1 : count;
    }, 0);
}
console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2)); // 3

// Example 4: Partition array
function partition(arr, predicate) {
    return arr.reduce((acc, item) => {
        acc[predicate(item) ? 0 : 1].push(item);
        return acc;
    }, [[], []]);
}
let [evens2, odds2] = partition([1, 2, 3, 4, 5], n => n % 2 === 0);
console.log(evens2); // [2, 4]
console.log(odds2); // [1, 3, 5]

// Example 5: Transform and filter
let products = [
    { name: "Apple", price: 1.5, category: "fruit" },
    { name: "Banana", price: 0.5, category: "fruit" },
    { name: "Carrot", price: 1.0, category: "vegetable" }
];

let expensiveFruits = products
    .filter(p => p.category === "fruit" && p.price > 1.0)
    .map(p => p.name);
console.log(expensiveFruits); // ["Apple"]

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. forEach doesn't return value
let forEachResult = numbers.forEach(n => n * 2);
console.log(forEachResult); // undefined

// 2. map always returns array of same length
let mapped = [1, 2, 3].map(n => n * 2);
console.log(mapped.length); // 3 (same length)

// 3. filter can return empty array
let filtered = [1, 2, 3].filter(n => n > 10);
console.log(filtered); // [] (empty array)

// 4. reduce without initial value uses first element
let sum2 = [1, 2, 3].reduce((acc, curr) => acc + curr);
console.log(sum2); // 6 (1 + 2 + 3)

// 5. Empty array with reduce (no initial value)
// [].reduce((acc, curr) => acc + curr); // TypeError

// 6. some() returns false for empty array
console.log([].some(() => true)); // false

// 7. every() returns true for empty array
console.log([].every(() => false)); // true (vacuous truth)

// 8. find() returns undefined if not found
let notFound2 = [1, 2, 3].find(n => n > 10);
console.log(notFound2); // undefined

// 9. findIndex() returns -1 if not found
let notFoundIndex2 = [1, 2, 3].findIndex(n => n > 10);
console.log(notFoundIndex2); // -1

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use map() when transforming elements
// ✅ Good: arr.map(x => x * 2)
// ❌ Bad: arr.forEach(x => x * 2) (doesn't return)

// 2. Use filter() when selecting elements
// ✅ Good: arr.filter(x => x > 5)

// 3. Use reduce() for aggregation
// ✅ Good: arr.reduce((acc, curr) => acc + curr, 0)

// 4. Use find() instead of filter()[0]
// ✅ Good: arr.find(x => x > 5)
// ⚠️ Less efficient: arr.filter(x => x > 5)[0]

// 5. Chain methods for readability
// ✅ Good: arr.filter().map().reduce()

// 6. Use some()/every() for boolean checks
// ✅ Good: arr.some(x => x > 5)
// ❌ Bad: arr.filter(x => x > 5).length > 0

// ============================================
// COMPARISON TABLE
// ============================================

/**
 * METHOD    | RETURNS        | MUTATES | USE CASE
 * ---------|----------------|---------|------------------
 * forEach  | undefined      | No      | Side effects
 * map      | New array      | No      | Transform
 * filter   | New array      | No      | Select
 * reduce   | Single value   | No      | Aggregate
 * find     | Element/undefined | No  | Find first match
 * findIndex| Index/-1        | No      | Find index
 * some     | Boolean        | No      | Any passes
 * every    | Boolean        | No      | All pass
 */

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use forEach() to log each element of an array
// 2. Use map() to double each number in an array
// 3. Use filter() to get all even numbers
// 4. Use reduce() to calculate the sum of an array
// 5. Use find() to find the first number greater than 5
// 6. Use findIndex() to find the index of a specific value
// 7. Use some() to check if any number is greater than 10
// 8. Use every() to check if all numbers are positive
// 9. Chain methods: filter even numbers, double them, then sum
// 10. Use reduce() to create an object from an array


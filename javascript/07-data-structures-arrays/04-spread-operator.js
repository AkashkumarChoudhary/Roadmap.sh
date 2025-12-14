/**
 * ============================================
 * SPREAD OPERATOR WITH ARRAYS
 * ============================================
 * 
 * WHY SPREAD OPERATOR?
 * --------------------
 * The spread operator (...) provides a concise way to:
 * - Copy arrays
 * - Combine arrays
 * - Pass array elements as arguments
 * - Expand arrays in place
 * - Create new arrays from existing ones
 * 
 * WHAT IS THE SPREAD OPERATOR?
 * -----------------------------
 * The spread operator (...) expands an iterable (like array) into individual elements:
 * - Used in array literals
 * - Used in function calls
 * - Creates shallow copies
 * - ES6 feature
 * 
 * KEY CONCEPTS:
 * ------------
 * - Expands iterables
 * - Shallow copying
 * - Combining arrays
 * - Function arguments
 */

'use strict';

// ============================================
// BASIC SPREAD SYNTAX
// ============================================

// Spread operator expands array into individual elements
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // Copy array

console.log(arr2); // [1, 2, 3]
console.log(arr1 === arr2); // false (different arrays)

// ============================================
// COPYING ARRAYS
// ============================================

// Create shallow copy
let original = [1, 2, 3, 4, 5];
let copy = [...original];

copy.push(6);
console.log(original); // [1, 2, 3, 4, 5] (unchanged)
console.log(copy); // [1, 2, 3, 4, 5, 6]

// Shallow copy - nested arrays are shared
let nested = [[1, 2], [3, 4]];
let nestedCopy = [...nested];
nestedCopy[0][0] = 99;
console.log(nested); // [[99, 2], [3, 4]] (shared reference!)

// ============================================
// COMBINING ARRAYS
// ============================================

// Combine multiple arrays
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let combined = [...arr3, ...arr4];

console.log(combined); // [1, 2, 3, 4, 5, 6]

// Combine with additional elements
let combined2 = [0, ...arr3, 3.5, ...arr4, 7];
console.log(combined2); // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// Multiple arrays
let arr5 = [1, 2];
let arr6 = [3, 4];
let arr7 = [5, 6];
let all = [...arr5, ...arr6, ...arr7];
console.log(all); // [1, 2, 3, 4, 5, 6]

// ============================================
// FUNCTION ARGUMENTS
// ============================================

// Pass array elements as function arguments
function add(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
console.log(add(...numbers)); // 6 (equivalent to add(1, 2, 3))

// Math.max with spread
let values = [5, 10, 3, 8, 2];
let max = Math.max(...values);
console.log(max); // 10

// Without spread (old way):
let maxOld = Math.max.apply(null, values);

// ============================================
// CREATING NEW ARRAYS
// ============================================

// Add element to beginning
let arr8 = [2, 3, 4];
let withStart = [1, ...arr8];
console.log(withStart); // [1, 2, 3, 4]

// Add element to end
let withEnd = [...arr8, 5];
console.log(withEnd); // [2, 3, 4, 5]

// Insert element in middle
let arr9 = [1, 2, 4, 5];
let withMiddle = [1, 2, 3, ...arr9.slice(2)];
console.log(withMiddle); // [1, 2, 3, 4, 5]

// Or:
let withMiddle2 = [...arr9.slice(0, 2), 3, ...arr9.slice(2)];
console.log(withMiddle2); // [1, 2, 3, 4, 5]

// ============================================
// REMOVING DUPLICATES
// ============================================

// Combine and remove duplicates
let arr10 = [1, 2, 3];
let arr11 = [3, 4, 5];
let unique = [...new Set([...arr10, ...arr11])];
console.log(unique); // [1, 2, 3, 4, 5]

// ============================================
// CONVERTING ITERABLES TO ARRAYS
// ============================================

// Convert string to array
let str = "hello";
let chars = [...str];
console.log(chars); // ["h", "e", "l", "l", "o"]

// Convert NodeList to array
// let nodeList = document.querySelectorAll('div');
// let array = [...nodeList];

// Convert arguments to array (in traditional functions)
function traditional() {
    return [...arguments];
}
console.log(traditional(1, 2, 3)); // [1, 2, 3]

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Clone and modify
function addItem(arr, item) {
    return [...arr, item];
}

let original2 = [1, 2, 3];
let modified = addItem(original2, 4);
console.log(original2); // [1, 2, 3] (unchanged)
console.log(modified); // [1, 2, 3, 4]

// Example 2: Merge arrays without mutation
function mergeArrays(...arrays) {
    return [].concat(...arrays);
    // Or: return arrays.flat();
    // Or: return arrays.reduce((acc, arr) => [...acc, ...arr], []);
}

let merged = mergeArrays([1, 2], [3, 4], [5, 6]);
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Example 3: Insert element at index
function insertAt(arr, index, ...items) {
    return [
        ...arr.slice(0, index),
        ...items,
        ...arr.slice(index)
    ];
}

let arr12 = [1, 2, 3, 4];
let inserted = insertAt(arr12, 2, "a", "b");
console.log(inserted); // [1, 2, "a", "b", 3, 4]

// Example 4: Remove element (non-mutating)
function removeAt(arr, index) {
    return [
        ...arr.slice(0, index),
        ...arr.slice(index + 1)
    ];
}

let arr13 = [1, 2, 3, 4, 5];
let removed = removeAt(arr13, 2);
console.log(removed); // [1, 2, 4, 5]
console.log(arr13); // [1, 2, 3, 4, 5] (unchanged)

// Example 5: Flatten nested arrays (one level)
function flatten(arr) {
    return [].concat(...arr);
}

let nested2 = [[1, 2], [3, 4], [5, 6]];
let flat = flatten(nested2);
console.log(flat); // [1, 2, 3, 4, 5, 6]

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Spread creates shallow copy
let original3 = [[1, 2], [3, 4]];
let copy2 = [...original3];
copy2[0][0] = 99;
console.log(original3); // [[99, 2], [3, 4]] (shared reference!)

// Deep copy requires other methods
let deepCopy = JSON.parse(JSON.stringify(original3)); // For simple objects

// 2. Spread with empty array
let empty = [];
let spread = [...empty, 1, 2];
console.log(spread); // [1, 2]

// 3. Spread with non-iterable
// let notIterable = 5;
// let spread2 = [...notIterable]; // TypeError: notIterable is not iterable

// 4. Multiple spreads
let arr14 = [1, 2];
let arr15 = [3, 4];
let combined3 = [...arr14, ...arr15, 5, 6];
console.log(combined3); // [1, 2, 3, 4, 5, 6]

// 5. Spread in object (ES2018)
let obj = { a: 1, b: 2 };
// let arr16 = [...obj]; // TypeError: obj is not iterable
// But: let obj2 = { ...obj }; // Works (object spread)

// 6. Spread with undefined/null
// let spread3 = [...undefined]; // TypeError
let safe = [...(undefined || [])];
console.log(safe); // []

// ============================================
// SPREAD VS OTHER METHODS
// ============================================

// Copy array
let arr17 = [1, 2, 3];
let copy3 = [...arr17]; // Spread
let copy4 = arr17.slice(); // slice()
let copy5 = Array.from(arr17); // Array.from()

// All create shallow copies

// Combine arrays
let arr18 = [1, 2];
let arr19 = [3, 4];
let combined4 = [...arr18, ...arr19]; // Spread
let combined5 = arr18.concat(arr19); // concat()
let combined6 = [].concat(arr18, arr19); // concat()

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use spread for copying arrays
// ✅ Good: let copy = [...original];

// 2. Use spread for combining arrays
// ✅ Good: let combined = [...arr1, ...arr2];

// 3. Use spread for function arguments
// ✅ Good: Math.max(...numbers);

// 4. Be aware of shallow copy limitation
// ⚠️ Warning: Nested arrays/objects are shared

// 5. Use spread for non-mutating operations
// ✅ Good: return [...arr, newItem];

// 6. Prefer spread over concat for readability
// ✅ Good: [...arr1, ...arr2]
// ⚠️ Acceptable: arr1.concat(arr2)

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Copy array
let copy6 = [...original];

// Pattern 2: Combine arrays
let combined7 = [...arr1, ...arr2];

// Pattern 3: Add to beginning
let withStart2 = [newItem, ...arr];

// Pattern 4: Add to end
let withEnd2 = [...arr, newItem];

// Pattern 5: Function arguments
func(...args);

// Pattern 6: Convert iterable to array
let array = [...iterable];

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use spread operator to copy an array
// 2. Use spread to combine two arrays
// 3. Use spread to pass array elements as function arguments
// 4. Create a new array with elements added at the beginning using spread
// 5. Create a new array with elements added at the end using spread
// 6. Use spread to convert a string to an array of characters
// 7. Combine multiple arrays using spread operator
// 8. Use spread with Math.max() to find the maximum value
// 9. Create a function that merges arrays without mutating originals
// 10. Explain the difference between shallow copy and deep copy with spread


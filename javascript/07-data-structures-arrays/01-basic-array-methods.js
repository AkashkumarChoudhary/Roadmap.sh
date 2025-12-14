/**
 * ============================================
 * BASIC ARRAY METHODS IN JAVASCRIPT
 * ============================================
 * 
 * WHY ARRAY METHODS?
 * ------------------
 * Arrays are fundamental data structures. Basic methods allow you to:
 * - Add and remove elements
 * - Extract portions of arrays
 * - Modify array contents
 * - Work with array data efficiently
 * 
 * WHAT ARE BASIC ARRAY METHODS?
 * -----------------------------
 * Methods that modify or extract data from arrays:
 * - push() - Add element(s) to end
 * - pop() - Remove element from end
 * - shift() - Remove element from beginning
 * - unshift() - Add element(s) to beginning
 * - splice() - Add/remove elements at any position
 * - slice() - Extract portion of array (non-mutating)
 * 
 * KEY CONCEPTS:
 * ------------
 * - Mutating methods: Change original array
 * - Non-mutating methods: Return new array/value
 * - Index-based operations
 */

'use strict';

// ============================================
// 1. PUSH - ADD TO END
// ============================================

// Adds one or more elements to the end of array
// Returns new length of array
// Mutates original array

let fruits = ["apple", "banana"];
let length = fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]
console.log(length); // 3

// Push multiple elements
fruits.push("grape", "mango");
console.log(fruits); // ["apple", "banana", "orange", "grape", "mango"]

// ============================================
// 2. POP - REMOVE FROM END
// ============================================

// Removes last element from array
// Returns removed element
// Mutates original array

let numbers = [1, 2, 3, 4, 5];
let last = numbers.pop();
console.log(numbers); // [1, 2, 3, 4]
console.log(last); // 5

// Pop from empty array
let empty = [];
let result = empty.pop();
console.log(result); // undefined

// ============================================
// 3. SHIFT - REMOVE FROM BEGINNING
// ============================================

// Removes first element from array
// Returns removed element
// Mutates original array
// Shifts all elements to left (reindexes)

let arr = [1, 2, 3, 4, 5];
let first = arr.shift();
console.log(arr); // [2, 3, 4, 5]
console.log(first); // 1

// Shift from empty array
let empty2 = [];
let result2 = empty2.shift();
console.log(result2); // undefined

// ============================================
// 4. UNSHIFT - ADD TO BEGINNING
// ============================================

// Adds one or more elements to beginning of array
// Returns new length of array
// Mutates original array
// Shifts all elements to right (reindexes)

let colors = ["blue", "green"];
let newLength = colors.unshift("red");
console.log(colors); // ["red", "blue", "green"]
console.log(newLength); // 3

// Unshift multiple elements
colors.unshift("yellow", "orange");
console.log(colors); // ["yellow", "orange", "red", "blue", "green"]

// ============================================
// 5. SPLICE - ADD/REMOVE AT ANY POSITION
// ============================================

// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// - start: Index to start at
// - deleteCount: Number of elements to remove
// - item1, item2, ...: Elements to add
// Returns array of removed elements
// Mutates original array

let arr2 = [1, 2, 3, 4, 5];

// Remove elements (start at index 2, remove 2 elements)
let removed = arr2.splice(2, 2);
console.log(arr2); // [1, 2, 5]
console.log(removed); // [3, 4]

// Add elements (start at index 1, remove 0, add elements)
arr2.splice(1, 0, "a", "b");
console.log(arr2); // [1, "a", "b", 2, 5]

// Replace elements (start at index 2, remove 1, add new)
arr2.splice(2, 1, "c");
console.log(arr2); // [1, "a", "c", 2, 5]

// Remove from end (negative index)
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(-2, 1); // Remove 1 element from 2nd to last
console.log(arr3); // [1, 2, 3, 5]

// ============================================
// 6. SLICE - EXTRACT PORTION (NON-MUTATING)
// ============================================

// Syntax: array.slice(start, end)
// - start: Start index (inclusive)
// - end: End index (exclusive)
// Returns new array (doesn't modify original)

let original = [1, 2, 3, 4, 5];

// Extract portion
let portion = original.slice(1, 4);
console.log(portion); // [2, 3, 4]
console.log(original); // [1, 2, 3, 4, 5] (unchanged)

// Copy entire array
let copy = original.slice();
console.log(copy); // [1, 2, 3, 4, 5]
console.log(copy === original); // false (different arrays)

// Extract from start
let fromStart = original.slice(2);
console.log(fromStart); // [3, 4, 5]

// Extract from end (negative index)
let fromEnd = original.slice(-3);
console.log(fromEnd); // [3, 4, 5]

// Extract last 2 elements
let lastTwo = original.slice(-2);
console.log(lastTwo); // [4, 5]

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Stack (LIFO - Last In First Out)
let stack = [];
stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]
let top = stack.pop(); // 3, stack: [1, 2]

// Example 2: Queue (FIFO - First In First Out)
let queue = [];
queue.push("first"); // ["first"]
queue.push("second"); // ["first", "second"]
queue.push("third"); // ["first", "second", "third"]
let next = queue.shift(); // "first", queue: ["second", "third"]

// Example 3: Remove element by value
function removeElement(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

let arr4 = [1, 2, 3, 4, 5];
removeElement(arr4, 3);
console.log(arr4); // [1, 2, 4, 5]

// Example 4: Insert element at specific position
function insertAt(arr, index, ...elements) {
    arr.splice(index, 0, ...elements);
    return arr;
}

let arr5 = [1, 2, 3, 4];
insertAt(arr5, 2, "a", "b");
console.log(arr5); // [1, 2, "a", "b", 3, 4]

// Example 5: Replace portion of array
function replacePortion(arr, start, count, ...replacements) {
    arr.splice(start, count, ...replacements);
    return arr;
}

let arr6 = [1, 2, 3, 4, 5];
replacePortion(arr6, 1, 2, "x", "y", "z");
console.log(arr6); // [1, "x", "y", "z", 4, 5]

// Example 6: Get last N elements
function getLastN(arr, n) {
    return arr.slice(-n);
}

console.log(getLastN([1, 2, 3, 4, 5], 3)); // [3, 4, 5]

// ============================================
// COMBINING METHODS
// ============================================

// Remove first and last element
let arr7 = [1, 2, 3, 4, 5];
arr7.shift(); // Remove first
arr7.pop(); // Remove last
console.log(arr7); // [2, 3, 4]

// Add to both ends
let arr8 = [2, 3];
arr8.unshift(1); // Add to start
arr8.push(4); // Add to end
console.log(arr8); // [1, 2, 3, 4]

// Extract middle portion
let arr9 = [1, 2, 3, 4, 5, 6, 7];
let middle = arr9.slice(2, 5);
console.log(middle); // [3, 4, 5]

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Push/pop are faster than shift/unshift
// shift/unshift reindex entire array (O(n))
// push/pop only affect end (O(1))

// 2. Splice with negative index
let arr10 = [1, 2, 3, 4, 5];
arr10.splice(-2, 1); // Remove from 2nd to last
console.log(arr10); // [1, 2, 3, 5]

// 3. Slice doesn't include end index
let arr11 = [1, 2, 3, 4, 5];
console.log(arr11.slice(1, 3)); // [2, 3] (not [2, 3, 4])

// 4. Splice returns removed elements
let arr12 = [1, 2, 3, 4, 5];
let removed2 = arr12.splice(1, 2);
console.log(removed2); // [2, 3] (array of removed elements)

// 5. Slice creates shallow copy
let arr13 = [1, 2, [3, 4]];
let copy2 = arr13.slice();
copy2[2][0] = 99;
console.log(arr13); // [1, 2, [99, 4]] (nested array shared!)

// 6. Empty array operations
let empty3 = [];
console.log(empty3.pop()); // undefined
console.log(empty3.shift()); // undefined
console.log(empty3.slice()); // [] (empty array)

// 7. Splice can add without removing
let arr14 = [1, 2, 3];
arr14.splice(1, 0, "a", "b"); // Add without removing
console.log(arr14); // [1, "a", "b", 2, 3]

// ============================================
// MUTATING VS NON-MUTATING
// ============================================

// Mutating methods (change original):
// - push, pop, shift, unshift, splice

let mutating = [1, 2, 3];
mutating.push(4);
console.log(mutating); // [1, 2, 3, 4] (changed)

// Non-mutating methods (don't change original):
// - slice, concat, map, filter, etc.

let nonMutating = [1, 2, 3];
let newArray = nonMutating.slice();
newArray.push(4);
console.log(nonMutating); // [1, 2, 3] (unchanged)
console.log(newArray); // [1, 2, 3, 4]

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use slice() to copy arrays (not assignment)
// ✅ Good: let copy = arr.slice();
// ❌ Bad: let copy = arr; (same reference)

// 2. Prefer push/pop over unshift/shift for performance
// ✅ Good: Use push/pop when possible
// ⚠️ Acceptable: Use unshift/shift when needed

// 3. Use splice() carefully (mutates array)
// ✅ Good: Be aware it modifies original
// ⚠️ Warning: Consider if you need to preserve original

// 4. Use slice() for extracting (non-mutating)
// ✅ Good: let portion = arr.slice(1, 4);

// 5. Check array length before pop/shift
// ✅ Good: if (arr.length > 0) { arr.pop(); }

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Stack operations
stack.push(item);
let item = stack.pop();

// Pattern 2: Queue operations
queue.push(item);
let next = queue.shift();

// Pattern 3: Copy array
let copy = original.slice();

// Pattern 4: Remove element
arr.splice(index, 1);

// Pattern 5: Insert element
arr.splice(index, 0, element);

// Pattern 6: Replace element
arr.splice(index, 1, newElement);

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create an array and use push() to add elements
// 2. Use pop() to remove the last element
// 3. Use unshift() to add elements to the beginning
// 4. Use shift() to remove the first element
// 5. Use splice() to remove elements from the middle
// 6. Use splice() to insert elements at a specific position
// 7. Use slice() to extract a portion without modifying original
// 8. Create a function that implements a stack using push/pop
// 9. Create a function that implements a queue using push/shift
// 10. Use slice() to create a copy of an array


/**
 * ============================================
 * CONTROL STATEMENTS IN LOOPS
 * ============================================
 * 
 * WHY CONTROL STATEMENTS?
 * -----------------------
 * Control statements allow you to modify the normal flow of loops:
 * - break - Exit the loop immediately
 * - continue - Skip to the next iteration
 * - Labels - Control nested loops
 * 
 * WHAT ARE CONTROL STATEMENTS?
 * ----------------------------
 * Statements that change loop execution:
 * - break - Stops loop execution completely
 * - continue - Skips current iteration, continues with next
 * - Labels - Names for loops to control nested loops
 * 
 * KEY CONCEPTS:
 * ------------
 * - break exits the entire loop
 * - continue skips only the current iteration
 * - Labels allow breaking/continuing specific loops in nested structures
 */

'use strict';

// ============================================
// 1. BREAK STATEMENT
// ============================================

// Exits the loop immediately when encountered

// Break in for loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit loop when i is 5
    }
    console.log(i); // 0, 1, 2, 3, 4
}

// Break in while loop
let count = 0;
while (count < 10) {
    if (count === 5) {
        break; // Exit loop
    }
    console.log(count); // 0, 1, 2, 3, 4
    count++;
}

// Break in do...while loop
let x = 0;
do {
    if (x === 3) {
        break;
    }
    console.log(x); // 0, 1, 2
    x++;
} while (x < 10);

// ============================================
// BREAK WITH ARRAYS
// ============================================

// Find first occurrence and stop
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let found = null;

for (let num of numbers) {
    if (num > 5) {
        found = num;
        break; // Stop searching once found
    }
}
console.log(found); // 6

// Search for value
function findValue(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found, return index
        }
    }
    return -1; // Not found
}
console.log(findValue([1, 2, 3, 4, 5], 3)); // 2
console.log(findValue([1, 2, 3, 4, 5], 10)); // -1

// ============================================
// 2. CONTINUE STATEMENT
// ============================================

// Skips current iteration and continues with next

// Skip even numbers
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // 1, 3, 5, 7, 9 (only odds)
}

// Skip specific values
let items = ["apple", "banana", null, "orange", undefined, "grape"];
let validItems = [];

for (let item of items) {
    if (item === null || item === undefined) {
        continue; // Skip null/undefined
    }
    validItems.push(item);
}
console.log(validItems); // ["apple", "banana", "orange", "grape"]

// Process only valid data
let data = [1, 2, -1, 3, -2, 4, 5];
let sum = 0;

for (let num of data) {
    if (num < 0) {
        continue; // Skip negative numbers
    }
    sum += num;
}
console.log(sum); // 15 (1+2+3+4+5)

// ============================================
// CONTINUE WITH CONDITIONS
// ============================================

// Skip based on multiple conditions
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        continue; // Skip multiples of 2 or 3
    }
    console.log(i); // 1, 5, 7, 11, 13, 17, 19
}

// Process only strings
let mixed = [1, "hello", 2, "world", 3, "test"];
let strings = [];

for (let item of mixed) {
    if (typeof item !== "string") {
        continue; // Skip non-strings
    }
    strings.push(item.toUpperCase());
}
console.log(strings); // ["HELLO", "WORLD", "TEST"]

// ============================================
// 3. LABELS
// ============================================

// Labels allow breaking/continuing specific loops in nested structures

// Basic label syntax: labelName: loop

// Break outer loop from inner loop
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Break outer loop, not just inner
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// (stops here, doesn't continue outer loop)

// Continue outer loop from inner loop
outerLoop2: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue outerLoop2; // Continue outer loop, skip rest of inner
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=0, j=0
// i=1, j=0
// i=2, j=0
// (skips j=1 and j=2 for all i)

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Find first matching element
function findFirst(arr, predicate) {
    for (let item of arr) {
        if (predicate(item)) {
            return item; // Found, exit immediately
        }
    }
    return null; // Not found
}

let numbers2 = [1, 2, 3, 4, 5, 6];
let firstEven = findFirst(numbers2, n => n % 2 === 0);
console.log(firstEven); // 2

// Example 2: Process until condition
function processUntilNegative(numbers) {
    let sum = 0;
    for (let num of numbers) {
        if (num < 0) {
            break; // Stop if negative number found
        }
        sum += num;
    }
    return sum;
}
console.log(processUntilNegative([1, 2, 3, -1, 4, 5])); // 6 (stops at -1)

// Example 3: Filter and transform
function filterAndTransform(arr, filterFn, transformFn) {
    let result = [];
    for (let item of arr) {
        if (!filterFn(item)) {
            continue; // Skip items that don't match filter
        }
        result.push(transformFn(item));
    }
    return result;
}

let nums = [1, 2, 3, 4, 5, 6];
let doubledEvens = filterAndTransform(
    nums,
    n => n % 2 === 0, // Filter: only evens
    n => n * 2        // Transform: double
);
console.log(doubledEvens); // [4, 8, 12]

// Example 4: Search in 2D array
function findIn2D(matrix, target) {
    searchLoop: for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return { row: i, col: j }; // Found, exit both loops
            }
        }
    }
    return null;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(findIn2D(matrix, 5)); // { row: 1, col: 1 }

// Example 5: Validate all items
function allValid(arr, validator) {
    for (let item of arr) {
        if (!validator(item)) {
            return false; // Found invalid item, exit
        }
    }
    return true; // All valid
}

console.log(allValid([2, 4, 6, 8], n => n % 2 === 0)); // true
console.log(allValid([2, 4, 5, 8], n => n % 2 === 0)); // false

// ============================================
// BREAK VS CONTINUE
// ============================================

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// break - exits loop completely
console.log("Using break:");
for (let num of arr) {
    if (num > 5) {
        break; // Exit loop
    }
    console.log(num); // 1, 2, 3, 4, 5
}

// continue - skips to next iteration
console.log("Using continue:");
for (let num of arr) {
    if (num > 5) {
        continue; // Skip this iteration
    }
    console.log(num); // 1, 2, 3, 4, 5 (then loop continues but nothing prints)
}

// ============================================
// NESTED LOOPS WITH BREAK/CONTINUE
// ============================================

// break only affects innermost loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break; // Only breaks inner loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=0, j=0
// i=1, j=0
// i=2, j=0

// Use label to break outer loop
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break outer; // Breaks outer loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=0, j=0
// (stops completely)

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. break/continue only work in loops
// function test() {
//     break; // SyntaxError: Illegal break statement
// }

// 2. Labels must be on loops
// label: console.log("test"); // SyntaxError

// 3. break/continue with labels
outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 3; j++) {
        if (i === 1) {
            break inner; // Breaks inner loop
        }
        if (j === 1) {
            continue outer; // Continues outer loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}

// 4. break in switch vs loop
let value = 1;
switch (value) {
    case 1:
        break; // Breaks switch, not any loop
}

// 5. continue in while loop
let i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue; // Skips to next iteration
    }
    console.log(i); // 1, 2, 4, 5 (skips 3)
}

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use break for early exit
// ✅ Good: if (found) break;

// 2. Use continue to skip invalid items
// ✅ Good: if (!isValid(item)) continue;

// 3. Prefer early returns over break when possible
// ✅ Good: if (condition) return value;
// ✅ Also good: if (condition) break;

// 4. Use labels sparingly (can make code harder to read)
// ✅ Good: Refactor nested loops if possible
// ✅ Acceptable: Use labels when necessary

// 5. Make break/continue conditions clear
// ✅ Good: if (item === null) continue;
// ❌ Bad: if (!item) continue; // Unclear what's being skipped

// 6. Consider using array methods instead
// ✅ Good: arr.find(item => condition)
// ✅ Also good: for loop with break (if needed)

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Find and break
for (let item of array) {
    if (matches(item)) {
        process(item);
        break; // Found, stop searching
    }
}

// Pattern 2: Skip invalid items
for (let item of array) {
    if (!isValid(item)) {
        continue; // Skip invalid
    }
    process(item);
}

// Pattern 3: Process until condition
for (let item of array) {
    if (shouldStop(item)) {
        break; // Stop processing
    }
    process(item);
}

// Pattern 4: Nested loop with label
outer: for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (found(i, j)) {
            break outer; // Exit both loops
        }
    }
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use break to exit a loop when a condition is met
// 2. Use continue to skip odd numbers in a loop
// 3. Create a function that finds the first even number using break
// 4. Use continue to skip null/undefined values in an array
// 5. Use a label to break an outer loop from an inner loop
// 6. Create a function that processes items until it finds a negative number
// 7. Use continue to skip items that don't match a condition
// 8. Use break in a nested loop and observe which loop exits
// 9. Create a search function that uses break to exit early when found
// 10. Use labels with continue to skip to the next iteration of an outer loop


/**
 * ============================================
 * STANDARD LOOPS IN JAVASCRIPT
 * ============================================
 * 
 * WHY LOOPS?
 * ----------
 * Loops allow you to execute a block of code repeatedly. They're essential for:
 * - Processing arrays and collections
 * - Repeating operations
 * - Iterating through data
 * - Automating repetitive tasks
 * 
 * WHAT ARE STANDARD LOOPS?
 * ------------------------
 * Traditional loop constructs in JavaScript:
 * - for - Loop with initialization, condition, and increment
 * - while - Loop that continues while condition is true
 * - do...while - Loop that executes at least once, then checks condition
 * 
 * KEY CONCEPTS:
 * ------------
 * - Loop initialization (starting point)
 * - Loop condition (when to continue)
 * - Loop increment/decrement (how to progress)
 * - Infinite loops (condition never becomes false)
 */

'use strict';

// ============================================
// 1. FOR LOOP
// ============================================

// Basic for loop syntax:
// for (initialization; condition; increment) { code }

// Count from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i); // 1, 2, 3, 4, 5
}

// Count backwards
for (let i = 10; i >= 1; i--) {
    console.log(i); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
}

// Count by 2s
for (let i = 0; i < 10; i += 2) {
    console.log(i); // 0, 2, 4, 6, 8
}

// ============================================
// FOR LOOP WITH ARRAYS
// ============================================

let fruits = ["apple", "banana", "orange", "grape"];

// Iterate through array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // apple, banana, orange, grape
}

// Access both index and value
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// Modify array elements
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}
console.log(numbers); // [2, 4, 6, 8, 10]

// ============================================
// 2. WHILE LOOP
// ============================================

// Basic while loop syntax:
// while (condition) { code }

let count = 0;
while (count < 5) {
    console.log(count); // 0, 1, 2, 3, 4
    count++;
}

// Countdown
let timer = 10;
while (timer > 0) {
    console.log(timer);
    timer--;
}
console.log("Blast off!");

// Process until condition is met
let number = 1;
while (number < 100) {
    number = number * 2;
    console.log(number); // 2, 4, 8, 16, 32, 64, 128
}

// ============================================
// 3. DO...WHILE LOOP
// ============================================

// Basic do...while syntax:
// do { code } while (condition);
// Executes at least once, then checks condition

let x = 0;
do {
    console.log(x); // 0 (executes at least once)
    x++;
} while (x < 5);

// Even when condition is false initially
let y = 10;
do {
    console.log(y); // 10 (still executes once)
    y++;
} while (y < 5); // Condition is false, but loop ran once

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Sum of numbers
function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumNumbers(10)); // 55 (1+2+3+...+10)

// Example 2: Factorial
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120 (5*4*3*2*1)

// Example 3: Find maximum in array
function findMax(arr) {
    if (arr.length === 0) return null;
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([3, 7, 2, 9, 1])); // 9

// Example 4: Reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello")); // "olleh"

// Example 5: Check if array contains value
function contains(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(contains([1, 2, 3, 4, 5], 3)); // true

// Example 6: Filter array
function filterEven(numbers) {
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }
    return evens;
}
console.log(filterEven([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// ============================================
// NESTED LOOPS
// ============================================

// Nested for loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// ...

// Multiplication table
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Infinite loops
// ❌ Bad: Missing increment
// for (let i = 0; i < 5; ) { // Missing i++
//     console.log(i); // Infinite loop!
// }

// ❌ Bad: Condition always true
// while (true) {
//     console.log("Infinite!"); // Runs forever
// }

// ✅ Good: Always ensure condition becomes false
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. Off-by-one errors
let arr = [1, 2, 3, 4, 5];
// ❌ Wrong: i <= arr.length (goes out of bounds)
// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]); // arr[5] is undefined!
// }

// ✅ Correct: i < arr.length
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 3. Variable scope in loops
// With let (block-scoped, correct)
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // 0, 1, 2 (correct)
    }, 100);
}

// With var (function-scoped, problematic)
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i); // 3, 3, 3 (all same value!)
//     }, 100);
// }

// 4. Modifying array while iterating
let items = [1, 2, 3, 4, 5];
// Be careful when modifying array during iteration
for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
        items.splice(i, 1); // Removes element, shifts indices
        i--; // Adjust index
    }
}
console.log(items); // [1, 3, 5]

// 5. Empty condition in for loop
let i = 0;
for (;;) { // Infinite loop (all parts optional)
    if (i >= 5) break;
    console.log(i);
    i++;
}

// 6. Loop with no body
let sum = 0;
for (let i = 0; i < 10; sum += i, i++); // All work in increment
console.log(sum); // 45

// ============================================
// FOR VS WHILE VS DO...WHILE
// ============================================

// Use FOR when:
// - You know the number of iterations
// - Iterating through arrays/collections
// - You need initialization and increment

// Use WHILE when:
// - Number of iterations is unknown
// - Condition depends on external factors
// - You want to check condition before first iteration

// Use DO...WHILE when:
// - You need to execute at least once
// - Condition should be checked after execution

// Example: FOR (known iterations)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Example: WHILE (unknown iterations)
let userInput;
// while (userInput !== "quit") {
//     userInput = prompt("Enter command:");
// }

// Example: DO...WHILE (execute at least once)
let attempts = 0;
do {
    attempts++;
    console.log(`Attempt ${attempts}`);
    // Try something
} while (attempts < 3);

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use let (not var) in for loops
// ✅ Good: for (let i = 0; i < 10; i++)
// ❌ Bad: for (var i = 0; i < 10; i++)

// 2. Use descriptive variable names
// ✅ Good: for (let index = 0; index < items.length; index++)
// ❌ Bad: for (let i = 0; i < a.length; i++)

// 3. Cache array length for performance (if needed)
let largeArray = [1, 2, 3, /* ... many items */];
let len = largeArray.length; // Cache length
for (let i = 0; i < len; i++) {
    // Process items
}

// 4. Avoid modifying array during iteration (if possible)
// Instead, create a new array or iterate backwards

// 5. Use appropriate loop type
// - for: Known iterations
// - while: Unknown iterations
// - do...while: Execute at least once

// 6. Always ensure loop termination
// Make sure condition eventually becomes false

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Iterate through array
for (let i = 0; i < array.length; i++) {
    // Process array[i]
}

// Pattern 2: Countdown
for (let i = n; i >= 0; i--) {
    // Process
}

// Pattern 3: Skip elements
for (let i = 0; i < array.length; i += 2) {
    // Process every other element
}

// Pattern 4: Process until condition
let value = start;
while (value < threshold) {
    // Process
    value = updateValue(value);
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a for loop that prints numbers 1 to 10
// 2. Create a for loop that prints even numbers from 2 to 20
// 3. Use a for loop to calculate the sum of numbers 1 to 100
// 4. Create a while loop that counts down from 10 to 1
// 5. Use a do...while loop to get user input until they enter "quit"
// 6. Create nested loops to print a 5x5 grid of numbers
// 7. Use a for loop to find the minimum value in an array
// 8. Create a loop that reverses an array without using reverse()
// 9. Use a while loop to calculate factorial of a number
// 10. Create a loop that removes all odd numbers from an array


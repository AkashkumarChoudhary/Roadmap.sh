/**
 * ============================================
 * RECURSION IN JAVASCRIPT
 * ============================================
 * 
 * WHY RECURSION?
 * --------------
 * Recursion is a technique where a function calls itself. It's useful for:
 * - Solving problems that can be broken into smaller subproblems
 * - Working with tree/graph structures
 * - Implementing algorithms like factorial, Fibonacci
 * - Processing nested data structures
 * 
 * WHAT IS RECURSION?
 * ------------------
 * A function that calls itself, either directly or indirectly:
 * - Base case: Condition that stops recursion
 * - Recursive case: Function calls itself with modified parameters
 * 
 * KEY CONCEPTS:
 * ------------
 * - Base case: Prevents infinite recursion
 * - Recursive case: Breaks problem into smaller parts
 * - Call stack: Tracks function calls
 * - Stack overflow: Too many recursive calls
 */

'use strict';

// ============================================
// BASIC RECURSION
// ============================================

// Simple recursive function
function countdown(n) {
    // Base case
    if (n <= 0) {
        console.log("Blast off!");
        return;
    }
    
    // Recursive case
    console.log(n);
    countdown(n - 1);
}

countdown(5);
// Output:
// 5
// 4
// 3
// 2
// 1
// Blast off!

// ============================================
// FACTORIAL (CLASSIC EXAMPLE)
// ============================================

// Factorial: n! = n * (n-1) * (n-2) * ... * 1
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1

// Step by step for factorial(5):
// factorial(5) = 5 * factorial(4)
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1 (base case)
// Then unwinds: 1 * 2 * 3 * 4 * 5 = 120

// ============================================
// FIBONACCI SEQUENCE
// ============================================

// Fibonacci: Each number is sum of two preceding ones
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

function fibonacci(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55

// Note: This is inefficient (exponential time complexity)
// Better to use memoization or iterative approach

// ============================================
// SUM OF ARRAY
// ============================================

function sumArray(arr) {
    // Base case: empty array
    if (arr.length === 0) {
        return 0;
    }
    
    // Recursive case: first element + sum of rest
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Alternative with index
function sumArrayIndex(arr, index = 0) {
    if (index >= arr.length) {
        return 0;
    }
    return arr[index] + sumArrayIndex(arr, index + 1);
}

console.log(sumArrayIndex([1, 2, 3, 4, 5])); // 15

// ============================================
// POWER FUNCTION
// ============================================

// Calculate base^exponent recursively
function power(base, exponent) {
    // Base case
    if (exponent === 0) {
        return 1;
    }
    
    // Recursive case
    return base * power(base, exponent - 1);
}

console.log(power(2, 3)); // 8 (2^3)
console.log(power(5, 2)); // 25 (5^2)

// Optimized version (handles negative exponents)
function powerOptimized(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent < 0) return 1 / powerOptimized(base, -exponent);
    
    // For even exponents: base^exp = (base^2)^(exp/2)
    if (exponent % 2 === 0) {
        return powerOptimized(base * base, exponent / 2);
    }
    
    return base * powerOptimized(base, exponent - 1);
}

// ============================================
// REVERSE STRING
// ============================================

function reverseString(str) {
    // Base case
    if (str.length <= 1) {
        return str;
    }
    
    // Recursive case: last char + reverse of rest
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("a")); // "a"
console.log(reverseString("")); // ""

// ============================================
// BINARY SEARCH (RECURSIVE)
// ============================================

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: not found
    if (left > right) {
        return -1;
    }
    
    const mid = Math.floor((left + right) / 2);
    
    // Base case: found
    if (arr[mid] === target) {
        return mid;
    }
    
    // Recursive cases
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArray, 7)); // 3
console.log(binarySearch(sortedArray, 10)); // -1

// ============================================
// TREE TRAVERSAL (CONCEPTUAL)
// ============================================

// Recursive tree node structure
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

// Recursive function to count nodes
function countNodes(node) {
    if (!node) return 0;
    
    let count = 1; // Count current node
    
    // Recursively count children
    for (let child of node.children) {
        count += countNodes(child);
    }
    
    return count;
}

// Example tree
const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const grandchild = new TreeNode(4);

root.children.push(child1, child2);
child1.children.push(grandchild);

console.log(countNodes(root)); // 4

// ============================================
// FIBONACCI WITH MEMOIZATION
// ============================================

// Memoization: Cache results to avoid redundant calculations
function fibonacciMemo(n, memo = {}) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Check if already calculated
    if (memo[n]) {
        return memo[n];
    }
    
    // Calculate and store in memo
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(50)); // Much faster than naive version

// ============================================
// FLATTEN ARRAY (RECURSIVE)
// ============================================

function flattenArray(arr) {
    let result = [];
    
    for (let item of arr) {
        if (Array.isArray(item)) {
            // Recursive case: flatten nested array
            result = result.concat(flattenArray(item));
        } else {
            // Base case: add non-array item
            result.push(item);
        }
    }
    
    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Missing base case causes infinite recursion
// function infinite() {
//     infinite(); // Stack overflow!
// }

// 2. Base case never reached
function badRecursion(n) {
    if (n === 0) return 0; // Base case
    return badRecursion(n + 1); // n increases, never reaches 0!
}

// badRecursion(1); // Stack overflow

// 3. Stack overflow with deep recursion
function deepRecursion(n) {
    if (n === 0) return 0;
    return 1 + deepRecursion(n - 1);
}

// deepRecursion(100000); // May cause stack overflow

// 4. Tail recursion (JavaScript doesn't optimize, but good to know)
function tailRecursiveSum(n, acc = 0) {
    if (n === 0) return acc;
    return tailRecursiveSum(n - 1, acc + n);
}

// ============================================
// RECURSION VS ITERATION
// ============================================

// Recursive factorial
function factorialRecursive(n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Iterative factorial
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// When to use recursion:
// - Problem naturally recursive (trees, graphs)
// - Code is more readable
// - Problem size decreases predictably

// When to use iteration:
// - Performance critical
// - Deep recursion risk
// - Simple loops are clearer

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always have a base case
// ✅ Good: if (n === 0) return 1;
// ❌ Bad: Missing base case

// 2. Ensure base case is reachable
// ✅ Good: Recursive call moves toward base case
// ❌ Bad: Parameters don't change or move away from base case

// 3. Use memoization for repeated calculations
// ✅ Good: Cache results in object

// 4. Consider stack overflow for deep recursion
// ✅ Good: Use iterative approach or increase stack size
// ⚠️ Warning: JavaScript has call stack limits

// 5. Prefer tail recursion when possible (even if not optimized)
// ✅ Good: Accumulator pattern

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Divide and conquer
function divideAndConquer(data) {
    if (isBaseCase(data)) {
        return solveBaseCase(data);
    }
    const [left, right] = divide(data);
    return combine(divideAndConquer(left), divideAndConquer(right));
}

// Pattern 2: Accumulator (tail recursion)
function recursiveWithAccumulator(n, acc = 0) {
    if (n === 0) return acc;
    return recursiveWithAccumulator(n - 1, acc + n);
}

// Pattern 3: Memoization
function memoizedRecursive(n, memo = {}) {
    if (memo[n]) return memo[n];
    // Calculate and store
    memo[n] = /* calculation */;
    return memo[n];
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a recursive function to calculate factorial
// 2. Create a recursive function to calculate Fibonacci numbers
// 3. Write a recursive function to reverse a string
// 4. Create a recursive function to sum all numbers in an array
// 5. Write a recursive function to find the maximum value in an array
// 6. Create a recursive function to calculate power (base^exponent)
// 7. Write a recursive function to flatten a nested array
// 8. Create a recursive function with memoization
// 9. Explain the difference between base case and recursive case
// 10. Create a recursive function and identify potential stack overflow scenarios


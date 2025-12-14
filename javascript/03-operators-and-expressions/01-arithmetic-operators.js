/**
 * ============================================
 * ARITHMETIC OPERATORS IN JAVASCRIPT
 * ============================================
 * 
 * WHY ARITHMETIC OPERATORS?
 * -------------------------
 * Arithmetic operators perform mathematical operations on numbers.
 * They're fundamental for calculations, data processing, and algorithms.
 * 
 * WHAT ARE ARITHMETIC OPERATORS?
 * ------------------------------
 * Operators that perform basic mathematical operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulus/Remainder (%)
 * - Exponentiation (**) - ES2016
 * - Increment (++)
 * - Decrement (--)
 * 
 * OPERATOR PRECEDENCE:
 * -------------------
 * JavaScript follows mathematical order of operations (PEMDAS):
 * 1. Parentheses
 * 2. Exponentiation
 * 3. Multiplication, Division, Modulus
 * 4. Addition, Subtraction
 */

'use strict';

// ============================================
// 1. ADDITION (+)
// ============================================

let sum1 = 5 + 3;
console.log(sum1); // 8

let sum2 = 10 + 20 + 30;
console.log(sum2); // 60

// With variables
let a = 15;
let b = 25;
let sum3 = a + b;
console.log(sum3); // 40

// String concatenation (covered in coercion module)
let stringSum = "5" + 3;
console.log(stringSum); // "53" (string concatenation, not addition!)

// ============================================
// 2. SUBTRACTION (-)
// ============================================

let diff1 = 10 - 3;
console.log(diff1); // 7

let diff2 = 50 - 20 - 10;
console.log(diff2); // 20

let x = 100;
let y = 35;
let diff3 = x - y;
console.log(diff3); // 65

// Negative numbers
let negative = 5 - 10;
console.log(negative); // -5

// ============================================
// 3. MULTIPLICATION (*)
// ============================================

let product1 = 5 * 3;
console.log(product1); // 15

let product2 = 2 * 3 * 4;
console.log(product2); // 24

let m = 7;
let n = 8;
let product3 = m * n;
console.log(product3); // 56

// With decimals
let decimalProduct = 2.5 * 4;
console.log(decimalProduct); // 10

// ============================================
// 4. DIVISION (/)
// ============================================

let quotient1 = 10 / 2;
console.log(quotient1); // 5

let quotient2 = 15 / 4;
console.log(quotient2); // 3.75

let p = 100;
let q = 3;
let quotient3 = p / q;
console.log(quotient3); // 33.333333333333336

// Division by zero
let divideByZero = 10 / 0;
console.log(divideByZero); // Infinity

let negativeDivideByZero = -10 / 0;
console.log(negativeDivideByZero); // -Infinity

// ============================================
// 5. MODULUS/REMAINDER (%)
// ============================================

// Returns the remainder after division
let remainder1 = 10 % 3;
console.log(remainder1); // 1 (10 divided by 3 is 3 with remainder 1)

let remainder2 = 15 % 4;
console.log(remainder2); // 3

let remainder3 = 20 % 5;
console.log(remainder3); // 0 (20 is divisible by 5)

// Common use case: Check if number is even or odd
let number = 7;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd"); // This will print
}

// Modulus with negative numbers
console.log(-10 % 3); // -1 (sign of result matches dividend)
console.log(10 % -3); // 1 (sign of result matches dividend)

// ============================================
// 6. EXPONENTIATION (**) - ES2016
// ============================================

// Raises left operand to the power of right operand
let power1 = 2 ** 3;
console.log(power1); // 8 (2 to the power of 3)

let power2 = 5 ** 2;
console.log(power2); // 25 (5 squared)

let power3 = 10 ** 0.5;
console.log(power3); // 3.1622776601683795 (square root of 10)

// Equivalent to Math.pow()
console.log(2 ** 3 === Math.pow(2, 3)); // true

// ============================================
// 7. INCREMENT (++)
// ============================================

// Pre-increment: increments first, then returns value
let preInc = 5;
console.log(++preInc); // 6 (incremented first, then returned)
console.log(preInc); // 6

// Post-increment: returns value first, then increments
let postInc = 5;
console.log(postInc++); // 5 (returned first, then incremented)
console.log(postInc); // 6 (now incremented)

// Practical example
let counter = 0;
console.log(counter++); // 0
console.log(counter); // 1
console.log(++counter); // 2
console.log(counter); // 2

// ============================================
// 8. DECREMENT (--)
// ============================================

// Pre-decrement: decrements first, then returns value
let preDec = 5;
console.log(--preDec); // 4
console.log(preDec); // 4

// Post-decrement: returns value first, then decrements
let postDec = 5;
console.log(postDec--); // 5
console.log(postDec); // 4

// ============================================
// OPERATOR PRECEDENCE
// ============================================

// JavaScript follows mathematical order of operations
let result1 = 2 + 3 * 4;
console.log(result1); // 14 (multiplication first: 3*4=12, then 2+12=14)

let result2 = (2 + 3) * 4;
console.log(result2); // 20 (parentheses first: 2+3=5, then 5*4=20)

let result3 = 2 ** 3 * 4;
console.log(result3); // 32 (exponentiation first: 2**3=8, then 8*4=32)

let result4 = 10 / 2 + 3;
console.log(result4); // 8 (division first: 10/2=5, then 5+3=8)

// Complex expression
let complex = (10 + 5) * 2 - 3 ** 2;
console.log(complex); // 21
// Step by step:
// 1. (10 + 5) = 15
// 2. 3 ** 2 = 9
// 3. 15 * 2 = 30
// 4. 30 - 9 = 21

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Floating point precision
console.log(0.1 + 0.2); // 0.30000000000000004 (not exactly 0.3!)
console.log(0.1 + 0.2 === 0.3); // false

// Solution: Use rounding or epsilon comparison
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

// 2. Division by zero
console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity
console.log(0 / 0); // NaN

// 3. Modulus with zero
console.log(10 % 0); // NaN

// 4. Increment/decrement with non-numbers
let str = "5";
console.log(++str); // 6 (coerces to number, increments, returns number)
console.log(str); // 6

let str2 = "hello";
console.log(++str2); // NaN (can't convert to number)

// 5. Exponentiation with negative base
console.log((-2) ** 3); // -8 (negative base, odd exponent)
console.log((-2) ** 2); // 4 (negative base, even exponent)

// 6. Modulus with decimals
console.log(10.5 % 3); // 1.5 (works with decimals)

// 7. Very large numbers
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992 (may lose precision)
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (same value!)

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Calculate area of a circle
function circleArea(radius) {
    return Math.PI * radius ** 2;
}
console.log(circleArea(5)); // 78.53981633974483

// Example 2: Check if number is divisible
function isDivisible(number, divisor) {
    return number % divisor === 0;
}
console.log(isDivisible(15, 3)); // true
console.log(isDivisible(15, 4)); // false

// Example 3: Round to nearest multiple
function roundToNearest(value, multiple) {
    return Math.round(value / multiple) * multiple;
}
console.log(roundToNearest(17, 5)); // 15
console.log(roundToNearest(23, 5)); // 25

// Example 4: Counter with increment
let count = 0;
function incrementCounter() {
    return ++count; // Pre-increment: increment then return
}
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2
console.log(incrementCounter()); // 3

// Example 5: Calculate percentage
function calculatePercentage(part, total) {
    return (part / total) * 100;
}
console.log(calculatePercentage(25, 100)); // 25
console.log(calculatePercentage(3, 10)); // 30

// Example 6: Extract digits using modulus
function getLastDigit(number) {
    return number % 10;
}
console.log(getLastDigit(12345)); // 5

function getLastTwoDigits(number) {
    return number % 100;
}
console.log(getLastTwoDigits(12345)); // 45

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use parentheses for clarity
// ❌ Unclear: let result = a + b * c;
// ✅ Clear: let result = a + (b * c);

// 2. Be aware of floating point precision
// Use Math.round() or epsilon comparison when needed

// 3. Prefer ** over Math.pow() for exponentiation (more readable)

// 4. Use increment/decrement carefully
// Prefer explicit: count = count + 1 over count++ when clarity matters

// 5. Check for division by zero
function safeDivide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Calculate the area of a rectangle (length * width)
// 2. Calculate the volume of a cube (side ** 3)
// 3. Check if a number is even using the modulus operator
// 4. Create a function that increments a counter and returns the new value
// 5. Calculate 15 % 4 and explain what the result means
// 6. Evaluate this expression step by step: (5 + 3) * 2 - 10 / 2
// 7. Create a function that calculates the remainder when dividing two numbers
// 8. Experiment with increment operators: try both ++x and x++ and observe the difference
// 9. Calculate 2 ** 10 (2 to the power of 10)
// 10. Create a function that checks if a number is divisible by both 3 and 5


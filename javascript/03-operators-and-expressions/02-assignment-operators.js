/**
 * ============================================
 * ASSIGNMENT OPERATORS IN JAVASCRIPT
 * ============================================
 * 
 * WHY ASSIGNMENT OPERATORS?
 * -------------------------
 * Assignment operators assign values to variables. Shorthand operators
 * combine assignment with arithmetic operations, making code more concise
 * and readable.
 * 
 * WHAT ARE ASSIGNMENT OPERATORS?
 * ------------------------------
 * Operators that assign values to variables:
 * - Simple assignment (=)
 * - Addition assignment (+=)
 * - Subtraction assignment (-=)
 * - Multiplication assignment (*=)
 * - Division assignment (/=)
 * - Modulus assignment (%=)
 * - Exponentiation assignment (**=) - ES2016
 * - Left shift assignment (<<=)
 * - Right shift assignment (>>=)
 * - Unsigned right shift assignment (>>>=)
 * - Bitwise AND assignment (&=)
 * - Bitwise OR assignment (|=)
 * - Bitwise XOR assignment (^=)
 * 
 * NOTE: We'll focus on the most commonly used ones here.
 */

'use strict';

// ============================================
// 1. SIMPLE ASSIGNMENT (=)
// ============================================

let x = 10;
console.log(x); // 10

// Assign from variable
let y = x;
console.log(y); // 10

// Multiple assignments (right-to-left)
let a, b, c;
a = b = c = 5;
console.log(a, b, c); // 5 5 5

// Assignment returns the assigned value
let result = (x = 20);
console.log(result); // 20
console.log(x); // 20

// ============================================
// 2. ADDITION ASSIGNMENT (+=)
// ============================================

let num1 = 10;
num1 += 5; // Equivalent to: num1 = num1 + 5
console.log(num1); // 15

let num2 = 20;
num2 += 10;
console.log(num2); // 30

// With strings (concatenation)
let str = "Hello";
str += " World"; // Equivalent to: str = str + " World"
console.log(str); // "Hello World"

// ============================================
// 3. SUBTRACTION ASSIGNMENT (-=)
// ============================================

let num3 = 20;
num3 -= 5; // Equivalent to: num3 = num3 - 5
console.log(num3); // 15

let num4 = 100;
num4 -= 25;
console.log(num4); // 75

// ============================================
// 4. MULTIPLICATION ASSIGNMENT (*=)
// ============================================

let num5 = 10;
num5 *= 3; // Equivalent to: num5 = num5 * 3
console.log(num5); // 30

let num6 = 5;
num6 *= 4;
console.log(num6); // 20

// ============================================
// 5. DIVISION ASSIGNMENT (/=)
// ============================================

let num7 = 20;
num7 /= 4; // Equivalent to: num7 = num7 / 4
console.log(num7); // 5

let num8 = 100;
num8 /= 2;
console.log(num8); // 50

// ============================================
// 6. MODULUS ASSIGNMENT (%=)
// ============================================

let num9 = 17;
num9 %= 5; // Equivalent to: num9 = num9 % 5
console.log(num9); // 2 (17 % 5 = 2)

let num10 = 20;
num10 %= 6;
console.log(num10); // 2 (20 % 6 = 2)

// ============================================
// 7. EXPONENTIATION ASSIGNMENT (**=)
// ============================================

let num11 = 2;
num11 **= 3; // Equivalent to: num11 = num11 ** 3
console.log(num11); // 8 (2 to the power of 3)

let num12 = 5;
num12 **= 2;
console.log(num12); // 25 (5 squared)

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Accumulating values
let total = 0;
total += 10; // total = 10
total += 20; // total = 30
total += 30; // total = 60
console.log(total); // 60

// Example 2: Building a string
let message = "";
message += "Hello";
message += " ";
message += "World";
message += "!";
console.log(message); // "Hello World!"

// Example 3: Counter with increment
let counter = 0;
counter += 1; // Increment by 1
console.log(counter); // 1
counter += 1;
console.log(counter); // 2

// Example 4: Scaling a value
let price = 100;
price *= 1.1; // Increase by 10%
console.log(price); // 110

price *= 0.9; // Decrease by 10%
console.log(price); // 99

// Example 5: Reducing a value
let budget = 1000;
budget -= 250; // Spend 250
console.log(budget); // 750
budget -= 100; // Spend 100 more
console.log(budget); // 650

// Example 6: Dividing evenly
let items = 100;
items /= 4; // Divide into 4 groups
console.log(items); // 25

// Example 7: Finding remainder repeatedly
let number = 17;
number %= 5; // Get remainder when divided by 5
console.log(number); // 2

// ============================================
// COMPARISON: LONG FORM VS SHORTHAND
// ============================================

// Long form
let value1 = 10;
value1 = value1 + 5;
console.log(value1); // 15

// Shorthand (more concise)
let value2 = 10;
value2 += 5;
console.log(value2); // 15

// Both are equivalent, but shorthand is preferred

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Assignment with type coercion
let val = 5;
val += "5"; // String concatenation (not addition!)
console.log(val); // "55" (string)
console.log(typeof val); // "string"

// To avoid this, be explicit:
let val2 = 5;
val2 = val2 + Number("5");
console.log(val2); // 10 (number)

// 2. Assignment returns the assigned value
let a1 = 10;
let b1 = (a1 = 20); // a1 is assigned 20, and b1 receives 20
console.log(a1, b1); // 20 20

// 3. Multiple assignments
let x1, y1, z1;
x1 = y1 = z1 = 0; // All set to 0
console.log(x1, y1, z1); // 0 0 0

// 4. Assignment in expressions (generally not recommended)
let count = 0;
// ❌ Confusing: if (count = 5) { ... } // This assigns 5 to count!
// ✅ Clear: if (count === 5) { ... } // This compares

// 5. Assignment with undefined/null
let num = 10;
num += undefined; // num = num + undefined = 10 + NaN = NaN
console.log(num); // NaN

let num2 = 10;
num2 += null; // num = num + null = 10 + 0 = 10
console.log(num2); // 10

// 6. String concatenation with +=
let text = "Hello";
text += 5; // "Hello5"
text += true; // "Hello5true"
console.log(text); // "Hello5true"

// ============================================
// CHAINING ASSIGNMENTS
// ============================================

// Multiple variables can be assigned the same value
let p, q, r;
p = q = r = 100;
console.log(p, q, r); // 100 100 100

// This works because assignment returns the assigned value
// r = 100 returns 100, which is assigned to q, which returns 100, etc.

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use shorthand operators for clarity
// ❌ Verbose: total = total + 10;
// ✅ Concise: total += 10;

// 2. Be careful with type coercion
// If you want number addition, ensure both operands are numbers
let sum = 10;
sum += Number("5"); // Explicit conversion

// 3. Don't confuse = with == or ===
// ❌ Wrong: if (x = 5) { ... } // This assigns, not compares!
// ✅ Right: if (x === 5) { ... } // This compares

// 4. Initialize variables before using +=, -=, etc.
// ❌ Wrong: let total; total += 10; // NaN (undefined + 10)
// ✅ Right: let total = 0; total += 10; // 10

// 5. Use meaningful variable names
// ❌ Bad: x += 5;
// ✅ Good: totalPrice += itemPrice;

// ============================================
// PRACTICAL USE CASES
// ============================================

// Use case 1: Accumulating in loops
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i; // Add each number to sum
}
console.log(sum); // 55 (sum of 1 to 10)

// Use case 2: Building HTML strings
let html = "<div>";
html += "<h1>Title</h1>";
html += "<p>Content</p>";
html += "</div>";
console.log(html);

// Use case 3: Calculating running totals
let balance = 1000;
balance += 500; // Deposit
console.log(balance); // 1500
balance -= 200; // Withdrawal
console.log(balance); // 1300
balance *= 1.05; // 5% interest
console.log(balance); // 1365

// Use case 4: Scaling values
let scale = 1;
scale *= 2; // Double
scale *= 2; // Double again
console.log(scale); // 4

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a variable 'total' initialized to 0, then add 10, 20, and 30 using +=
// 2. Create a string variable and build a sentence using +=
// 3. Create a price variable (100) and increase it by 15% using *=
// 4. Create a counter that starts at 10 and decreases by 2 three times using -=
// 5. Create a number and use %= to find its remainder when divided by 7
// 6. Build an array of numbers by accumulating values: start with 0, add 1, 2, 3, 4, 5
// 7. Create a function that takes a number and uses **= to square it
// 8. Explain the difference between: x = x + 5 and x += 5
// 9. Create a variable and demonstrate what happens when you do: x += "5" vs x = x + Number("5")
// 10. Use assignment operators to calculate: start with 100, divide by 2, then multiply by 3


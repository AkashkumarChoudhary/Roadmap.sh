/**
 * ============================================
 * BITWISE OPERATORS IN JAVASCRIPT
 * ============================================
 * 
 * WHY BITWISE OPERATORS?
 * ----------------------
 * Bitwise operators work at the binary level, manipulating individual bits.
 * They're useful for:
 * - Performance optimization (in some cases)
 * - Low-level programming
 * - Flags and permissions
 * - Cryptography
 * - Data compression
 * 
 * WHAT ARE BITWISE OPERATORS?
 * ---------------------------
 * Operators that work on binary representations:
 * - Bitwise AND (&)
 * - Bitwise OR (|)
 * - Bitwise XOR (^)
 * - Bitwise NOT (~)
 * - Left Shift (<<)
 * Right Shift (>>)
 * - Unsigned Right Shift (>>>)
 * 
 * NOTE: Bitwise operators convert operands to 32-bit signed integers.
 * They're less commonly used in modern JavaScript but good to understand.
 */

'use strict';

// ============================================
// UNDERSTANDING BINARY REPRESENTATION
// ============================================

// JavaScript numbers are stored in binary
// 5 in binary is: 101
// 3 in binary is: 011

// Convert to binary string
console.log((5).toString(2)); // "101"
console.log((3).toString(2)); // "11"
console.log((10).toString(2)); // "1010"

// ============================================
// 1. BITWISE AND (&)
// ============================================

// Returns 1 if both bits are 1, otherwise 0
// 5 = 101
// 3 = 011
// & = 001 = 1

console.log(5 & 3); // 1
console.log((5).toString(2), "&", (3).toString(2), "=", (5 & 3).toString(2));

// More examples
console.log(10 & 6); // 2
// 10 = 1010
// 6  = 0110
// &  = 0010 = 2

console.log(15 & 7); // 7
// 15 = 1111
// 7  = 0111
// &  = 0111 = 7

// ============================================
// 2. BITWISE OR (|)
// ============================================

// Returns 1 if either bit is 1, otherwise 0
// 5 = 101
// 3 = 011
// | = 111 = 7

console.log(5 | 3); // 7
console.log((5).toString(2), "|", (3).toString(2), "=", (5 | 3).toString(2));

// More examples
console.log(10 | 6); // 14
// 10 = 1010
// 6  = 0110
// |  = 1110 = 14

console.log(8 | 4); // 12
// 8 = 1000
// 4 = 0100
// | = 1100 = 12

// ============================================
// 3. BITWISE XOR (^)
// ============================================

// Returns 1 if bits are different, 0 if same
// 5 = 101
// 3 = 011
// ^ = 110 = 6

console.log(5 ^ 3); // 6
console.log((5).toString(2), "^", (3).toString(2), "=", (5 ^ 3).toString(2));

// XOR properties:
// - a ^ a = 0 (same bits cancel out)
// - a ^ 0 = a (XOR with 0 returns original)
// - a ^ b ^ b = a (XOR twice cancels out)

console.log(5 ^ 5); // 0
console.log(5 ^ 0); // 5
console.log((5 ^ 3) ^ 3); // 5 (XOR twice returns original)

// ============================================
// 4. BITWISE NOT (~)
// ============================================

// Flips all bits (1 becomes 0, 0 becomes 1)
// ~5 = ~101 = ...11111010 (32-bit representation)
// In JavaScript, this results in -(x + 1) due to two's complement

console.log(~5); // -6
console.log(~3); // -4
console.log(~0); // -1

// The formula: ~x = -(x + 1)
console.log(~5 === -(5 + 1)); // true

// Double NOT (~~) can be used to truncate/floor a number
console.log(~~3.7); // 3
console.log(~~-3.7); // -3
console.log(~~"5.9"); // 5 (also converts to number)

// ============================================
// 5. LEFT SHIFT (<<)
// ============================================

// Shifts bits to the left, filling with zeros
// Equivalent to multiplying by 2^n

// 5 << 1 means shift 5 left by 1 position
// 5 = 101
// Shift left: 1010 = 10 (which is 5 * 2^1)

console.log(5 << 1); // 10 (5 * 2)
console.log(5 << 2); // 20 (5 * 4)
console.log(5 << 3); // 40 (5 * 8)

// General formula: x << n = x * 2^n
console.log(3 << 4); // 48 (3 * 16)

// ============================================
// 6. RIGHT SHIFT (>>)
// ============================================

// Shifts bits to the right, preserving sign
// Equivalent to dividing by 2^n (with truncation)

// 10 >> 1 means shift 10 right by 1 position
// 10 = 1010
// Shift right: 101 = 5 (which is 10 / 2^1)

console.log(10 >> 1); // 5 (10 / 2)
console.log(10 >> 2); // 2 (10 / 4)
console.log(20 >> 3); // 2 (20 / 8)

// With negative numbers (preserves sign)
console.log(-10 >> 1); // -5
console.log(-20 >> 2); // -5

// ============================================
// 7. UNSIGNED RIGHT SHIFT (>>>)
// ============================================

// Shifts bits to the right, filling with zeros (no sign preservation)
// Always returns a positive number

console.log(10 >>> 1); // 5
console.log(-10 >>> 1); // 2147483643 (treats as unsigned, so very large positive)

// Useful for converting to unsigned 32-bit integer
console.log(-1 >>> 0); // 4294967295 (max unsigned 32-bit int)

// ============================================
// PRACTICAL USE CASES
// ============================================

// Use case 1: Flags/Permissions
const PERMISSIONS = {
    READ: 1,      // 0001
    WRITE: 2,     // 0010
    EXECUTE: 4,   // 0100
    DELETE: 8     // 1000
};

// Combine permissions with OR
let userPermissions = PERMISSIONS.READ | PERMISSIONS.WRITE; // 0011 = 3

// Check permission with AND
function hasPermission(userPerms, permission) {
    return (userPerms & permission) === permission;
}

console.log(hasPermission(userPermissions, PERMISSIONS.READ)); // true
console.log(hasPermission(userPermissions, PERMISSIONS.EXECUTE)); // false

// Add permission with OR
userPermissions = userPermissions | PERMISSIONS.EXECUTE;

// Remove permission with AND and NOT
userPermissions = userPermissions & ~PERMISSIONS.WRITE;

// Use case 2: Fast multiplication/division by powers of 2
function multiplyByPowerOf2(num, power) {
    return num << power; // Faster than num * Math.pow(2, power)
}

function divideByPowerOf2(num, power) {
    return num >> power; // Faster than Math.floor(num / Math.pow(2, power))
}

console.log(multiplyByPowerOf2(5, 3)); // 40 (5 * 8)
console.log(divideByPowerOf2(40, 3)); // 5 (40 / 8)

// Use case 3: Check if number is odd/even
function isOdd(num) {
    return (num & 1) === 1; // Last bit is 1 for odd numbers
}

console.log(isOdd(5)); // true
console.log(isOdd(4)); // false

// Use case 4: Swap two numbers without temporary variable
let a = 5;
let b = 3;

a = a ^ b; // a = 5 ^ 3 = 6
b = a ^ b; // b = 6 ^ 3 = 5
a = a ^ b; // a = 6 ^ 5 = 3

console.log(a, b); // 3, 5 (swapped!)

// Use case 5: Truncate/floor numbers
function truncate(num) {
    return num < 0 ? ~~(num) : ~~num; // Faster than Math.floor for positive
}

console.log(truncate(3.7)); // 3
console.log(truncate(-3.7)); // -3

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Bitwise operators convert to 32-bit signed integers
console.log(2147483647 << 1); // -2 (overflow!)
console.log(Number.MAX_SAFE_INTEGER & 1); // 1 (but precision may be lost)

// 2. Floating point numbers are truncated
console.log(5.7 & 3.2); // 1 (5 & 3, decimals ignored)
console.log(5.7 | 3.2); // 7 (5 | 3)

// 3. Negative numbers use two's complement
console.log(~0); // -1
console.log(~-1); // 0

// 4. Right shift preserves sign, unsigned right shift doesn't
console.log(-10 >> 1); // -5 (preserves sign)
console.log(-10 >>> 1); // 2147483643 (treats as unsigned)

// 5. XOR with same number cancels out
console.log(5 ^ 5); // 0
console.log((5 ^ 3) ^ 3); // 5 (back to original)

// 6. Left shift can cause overflow
console.log(1 << 31); // -2147483648 (overflow to negative)
console.log(1 << 32); // 1 (wraps around, 32-bit limit)

// ============================================
// BITWISE ASSIGNMENT OPERATORS
// ============================================

let x = 5;
x &= 3; // x = x & 3
console.log(x); // 1

x = 5;
x |= 3; // x = x | 3
console.log(x); // 7

x = 5;
x ^= 3; // x = x ^ 3
console.log(x); // 6

x = 5;
x <<= 1; // x = x << 1
console.log(x); // 10

x = 10;
x >>= 1; // x = x >> 1
console.log(x); // 5

x = 10;
x >>>= 1; // x = x >>> 1
console.log(x); // 5

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use bitwise operators only when you understand binary
// They're not commonly needed in modern JavaScript

// 2. Be careful with large numbers (32-bit limit)
// Bitwise operators work on 32-bit integers

// 3. Use Math.floor() or Math.trunc() instead of ~~ for clarity
// ❌ Unclear: let num = ~~3.7;
// ✅ Clear: let num = Math.floor(3.7);

// 4. Use bitwise for flags only if you need multiple flags
// For single boolean, use regular boolean logic

// 5. Document bitwise operations - they're not self-explanatory
// Add comments explaining what the bitwise operation does

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Calculate 10 & 6 and explain the result in binary
// 2. Calculate 10 | 6 and explain the result in binary
// 3. Calculate 10 ^ 6 and explain the result in binary
// 4. Use left shift to multiply 7 by 8 (7 << 3)
// 5. Use right shift to divide 40 by 4 (40 >> 2)
// 6. Create a permission system using bitwise flags (READ, WRITE, EXECUTE)
// 7. Use XOR to swap two numbers without a temporary variable
// 8. Check if a number is odd using bitwise AND with 1
// 9. Explain the difference between >> and >>>
// 10. Convert a number to binary string using .toString(2) and verify bitwise operations


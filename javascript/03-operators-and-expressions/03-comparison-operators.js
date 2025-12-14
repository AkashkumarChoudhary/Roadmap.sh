/**
 * ============================================
 * COMPARISON OPERATORS IN JAVASCRIPT
 * ============================================
 * 
 * WHY COMPARISON OPERATORS?
 * -------------------------
 * Comparison operators compare two values and return a boolean (true/false).
 * They're essential for conditionals, loops, and decision-making in code.
 * 
 * WHAT ARE COMPARISON OPERATORS?
 * ------------------------------
 * Operators that compare values:
 * - Equal (==) - Loose equality (with coercion)
 * - Not equal (!=) - Loose inequality
 * - Strict equal (===) - Strict equality (no coercion)
 * - Strict not equal (!==) - Strict inequality
 * - Greater than (>)
 * - Less than (<)
 * - Greater than or equal (>=)
 * - Less than or equal (<=)
 * 
 * KEY DIFFERENCE:
 * ---------------
 * == and != perform type coercion (convert types before comparing)
 * === and !== do NOT perform type coercion (compare types and values)
 * 
 * BEST PRACTICE: Always use === and !== to avoid unexpected behavior!
 */

'use strict';

// ============================================
// 1. LOOSE EQUALITY (==) - WITH COERCION
// ============================================

// == performs type coercion before comparing
console.log(5 == 5); // true
console.log(5 == "5"); // true (string "5" coerced to number 5)
console.log(true == 1); // true (true coerced to 1)
console.log(false == 0); // true (false coerced to 0)
console.log(null == undefined); // true (special case)
console.log("" == 0); // true (empty string coerced to 0)
console.log(" " == 0); // true (whitespace coerced to 0)
console.log([] == 0); // true (empty array coerced to 0)

// ============================================
// 2. LOOSE INEQUALITY (!=) - WITH COERCION
// ============================================

// != is the opposite of ==
console.log(5 != 3); // true
console.log(5 != "5"); // false (coerced, so they're equal)
console.log(true != 1); // false
console.log(false != 0); // false

// ============================================
// 3. STRICT EQUALITY (===) - NO COERCION
// ============================================

// === compares both type AND value (no coercion)
console.log(5 === 5); // true
console.log(5 === "5"); // false (different types: number vs string)
console.log(true === 1); // false (different types: boolean vs number)
console.log(false === 0); // false
console.log(null === undefined); // false (different types)
console.log("" === 0); // false
console.log([] === 0); // false

// Same type and value
console.log("hello" === "hello"); // true
console.log(42 === 42); // true
console.log(true === true); // true

// ============================================
// 4. STRICT INEQUALITY (!==) - NO COERCION
// ============================================

// !== is the opposite of ===
console.log(5 !== 3); // true
console.log(5 !== "5"); // true (different types)
console.log(true !== 1); // true (different types)
console.log(false !== 0); // true

// ============================================
// 5. GREATER THAN (>)
// ============================================

console.log(10 > 5); // true
console.log(5 > 10); // false
console.log(5 > 5); // false

// With strings (lexicographic comparison)
console.log("b" > "a"); // true
console.log("10" > "2"); // false! (string comparison: "1" < "2")
console.log("10" > 2); // true (one is number, so both converted to numbers)

// ============================================
// 6. LESS THAN (<)
// ============================================

console.log(5 < 10); // true
console.log(10 < 5); // false
console.log(5 < 5); // false

// With strings
console.log("a" < "b"); // true
console.log("2" < "10"); // true! (string comparison)
console.log("2" < 10); // true (converted to numbers)

// ============================================
// 7. GREATER THAN OR EQUAL (>=)
// ============================================

console.log(10 >= 5); // true
console.log(5 >= 10); // false
console.log(5 >= 5); // true (equal is included)

// ============================================
// 8. LESS THAN OR EQUAL (<=)
// ============================================

console.log(5 <= 10); // true
console.log(10 <= 5); // false
console.log(5 <= 5); // true (equal is included)

// ============================================
// COMPARISON: == VS ===
// ============================================

// == (Loose) - Performs coercion
console.log(5 == "5"); // true (coerces string to number)
console.log(true == 1); // true (coerces boolean to number)
console.log(null == undefined); // true (special case)
console.log("" == 0); // true (coerces empty string to 0)
console.log([] == 0); // true (coerces array to 0)

// === (Strict) - No coercion
console.log(5 === "5"); // false (different types)
console.log(true === 1); // false (different types)
console.log(null === undefined); // false (different types)
console.log("" === 0); // false (different types)
console.log([] === 0); // false (different types)

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. NaN comparisons
console.log(NaN == NaN); // false (NaN is never equal to itself)
console.log(NaN === NaN); // false
console.log(NaN != NaN); // true
console.log(NaN !== NaN); // true

// Use isNaN() or Number.isNaN() to check
console.log(Number.isNaN(NaN)); // true

// 2. null and undefined
console.log(null == undefined); // true (special case)
console.log(null === undefined); // false
console.log(null == 0); // false (null doesn't equal 0!)
console.log(null >= 0); // true (but null >= 0 is true due to coercion)

// 3. String vs Number comparison
console.log("10" > "2"); // false (string comparison: "1" < "2")
console.log("10" > 2); // true (number comparison: 10 > 2)
console.log(10 > "2"); // true (number comparison)

// 4. Array comparisons
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 == arr2); // false (different objects)
console.log(arr1 === arr2); // false (different objects)
console.log(arr1 == "1,2,3"); // true (array coerced to string)

// 5. Object comparisons
let obj1 = { name: "John" };
let obj2 = { name: "John" };
console.log(obj1 == obj2); // false (different objects)
console.log(obj1 === obj2); // false (different objects)

let obj3 = obj1;
console.log(obj1 === obj3); // true (same object reference)

// 6. Empty array and object
console.log([] == 0); // true (empty array coerced to 0)
console.log([] === 0); // false
console.log({} == "[object Object]"); // true (object coerced to string)

// 7. Boolean comparisons
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

// 8. Zero comparisons
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == 0); // true
console.log("" === 0); // false

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Age verification
function canVote(age) {
    return age >= 18; // Use >= for "at least"
}
console.log(canVote(20)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false

// Example 2: String comparison (alphabetical order)
function comesFirst(str1, str2) {
    return str1 < str2;
}
console.log(comesFirst("apple", "banana")); // true
console.log(comesFirst("zebra", "apple")); // false

// Example 3: Range checking
function isInRange(value, min, max) {
    return value >= min && value <= max;
}
console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(15, 1, 10)); // false

// Example 4: Safe number comparison
function areEqual(a, b) {
    // Use strict equality to avoid coercion surprises
    return a === b;
}
console.log(areEqual(5, "5")); // false (expected: different types)
console.log(areEqual(5, 5)); // true

// Example 5: Checking for null/undefined
function hasValue(value) {
    // Use strict inequality to check for null/undefined
    return value !== null && value !== undefined;
}
console.log(hasValue(null)); // false
console.log(hasValue(undefined)); // false
console.log(hasValue(0)); // true (0 is a valid value)
console.log(hasValue("")); // true (empty string is a valid value)

// ============================================
// BEST PRACTICES
// ============================================

// 1. ALWAYS use === and !== instead of == and !=
// ❌ Bad: if (age == "18") { ... }
// ✅ Good: if (age === 18) { ... }

// 2. Be explicit about type conversions
// ❌ Bad: if (value == 0) { ... } // Could match "", 0, false, null
// ✅ Good: if (value === 0) { ... } // Only matches number 0

// 3. Use Number() for string-to-number comparisons
// ❌ Bad: if ("5" > 3) { ... } // Works but unclear
// ✅ Good: if (Number("5") > 3) { ... } // Explicit

// 4. Check for NaN explicitly
// ❌ Bad: if (result == NaN) { ... } // Always false!
// ✅ Good: if (Number.isNaN(result)) { ... }

// 5. Use nullish checks carefully
// To check if value is null or undefined:
// ✅ Good: if (value == null) { ... } // Matches both null and undefined
// ✅ Also good: if (value === null || value === undefined) { ... }

// ============================================
// COMMON MISTAKES
// ============================================

// Mistake 1: Using == instead of ===
let userInput = "5";
if (userInput == 5) { // true (coerces)
    console.log("This might not be what you want!");
}
if (userInput === 5) { // false (correct check)
    console.log("This won't run");
}

// Mistake 2: Comparing arrays/objects
let arr1 = [1, 2];
let arr2 = [1, 2];
if (arr1 == arr2) { // false (different objects)
    console.log("This won't run");
}

// Mistake 3: String vs number comparison
if ("10" > "2") { // false! (string comparison)
    console.log("This won't run");
}
if (Number("10") > Number("2")) { // true (number comparison)
    console.log("This will run");
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Compare 5 == "5" and 5 === "5" - explain the difference
// 2. Compare true == 1 and true === 1 - explain the difference
// 3. Check if a number is greater than 10 using >
// 4. Check if a number is between 5 and 20 (inclusive) using >= and <=
// 5. Compare two strings alphabetically using <
// 6. Create a function that checks if two values are strictly equal
// 7. Explain why [] == 0 is true but [] === 0 is false
// 8. Check if NaN equals NaN (it doesn't!) and use Number.isNaN() instead
// 9. Compare null == undefined and null === undefined
// 10. Create a function that safely checks if a value is zero (not "", false, or null)


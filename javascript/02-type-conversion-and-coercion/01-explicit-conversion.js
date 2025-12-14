/**
 * ============================================
 * EXPLICIT TYPE CONVERSION IN JAVASCRIPT
 * ============================================
 * 
 * WHY EXPLICIT CONVERSION?
 * ------------------------
 * Sometimes you need to convert values from one type to another intentionally.
 * Explicit conversion makes your code clear, predictable, and prevents bugs
 * from unexpected type coercion.
 * 
 * WHAT IS EXPLICIT CONVERSION?
 * -----------------------------
 * Explicit (or manual) conversion is when you deliberately convert a value
 * from one type to another using built-in functions or methods. You're
 * explicitly telling JavaScript: "Convert this value to that type."
 * 
 * MAIN CONVERSION FUNCTIONS:
 * --------------------------
 * 1. String() - Convert to string
 * 2. Number() - Convert to number
 * 3. Boolean() - Convert to boolean
 * 4. parseInt() - Convert to integer
 * 5. parseFloat() - Convert to floating-point number
 * 
 * ALTERNATIVE METHODS:
 * -------------------
 * - .toString() - Convert to string (method)
 * - +"" or String() - String conversion
 * - +value or Number() - Number conversion
 * - !!value or Boolean() - Boolean conversion
 */

'use strict';

// ============================================
// 1. CONVERTING TO STRING
// ============================================

// String() constructor function
let num = 42;
let str1 = String(num);
console.log(str1); // "42"
console.log(typeof str1); // "string"

let bool = true;
let str2 = String(bool);
console.log(str2); // "true"
console.log(typeof str2); // "string"

let nullVal = null;
let str3 = String(nullVal);
console.log(str3); // "null"
console.log(typeof str3); // "string"

let undefinedVal = undefined;
let str4 = String(undefinedVal);
console.log(str4); // "undefined"
console.log(typeof str4); // "string"

// .toString() method (doesn't work on null/undefined!)
let number = 123;
let stringFromNumber = number.toString();
console.log(stringFromNumber); // "123"
console.log(typeof stringFromNumber); // "string"

let boolean = false;
let stringFromBoolean = boolean.toString();
console.log(stringFromBoolean); // "false"

// null.toString(); // TypeError: Cannot read property 'toString' of null
// undefined.toString(); // TypeError: Cannot read property 'toString' of undefined

// Template literal (implicit string conversion)
let age = 25;
let message = `I am ${age} years old`; // age is automatically converted to string
console.log(message); // "I am 25 years old"

// Concatenation with empty string (trick, but works)
let value = 42;
let str5 = value + "";
console.log(str5); // "42"
console.log(typeof str5); // "string"

// ============================================
// 2. CONVERTING TO NUMBER
// ============================================

// Number() constructor function
let str = "42";
let num1 = Number(str);
console.log(num1); // 42
console.log(typeof num1); // "number"

let strNum = "3.14";
let num2 = Number(strNum);
console.log(num2); // 3.14

let boolTrue = true;
let num3 = Number(boolTrue);
console.log(num3); // 1

let boolFalse = false;
let num4 = Number(boolFalse);
console.log(num4); // 0

let emptyStr = "";
let num5 = Number(emptyStr);
console.log(num5); // 0

let spaceStr = "   ";
let num6 = Number(spaceStr);
console.log(num6); // 0 (whitespace is trimmed)

let nullToNum = Number(null);
console.log(nullToNum); // 0

let undefinedToNum = Number(undefined);
console.log(undefinedToNum); // NaN

let invalidStr = "hello";
let num7 = Number(invalidStr);
console.log(num7); // NaN

// parseInt() - Parse string to integer
let strInt = "42";
let int1 = parseInt(strInt, 10); // Always specify radix (base)!
console.log(int1); // 42

let strFloat = "3.14";
let int2 = parseInt(strFloat, 10);
console.log(int2); // 3 (truncates decimal part)

let hexStr = "FF";
let int3 = parseInt(hexStr, 16); // Parse as hexadecimal
console.log(int3); // 255

let binaryStr = "1010";
let int4 = parseInt(binaryStr, 2); // Parse as binary
console.log(int4); // 10

// parseInt stops at first non-numeric character
let mixedStr = "42px";
let int5 = parseInt(mixedStr, 10);
console.log(int5); // 42 (stops at 'p')

let invalidParse = "hello42";
let int6 = parseInt(invalidParse, 10);
console.log(int6); // NaN (starts with non-numeric)

// parseFloat() - Parse string to floating-point number
let floatStr = "3.14";
let float1 = parseFloat(floatStr);
console.log(float1); // 3.14

let floatStr2 = "3.14px";
let float2 = parseFloat(floatStr2);
console.log(float2); // 3.14 (stops at 'p')

let floatStr3 = "3.14.15"; // Invalid, but parseFloat takes first valid part
let float3 = parseFloat(floatStr3);
console.log(float3); // 3.14

// Unary plus operator (trick for number conversion)
let strNum2 = "42";
let num8 = +strNum2;
console.log(num8); // 42
console.log(typeof num8); // "number"

let boolToNum = +true;
console.log(boolToNum); // 1

// ============================================
// 3. CONVERTING TO BOOLEAN
// ============================================

// Boolean() constructor function
let strToBool1 = Boolean("hello");
console.log(strToBool1); // true

let strToBool2 = Boolean("");
console.log(strToBool2); // false

let numToBool1 = Boolean(1);
console.log(numToBool1); // true

let numToBool2 = Boolean(0);
console.log(numToBool2); // false

let numToBool3 = Boolean(42);
console.log(numToBool3); // true

let numToBool4 = Boolean(NaN);
console.log(numToBool4); // false

let nullToBool = Boolean(null);
console.log(nullToBool); // false

let undefinedToBool = Boolean(undefined);
console.log(undefinedToBool); // false

let objToBool = Boolean({});
console.log(objToBool); // true (objects are always truthy)

let arrToBool = Boolean([]);
console.log(arrToBool); // true (arrays are always truthy)

// Double negation (!!) - trick for boolean conversion
let value1 = "hello";
let bool1 = !!value1;
console.log(bool1); // true

let value2 = "";
let bool2 = !!value2;
console.log(bool2); // false

// First ! converts to boolean and negates
// Second ! negates again, giving the original truthiness
// !!value is equivalent to Boolean(value)

// ============================================
// CONVERSION EXAMPLES BY TYPE
// ============================================

// Converting different types to string
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String({})); // "[object Object]"
console.log(String([])); // "" (empty array becomes empty string)
console.log(String([1, 2, 3])); // "1,2,3"

// Converting different types to number
console.log(Number("123")); // 123
console.log(Number("3.14")); // 3.14
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("hello")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number({})); // NaN
console.log(Number([])); // 0 (empty array)
console.log(Number([5])); // 5 (single element array)
console.log(Number([1, 2, 3])); // NaN (multiple elements)

// Converting different types to boolean
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true (any non-zero number)
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. parseInt without radix can cause issues
console.log(parseInt("08")); // 8 (in strict mode or modern JS)
console.log(parseInt("08", 10)); // 8 (always safe)
// Old browsers might interpret "08" as octal without radix!

// 2. Number() vs parseInt() vs parseFloat()
console.log(Number("3.14")); // 3.14
console.log(parseInt("3.14", 10)); // 3 (truncates)
console.log(parseFloat("3.14")); // 3.14

console.log(Number("42px")); // NaN (strict)
console.log(parseInt("42px", 10)); // 42 (parses until invalid)
console.log(parseFloat("42px")); // 42

// 3. toString() doesn't work on null/undefined
// null.toString(); // TypeError
// undefined.toString(); // TypeError
// Use String() instead

// 4. Empty array conversions
console.log(Number([])); // 0
console.log(String([])); // ""
console.log(Boolean([])); // true (truthy!)

// 5. Object to string
let obj = { name: "John" };
console.log(String(obj)); // "[object Object]"
console.log(JSON.stringify(obj)); // '{"name":"John"}' (better for objects)

// 6. Array to string
let arr = [1, 2, 3];
console.log(String(arr)); // "1,2,3"
console.log(arr.toString()); // "1,2,3"
console.log(arr.join("-")); // "1-2-3" (custom separator)

// 7. NaN propagation
let result = Number("hello");
console.log(result); // NaN
console.log(result + 5); // NaN (NaN propagates)
console.log(isNaN(result)); // true

// 8. Infinity handling
console.log(Number("Infinity")); // Infinity
console.log(Number("-Infinity")); // -Infinity

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Form input validation
function validateAge(input) {
    let age = Number(input);
    if (isNaN(age) || age < 0 || age > 120) {
        return "Invalid age";
    }
    return `Age: ${age}`;
}

console.log(validateAge("25")); // "Age: 25"
console.log(validateAge("abc")); // "Invalid age"
console.log(validateAge("-5")); // "Invalid age"

// Example 2: Converting user input
function processUserInput(input) {
    // Try to convert to number
    let num = Number(input);
    if (!isNaN(num)) {
        return `You entered the number: ${num}`;
    }
    // Otherwise treat as string
    return `You entered the string: "${input}"`;
}

console.log(processUserInput("42")); // "You entered the number: 42"
console.log(processUserInput("hello")); // "You entered the string: "hello""

// Example 3: Safe boolean conversion
function isTruthy(value) {
    return Boolean(value);
}

console.log(isTruthy("")); // false
console.log(isTruthy("hello")); // true
console.log(isTruthy(0)); // false
console.log(isTruthy(1)); // true

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always specify radix for parseInt
// ❌ Bad: parseInt("08")
// ✅ Good: parseInt("08", 10)

// 2. Use Number() for strict conversion, parseInt/parseFloat for parsing
// Number("42px") // NaN (strict)
// parseInt("42px", 10) // 42 (parsing)

// 3. Check for NaN after number conversion
// let num = Number(input);
// if (isNaN(num)) {
//     // Handle invalid number
// }

// 4. Use String() instead of toString() for null/undefined safety
// String(null) // "null" ✅
// null.toString() // TypeError ❌

// 5. Be explicit about conversions
// ❌ Bad: let num = +input; (unclear)
// ✅ Good: let num = Number(input); (clear intent)

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Convert the number 42 to a string using three different methods
// 2. Convert the string "3.14" to a number using Number() and parseFloat()
// 3. Convert various values (0, 1, "", "hello", null, undefined) to boolean
// 4. Create a function that takes a string input and safely converts it to a number,
//    returning 0 if conversion fails
// 5. Parse "42px" to get the number 42 using parseInt()
// 6. Convert an array [1, 2, 3] to a string and back to see what happens
// 7. Explain the difference between Number("3.14") and parseInt("3.14", 10)
// 8. Create a validation function that checks if a string can be converted to a valid number


/**
 * ============================================
 * ARRAY DESTRUCTURING IN JAVASCRIPT
 * ============================================
 * 
 * WHY ARRAY DESTRUCTURING?
 * ------------------------
 * Array destructuring (ES6) provides a concise way to extract values from arrays:
 * - Cleaner, more readable code
 * - Easy variable assignment from arrays
 * - Swap variables easily
 * - Extract specific elements
 * - Default values for missing elements
 * 
 * WHAT IS ARRAY DESTRUCTURING?
 * -----------------------------
 * A syntax that allows you to unpack values from arrays into distinct variables:
 * - Uses square brackets on left side
 * - Matches position in array
 * - Can skip elements
 * - Can use rest operator
 * 
 * SYNTAX:
 * ------
 * const [a, b, c] = array;
 */

'use strict';

// ============================================
// BASIC DESTRUCTURING
// ============================================

// Extract values by position
let colors = ["red", "green", "blue"];
let [first, second, third] = colors;

console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"

// ============================================
// SKIPPING ELEMENTS
// ============================================

// Skip elements using empty slots
let numbers = [1, 2, 3, 4, 5];
let [a, , c, , e] = numbers;

console.log(a); // 1
console.log(c); // 3
console.log(e); // 5

// Skip all but first
let [firstOnly] = numbers;
console.log(firstOnly); // 1

// Skip all but last (using rest)
let [...rest, last] = numbers; // SyntaxError: Rest element must be last
// Correct way:
let [first2, ...rest2] = numbers;
let last2 = rest2[rest2.length - 1];

// Or use slice
let last3 = numbers[numbers.length - 1];

// ============================================
// DEFAULT VALUES
// ============================================

// Provide default values for missing elements
let arr = [1, 2];
let [x, y, z = 3] = arr;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3 (default, since arr[2] is undefined)

// Multiple defaults
let [a2 = 1, b2 = 2, c2 = 3, d2 = 4] = [10, 20];
console.log(a2); // 10
console.log(b2); // 20
console.log(c2); // 3 (default)
console.log(d2); // 4 (default)

// ============================================
// REST OPERATOR IN DESTRUCTURING
// ============================================

// Collect remaining elements into array
let numbers2 = [1, 2, 3, 4, 5];
let [first3, second3, ...rest3] = numbers2;

console.log(first3); // 1
console.log(second3); // 2
console.log(rest3); // [3, 4, 5]

// Rest must be last
// let [...rest, last] = arr; // SyntaxError

// Get all but first
let [, ...allButFirst] = numbers2;
console.log(allButFirst); // [2, 3, 4, 5]

// Get all but last (requires length calculation)
let allButLast = numbers2.slice(0, -1);

// ============================================
// SWAPPING VARIABLES
// ============================================

// Easy variable swapping
let a3 = 1;
let b3 = 2;

[a3, b3] = [b3, a3];

console.log(a3); // 2
console.log(b3); // 1

// Traditional way (requires temporary variable):
// let temp = a;
// a = b;
// b = temp;

// ============================================
// DESTRUCTURING FUNCTION RETURNS
// ============================================

// Functions can return arrays
function getCoordinates() {
    return [10, 20];
}

let [x2, y2] = getCoordinates();
console.log(x2); // 10
console.log(y2); // 20

// Multiple return values
function getMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

let [min, max] = getMinMax([1, 5, 3, 9, 2]);
console.log(min); // 1
console.log(max); // 9

// ============================================
// NESTED DESTRUCTURING
// ============================================

// Destructure nested arrays
let nested = [1, [2, 3], 4];
let [a4, [b4, c4], d4] = nested;

console.log(a4); // 1
console.log(b4); // 2
console.log(c4); // 3
console.log(d4); // 4

// Skip nested elements
let [a5, [, c5], d5] = nested;
console.log(a5); // 1
console.log(c5); // 3
console.log(d5); // 4

// ============================================
// DESTRUCTURING WITH ITERATION
// ============================================

// Use destructuring in loops
let points = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (let [x, y] of points) {
    console.log(`Point: (${x}, ${y})`);
}

// With forEach
points.forEach(([x, y]) => {
    console.log(`X: ${x}, Y: ${y}`);
});

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Parse string into parts
let dateString = "2024-01-15";
let [year, month, day] = dateString.split("-");
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);

// Example 2: Extract first and rest
function processFirstAndRest(arr) {
    let [first, ...rest] = arr;
    console.log(`First: ${first}`);
    console.log(`Rest: ${rest}`);
}

processFirstAndRest([1, 2, 3, 4, 5]);

// Example 3: Default values for optional parameters
function createUser([name, email = "no-email", age = 0]) {
    return { name, email, age };
}

let user1 = createUser(["Alice", "alice@example.com", 25]);
let user2 = createUser(["Bob"]); // Uses defaults for email and age

// Example 4: Swap array elements
function swapElements(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}

let arr2 = [1, 2, 3, 4, 5];
swapElements(arr2, 0, 4);
console.log(arr2); // [5, 2, 3, 4, 1]

// Example 5: Extract specific indices
function getIndices(arr, ...indices) {
    return indices.map(i => arr[i]);
}

let arr3 = ["a", "b", "c", "d", "e"];
let [first4, third, fifth] = getIndices(arr3, 0, 2, 4);
console.log(first4, third, fifth); // "a" "c" "e"

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Destructuring undefined/null
// let [a, b] = undefined; // TypeError
// let [a, b] = null; // TypeError

// Safe destructuring with default
let [a6, b6] = undefined || [];
console.log(a6, b6); // undefined undefined

// 2. More variables than elements
let [x3, y3, z3] = [1, 2];
console.log(x3, y3, z3); // 1 2 undefined

// 3. Fewer variables than elements
let [a7, b7] = [1, 2, 3, 4, 5];
console.log(a7, b7); // 1 2 (rest ignored)

// 4. Rest operator collects remaining
let [first5, ...rest4] = [1, 2, 3, 4, 5];
console.log(rest4); // [2, 3, 4, 5] (includes all after first)

// 5. Empty array destructuring
let [] = [1, 2, 3]; // Valid, but extracts nothing

// 6. Default values only apply to undefined
let [a8 = 1, b8 = 2] = [undefined, null];
console.log(a8); // 1 (undefined triggers default)
console.log(b8); // null (null doesn't trigger default)

// 7. Destructuring with computed properties (not directly possible)
// Use index access instead
let arr4 = [1, 2, 3];
let index = 1;
let value = arr4[index]; // Can't use destructuring with variable index

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use destructuring for multiple return values
// ✅ Good: let [x, y] = getCoordinates();

// 2. Use default values for optional elements
// ✅ Good: let [a, b = 0] = arr;

// 3. Use rest operator to collect remaining
// ✅ Good: let [first, ...rest] = arr;

// 4. Use destructuring in function parameters
// ✅ Good: function process([first, second]) { ... }

// 5. Use destructuring for variable swapping
// ✅ Good: [a, b] = [b, a];

// 6. Be careful with undefined/null arrays
// ✅ Good: let [a, b] = arr || [];

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Extract first element
let [first6] = array;

// Pattern 2: Extract first and rest
let [first7, ...rest5] = array;

// Pattern 3: Extract with defaults
let [a9 = defaultValue, b9 = defaultValue] = array;

// Pattern 4: Swap variables
[a9, b9] = [b9, a9];

// Pattern 5: Function return destructuring
let [result1, result2] = functionThatReturnsArray();

// Pattern 6: Nested destructuring
let [a10, [b10, c10], d10] = nestedArray;

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Destructure an array to extract the first three elements
// 2. Use destructuring to skip the second element
// 3. Use default values when destructuring an array with fewer elements
// 4. Use the rest operator to collect remaining elements
// 5. Swap two variables using destructuring
// 6. Destructure the return value of a function
// 7. Destructure a nested array
// 8. Use destructuring in a for...of loop
// 9. Create a function that uses destructuring in parameters
// 10. Extract specific elements from an array using destructuring


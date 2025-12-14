/**
 * ============================================
 * STRICT MODE IN JAVASCRIPT
 * ============================================
 * 
 * WHY STRICT MODE?
 * ----------------
 * Strict mode makes JavaScript more secure and predictable:
 * - Prevents common mistakes
 * - Throws errors for unsafe code
 * - Disables confusing features
 * - Helps write better code
 * - ES5 feature, widely supported
 * 
 * WHAT IS STRICT MODE?
 * --------------------
 * A restricted variant of JavaScript:
 * - Enabled with 'use strict'
 * - Applies to entire script or function
 * - Makes errors out of silent mistakes
 * - Optimizes code (can run faster)
 * 
 * KEY CHANGES:
 * -----------
 * - No undeclared variables
 * - No duplicate parameter names
 * - No with statement
 * - this is undefined in functions
 */

'use strict';

// ============================================
// ENABLING STRICT MODE
// ============================================

// Global strict mode (entire script)
'use strict';

// Function-level strict mode
function strictFunction() {
    'use strict';
    // Strict mode only in this function
}

// ============================================
// UNDECLARED VARIABLES
// ============================================

// In strict mode, undeclared variables throw error
// x = 10; // ReferenceError: x is not defined

// Must declare variables
let x = 10; // OK

// ============================================
// DUPLICATE PARAMETER NAMES
// ============================================

// Strict mode prevents duplicate parameters
// function duplicate(a, a) { // SyntaxError
//     return a;
// }

// ============================================
// READ-ONLY PROPERTIES
// ============================================

// Cannot assign to read-only properties
// let obj = {};
// Object.defineProperty(obj, 'prop', { value: 1, writable: false });
// obj.prop = 2; // TypeError in strict mode

// ============================================
// THIS IN FUNCTIONS
// ============================================

// In strict mode, this is undefined in regular functions
function testThis() {
    'use strict';
    console.log(this); // undefined (not global object)
}

testThis();

// In non-strict mode, this would be global object

// ============================================
// DELETING VARIABLES/FUNCTIONS
// ============================================

// Cannot delete variables or functions in strict mode
let variable = 10;
// delete variable; // SyntaxError

function myFunction() {}
// delete myFunction; // SyntaxError

// Can still delete object properties
let obj = { prop: 1 };
delete obj.prop; // OK

// ============================================
// OCTAL LITERALS
// ============================================

// Octal literals not allowed in strict mode
// let octal = 010; // SyntaxError

// Use explicit octal
let octal = 0o10; // OK (ES6)

// ============================================
// WITH STATEMENT
// ============================================

// with statement not allowed in strict mode
// with (obj) {
//     prop = value; // SyntaxError
// }

// ============================================
// EVAL RESTRICTIONS
// ============================================

// eval in strict mode doesn't create variables in outer scope
'use strict';
eval('var evalVar = 10;');
// console.log(evalVar); // ReferenceError (not accessible)

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always use strict mode
// ✅ Good: 'use strict'; at top of file

// 2. Use in all new code
// ✅ Good: Modern JavaScript should use strict mode

// 3. Be aware of differences
// ⚠️ Warning: Some code may break in strict mode

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Enable strict mode in a script
// 2. Try to use an undeclared variable (observe error)
// 3. Try to create duplicate parameters (observe error)
// 4. Observe how 'this' behaves in strict mode
// 5. Try to delete a variable (observe error)
// 6. Explain the benefits of strict mode
// 7. Compare code behavior in strict vs non-strict mode
// 8. Enable strict mode in a function
// 9. Explain why strict mode is recommended
// 10. List the main restrictions of strict mode


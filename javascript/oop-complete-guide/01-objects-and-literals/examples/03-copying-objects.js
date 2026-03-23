/**
 * Example 3: Copying Objects Correctly
 * - Shallow reference (wrong)
 * - Shallow copy with spread
 * - Deep copy with JSON (for plain data)
 */

const original = { a: 1, b: 2 };

// Wrong — shallow reference
const wrongCopy = original;
wrongCopy.a = 99;
console.log(original.a); // 99 — original changed!

// Reset for demo
original.a = 1;

// Right — shallow copy
const shallowCopy = { ...original };
shallowCopy.a = 99;
console.log(original.a); // 1 — original unchanged

// Deep copy (for nested objects, no functions/special types)
const nested = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(nested));
deepCopy.b.c = 99;
console.log(nested.b.c); // 2 — original unchanged

export { };

/**
 * MODULE 10: TYPE NARROWING
 * Topic: Equality & Truthiness Narrowing
 * 
 * THEORY:
 * 1. Equality: `===`, `!==`, `==`, `!=` checks narrow types.
 * 2. Truthiness: `if (val)` checks narrow out null/undefined/false/0/"" (depending on type).
 */

// --- CODE: Equality ---

function printValue(x: string | number, y: string | boolean) {
    if (x === y) {
        // If x equals y, they must both be strings (the only common type).
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    } else {
        console.log(x);
        console.log(y);
    }
}

// --- CODE: Truthiness ---

function getUsersOnline(users: string[] | null) {
    if (users) {
        // users is string[] here (null is falsy)
        console.log(`There are ${users.length} users online.`);
    }
}

// --- TASK ---
// TODO: Create a function `multiply(a: number | null, b: number | null)`.
// If both are truthy, return a * b. Otherwise return 0.

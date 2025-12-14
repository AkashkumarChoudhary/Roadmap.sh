export { };

/**
 * MODULE 8: GENERICS
 * Topic: Built-in Generics
 * 
 * THEORY:
 * You've already used generics!
 * - `Array<T>`
 * - `Promise<T>`
 * - `Map<K, V>`
 * - `Set<T>`
 */

// --- CODE: Built-ins ---

// 1. Array
const nums: Array<number> = [1, 2, 3];

// 2. Promise
// A Promise that resolves to a string
const myPromise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded");
    }, 1000);
});

myPromise.then((data) => {
    console.log(data.toUpperCase()); // TS knows 'data' is string
});

// 3. Record (Utility Type - covered later, but is generic)
const scores: Record<string, number> = {
    "Alice": 10,
    "Bob": 20
};

// --- TASK ---
// TODO: Create a Promise that resolves to a number (e.g., 42).
// Use `.then()` to log the number multiplied by 2.

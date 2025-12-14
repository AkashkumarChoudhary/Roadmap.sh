export { };

/**
 * MODULE 6: FUNCTIONS
 * Topic: Typing Functions
 * 
 * THEORY:
 * Functions are the building blocks of any application.
 * In TS, we type:
 * 1. Parameters
 * 2. Return Value
 * 
 * We can also handle:
 * - Optional Parameters (`?`)
 * - Default Parameters (`= value`)
 * - Rest Parameters (`...args`)
 */

// --- CODE: Function Typing ---

// 1. Basic Function
function add(a: number, b: number): number {
    return a + b;
}

// 2. Arrow Function
const multiply = (a: number, b: number): number => a * b;

// 3. Optional Parameter
// Optional parameters must come AFTER required parameters.
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Good morning")); // Good morning, Bob!

// 4. Default Parameter
function power(base: number, exponent: number = 2): number {
    return base ** exponent;
}

console.log(power(3)); // 9 (3^2)
console.log(power(3, 3)); // 27 (3^3)

// 5. Rest Parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

// --- BAD CODE (Uncomment to see errors) ---

// function badOptional(a?: number, b: number) {}
// Error: A required parameter cannot follow an optional parameter.

// add(1, "2");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// --- TASK ---
// TODO: Create a function `formatName` that takes:
// - firstName (string)
// - lastName (string, optional)
// It should return "FirstName LastName" if lastName is provided, otherwise just "FirstName".

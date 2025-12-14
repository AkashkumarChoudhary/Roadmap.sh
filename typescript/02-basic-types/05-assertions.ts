export { };

/**
 * MODULE 2: THE TYPE SYSTEM
 * Topic: Type Assertions
 * 
 * THEORY:
 * Sometimes you know more about a value's type than TypeScript does.
 * You can "assert" (tell) TS to treat a value as a specific type.
 * 
 * Syntax:
 * - `value as Type` (Preferred)
 * - `<Type>value` (Old syntax, conflicts with JSX)
 * - `!` (Non-null assertion)
 */

// --- CODE: Assertions ---

// 1. 'as' syntax
let someValue: unknown = "this is a string";
// TS doesn't know it's a string, but we do.
let strLength: number = (someValue as string).length;

console.log("Length:", strLength);

// 2. 'as const' (Literal inference)
let requestMethod = "GET" as const;
// Type is "GET", not just string. Useful for APIs that expect specific string literals.

// 3. Non-null assertion (!)
// Used when you know a value won't be null/undefined, but TS thinks it might be.
function liveDangerously(arg: string | null) {
    // console.log(arg.length); // Error: Object is possibly 'null'.

    console.log(arg!.length); // Trust me, it's not null!
}

// WARNING: If you are wrong, assertions will cause runtime errors.
// liveDangerously(null); // CRASH!

// --- BAD CODE (Uncomment to see errors) ---

// let num = 10;
// let str = num as string;
// Error: Conversion of type 'number' to type 'string' may be a mistake...
// If you REALLY want to do this (unsafe), you have to double cast: (num as unknown as string)

// --- TASK ---
// TODO: Create a variable `id` of type `unknown` with value 123.
// Assert it as a `number` and add 10 to it.

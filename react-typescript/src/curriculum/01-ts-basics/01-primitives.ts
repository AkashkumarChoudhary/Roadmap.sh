/**
 * MODULE 01: PRIMITIVES & BASICS
 *
 * 1. Basic Types: string, number, boolean
 * 2. Type Inference: TS guesses the type based on value
 * 3. The "Any" type: The escape hatch (avoid this!)
 * 4. Unknown: The safe "Any"
 * 5. Never: Values that never occur
 */

export const runModule01 = () => {
    console.group("Module 01: Primitives & Basics");

    // ==========================================
    // 1. BASIC TYPES
    // ==========================================
    // Explicit typing
    const username: string = "Alice";
    const age: number = 30;
    const isAdmin: boolean = true;

    console.log("Basic Types:", { username, age, isAdmin });

    // ==========================================
    // 2. TYPE INFERENCE
    // ==========================================
    // TS knows 'course' is a string because we assigned a string to it.
    let course = "React + TypeScript";
    // course = 101; // Error: Type 'number' is not assignable to type 'string'.

    console.log("Inferred Type:", course);

    // ==========================================
    // 3. ANY vs UNKNOWN vs NEVER
    // ==========================================

    // --- ANY (The "I don't care" type) ---
    // ❌ ANTI-PATTERN: Don't use 'any' unless absolutely necessary.
    // It disables type checking.
    let looseData: any = "hello";
    looseData = 42; // No error
    looseData.someNonExistentMethod(); // No error at compile time, CRASH at runtime!

    // --- UNKNOWN (The "I don't know yet" type) ---
    // ✅ BEST PRACTICE: Use 'unknown' for dynamic content (e.g., API responses)
    let strictData: unknown = "hello";
    strictData = 42;

    // strictData.toUpperCase(); // Error: Object is of type 'unknown'.
    // You must check the type first:
    if (typeof strictData === "string") {
        console.log("Unknown (narrowed):", strictData.toUpperCase());
    }

    // --- NEVER (The "Impossible" type) ---
    // Used for functions that throw errors or infinite loops.
    const throwError = (msg: string): never => {
        throw new Error(msg);
    };
    // Prevent unused variable error
    console.log("Never type function defined:", !!throwError);

    // ==========================================
    // TODO: YOUR TURN
    // ==========================================
    // 1. Create a variable 'score' and explicitly type it as a number.
    // 2. Create a variable 'message' and let TS infer it as a string.
    // 3. Try to assign a number to 'message' and observe the error (comment it out).
    // 4. Create a function 'safeParse' that takes an 'unknown' input and returns a string.
    //    If input is string, return it. If not, return "Not a string".

    // Write your code here:

    console.groupEnd();
};

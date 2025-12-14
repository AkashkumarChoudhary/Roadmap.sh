export { };

/**
 * MODULE 10: TYPE NARROWING
 * Topic: User-Defined Type Predicates (`is` keyword)
 * 
 * THEORY:
 * Sometimes checks are complex, and you want to extract them into a function.
 * But a normal function returning `boolean` doesn't tell TS about the type change.
 * 
 * We use `arg is Type` as the return type.
 */

// --- CODE: Type Predicates ---

interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

// Custom Type Guard
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim(); // TS knows pet is Fish
    } else {
        pet.fly(); // TS knows pet is Bird
    }
}

// --- TASK ---
// TODO: Create a type guard `isString(val: unknown): val is string`.
// Use it in an `if` block to safely call `.toUpperCase()` on an unknown value.

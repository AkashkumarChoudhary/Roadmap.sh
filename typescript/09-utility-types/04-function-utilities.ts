export { };

/**
 * MODULE 9: UTILITY TYPES
 * Topic: Function Utilities
 * 
 * THEORY:
 * 1. `Parameters<T>`: Extracts parameter types of a function type as a tuple.
 * 2. `ReturnType<T>`: Extracts the return type of a function type.
 * 3. `Awaited<T>`: Unwraps a Promise type (like `await` does).
 */

// --- CODE: Function Utilities ---

function createItem(name: string, price: number, active: boolean) {
    return { id: Math.random(), name, price, active };
}

// 1. Parameters
type CreateItemParams = Parameters<typeof createItem>;
// [name: string, price: number, active: boolean]

const args: CreateItemParams = ["Phone", 999, true];
createItem(...args);

// 2. ReturnType
type Item = ReturnType<typeof createItem>;
// { id: number, name: string, price: number, active: boolean }

// 3. Awaited
type AsyncData = Promise<string>;
type Data = Awaited<AsyncData>; // string

// --- TASK ---
// TODO: Create a function `getUser` that returns `{ id: 1, name: "Alice" }`.
// Use `ReturnType` to define a type `User` based on that function.

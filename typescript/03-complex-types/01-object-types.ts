export { };

/**
 * MODULE 3: COMPLEX TYPES & OBJECTS
 * Topic: Object Types (Interface vs Type Alias)
 * 
 * THEORY:
 * In TypeScript, we can define the shape of an object using:
 * 1. Interfaces (`interface User {...}`)
 * 2. Type Aliases (`type User = {...}`)
 * 
 * Both are very similar for objects. Interfaces are often preferred for defining object shapes
 * because they support declaration merging (more on that later) and better error messages.
 * 
 * Optional Properties: Use `?` to make a property optional.
 * Readonly Properties: Use `readonly` to prevent modification.
 */

// --- CODE: Defining Objects ---

// 1. Using an Interface
interface User {
    id: number;
    name: string;
    email?: string; // Optional
    readonly role: string; // Cannot be changed
}

const user1: User = {
    id: 1,
    name: "Alice",
    role: "Admin"
};

// 2. Using a Type Alias
type Product = {
    id: number;
    title: string;
    price: number;
};

const item: Product = {
    id: 101,
    title: "Laptop",
    price: 999
};

console.log(user1, item);

// --- BAD CODE (Uncomment to see errors) ---

// user1.role = "Guest"; 
// Error: Cannot assign to 'role' because it is a read-only property.

// const user2: User = {
//     id: 2,
//     name: "Bob"
//     // Error: Property 'role' is missing.
// };

// --- TASK ---
// TODO: Create an interface `Car` with:
// - make (string)
// - model (string)
// - year (number, readonly)
// - isElectric (boolean, optional)
// Then create a valid object of type `Car`.

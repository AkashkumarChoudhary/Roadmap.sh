export { };

/**
 * MODULE 3: COMPLEX TYPES & OBJECTS
 * Topic: Enums
 * 
 * THEORY:
 * Enums allow us to define a set of named constants.
 * 
 * 1. Numeric Enums: Default. Auto-incrementing numbers (0, 1, 2...).
 * 2. String Enums: Values are initialized with strings. Easier to debug.
 * 3. Const Enums: Removed during compilation (inlined). Better performance.
 */

// --- CODE: Enums ---

// 1. Numeric Enum
enum Status {
    Pending,     // 0
    InProgress,  // 1
    Completed    // 2
}

let currentStatus: Status = Status.InProgress;
console.log("Numeric Status:", currentStatus); // Output: 1

// 2. String Enum
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let myRole: Role = Role.Admin;
console.log("String Role:", myRole); // Output: "ADMIN"

// 3. Const Enum (Check the JS output!)
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move = Direction.Up;
// In JS, this compiles to just `let move = 0;` (No object created).

// --- BAD CODE (Uncomment to see errors) ---

// currentStatus = "Pending";
// Error: Type '"Pending"' is not assignable to type 'Status'.

// --- TASK ---
// TODO: Create a String Enum `HttpMethod` with values "GET", "POST", "PUT", "DELETE".
// Create a function `request` that takes a url (string) and a method (HttpMethod).

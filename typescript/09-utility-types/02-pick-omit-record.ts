export { };

/**
 * MODULE 9: UTILITY TYPES
 * Topic: Pick, Omit, Record
 * 
 * THEORY:
 * 1. `Pick<T, K>`: Constructs a type by picking the set of properties K from T.
 * 2. `Omit<T, K>`: Constructs a type by picking all properties from T and then removing K.
 * 3. `Record<K, T>`: Constructs an object type whose property keys are K and whose property values are T.
 */

// --- CODE: Pick & Omit ---

interface User {
    id: number;
    name: string;
    email: string;
    passwordHash: string; // Sensitive!
}

// 1. Pick (Select what you want)
type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = {
    id: 1,
    name: "Alice"
    // email and passwordHash are not here
};

// 2. Omit (Remove what you don't want)
type UserSafe = Omit<User, "passwordHash">;

const safeUser: UserSafe = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
    // passwordHash is gone
};

// --- CODE: Record ---

// 3. Record (Map keys to values)
type Page = "home" | "about" | "contact";

interface PageInfo {
    title: string;
}

const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About Us" },
    contact: { title: "Contact" }
};

// --- TASK ---
// TODO: Create a type `Dictionary` which is a `Record` where keys are strings and values are strings.
// Use it to create a simple translation object (e.g., "hello" -> "hola").

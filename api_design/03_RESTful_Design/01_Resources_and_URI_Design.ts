export { };
/**
 * 01_Resources_and_URI_Design.ts
 *
 * In REST, everything is a "Resource".
 * Resources are identified by URIs (Uniform Resource Identifiers).
 */

// -----------------------------------------------------------------------------
// 1. Resource Naming Best Practices
// -----------------------------------------------------------------------------
// - Use Nouns, not Verbs (GET /users, not GET /getUsers)
// - Use Plural Nouns (GET /users, not GET /user)
// - Use Kebab-case for long names (GET /pending-orders)
// - Use Hierarchy for relationships (GET /users/1/orders)

interface UriExample {
    pattern: string;
    description: string;
    isGood: boolean;
}

const examples: UriExample[] = [
    { pattern: "/getUsers", description: "Using verb in URI", isGood: false },
    { pattern: "/users", description: "Using plural noun", isGood: true },
    { pattern: "/users/1/delete", description: "Using verb for action", isGood: false },
    { pattern: "/users/1", description: "Using HTTP DELETE method instead", isGood: true },
    { pattern: "/users/1/orders", description: "Hierarchical resource", isGood: true },
];

console.log("--- URI Design Patterns ---");
examples.forEach((ex) => {
    const status = ex.isGood ? "✅ GOOD" : "❌ BAD";
    console.log(`${status}: ${ex.pattern} (${ex.description})`);
});

// -----------------------------------------------------------------------------
// 2. Modeling Resources
// -----------------------------------------------------------------------------
// A resource representation (usually JSON) should be clean and meaningful.

interface UserResource {
    id: string;       // Unique Identifier
    username: string;
    email: string;
    // Links to related resources (HATEOAS - covered later)
    links?: {
        self: string;
        orders: string;
    };
}

const user: UserResource = {
    id: "123",
    username: "jdoe",
    email: "jdoe@example.com",
    links: {
        self: "/users/123",
        orders: "/users/123/orders",
    },
};

console.log("\n--- Resource Representation ---");
console.log(user);

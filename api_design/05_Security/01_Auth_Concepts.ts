export { };
/**
 * 01_Auth_Concepts.ts
 *
 * Authentication (AuthN) vs Authorization (AuthZ)
 *
 * Authentication: "Who are you?"
 * Authorization:  "What are you allowed to do?"
 */

// Analogy: Entering an Office Building

// 1. Authentication (The ID Card)
// You show your ID card to the security guard.
// The guard verifies it's real and it's you.
// -> You are Authenticated.

interface User {
    id: string;
    username: string;
    isAuthenticated: boolean;
    roles: string[];
}

function authenticate(username: string, password: string): User | null {
    // Check credentials...
    if (username === "admin" && password === "secret") {
        return {
            id: "1",
            username: "admin",
            isAuthenticated: true,
            roles: ["admin"],
        };
    }
    return null;
}

// 2. Authorization (The Keycard Access)
// You try to open the door to the Server Room.
// The reader checks if your ID card has "Server Room" access.
// -> You are Authorized (or denied).

function authorize(user: User, resource: string): boolean {
    if (!user.isAuthenticated) return false;

    if (resource === "server_room" && user.roles.includes("admin")) {
        return true;
    }
    return false;
}

console.log("--- AuthN vs AuthZ ---");
const user = authenticate("admin", "secret");

if (user) {
    console.log(`User ${user.username} is Authenticated.`);
    const canAccess = authorize(user, "server_room");
    console.log(`Can access Server Room? ${canAccess ? "YES" : "NO"}`);
} else {
    console.log("Authentication Failed.");
}

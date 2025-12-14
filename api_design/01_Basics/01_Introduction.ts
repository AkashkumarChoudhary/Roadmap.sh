export { };
/**
 * 01_Introduction.ts
 *
 * What is an API?
 * ----------------
 * API stands for Application Programming Interface.
 * It is a set of rules that allows one software application to talk to another.
 *
 * Analogy: The Waiter
 * 1. You (Client) give an order to the waiter (API).
 * 2. The waiter takes the order to the kitchen (Server).
 * 3. The kitchen prepares the food.
 * 4. The waiter brings the food back to you.
 *
 * You don't need to know how the kitchen cooks the food, just how to order it.
 */

// -----------------------------------------------------------------------------
// The Request / Response Cycle
// -----------------------------------------------------------------------------
// Most web APIs work on a Request/Response model.
// Client sends a Request -> Server processes it -> Server sends a Response.

// Let's simulate this with a simple class structure.

interface HttpRequest {
    method: string; // GET, POST, etc.
    url: string;    // /users, /products
    headers?: Record<string, string>;
    body?: any;
}

interface HttpResponse {
    statusCode: number; // 200, 404, 500
    headers?: Record<string, string>;
    body?: any;
}

// A mock server that handles requests
class MockServer {
    // Simulating a database
    private users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
    ];

    handleRequest(request: HttpRequest): HttpResponse {
        console.log(`[Server] Received ${request.method} request for ${request.url}`);

        if (request.url === "/users" && request.method === "GET") {
            return {
                statusCode: 200,
                headers: { "Content-Type": "application/json" },
                body: this.users,
            };
        }

        if (request.url === "/users" && request.method === "POST") {
            const newUser = { id: this.users.length + 1, ...request.body };
            this.users.push(newUser);
            return {
                statusCode: 201, // Created
                headers: { "Content-Type": "application/json" },
                body: newUser,
            };
        }

        return {
            statusCode: 404,
            body: { error: "Not Found" },
        };
    }
}

// -----------------------------------------------------------------------------
// Example Usage
// -----------------------------------------------------------------------------

const server = new MockServer();

// 1. Client sends a GET request
const getRequest: HttpRequest = {
    method: "GET",
    url: "/users",
};

console.log("\n--- Sending GET Request ---");
const response1 = server.handleRequest(getRequest);
console.log("[Client] Response:", response1);

// 2. Client sends a POST request
const postRequest: HttpRequest = {
    method: "POST",
    url: "/users",
    body: { name: "Charlie" },
};

console.log("\n--- Sending POST Request ---");
const response2 = server.handleRequest(postRequest);
console.log("[Client] Response:", response2);

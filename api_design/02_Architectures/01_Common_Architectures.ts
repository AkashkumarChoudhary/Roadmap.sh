export { };
/**
 * 01_Common_Architectures.ts
 *
 * This file compares three common API architectures:
 * 1. REST (Representational State Transfer)
 * 2. GraphQL (Graph Query Language)
 * 3. RPC (Remote Procedure Call)
 */

// Data model for our examples
interface User {
    id: number;
    name: string;
    posts: string[];
}

// -----------------------------------------------------------------------------
// 1. REST Architecture
// -----------------------------------------------------------------------------
// Focus: Resources (Nouns).
// Uses HTTP methods to perform actions.
// Multiple endpoints for different resources.

console.log("--- REST Architecture ---");
console.log("Fetching a user and their posts often requires multiple requests or specific endpoints.");

// Example: GET /users/1
// Example: GET /users/1/posts

function simulateRestCall(url: string) {
    console.log(`[REST] Requesting: ${url}`);
    // Returns fixed data for demo
    if (url === "/users/1") return { id: 1, name: "Alice" };
    if (url === "/users/1/posts") return ["Post 1", "Post 2"];
}

const userRest = simulateRestCall("/users/1");
const postsRest = simulateRestCall("/users/1/posts");
console.log("REST Response:", { user: userRest, posts: postsRest });


// -----------------------------------------------------------------------------
// 2. GraphQL Architecture
// -----------------------------------------------------------------------------
// Focus: The Graph (Relationships).
// Single endpoint (usually POST /graphql).
// Client specifies exactly what data it needs.

console.log("\n--- GraphQL Architecture ---");
console.log("Fetching data with a single query to a single endpoint.");

const graphqlQuery = `
  query {
    user(id: 1) {
      name
      posts
    }
  }
`;

function simulateGraphqlCall(query: string) {
    console.log(`[GraphQL] Querying: ${query.replace(/\s+/g, " ").trim()}`);
    // Returns exactly what was asked
    return {
        data: {
            user: {
                name: "Alice",
                posts: ["Post 1", "Post 2"],
            },
        },
    };
}

const gqlResponse = simulateGraphqlCall(graphqlQuery);
console.log("GraphQL Response:", gqlResponse);


// -----------------------------------------------------------------------------
// 3. RPC (Remote Procedure Call) - e.g., gRPC, JSON-RPC
// -----------------------------------------------------------------------------
// Focus: Actions (Verbs).
// Calling a function on a remote server as if it were local.

console.log("\n--- RPC Architecture ---");
console.log("Invoking a specific method on the server.");

// JSON-RPC Example
const rpcRequest = {
    jsonrpc: "2.0",
    method: "getUserWithPosts",
    params: { userId: 1 },
    id: 1,
};

function simulateRpcCall(method: string, params: any) {
    console.log(`[RPC] Calling method '${method}' with params:`, params);
    if (method === "getUserWithPosts") {
        return { id: 1, name: "Alice", posts: ["Post 1", "Post 2"] };
    }
}

const rpcResponse = simulateRpcCall(rpcRequest.method, rpcRequest.params);
console.log("RPC Response:", rpcResponse);

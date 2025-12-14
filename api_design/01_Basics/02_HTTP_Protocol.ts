export { };
/**
 * 02_HTTP_Protocol.ts
 *
 * The HTTP protocol is the foundation of data communication for the World Wide Web.
 * APIs rely heavily on HTTP semantics.
 */

// -----------------------------------------------------------------------------
// 1. HTTP Methods (Verbs)
// -----------------------------------------------------------------------------
// Methods tell the server *what* we want to do.

enum HttpMethod {
    GET = "GET",       // Retrieve data (Safe, Idempotent)
    POST = "POST",     // Create new data (Not Safe, Not Idempotent)
    PUT = "PUT",       // Update/Replace data (Idempotent)
    PATCH = "PATCH",   // Partial update (Not necessarily Idempotent)
    DELETE = "DELETE", // Remove data (Idempotent)
}

console.log("--- HTTP Methods ---");
console.log("GET: Retrieve a resource (e.g., get user details)");
console.log("POST: Create a resource (e.g., create a new user)");
console.log("PUT: Replace a resource entirely");
console.log("PATCH: Partially update a resource");
console.log("DELETE: Remove a resource");


// -----------------------------------------------------------------------------
// 2. HTTP Status Codes
// -----------------------------------------------------------------------------
// Status codes tell the client *what happened* with the request.

enum HttpStatusCode {
    // 2xx Success
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,

    // 3xx Redirection
    MOVED_PERMANENTLY = 301,
    NOT_MODIFIED = 304,

    // 4xx Client Error
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401, // Not logged in
    FORBIDDEN = 403,    // Logged in but no permission
    NOT_FOUND = 404,

    // 5xx Server Error
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
}

function describeStatus(code: HttpStatusCode): string {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 300 && code < 400) return "Redirection";
    if (code >= 400 && code < 500) return "Client Error (You messed up)";
    if (code >= 500) return "Server Error (We messed up)";
    return "Unknown";
}

console.log("\n--- Status Codes ---");
console.log(`200 OK: ${describeStatus(HttpStatusCode.OK)}`);
console.log(`404 Not Found: ${describeStatus(HttpStatusCode.NOT_FOUND)}`);
console.log(`500 Internal Error: ${describeStatus(HttpStatusCode.INTERNAL_SERVER_ERROR)}`);


// -----------------------------------------------------------------------------
// 3. HTTP Headers
// -----------------------------------------------------------------------------
// Headers provide metadata about the request or response.

interface CommonHeaders {
    "Content-Type"?: string;  // What format is the body? (e.g., application/json)
    "Authorization"?: string; // Who are you? (e.g., Bearer <token>)
    "Accept"?: string;        // What format do you want back?
    "User-Agent"?: string;    // What client are you using?
    "Cache-Control"?: string; // How long should this be cached?
}

const exampleHeaders: CommonHeaders = {
    "Content-Type": "application/json",
    "Authorization": "Bearer abc123xyz",
    "Accept": "application/json",
};

console.log("\n--- Headers ---");
console.log("Headers provide context:", exampleHeaders);

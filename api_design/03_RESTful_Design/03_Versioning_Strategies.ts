export { };
/**
 * 03_Versioning_Strategies.ts
 *
 * APIs change over time. Versioning allows you to make breaking changes
 * without breaking existing clients.
 */

// Mock Request Object
interface Request {
    url: string;
    headers: Record<string, string>;
    query: Record<string, string>;
}

// -----------------------------------------------------------------------------
// 1. URI Versioning (Most Common)
// -----------------------------------------------------------------------------
// The version is part of the URL path.
// Example: /v1/users, /v2/users

function handleUriVersioning(req: Request) {
    if (req.url.startsWith("/v1/")) {
        return "Handling v1 logic (Old)";
    } else if (req.url.startsWith("/v2/")) {
        return "Handling v2 logic (New)";
    }
    return "Unknown version";
}

// -----------------------------------------------------------------------------
// 2. Header Versioning (Custom Header)
// -----------------------------------------------------------------------------
// The client sends a custom header specifying the version.
// Example: X-API-Version: 1

function handleHeaderVersioning(req: Request) {
    const version = req.headers["x-api-version"];
    if (version === "1") return "Handling v1 logic";
    if (version === "2") return "Handling v2 logic";
    return "Defaulting to latest (or error)";
}

// -----------------------------------------------------------------------------
// 3. Query Parameter Versioning
// -----------------------------------------------------------------------------
// The version is a query parameter.
// Example: /users?v=1

function handleQueryVersioning(req: Request) {
    const version = req.query["v"];
    if (version === "1") return "Handling v1 logic";
    if (version === "2") return "Handling v2 logic";
    return "Defaulting to latest";
}

// --- Usage ---

const req1: Request = {
    url: "/v1/users",
    headers: {},
    query: {},
};
console.log(`URI Versioning: ${handleUriVersioning(req1)}`);

const req2: Request = {
    url: "/users",
    headers: { "x-api-version": "2" },
    query: {},
};
console.log(`Header Versioning: ${handleHeaderVersioning(req2)}`);

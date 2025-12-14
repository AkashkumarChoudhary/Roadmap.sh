export { };
/**
 * 02_Authentication_Mechanisms.ts
 *
 * Common ways to authenticate API requests.
 */

interface Request {
    headers: Record<string, string>;
    cookies?: Record<string, string>;
}

// -----------------------------------------------------------------------------
// 1. Basic Authentication
// -----------------------------------------------------------------------------
// Header: Authorization: Basic <base64(username:password)>
// NOT secure without HTTPS.

function handleBasicAuth(req: Request) {
    const authHeader = req.headers["Authorization"];
    if (!authHeader || !authHeader.startsWith("Basic ")) return false;

    const base64Creds = authHeader.split(" ")[1];
    const creds = Buffer.from(base64Creds, "base64").toString("utf-8");
    const [username, password] = creds.split(":");

    console.log(`[Basic Auth] Checking ${username}:${password}`);
    return username === "admin" && password === "secret";
}


// -----------------------------------------------------------------------------
// 2. Bearer Token (e.g., JWT)
// -----------------------------------------------------------------------------
// Header: Authorization: Bearer <token>
// Stateless, scalable.

function handleBearerAuth(req: Request) {
    const authHeader = req.headers["Authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) return false;

    const token = authHeader.split(" ")[1];
    console.log(`[Bearer Auth] Validating token: ${token}`);
    return token === "valid-jwt-token"; // In reality, verify signature
}


// -----------------------------------------------------------------------------
// 3. Session-Based Authentication
// -----------------------------------------------------------------------------
// Uses Cookies. Stateful (server needs to remember the session).

const sessions = new Set(["session-id-123"]);

function handleSessionAuth(req: Request) {
    const sessionId = req.cookies?.["session_id"];
    console.log(`[Session Auth] Checking session: ${sessionId}`);
    return sessions.has(sessionId || "");
}


// --- Usage ---

console.log("--- Auth Mechanisms ---");

const basicReq = { headers: { Authorization: "Basic " + Buffer.from("admin:secret").toString("base64") } };
console.log(`Basic Auth Success: ${handleBasicAuth(basicReq)}`);

const bearerReq = { headers: { Authorization: "Bearer valid-jwt-token" } };
console.log(`Bearer Auth Success: ${handleBearerAuth(bearerReq)}`);

const sessionReq = { headers: {}, cookies: { "session_id": "session-id-123" } };
console.log(`Session Auth Success: ${handleSessionAuth(sessionReq)}`);

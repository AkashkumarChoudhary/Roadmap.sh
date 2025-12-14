export { };
/**
 * 02_Advanced_Topics.ts
 *
 * Covers:
 * 1. Pagination
 * 2. Rate Limiting
 * 3. Idempotency
 * 4. Error Handling (RFC 7807)
 */

// -----------------------------------------------------------------------------
// 1. Pagination
// -----------------------------------------------------------------------------
// Don't return all 1 million records at once!

interface PaginationParams {
    page: number;
    limit: number;
}

function paginate(data: any[], params: PaginationParams) {
    const start = (params.page - 1) * params.limit;
    const end = start + params.limit;
    return {
        data: data.slice(start, end),
        meta: {
            total: data.length,
            page: params.page,
            limit: params.limit,
            totalPages: Math.ceil(data.length / params.limit),
        },
    };
}

const allItems = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
console.log("--- Pagination ---");
console.log(paginate(allItems, { page: 2, limit: 5 }));


// -----------------------------------------------------------------------------
// 2. Rate Limiting
// -----------------------------------------------------------------------------
// Prevent abuse by limiting requests per user/IP.

const requestCounts = new Map<string, number>();

function checkRateLimit(userId: string, limit: number): boolean {
    const current = requestCounts.get(userId) || 0;
    if (current >= limit) {
        console.log(`[Rate Limit] User ${userId} blocked!`);
        return false; // 429 Too Many Requests
    }
    requestCounts.set(userId, current + 1);
    console.log(`[Rate Limit] User ${userId} request allowed (${current + 1}/${limit})`);
    return true;
}

console.log("\n--- Rate Limiting ---");
checkRateLimit("user1", 2);
checkRateLimit("user1", 2);
checkRateLimit("user1", 2); // Blocked


// -----------------------------------------------------------------------------
// 3. Idempotency
// -----------------------------------------------------------------------------
// Making the same request multiple times should have the same effect as making it once.
// GET, PUT, DELETE are idempotent. POST is NOT.
// Use "Idempotency-Key" header for POST requests (e.g., payments).

console.log("\n--- Idempotency ---");
console.log("If I send 'DELETE /users/1' twice:");
console.log("1st time: 200 OK (Deleted)");
console.log("2nd time: 404 Not Found (Already gone) OR 200 OK");
console.log("Crucially, the server state is the same (User 1 is gone).");


// -----------------------------------------------------------------------------
// 4. RFC 7807 - Problem Details for HTTP APIs
// -----------------------------------------------------------------------------
// Standardized error response format.

interface ProblemDetails {
    type: string;   // URI to documentation
    title: string;  // Short summary
    status: number; // HTTP status code
    detail: string; // Specific explanation
    instance?: string; // URI of the specific occurrence
}

function createError(status: number, detail: string): ProblemDetails {
    return {
        type: "https://example.com/probs/out-of-credit",
        title: "You do not have enough credit.",
        status,
        detail,
        instance: "/account/12345/msgs/abc",
    };
}

console.log("\n--- RFC 7807 Error ---");
console.log(createError(403, "Your current balance is 30, but that costs 50."));
